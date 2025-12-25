"""
API для получения списка всех заказов (для админ-панели)
"""
import json
import os
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: dict, context) -> dict:
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    conn = None
    try:
        dsn = os.environ.get('DATABASE_URL')
        conn = psycopg2.connect(dsn)
        
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute("""
                SELECT 
                    id,
                    customer_name,
                    customer_email,
                    customer_telegram,
                    service_name,
                    service_price,
                    payment_status,
                    created_at,
                    paid_at
                FROM orders
                ORDER BY created_at DESC
            """)
            orders = cur.fetchall()
            
            orders_list = []
            for order in orders:
                order_dict = dict(order)
                if order_dict.get('created_at'):
                    order_dict['created_at'] = order_dict['created_at'].isoformat()
                if order_dict.get('paid_at'):
                    order_dict['paid_at'] = order_dict['paid_at'].isoformat()
                orders_list.append(order_dict)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'orders': orders_list}),
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
    
    finally:
        if conn:
            conn.close()
