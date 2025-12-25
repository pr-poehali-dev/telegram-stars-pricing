import json
import os
import base64
import requests

def handler(event: dict, context) -> dict:
    '''API для создания платежа через Ckassa'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }

    try:
        body = json.loads(event.get('body', '{}'))
        amount_rubles = body.get('amount')
        description = body.get('description', 'Оплата заказа')
        customer_name = body.get('customerName', '')
        customer_email = body.get('customerEmail', '')

        if not amount_rubles:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Amount is required'})
            }

        shop_token = os.environ.get('CKASSA_SHOP_TOKEN')
        secret_key = os.environ.get('CKASSA_SECRET_KEY')
        service_code = os.environ.get('CKASSA_SERVICE_CODE')

        if not all([shop_token, secret_key, service_code]):
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Ckassa credentials not configured'})
            }

        amount_kopecks = str(int(float(amount_rubles) * 100))

        auth_string = f"{shop_token}:{secret_key}"
        auth_base64 = base64.b64encode(auth_string.encode()).decode()

        api_url = 'https://api2.ckassa.ru/api-shop/rs/shop/do/payment/anonymous'

        properties = [
            {'name': 'description', 'value': description}
        ]
        if customer_name:
            properties.append({'name': 'customerName', 'value': customer_name})
        if customer_email:
            properties.append({'name': 'customerEmail', 'value': customer_email})

        payload = {
            'serviceCode': service_code,
            'amount': amount_kopecks,
            'comission': '0',
            'properties': properties
        }

        headers = {
            'Authorization': f'Basic {auth_base64}',
            'Content-Type': 'application/json'
        }

        response = requests.post(api_url, json=payload, headers=headers, timeout=10)
        response_data = response.json()

        if response.status_code == 200 and 'payUrl' in response_data:
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'paymentUrl': response_data['payUrl'],
                    'regPayNum': response_data.get('regPayNum'),
                    'success': True
                })
            }
        else:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'error': 'Failed to create payment',
                    'details': response_data
                })
            }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)})
        }
