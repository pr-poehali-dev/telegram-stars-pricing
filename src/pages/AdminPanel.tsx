import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Admin {
  id: number;
  username: string;
}

export default function AdminPanel() {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const adminData = localStorage.getItem('admin');
    if (!adminData) {
      navigate('/admin-login');
      return;
    }
    setAdmin(JSON.parse(adminData));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin');
    navigate('/');
  };

  if (!admin) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Icon name="Shield" size={32} className="text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Админ-панель</h1>
              <p className="text-sm text-muted-foreground">Вы вошли как: {admin.username}</p>
            </div>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <Icon name="LogOut" className="mr-2" size={16} />
            Выйти
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Icon name="ShoppingBag" size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Заказы</h3>
                <p className="text-sm text-muted-foreground">Управление заказами</p>
              </div>
            </div>
            <Button className="w-full" disabled>
              <Icon name="Eye" className="mr-2" size={16} />
              Скоро будет доступно
            </Button>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-green-500/10">
                <Icon name="BarChart3" size={28} className="text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Статистика</h3>
                <p className="text-sm text-muted-foreground">Аналитика продаж</p>
              </div>
            </div>
            <Button className="w-full" disabled>
              <Icon name="Eye" className="mr-2" size={16} />
              Скоро будет доступно
            </Button>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-blue-500/10">
                <Icon name="Settings" size={28} className="text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Настройки</h3>
                <p className="text-sm text-muted-foreground">Конфигурация сайта</p>
              </div>
            </div>
            <Button className="w-full" disabled>
              <Icon name="Eye" className="mr-2" size={16} />
              Скоро будет доступно
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
