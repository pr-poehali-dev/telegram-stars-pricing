import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Index = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const phonePrices = [
    { code: '+63', country: 'Филиппины', price: '60₽', flag: '🇵🇭' },
    { code: '+254', country: 'Кения', price: '60₽', flag: '🇰🇪' },
    { code: '+1', country: 'США/Канада', price: '100₽', flag: '🇺🇸' },
    { code: '+57', country: 'Колумбия', price: '105₽', flag: '🇨🇴' },
    { code: '+44', country: 'Великобритания', price: '145₽', flag: '🇬🇧' },
    { code: '+55', country: 'Бразилия', price: '150₽', flag: '🇧🇷' },
    { code: '+880', country: 'Бангладеш', price: '165₽', flag: '🇧🇩' },
    { code: '+777', country: 'Казахстан', price: '200₽', flag: '🇰🇿' },
    { code: '+33', country: 'Франция', price: '450₽', flag: '🇫🇷' },
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Dialog open={showAllServices} onOpenChange={setShowAllServices}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6 hover:scale-105 transition-transform">
                    <Icon name="ShoppingBag" className="mr-2" />
                    Наши услуги
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-card border-border/50 max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-3xl">Все наши услуги</DialogTitle>
                    <DialogDescription>
                      Выберите услугу и оплатите прямо сейчас
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid md:grid-cols-2 gap-6 pt-4">
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

                  <div className="pt-4 border-t border-border/30">
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
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Send" size={16} />
                    <span>@zxcvuier</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Услуги</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>⭐ Звёзды Telegram</p>
                  <p>📱 Номера для регистрации</p>
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
