import json
import os
import psycopg2

def handler(event: dict, context) -> dict:
    '''Вход в админ-панель по логину и паролю'''
    method = event.get('httpMethod', 'GET')

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
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }

    try:
        body = json.loads(event.get('body', '{}'))
        username = body.get('username', '').strip()
        password = body.get('password', '').strip()

        if not username or not password:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'success': False, 'error': 'Логин и пароль обязательны'}),
                'isBase64Encoded': False
            }

        dsn = os.environ.get('DATABASE_URL')
        conn = psycopg2.connect(dsn)
        cur = conn.cursor()

        cur.execute(
            "SELECT id, username FROM admins WHERE username = %s AND password_hash = %s",
            (username, password)
        )
        admin = cur.fetchone()

        cur.close()
        conn.close()

        if admin:
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'success': True,
                    'admin': {
                        'id': admin[0],
                        'username': admin[1]
                    }
                }),
                'isBase64Encoded': False
            }
        else:
            return {
                'statusCode': 401,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'success': False, 'error': 'Неверный логин или пароль'}),
                'isBase64Encoded': False
            }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'success': False, 'error': str(e)}),
            'isBase64Encoded': False
        }
