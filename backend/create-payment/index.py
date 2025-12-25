import json
import os
import hashlib
import psycopg2
from datetime import datetime

def handler(event: dict, context) -> dict:
    """API для создания платежа через Robokassa"""
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
        amount = body.get('amount')
        user_name = body.get('user_name', 'Клиент')
        user_email = body.get('user_email', '')
        user_phone = body.get('user_phone', '')
        cart_items = body.get('cart_items', [])
        order_comment = body.get('order_comment', '')
        
        if not amount or amount <= 0:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Некорректная сумма'}),
                'isBase64Encoded': False
            }
        
        merchant_login = os.environ.get('ROBOKASSA_MERCHANT_LOGIN')
        password1 = os.environ.get('ROBOKASSA_PASSWORD_1')
        
        if not merchant_login:
            merchant_login = 'demo'
        if not password1:
            password1 = 'password_1'
        
        conn = psycopg2.connect(os.environ.get('DATABASE_URL'))
        cursor = conn.cursor()
        
        order_number = f"ORD-{datetime.now().strftime('%Y%m%d%H%M%S')}"
        
        cursor.execute(
            "INSERT INTO t_p30898695_telegram_stars_prici.orders (order_number, user_name, user_email, user_phone, amount, status, order_comment) VALUES (%s, %s, %s, %s, %s, %s, %s) RETURNING id",
            (order_number, user_name, user_email, user_phone, amount, 'pending', order_comment)
        )
        order_id = cursor.fetchone()[0]
        
        for item in cart_items:
            cursor.execute(
                "INSERT INTO t_p30898695_telegram_stars_prici.order_items (order_id, product_name, product_price, quantity) VALUES (%s, %s, %s, %s)",
                (order_id, item.get('name'), item.get('price'), item.get('quantity', 1))
            )
        
        cursor.execute(
            "INSERT INTO t_p30898695_telegram_stars_prici.payments (order_id, amount, status) VALUES (%s, %s, %s)",
            (order_id, amount, 'pending')
        )
        
        conn.commit()
        cursor.close()
        conn.close()
        
        signature_string = f"{merchant_login}:{amount}:{order_number}:{password1}"
        signature = hashlib.md5(signature_string.encode()).hexdigest()
        
        payment_url = f"https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin={merchant_login}&OutSum={amount}&InvId={order_number}&SignatureValue={signature}&Description={order_comment}&Email={user_email}"
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'order_number': order_number,
                'payment_url': payment_url,
                'amount': amount
            }),
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