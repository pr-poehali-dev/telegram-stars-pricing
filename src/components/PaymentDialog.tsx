import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: string;
  amount: string;
}

export function PaymentDialog({ open, onOpenChange, service, amount }: PaymentDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    telegram: '',
    email: '',
    comment: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'online'>('card');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (paymentMethod === 'online') {
        const amountInRubles = parseFloat(amount.replace(/[^0-9.]/g, ''));
        
        const paymentResponse = await fetch('https://functions.poehali.dev/68ac8e52-e750-4e84-b397-b4b64a6a3fee', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: amountInRubles,
            description: `${service} - ${formData.name}`,
            customerName: formData.name,
            customerEmail: formData.email
          })
        });

        const paymentData = await paymentResponse.json();

        if (paymentData.success && paymentData.paymentUrl) {
          await fetch('https://functions.poehali.dev/02a146e8-449c-4a53-951c-a3c94b3e6e4d', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: formData.name,
              telegram: formData.telegram,
              email: formData.email || 'Не указано',
              service: service,
              amount: amount,
              comment: formData.comment || 'Нет комментариев'
            })
          });

          window.location.href = paymentData.paymentUrl;
          return;
        } else {
          console.error('Payment creation failed:', paymentData);
          alert('Ошибка создания платежа. Попробуйте позже или выберите оплату на карту.');
        }
      } else {
        const response = await fetch('https://functions.poehali.dev/02a146e8-449c-4a53-951c-a3c94b3e6e4d', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            telegram: formData.telegram,
            email: formData.email || 'Не указано',
            service: service,
            amount: amount,
            comment: formData.comment || 'Нет комментариев'
          })
        });

        await response.json();
        setShowSuccess(true);
      }
    } catch (error) {
      console.error('Error:', error);
      if (paymentMethod === 'card') {
        setShowSuccess(true);
      } else {
        alert('Ошибка. Попробуйте позже или выберите оплату на карту.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const copyCardNumber = () => {
    navigator.clipboard.writeText('2200702071522895');
  };

  if (showSuccess) {
    return (
      <Dialog open={open} onOpenChange={(open) => {
        onOpenChange(open);
        if (!open) {
          setShowSuccess(false);
          setFormData({ name: '', telegram: '', email: '', comment: '' });
        }
      }}>
        <DialogContent className="bg-card border-border/50 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Icon name="CheckCircle2" className="text-green-500" size={28} />
              Заказ принят!
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 pt-4">
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-sm mb-2">Услуга: <strong>{service}</strong></p>
              <p className="text-sm mb-3">Сумма: <strong className="text-green-500">{amount}</strong></p>
              <p className="text-sm text-muted-foreground">
                Мы получили ваш заказ! После оплаты мы свяжемся с вами в Telegram.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <Icon name="CreditCard" size={18} />
                Переведите на карту:
              </p>
              <div className="flex items-center gap-2 bg-background p-3 rounded-md">
                <code className="text-lg font-mono flex-1">2200 7020 7152 2895</code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyCardNumber}
                >
                  <Icon name="Copy" size={16} />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                СБП: +79000317399
              </p>
            </div>

            <Button 
              onClick={() => {
                onOpenChange(false);
                setShowSuccess(false);
                setFormData({ name: '', telegram: '', email: '', comment: '' });
              }}
              className="w-full"
            >
              Готово
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border/50 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Оформление заказа</DialogTitle>
          <DialogDescription>
            {service} — {amount}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Ваше имя *</Label>
            <Input
              id="name"
              placeholder="Андрей"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telegram">Telegram *</Label>
            <Input
              id="telegram"
              placeholder="@username или +79001234567"
              value={formData.telegram}
              onChange={(e) => setFormData({...formData, telegram: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email (необязательно)</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="comment">Комментарий к заказу</Label>
            <Textarea
              id="comment"
              placeholder="Укажите детали заказа (логин, ID и т.д.)"
              value={formData.comment}
              onChange={(e) => setFormData({...formData, comment: e.target.value})}
              rows={3}
            />
          </div>

          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
            <p className="text-sm font-semibold mb-1">К оплате: {amount}</p>
            <p className="text-xs text-muted-foreground">
              Выберите способ оплаты ниже
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-3 rounded-lg border border-border/50 bg-muted/30">
              <p className="text-sm font-semibold mb-2">Способ оплаты:</p>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={paymentMethod === 'card' ? 'default' : 'outline'}
                  onClick={() => setPaymentMethod('card')}
                  className="flex-1"
                >
                  <Icon name="CreditCard" className="mr-2" size={16} />
                  На карту
                </Button>
                <Button
                  type="button"
                  variant={paymentMethod === 'online' ? 'default' : 'outline'}
                  onClick={() => setPaymentMethod('online')}
                  className="flex-1"
                >
                  <Icon name="Wallet" className="mr-2" size={16} />
                  Онлайн
                </Button>
              </div>
            </div>

            <Button type="submit" disabled={isLoading} className="w-full h-12 text-base">
              <Icon name="ShoppingCart" className="mr-2" size={18} />
              {isLoading ? 'Отправка...' : (paymentMethod === 'online' ? 'Перейти к оплате' : 'Оформить заказ')}
            </Button>
          </div>

          <div className="pt-2 border-t border-border/50">
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Icon name="Info" size={16} className="mt-0.5 flex-shrink-0" />
              <p>
                {paymentMethod === 'card' 
                  ? 'После оформления мы пришлём вам реквизиты карты для оплаты. Как только оплатите — свяжемся с вами в Telegram.'
                  : 'Вы будете перенаправлены на защищённую страницу оплаты Ckassa для безопасной оплаты картой.'}
              </p>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}