import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface Order {
  id: number;
  customer_name: string;
  customer_email: string;
  customer_telegram: string;
  service_name: string;
  service_price: number;
  payment_status: string;
  created_at: string;
  paid_at: string | null;
}

export default function Admin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const ADMIN_PASSWORD = 'zxcvuier2024';

  useEffect(() => {
    if (isAuthenticated) {
      loadOrders();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Неверный пароль');
    }
  };

  const loadOrders = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://functions.poehali.dev/1ff12676-cf47-41ed-a8c6-49204bf51084');
      const data = await response.json();
      setOrders(data.orders || []);
    } catch (err) {
      setError('Ошибка загрузки заказов');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '—';
    return new Date(dateString).toLocaleString('ru-RU');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-green-500">Оплачен</Badge>;
      case 'pending':
        return <Badge variant="secondary">Ожидает оплаты</Badge>;
      case 'failed':
        return <Badge variant="destructive">Ошибка</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-card border border-border rounded-lg p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Lock" size={32} className="text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-primary">Админ-панель</h1>
              <p className="text-muted-foreground">Введите пароль для доступа</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                />
                {error && (
                  <p className="text-sm text-red-500 mt-2">{error}</p>
                )}
              </div>
              <Button type="submit" className="w-full">
                Войти
              </Button>
            </form>

            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="w-full"
            >
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              На главную
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
            >
              <Icon name="ArrowLeft" size={20} />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-primary">Админ-панель</h1>
              <p className="text-muted-foreground">Управление заказами и платежами</p>
            </div>
          </div>
          <Button onClick={loadOrders} disabled={loading}>
            <Icon name="RefreshCw" size={16} className="mr-2" />
            Обновить
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Всего заказов</p>
                <p className="text-3xl font-bold text-primary">{orders.length}</p>
              </div>
              <Icon name="ShoppingCart" size={32} className="text-primary/30" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Оплачено</p>
                <p className="text-3xl font-bold text-green-500">
                  {orders.filter(o => o.payment_status === 'paid').length}
                </p>
              </div>
              <Icon name="CheckCircle2" size={32} className="text-green-500/30" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Сумма</p>
                <p className="text-3xl font-bold text-primary">
                  {orders.filter(o => o.payment_status === 'paid')
                    .reduce((sum, o) => sum + o.service_price, 0).toLocaleString()} ₽
                </p>
              </div>
              <Icon name="Wallet" size={32} className="text-primary/30" />
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">ID</TableHead>
                  <TableHead>Клиент</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Telegram</TableHead>
                  <TableHead>Услуга</TableHead>
                  <TableHead>Цена</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Создан</TableHead>
                  <TableHead>Оплачен</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-8">
                      <Icon name="Loader2" size={24} className="animate-spin mx-auto" />
                    </TableCell>
                  </TableRow>
                ) : orders.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                      Заказов пока нет
                    </TableCell>
                  </TableRow>
                ) : (
                  orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-mono text-sm">#{order.id}</TableCell>
                      <TableCell className="font-medium">{order.customer_name}</TableCell>
                      <TableCell>{order.customer_email}</TableCell>
                      <TableCell>
                        <a 
                          href={`https://t.me/${order.customer_telegram.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {order.customer_telegram}
                        </a>
                      </TableCell>
                      <TableCell>{order.service_name}</TableCell>
                      <TableCell className="font-semibold">
                        {order.service_price.toLocaleString()} ₽
                      </TableCell>
                      <TableCell>{getStatusBadge(order.payment_status)}</TableCell>
                      <TableCell className="text-sm">{formatDate(order.created_at)}</TableCell>
                      <TableCell className="text-sm">{formatDate(order.paid_at)}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}