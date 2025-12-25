import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get('InvId');

  useEffect(() => {
    const confettiScript = document.createElement('script');
    confettiScript.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
    document.body.appendChild(confettiScript);

    confettiScript.onload = () => {
      const confetti = (window as any).confetti;
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    };

    return () => {
      document.body.removeChild(confettiScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto animate-pulse">
          <Icon name="CheckCircle2" size={48} className="text-green-500" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-primary">
            Оплата прошла успешно!
          </h1>
          <p className="text-muted-foreground">
            Спасибо за ваш заказ. Мы получили платёж и уже начали работу.
          </p>
        </div>

        {orderNumber && (
          <div className="p-4 bg-card rounded-lg border border-border/50">
            <p className="text-sm text-muted-foreground mb-1">Номер заказа:</p>
            <p className="text-lg font-mono font-bold text-primary">{orderNumber}</p>
          </div>
        )}

        <div className="space-y-3 pt-4">
          <div className="flex items-start gap-3 text-left p-3 bg-primary/10 rounded-lg">
            <Icon name="Mail" size={20} className="text-primary mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-semibold text-primary">Что дальше?</p>
              <p className="text-muted-foreground">
                Мы свяжемся с вами в течение 24 часов для уточнения деталей заказа.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 text-left p-3 bg-card rounded-lg border border-border/50">
            <Icon name="MessageCircle" size={20} className="text-primary mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-semibold text-primary">Остались вопросы?</p>
              <p className="text-muted-foreground mb-2">
                Напишите нам в Telegram:
              </p>
              <a 
                href="https://t.me/zxcvuier" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                @zxcvuier
              </a>
            </div>
          </div>
        </div>

        <Button 
          onClick={() => navigate('/')}
          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
          size="lg"
        >
          Вернуться на главную
        </Button>
      </div>
    </div>
  );
}
