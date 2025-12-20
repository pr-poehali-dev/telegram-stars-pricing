import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Index = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'stars',
      icon: 'Star',
      title: 'Звёзды Telegram',
      description: 'Официальная валюта для донатов и премиум-функций',
      features: ['Мгновенное зачисление', 'Безопасная сделка', 'Лучшие курсы'],
      prices: [
        { amount: '100 звёзд', price: '290₽', popular: false },
        { amount: '500 звёзд', price: '1 350₽', popular: true },
        { amount: '1000 звёзд', price: '2 590₽', popular: false },
      ]
    },
    {
      id: 'numbers',
      icon: 'Hash',
      title: 'Премиум номера',
      description: 'Красивые и запоминающиеся номера Telegram',
      features: ['Эксклюзивные варианты', 'Быстрая регистрация', 'Проверка доступности'],
      prices: [
        { amount: 'Базовые', price: 'от 990₽', popular: false },
        { amount: 'VIP', price: 'от 4 990₽', popular: true },
        { amount: 'Platinum', price: 'от 19 990₽', popular: false },
      ]
    },
    {
      id: 'boost',
      icon: 'Zap',
      title: 'Буст каналов',
      description: 'Продвижение и увеличение охвата вашего контента',
      features: ['Реальные подписчики', 'Органический рост', 'Аналитика роста'],
      prices: [
        { amount: 'Старт', price: '1 990₽', popular: false },
        { amount: 'Про', price: '4 990₽', popular: true },
        { amount: 'Максимум', price: '9 990₽', popular: false },
      ]
    }
  ];

  const reviews = [
    {
      name: 'Алексей М.',
      rating: 5,
      text: 'Купил 500 звёзд за минуту. Всё пришло моментально, цена отличная!',
      avatar: '👨‍💼'
    },
    {
      name: 'Мария К.',
      rating: 5,
      text: 'Заказала VIP номер для бизнеса. Клиенты теперь легко запоминают контакт!',
      avatar: '👩‍💻'
    },
    {
      name: 'Дмитрий В.',
      rating: 5,
      text: 'Профессиональный подход, быстрая поддержка. Рекомендую!',
      avatar: '🧑‍🎨'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="relative">
        <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                zxcvuier
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
              <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">Отзывы</a>
              <a href="#private" className="text-muted-foreground hover:text-foreground transition-colors">Приват</a>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Связаться
              </Button>
            </nav>
          </div>
        </header>

        <section className="py-20 md:py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm">
                <Icon name="TrendingUp" size={16} className="inline mr-2" />
                Надёжный сервис с 2020 года
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Заработай на
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-glow">
                  Telegram Stars
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Покупай звёзды Telegram, эксклюзивные номера и продвигай свой бизнес. 
                Быстро, безопасно, выгодно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6 hover:scale-105 transition-transform">
                  <Icon name="ShoppingCart" className="mr-2" />
                  Начать покупку
                </Button>
                <Button size="lg" variant="outline" className="border-2 text-lg px-8 py-6 hover:scale-105 transition-transform">
                  <Icon name="MessageCircle" className="mr-2" />
                  Консультация
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-4 bg-card/30 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
              <p className="text-muted-foreground text-lg">Выбери что тебе нужно для роста</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.id} 
                  className="border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 bg-card/80 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" className="text-primary" size={16} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-3 pt-4 border-t border-border/50">
                      {service.prices.map((price, i) => (
                        <div 
                          key={i} 
                          className={`flex items-center justify-between p-3 rounded-lg border ${
                            price.popular 
                              ? 'border-primary bg-primary/5' 
                              : 'border-border/30 bg-muted/20'
                          }`}
                        >
                          <span className="font-medium">{price.amount}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-primary">{price.price}</span>
                            {price.popular && (
                              <Badge className="bg-accent text-white">Хит</Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                          onClick={() => setSelectedService(service.title)}
                        >
                          Заказать
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-card border-border/50">
                        <DialogHeader>
                          <DialogTitle>Заказ: {service.title}</DialogTitle>
                          <DialogDescription>
                            Заполните форму и мы свяжемся с вами для оформления
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 pt-4">
                          <Input placeholder="Ваше имя" />
                          <Input placeholder="Telegram username" />
                          <Textarea placeholder="Комментарий к заказу" />
                          <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                            Отправить заявку
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
              <p className="text-muted-foreground text-lg">Нам доверяют тысячи пользователей</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <Card 
                  key={index} 
                  className="border-2 border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                        {review.avatar}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <div className="flex gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Icon key={i} name="Star" className="text-accent fill-accent" size={14} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="private" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 backdrop-blur-sm">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2 border-primary/30 bg-card/90 backdrop-blur-md shadow-2xl shadow-primary/20">
              <CardHeader className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                  <Icon name="Lock" className="text-white" size={40} />
                </div>
                <CardTitle className="text-3xl md:text-4xl">Приватный раздел</CardTitle>
                <CardDescription className="text-lg">
                  Эксклюзивные предложения для постоянных клиентов
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/30">
                    <Icon name="Gift" className="text-primary mb-2" size={24} />
                    <h3 className="font-semibold mb-1">VIP скидки</h3>
                    <p className="text-sm text-muted-foreground">До 30% на оптовые заказы</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/30">
                    <Icon name="Crown" className="text-accent mb-2" size={24} />
                    <h3 className="font-semibold mb-1">Приоритет</h3>
                    <p className="text-sm text-muted-foreground">Первым узнавай о новинках</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/30">
                    <Icon name="Shield" className="text-secondary mb-2" size={24} />
                    <h3 className="font-semibold mb-1">Гарантии</h3>
                    <p className="text-sm text-muted-foreground">100% безопасность сделок</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/30">
                    <Icon name="Headphones" className="text-primary mb-2" size={24} />
                    <h3 className="font-semibold mb-1">Поддержка 24/7</h3>
                    <p className="text-sm text-muted-foreground">Личный менеджер</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/30">
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-lg py-6 hover:scale-105 transition-transform">
                    <Icon name="Unlock" className="mr-2" />
                    Получить доступ
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-3">
                    Для оформления VIP статуса свяжитесь с нами
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="py-12 px-4 border-t border-border/50 bg-card/30 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name="Sparkles" className="text-white" size={24} />
                  </div>
                  <span className="text-xl font-bold">zxcvuier</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Профессиональный сервис для работы с Telegram Stars и премиум услугами
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Контакты</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Send" size={16} />
                    <span>@zxcvuier</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Mail" size={16} />
                    <span>support@zxcvuier.ru</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Ссылки</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <a href="#" className="block hover:text-primary transition-colors">Политика конфиденциальности</a>
                  <a href="#" className="block hover:text-primary transition-colors">Условия использования</a>
                  <a href="#" className="block hover:text-primary transition-colors">FAQ</a>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
              <p>© 2024 zxcvuier. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
