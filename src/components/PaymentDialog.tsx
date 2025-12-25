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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
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
              После оформления вы получите реквизиты для перевода
            </p>
          </div>

          <Button type="submit" className="w-full h-12 text-base">
            <Icon name="ShoppingCart" className="mr-2" size={18} />
            Оформить заказ
          </Button>

          <div className="pt-2 border-t border-border/50">
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Icon name="Info" size={16} className="mt-0.5 flex-shrink-0" />
              <p>
                После оформления мы пришлём вам реквизиты карты для оплаты. Как только оплатите — свяжемся с вами в Telegram.
              </p>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
