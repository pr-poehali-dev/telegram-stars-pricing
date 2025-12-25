import json
import os
import urllib.request
import psycopg2
from datetime import datetime

def handler(event: dict, context) -> dict:
    """Обработка нажатия кнопки 'Заказ выполнен' в Telegram"""
    
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
        
        callback_query = body.get('callback_query', {})
        callback_data = callback_query.get('data', '')
        message = callback_query.get('message', {})
        chat_id = message.get('chat', {}).get('id')
        message_id = message.get('message_id')
        
        if not callback_data.startswith('complete_'):
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'ok': True}),
                'isBase64Encoded': False
            }
        
        order_id = callback_data.replace('complete_', '')
        
        database_url = os.environ.get('DATABASE_URL')
        if database_url:
            conn = psycopg2.connect(database_url)
            cur = conn.cursor()
            cur.execute(
                "UPDATE simple_orders SET status = %s, completed_at = %s WHERE order_id = %s",
                ('completed', datetime.now(), order_id)
            )
            conn.commit()
            cur.close()
            conn.close()
        
        bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
        
        if bot_token:
            try:
                callback_url = f'https://api.telegram.org/bot{bot_token}/answerCallbackQuery'
                callback_data_send = {
                    'callback_query_id': callback_query.get('id'),
                    'text': '✅ Заказ отмечен как выполненный!'
                }
                
                req = urllib.request.Request(
                    callback_url,
                    data=json.dumps(callback_data_send).encode('utf-8'),
                    headers={'Content-Type': 'application/json'}
                )
                urllib.request.urlopen(req)
                
                edit_url = f'https://api.telegram.org/bot{bot_token}/editMessageText'
                original_text = message.get('text', '')
                new_text = original_text.replace('⏰ Ожидает оплаты на карту', '✅ Заказ выполнен!')
                
                edit_data = {
                    'chat_id': chat_id,
                    'message_id': message_id,
                    'text': new_text,
                    'parse_mode': 'HTML'
                }
                
                req = urllib.request.Request(
                    edit_url,
                    data=json.dumps(edit_data).encode('utf-8'),
                    headers={'Content-Type': 'application/json'}
                )
                urllib.request.urlopen(req)
            except Exception as telegram_error:
                print(f'Telegram API error: {telegram_error}')
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'ok': True}),
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