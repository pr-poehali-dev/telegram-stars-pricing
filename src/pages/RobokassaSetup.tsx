import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function RobokassaSetup() {
  const navigate = useNavigate();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          На главную
        </Button>

        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">
              Настройка Robokassa
            </h1>
            <p className="text-muted-foreground text-lg">
              Пошаговая инструкция для подключения платёжной системы
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="UserPlus" size={24} className="text-primary" />
                Шаг 1: Регистрация в Robokassa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                <li>
                  Перейдите на сайт{' '}
                  <a 
                    href="https://auth.robokassa.ru/Registration/Merchants" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    Robokassa
                  </a>
                </li>
                <li>Нажмите "Зарегистрироваться" и заполните все поля</li>
                <li>Подтвердите email и войдите в аккаунт</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Store" size={24} className="text-primary" />
                Шаг 2: Создание магазина
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                <li>В личном кабинете нажмите "Добавить магазин"</li>
                <li>
                  <strong>Название магазина:</strong> zxcvuier5
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard('zxcvuier5')}
                    className="ml-2"
                  >
                    <Icon name="Copy" size={16} />
                  </Button>
                </li>
                <li>
                  <strong>URL магазина:</strong> {window.location.origin}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(window.location.origin)}
                    className="ml-2"
                  >
                    <Icon name="Copy" size={16} />
                  </Button>
                </li>
                <li>Тип площадки: "Сайт услуг"</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Settings" size={24} className="text-primary" />
                Шаг 3: Настройка технических параметров
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/10 p-4 rounded-lg space-y-3">
                <div>
                  <p className="font-semibold text-sm text-primary mb-1">Result URL:</p>
                  <div className="flex items-center gap-2 bg-background p-2 rounded border">
                    <code className="text-sm flex-1 break-all">
                      {window.location.origin}/payment-success
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(`${window.location.origin}/payment-success`)}
                    >
                      <Icon name="Copy" size={16} />
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-sm text-primary mb-1">ResultURL метод:</p>
                  <code className="text-sm bg-background p-2 rounded border block">POST</code>
                </div>

                <div>
                  <p className="font-semibold text-sm text-primary mb-1">Success URL:</p>
                  <div className="flex items-center gap-2 bg-background p-2 rounded border">
                    <code className="text-sm flex-1 break-all">
                      {window.location.origin}/payment-success
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(`${window.location.origin}/payment-success`)}
                    >
                      <Icon name="Copy" size={16} />
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-sm text-primary mb-1">Fail URL:</p>
                  <div className="flex items-center gap-2 bg-background p-2 rounded border">
                    <code className="text-sm flex-1 break-all">
                      {window.location.origin}
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(window.location.origin)}
                    >
                      <Icon name="Copy" size={16} />
                    </Button>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                <Icon name="Info" size={16} className="inline mr-1" />
                Эти URL нужно указать в разделе "Технические настройки" вашего магазина
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="CreditCard" size={24} className="text-primary" />
                Шаг 4: Добавление банковской карты
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                <li>Перейдите в раздел "Настройки" → "Банковские реквизиты"</li>
                <li>Нажмите "Добавить карту"</li>
                <li>
                  Введите номер карты:{' '}
                  <strong className="text-primary">2200702071522895</strong>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard('2200702071522895')}
                    className="ml-2"
                  >
                    <Icon name="Copy" size={16} />
                  </Button>
                </li>
                <li>Подтвердите карту по инструкции Robokassa</li>
              </ol>

              <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20">
                <p className="text-sm text-yellow-700 dark:text-yellow-400">
                  <Icon name="AlertTriangle" size={16} className="inline mr-2" />
                  Без подтверждения карты деньги не будут автоматически переводиться на счёт
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Key" size={24} className="text-primary" />
                Шаг 5: Получение паролей для интеграции
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                <li>В личном кабинете откройте ваш магазин</li>
                <li>Перейдите в раздел "Технические настройки"</li>
                <li>Найдите "Пароль #1" и "Пароль #2"</li>
                <li>Скопируйте их — они понадобятся для настройки сайта</li>
              </ol>

              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  <Icon name="Lock" size={16} className="inline mr-2" />
                  Храните пароли в безопасности. Они нужны для обработки платежей.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={24} className="text-green-500" />
                Шаг 6: Тестирование
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                <li>Включите тестовый режим в настройках магазина</li>
                <li>Попробуйте оформить заказ на сайте</li>
                <li>Проверьте, что данные отображаются в админ-панели</li>
                <li>После успешного теста отключите тестовый режим</li>
              </ol>

              <Button 
                onClick={() => navigate('/admin')}
                className="w-full"
                variant="outline"
              >
                <Icon name="LayoutDashboard" size={16} className="mr-2" />
                Перейти в админ-панель
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-500/20 bg-green-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <Icon name="PartyPopper" size={24} />
                Готово!
              </CardTitle>
              <CardDescription>
                После выполнения всех шагов ваш магазин готов принимать платежи
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Клиенты смогут оплачивать услуги через:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Smartphone" size={16} className="text-primary" />
                    <span>СБП (Система быстрых платежей)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="CreditCard" size={16} className="text-primary" />
                    <span>Банковские карты</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Wallet" size={16} className="text-primary" />
                    <span>Электронные кошельки</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Landmark" size={16} className="text-primary" />
                    <span>Интернет-банкинг</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button onClick={() => navigate('/')} variant="outline" className="flex-1">
              <Icon name="Home" size={16} className="mr-2" />
              На главную
            </Button>
            <Button onClick={() => navigate('/admin')} className="flex-1">
              <Icon name="LayoutDashboard" size={16} className="mr-2" />
              Админ-панель
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
