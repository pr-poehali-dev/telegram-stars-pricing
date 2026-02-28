import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { PaymentDialog } from '@/components/PaymentDialog';

const Index = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [showSupportDialog, setShowSupportDialog] = useState(false);
  const [paymentDialog, setPaymentDialog] = useState<{open: boolean; service: string; amount: string}>({
    open: false,
    service: '',
    amount: ''
  });

  const robuxPrices = [
    { amount: '200', price: '155₽', icon: '🎮' },
    { amount: '300', price: '220₽', icon: '🎮' },
    { amount: '400', price: '280₽', icon: '🎮', popular: true },
    { amount: '500', price: '370₽', icon: '🎮' },
    { amount: '800', price: '530₽', icon: '🎮', popular: true },
    { amount: '1000', price: '680₽', icon: '🎮' },
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,128,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(0,255,255,0.15),transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,0,128,0.05)_50%,transparent_100%)] pointer-events-none animate-pulse" />
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
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-neon-pulse">
                zxcvuier
              </span>
            </div>
            <Button 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-[0_0_15px_rgba(255,0,128,0.5)] hover:shadow-[0_0_25px_rgba(255,0,128,0.8)] transition-all"
              onClick={() => window.open('https://t.me/zxcvuier', '_blank')}
            >
              Связаться
            </Button>
          </div>
        </header>

        <section className="py-20 md:py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm shadow-[0_0_10px_rgba(255,0,128,0.3)]">Тут вы найдете звезды,пополнение в Steam, и пополнение в Roblox</Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-purple-50">ZXCVUIER</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Покупай звёзды Telegram, пополняй аккаунты в играх и продвигай свой бизнес. 
                Быстро, безопасно, выгодно.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Dialog open={showAllServices} onOpenChange={setShowAllServices}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,0,128,0.6)] hover:shadow-[0_0_35px_rgba(255,0,128,0.9)]">
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
                  
                  <div className="grid md:grid-cols-3 gap-6 pt-4">
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
                              ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(255,0,128,0.4)] hover:shadow-[0_0_25px_rgba(255,0,128,0.6)]' 
                              : 'border-border/50 bg-card/50 hover:shadow-[0_0_10px_rgba(255,0,128,0.2)]'
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
                            onClick={() => setPaymentDialog({open: true, service: `Звёзды Telegram (${item.amount})`, amount: item.price})}
                            size="sm"
                            className="w-full mt-2"
                          >
                            <Icon name="CreditCard" className="mr-2" size={14} />
                            Оплатить
                          </Button>
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
                              ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_15px_rgba(0,191,255,0.4)] hover:shadow-[0_0_25px_rgba(0,191,255,0.6)]' 
                              : 'border-border/50 bg-card/50 hover:shadow-[0_0_10px_rgba(0,191,255,0.2)]'
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
                          <Button 
                            onClick={() => setPaymentDialog({open: true, service: `Telegram Premium (${item.duration})`, amount: item.price})}
                            size="sm"
                            className="w-full mt-2"
                          >
                            <Icon name="CreditCard" className="mr-2" size={14} />
                            Оплатить
                          </Button>
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
                              ? 'border-green-500 bg-green-500/10 shadow-[0_0_15px_rgba(0,255,128,0.4)] hover:shadow-[0_0_25px_rgba(0,255,128,0.6)]' 
                              : 'border-border/50 bg-card/50 hover:shadow-[0_0_10px_rgba(0,255,128,0.2)]'
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
                          <Button 
                            onClick={() => setPaymentDialog({open: true, service: `Робуксы (${item.amount})`, amount: item.price})}
                            size="sm"
                            className="w-full mt-2"
                          >
                            <Icon name="CreditCard" className="mr-2" size={14} />
                            Оплатить
                          </Button>
                        </div>
                      ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <Icon name="Steam" className="text-blue-400" size={20} />
                        Пополнение Steam
                      </h3>
                      <div className="p-4 border border-blue-500/50 bg-blue-500/10 py-[1px] my-0 mx-0 rounded-xl">
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
                  <a 
                    href="https://t.me/+yfEfV4e4JVU5OGNi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    <Icon name="Radio" size={16} />
                    <span>@zxcvuier1</span>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Услуги</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>⭐ Звёзды Telegram</p>
                  <p>🚀 Пополнение аккаунта в Steam</p>
                  <p>🎮 Пополнение в игры</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
              <p>© 2024 zxcvuier. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>

      <PaymentDialog 
        open={paymentDialog.open}
        onOpenChange={(open) => setPaymentDialog({...paymentDialog, open})}
        service={paymentDialog.service}
        amount={paymentDialog.amount}
      />
    </div>
  );
};

export default Index;