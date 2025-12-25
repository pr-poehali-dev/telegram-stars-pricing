import json
import os
import hashlib
import psycopg2
from urllib.parse import parse_qs

def handler(event: dict, context) -> dict:
    """Webhook для обработки уведомлений от Robokassa"""
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
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*'
            },
            'body': 'Method not allowed',
            'isBase64Encoded': False
        }
    
    try:
        body = event.get('body', '')
        params = parse_qs(body)
        
        out_sum = params.get('OutSum', [''])[0]
        inv_id = params.get('InvId', [''])[0]
        signature = params.get('SignatureValue', [''])[0]
        
        password2 = os.environ.get('ROBOKASSA_PASSWORD_2')
        
        expected_signature = hashlib.md5(f"{out_sum}:{inv_id}:{password2}".encode()).hexdigest().upper()
        
        if signature.upper() != expected_signature:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': 'Invalid signature',
                'isBase64Encoded': False
            }
        
        conn = psycopg2.connect(os.environ.get('DATABASE_URL'))
        cursor = conn.cursor()
        
        cursor.execute(
            "UPDATE orders SET status = %s, updated_at = CURRENT_TIMESTAMP WHERE order_number = %s",
            ('paid', inv_id)
        )
        
        cursor.execute(
            "UPDATE payments SET status = %s, robokassa_inv_id = %s, updated_at = CURRENT_TIMESTAMP WHERE order_id = (SELECT id FROM orders WHERE order_number = %s)",
            ('paid', inv_id, inv_id)
        )
        
        conn.commit()
        cursor.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*'
            },
            'body': f'OK{inv_id}',
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*'
            },
            'body': f'Error: {str(e)}',
            'isBase64Encoded': False
        }
