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
  const [showPricing, setShowPricing] = useState(false);

  const phonePrices = [
    { code: '+63', country: 'Филиппины', price: '60₽', flag: '🇵🇭', url: 'https://t.me/zxcvuier' },
    { code: '+254', country: 'Кения', price: '60₽', flag: '🇰🇪', url: 'https://t.me/zxcvuier' },
    { code: '+1', country: 'США/Канада', price: '100₽', flag: '🇺🇸', url: 'https://t.me/zxcvuier' },
    { code: '+57', country: 'Колумбия', price: '105₽', flag: '🇨🇴', url: 'https://t.me/zxcvuier' },
    { code: '+44', country: 'Великобритания', price: '145₽', flag: '🇬🇧', url: 'https://t.me/zxcvuier' },
    { code: '+55', country: 'Бразилия', price: '150₽', flag: '🇧🇷', url: 'https://t.me/zxcvuier' },
    { code: '+880', country: 'Бангладеш', price: '165₽', flag: '🇧🇩', url: 'https://t.me/zxcvuier' },
    { code: '+777', country: 'Казахстан', price: '200₽', flag: '🇰🇿', url: 'https://t.me/zxcvuier' },
    { code: '+33', country: 'Франция', price: '450₽', flag: '🇫🇷', url: 'https://t.me/zxcvuier' },
  ];

  const starsPrices = [
    { amount: '50', price: '80₽', icon: '⭐', url: 'https://t.me/zxcvuier' },
    { amount: '75', price: '120₽', icon: '⭐', url: 'https://t.me/zxcvuier' },
    { amount: '100', price: '160₽', icon: '⭐', popular: true, url: 'https://t.me/zxcvuier' },
    { amount: '150', price: '235₽', icon: '⭐', url: 'https://t.me/zxcvuier' },
    { amount: '250', price: '390₽', icon: '⭐', url: 'https://t.me/zxcvuier' },
    { amount: '350', price: '580₽', icon: '⭐', url: 'https://t.me/zxcvuier' },
    { amount: '500', price: '780₽', icon: '⭐', popular: true, url: 'https://t.me/zxcvuier' },
  ];

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
      avatar: '👨‍💼',
      type: 'stars'
    },
    {
      name: 'Мария К.',
      rating: 5,
      text: 'Взяла номер +63 для регистрации. SMS пришла за 2 секунды, супер!',
      avatar: '👩‍💻',
      type: 'phone'
    },
    {
      name: 'Дмитрий В.',
      rating: 5,
      text: 'Покупаю звёзды постоянно. Лучшие курсы на рынке, всегда доволен!',
      avatar: '🧑‍🎨',
      type: 'stars'
    },
    {
      name: 'Ирина С.',
      rating: 5,
      text: 'Заказала номер +1 для бизнес аккаунта. Работает идеально!',
      avatar: '👩‍🦰',
      type: 'phone'
    },
    {
      name: 'Игорь П.',
      rating: 5,
      text: 'Беру 100 звёзд каждую неделю. Быстро, дёшево, надёжно. Топ!',
      avatar: '👨‍💻',
      type: 'stars'
    },
    {
      name: 'Анна Л.',
      rating: 5,
      text: 'Номер +880 пришёл мгновенно. Зарегистрировала 5 аккаунтов без проблем!',
      avatar: '👱‍♀️',
      type: 'phone'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 text-blue-200/30 text-4xl">❄️</div>
        <div className="absolute top-32 right-20 w-16 h-16 text-blue-200/20 text-3xl">⛄</div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 text-blue-300/25 text-5xl">❄️</div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 text-blue-200/30 text-3xl">☃️</div>
        <div className="absolute bottom-20 right-10 w-20 h-20 text-blue-300/20 text-4xl">❄️</div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 text-blue-200/25 text-3xl">❄️</div>
      </div>
      
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
              <Button 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                onClick={() => window.open('https://t.me/zxcvuier', '_blank')}
              >
                Связаться
              </Button>
            </nav>
          </div>
        </header>

        <section className="py-20 md:py-32 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="relative">
              <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-48 h-64 opacity-30">
                <img 
                  src="https://cdn.poehali.dev/files/hqdefault.jpg" 
                  alt="decoration" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 opacity-40">
                <img 
                  src="https://cdn.poehali.dev/files/2b2df9a2-a029-40fc-9ae3-ce5949acc333.png" 
                  alt="telegram" 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-center space-y-6 animate-fade-in relative z-10">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm">
                  <Icon name="TrendingUp" size={16} className="inline mr-2" />
                  Надёжный сервис с 2020 года
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Зарабатывай на
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-glow">
                    FunPay
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Покупай звёзды Telegram, эксклюзивные номера и продвигай свой бизнес. 
                  Быстро, безопасно, выгодно.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Dialog open={showPricing} onOpenChange={setShowPricing}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6 hover:scale-105 transition-transform">
                      <Icon name="ShoppingCart" className="mr-2" />
                      Начать покупку
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-card border-border/50 max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">Выберите что хотите купить</DialogTitle>
                      <DialogDescription>
                        Звёзды Telegram или номера для регистрации
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid md:grid-cols-2 gap-6 pt-4 max-h-[70vh] overflow-y-auto">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                          <Icon name="Star" className="text-accent" size={20} />
                          Звёзды Telegram
                        </h3>
                        {starsPrices.map((item, index) => (
                          <div 
                            key={index}
                            className={`p-3 rounded-lg border transition-all ${
                              item.popular 
                                ? 'border-primary bg-primary/10' 
                                : 'border-border/50 bg-card/50'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="text-2xl">{item.icon}</span>
                                <p className="font-semibold">{item.amount} звёзд</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <p className="text-xl font-bold text-primary">{item.price}</p>
                                {item.popular && (
                                  <Badge className="bg-accent text-white text-xs">Хит</Badge>
                                )}
                              </div>
                            </div>
                            <Button 
                              size="sm" 
                              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-xs"
                              onClick={() => {
                                window.open('https://www.tinkoff.ru/rm/r_zXjHiwuRWv.pFzEvXqslY/SOLg19362', '_blank');
                                setTimeout(() => {
                                  window.open('https://t.me/zxcvuier', '_blank');
                                }, 2000);
                              }}
                            >
                              <Icon name="CreditCard" size={14} className="mr-1" />
                              Оплатить
                            </Button>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                          <Icon name="Phone" className="text-secondary" size={20} />
                          Номера для регистрации
                        </h3>
                        {phonePrices.map((item, index) => (
                          <div 
                            key={index}
                            className="p-3 rounded-lg border border-border/50 transition-all bg-card/50"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="text-2xl">{item.flag}</span>
                                <div>
                                  <p className="font-semibold">{item.code}</p>
                                  <p className="text-xs text-muted-foreground">{item.country}</p>
                                </div>
                              </div>
                              <p className="text-xl font-bold text-primary">{item.price}</p>
                            </div>
                            <Button 
                              size="sm" 
                              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-xs"
                              onClick={() => {
                                window.open('https://www.tinkoff.ru/rm/r_zXjHiwuRWv.pFzEvXqslY/SOLg19362', '_blank');
                                setTimeout(() => {
                                  window.open('https://t.me/zxcvuier', '_blank');
                                }, 2000);
                              }}
                            >
                              <Icon name="CreditCard" size={14} className="mr-1" />
                              Оплатить
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/30 space-y-3">
                      <Button 
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                        onClick={() => {
                          window.open('https://www.tinkoff.ru/rm/r_zXjHiwuRWv.pFzEvXqslY/SOLg19362', '_blank');
                          setTimeout(() => {
                            window.open('https://t.me/zxcvuier', '_blank');
                          }, 2000);
                        }}
                      >
                        <Icon name="CreditCard" className="mr-2" />
                        Оплатить картой Tinkoff
                      </Button>
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-secondary"
                        onClick={() => window.open('https://t.me/zxcvuier', '_blank')}
                      >
                        <Icon name="Send" className="mr-2" />
                        Заказать в Telegram
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 text-lg px-8 py-6 hover:scale-105 transition-transform"
                  onClick={() => window.open('https://t.me/zxcvuier', '_blank')}
                >
                  <Icon name="MessageCircle" className="mr-2" />
                  Консультация
                </Button>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-4 bg-card/30 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
              <p className="text-muted-foreground text-lg">Выбери что тебе нужно для роста</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon name="Star" className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl">Звёзды Telegram</CardTitle>
                  <CardDescription className="text-base">Официальная валюта для донатов и премиум-функций</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {starsPrices.map((item, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg border transition-all ${
                        item.popular 
                          ? 'border-primary bg-primary/10' 
                          : 'border-border/50 bg-card/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{item.icon}</span>
                          <p className="font-semibold">{item.amount} звёзд</p>
                          {item.popular && (
                            <Badge className="bg-accent text-white text-xs">Хит</Badge>
                          )}
                        </div>
                        <p className="text-lg font-bold text-primary">{item.price}</p>
                      </div>
                      <Button 
                        size="sm"
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                        onClick={() => {
                          window.open('https://www.tinkoff.ru/rm/r_zXjHiwuRWv.pFzEvXqslY/SOLg19362', '_blank');
                          setTimeout(() => {
                            window.open('https://t.me/zxcvuier', '_blank');
                          }, 2000);
                        }}
                      >
                        <Icon name="CreditCard" size={14} className="mr-1" />
                        Оплатить
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4">
                    <Icon name="Phone" className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl">Номера для регистрации</CardTitle>
                  <CardDescription className="text-base">Виртуальные номера для активации аккаунтов</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {phonePrices.map((item, index) => (
                    <div 
                      key={index}
                      className="p-3 rounded-lg border border-border/50 bg-card/50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{item.flag}</span>
                          <div>
                            <p className="font-semibold">{item.code}</p>
                            <p className="text-xs text-muted-foreground">{item.country}</p>
                          </div>
                        </div>
                        <p className="text-lg font-bold text-primary">{item.price}</p>
                      </div>
                      <Button 
                        size="sm"
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                        onClick={() => {
                          window.open('https://www.tinkoff.ru/rm/r_zXjHiwuRWv.pFzEvXqslY/SOLg19362', '_blank');
                          setTimeout(() => {
                            window.open('https://t.me/zxcvuier', '_blank');
                          }, 2000);
                        }}
                      >
                        <Icon name="CreditCard" size={14} className="mr-1" />
                        Оплатить
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
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
                    <Badge className="mt-3" variant={review.type === 'stars' ? 'default' : 'secondary'}>
                      {review.type === 'stars' ? '⭐ Звёзды' : '📱 Номера'}
                    </Badge>
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
                <CardTitle className="text-3xl md:text-4xl">Приватный ТГК</CardTitle>
                <CardDescription className="text-lg">
                  Эксклюзивные предложения для постоянных клиентов
                </CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">399₽</span>
                  <span className="text-muted-foreground ml-2">навсегда</span>
                </div>
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
                
                <div className="pt-4 border-t border-border/30 space-y-4">
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">Т-Банк</span>
                      <Icon name="CreditCard" className="text-primary" size={20} />
                    </div>
                    <p className="text-2xl font-bold font-mono tracking-wider">2200 7020 7152 2895</p>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-secondary text-lg py-6 hover:scale-105 transition-transform"
                    onClick={() => window.open('https://t.me/zxcvuier', '_blank')}
                  >
                    <Icon name="Send" className="mr-2" />
                    Подтвердить оплату
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Переведите 399₽ и напишите в Telegram для получения доступа
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="funpay" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2 border-secondary/30 bg-card/90 backdrop-blur-md shadow-2xl shadow-secondary/20">
              <CardHeader className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-4">
                  <Icon name="Bot" className="text-white" size={40} />
                </div>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Icon name="Send" className="text-primary" size={32} />
                  <div className="text-center">
                    <CardTitle className="text-3xl md:text-4xl">Зарабатывай на FunPay</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">FunPayCardinal — бот для автоматизации</p>
                  </div>
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-secondary" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <div className="mt-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">549₽</span>
                  <span className="text-muted-foreground ml-2">навсегда</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/30">
                  <h3 className="font-semibold text-lg mb-4 text-center">Что получишь:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Zap" className="text-secondary" size={16} />
                      </div>
                      <div>
                        <p className="font-medium">Автоподнятие лотов</p>
                        <p className="text-sm text-muted-foreground">Оставь комп включённым — бот сам будет поднимать твои лоты каждый час</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Clock" className="text-accent" size={16} />
                      </div>
                      <div>
                        <p className="font-medium">Всегда онлайн</p>
                        <p className="text-sm text-muted-foreground">Статус "В сети" 24/7 — клиенты видят, что ты доступен</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Settings" className="text-primary" size={16} />
                      </div>
                      <div>
                        <p className="font-medium">Автовыдача товаров</p>
                        <p className="text-sm text-muted-foreground">Настрой автоматическую выдачу — продажи идут без твоего участия</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="TrendingUp" className="text-secondary" size={16} />
                      </div>
                      <div>
                        <p className="font-medium">Больше продаж</p>
                        <p className="text-sm text-muted-foreground">Твои лоты всегда на первых позициях = больше просмотров и заказов</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-secondary to-accent text-lg py-6 hover:scale-105 transition-transform"
                  onClick={() => window.open('https://t.me/zxcvuier', '_blank')}
                >
                  <Icon name="ShoppingCart" className="mr-2" />
                  Купить FunPayCardinal
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                  После оплаты получишь инструкцию по настройке бота
                </p>
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