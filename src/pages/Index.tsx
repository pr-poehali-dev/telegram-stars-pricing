import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Index = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [showSupportDialog, setShowSupportDialog] = useState(false);

  const robuxPrices = [
    { amount: '200', price: '155₽', icon: '🎮' },
    { amount: '300', price: '220₽', icon: '🎮' },
    { amount: '400', price: '280₽', icon: '🎮', popular: true },
    { amount: '500', price: '370₽', icon: '🎮' },
    { amount: '800', price: '530₽', icon: '🎮', popular: true },
    { amount: '1000', price: '650₽', icon: '🎮' },
    { amount: '1500', price: '960₽', icon: '🎮' },
    { amount: '2500', price: '1570₽', icon: '🎮' },
  ];

  const starsPrices = [
    { amount: '50', price: '80₽', icon: '⭐' },
    { amount: '75', price: '120₽', icon: '⭐' },
    { amount: '100', price: '160₽', icon: '⭐', popular: true },
    { amount: '150', price: '235₽', icon: '⭐' },
    { amount: '250', price: '390₽', icon: '⭐' },
    { amount: '350', price: '580₽', icon: '⭐' },
    { amount: '500', price: '780₽', icon: '⭐', popular: true },
  ];

  const premiumPrices = [
    { duration: '1 месяц', price: '349₽', icon: '👑' },
    { duration: '3 месяца', price: '1000₽', icon: '👑', popular: true },
    { duration: '6 месяцев', price: '1300₽', icon: '👑' },
    { duration: '12 месяцев', price: '2200₽', icon: '👑', popular: true },
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
            <Button 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              onClick={() => window.open('https://t.me/zxcvuier', '_blank')}
            >
              Связаться
            </Button>
          </div>
        </header>

        <section className="py-20 md:py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm">Сайт для пополнение игр телеграмма
Steam и даже Заработать на FunPay.</Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Зарабатывай на
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-glow">
                  FunPay
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Покупай звёзды Telegram, пополняй аккаунты в играх и продвигай свой бизнес. 
                Быстро, безопасно, выгодно.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Dialog open={showAllServices} onOpenChange={setShowAllServices}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6 hover:scale-105 transition-transform">
                    <Icon name="ShoppingBag" className="mr-2" />
                    Наши услуги
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-card border-border/50 max-w-7xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-3xl">Все наши услуги</DialogTitle>
                    <DialogDescription>
                      Выберите услугу и оплатите прямо сейчас
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <Icon name="Lock" className="text-purple-500" size={20} />
                        Приватный канал
                      </h3>
                      <div className="p-4 rounded-lg border border-purple-500/50 bg-purple-500/10">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-3xl">🔒</span>
                            <div>
                              <p className="font-semibold">Приватный ТГК</p>
                              <p className="text-xs text-muted-foreground">Навсегда</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-xl font-bold text-purple-400">299₽</p>
                            <Badge className="bg-purple-500 text-white text-xs">Топ</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 p-5 rounded-lg border-2 border-orange-500/50 bg-gradient-to-br from-orange-500/10 to-red-500/10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <span className="text-4xl">🤖</span>
                            <div>
                              <p className="font-bold text-lg">FunPayCardinal — бот</p>
                              <p className="text-xs text-muted-foreground">для автоматизации</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-2xl font-bold text-orange-400">549₽</p>
                            <Badge className="bg-orange-500 text-white text-xs">Навсегда</Badge>
                          </div>
                        </div>
                        <div className="space-y-2 mb-3 text-sm">
                          <p className="font-semibold text-base mb-2">Что получишь:</p>
                          <div className="flex items-start gap-2">
                            <Icon name="TrendingUp" size={16} className="text-orange-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold">Автоподнятие лотов</p>
                              <p className="text-xs text-muted-foreground">Оставь комп включённым — бот сам будет поднимать твои лоты каждый час</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Icon name="Wifi" size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold">Всегда онлайн</p>
                              <p className="text-xs text-muted-foreground">Статус "В сети" 24/7 — клиенты видят, что ты доступен</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Icon name="PackageCheck" size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold">Автовыдача товаров</p>
                              <p className="text-xs text-muted-foreground">Настрой автоматическую выдачу — продажи идут без твоего участия</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Icon name="BadgeDollarSign" size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold">Больше продаж</p>
                              <p className="text-xs text-muted-foreground">Твои лоты всегда на первых позициях = больше просмотров и заказов</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-center text-muted-foreground mt-2">После оплаты получишь инструкцию по настройке бота</p>
                      </div>
                    </div>

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
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <Icon name="Crown" className="text-blue-500" size={20} />
                        Telegram Premium
                      </h3>
                      {premiumPrices.map((item, index) => (
                        <div 
                          key={index}
                          className={`p-3 rounded-lg border transition-all ${
                            item.popular 
                              ? 'border-blue-500 bg-blue-500/10' 
                              : 'border-border/50 bg-card/50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl">{item.icon}</span>
                              <p className="font-semibold">{item.duration}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <p className="text-xl font-bold text-blue-400">{item.price}</p>
                              {item.popular && (
                                <Badge className="bg-blue-500 text-white text-xs">Выгодно</Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <Icon name="Gamepad2" className="text-green-500" size={20} />
                        Пополнение робуксов в Roblox
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                      {robuxPrices.map((item, index) => (
                        <div 
                          key={index}
                          className={`p-3 rounded-lg border transition-all ${
                            item.popular 
                              ? 'border-green-500 bg-green-500/10' 
                              : 'border-border/50 bg-card/50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl">{item.icon}</span>
                              <p className="font-semibold">{item.amount} робуксов</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <p className="text-xl font-bold text-green-400">{item.price}</p>
                              {item.popular && (
                                <Badge className="bg-green-500 text-white text-xs">Популярно</Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <Icon name="Steam" className="text-blue-400" size={20} />
                        Пополнение Steam
                      </h3>
                      <div className="p-4 rounded-lg border border-blue-500/50 bg-blue-500/10">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-3xl">🎮</span>
                          <div>
                            <p className="font-bold text-lg">Пополнение аккаунта Steam</p>
                            <p className="text-xs text-muted-foreground">Любая сумма</p>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm bg-card/50 p-3 rounded border border-border/30">
                          <p className="font-semibold text-blue-400 mb-2">📋 Инструкция:</p>
                          <div className="space-y-1.5">
                            <div className="flex items-start gap-2">
                              <span className="text-blue-400 font-bold mt-0.5">1.</span>
                              <p>Напишите в поддержку @zxcvuier и уточните цену для нужной суммы</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-blue-400 font-bold mt-0.5">2.</span>
                              <p>Оплатите указанную сумму по реквизитам ниже</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-blue-400 font-bold mt-0.5">3.</span>
                              <p>Отправьте скриншот оплаты и данные аккаунта Steam</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-blue-400 font-bold mt-0.5">4.</span>
                              <p>Ожидайте пополнения — обычно занимает до 30 минут</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/30">
                    <div className="bg-card/50 p-4 rounded-lg border border-primary/30 mb-3">
                      <p className="text-sm text-muted-foreground text-center mb-2">Номер карты для оплаты:</p>
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-2xl font-bold text-primary font-mono">2200 7020 7152 2895</p>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => {
                            navigator.clipboard.writeText('2200702071522895');
                          }}
                        >
                          <Icon name="Copy" size={16} />
                        </Button>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-secondary"
                      onClick={() => window.open('https://t.me/zxcvuier', '_blank')}
                    >
                      <Icon name="Send" className="mr-2" />
                      Связаться в Telegram
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
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 text-lg px-8 py-6 hover:scale-105 transition-transform border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                onClick={() => window.open('https://t.me/+vv4NJFjiUGJhMGQy', '_blank')}
              >
                <Icon name="Star" className="mr-2" />
                Отзывы
              </Button>
              
              <Dialog open={showSupportDialog} onOpenChange={setShowSupportDialog}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 text-lg px-8 py-6 hover:scale-105 transition-transform border-green-500/50 text-green-400 hover:bg-green-500/10"
                  >
                    <Icon name="Headphones" className="mr-2" />
                    Поддержка
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-card border-border/50 max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Связаться с поддержкой</DialogTitle>
                    <DialogDescription>
                      Выберите удобный контакт для связи
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-3 pt-4">
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-secondary text-lg py-6"
                      onClick={() => {
                        window.open('https://t.me/zxcvuier', '_blank');
                        setShowSupportDialog(false);
                      }}
                    >
                      <Icon name="Send" className="mr-2" />
                      @zxcvuier
                    </Button>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-lg py-6"
                      onClick={() => {
                        window.open('https://t.me/Dlimono', '_blank');
                        setShowSupportDialog(false);
                      }}
                    >
                      <Icon name="Send" className="mr-2" />
                      @Dlimono
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        <footer className="py-12 px-4 border-t border-border/50 bg-card/30 backdrop-blur-sm mt-20">
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
                <div className="space-y-2 text-sm">
                  <a 
                    href="https://t.me/zxcvuier" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    <Icon name="Send" size={16} />
                    <span>@zxcvuier</span>
                  </a>
                  <a 
                    href="https://t.me/Dlimono" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    <Icon name="Send" size={16} />
                    <span>@Dlimono</span>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Услуги</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>⭐ Звёзды Telegram</p>
                  <p>🎮 Пополнение аккаунта в Steam</p>
                  <p>🚀 Быстрая доставка</p>
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