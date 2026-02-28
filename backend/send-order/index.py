import json
import os
import urllib.request
import urllib.parse
import uuid
import psycopg2

def handler(event: dict, context) -> dict:
    """Отправка уведомления о новом заказе в Telegram"""
    
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
        
        name = body.get('name', 'Не указано')
        telegram = body.get('telegram', 'Не указано')
        email = body.get('email', 'Не указано')
        service = body.get('service', 'Не указано')
        amount = body.get('amount', 'Не указано')
        comment = body.get('comment', 'Нет комментариев')
        payment_method = body.get('payment_method', 'card')
        yoomoney_url = body.get('yoomoney_url', '')
        
        order_id = str(uuid.uuid4())[:8]
        
        database_url = os.environ.get('DATABASE_URL')
        if database_url:
            try:
                conn = psycopg2.connect(database_url)
                cur = conn.cursor()
                cur.execute(
                    "INSERT INTO simple_orders (order_id, customer_name, customer_telegram, customer_email, service_name, amount, comment, status) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)",
                    (order_id, name, telegram, email, service, amount, comment, 'pending')
                )
                conn.commit()
                cur.close()
                conn.close()
            except Exception as db_error:
                print(f'Database error: {db_error}')
        
        bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
        chat_id = os.environ.get('TELEGRAM_CHAT_ID')
        
        if not bot_token or not chat_id:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Telegram не настроен'}),
                'isBase64Encoded': False
            }
        
        message = f"""🔔 <b>Новый заказ #{order_id}</b>

📦 <b>Услуга:</b> {service}
💰 <b>Сумма:</b> {amount}

👤 <b>Клиент:</b> {name}
📱 <b>Telegram:</b> {telegram}
📧 <b>Email:</b> {email}

💬 <b>Комментарий:</b>
{comment}

💳 <b>Способ оплаты:</b> {'ЮMoney' if payment_method == 'yoomoney' else 'На карту / СБП'}
⏰ Ожидает оплаты"""
        
        telegram_username = telegram.lstrip('@') if telegram.startswith('@') else None
        
        inline_keyboard = []
        if telegram_username:
            inline_keyboard.append([{
                'text': '💬 Написать клиенту',
                'url': f'https://t.me/{telegram_username}'
            }])
        
        if yoomoney_url:
            inline_keyboard.append([{
                'text': '💸 Ссылка на оплату ЮMoney',
                'url': yoomoney_url
            }])
        
        inline_keyboard.append([{
            'text': '✅ Заказ выполнен',
            'callback_data': f'complete_{order_id}'
        }])
        
        url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
        data = {
            'chat_id': chat_id,
            'text': message,
            'parse_mode': 'HTML'
        }
        
        if inline_keyboard:
            data['reply_markup'] = {'inline_keyboard': inline_keyboard}
        
        req = urllib.request.Request(
            url,
            data=json.dumps(data).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        
        with urllib.request.urlopen(req) as response:
            response.read()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': True}),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }