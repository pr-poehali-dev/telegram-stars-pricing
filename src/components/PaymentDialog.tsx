import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: string;
  amount: string;
}

export function PaymentDialog({ open, onOpenChange, service, amount }: PaymentDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const priceNumber = parseInt(amount.replace(/[^0-9]/g, ''));

  const handlePayment = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://functions.poehali.dev/391a25b0-3130-47b9-8dfb-03bf8ccedb87', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: priceNumber,
          user_name: 'Клиент',
          user_email: 'customer@example.com',
          user_phone: '',
          cart_items: [{
            id: '1',
            name: service,
            price: priceNumber,
            quantity: 1
          }],
          order_comment: service
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ошибка создания платежа');
      }

      window.location.href = data.payment_url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка соединения с сервером');
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border/50 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Оплата услуги</DialogTitle>
          <DialogDescription>
            {service} — {amount}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-4">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
            <p className="text-sm text-muted-foreground mb-3">Сумма к оплате:</p>
            <p className="text-3xl font-bold text-primary">{amount}</p>
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/50 text-red-500 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="AlertCircle" size={16} />
                <p>{error}</p>
              </div>
            </div>
          )}

          <div className="space-y-3">
            <Button 
              onClick={handlePayment}
              disabled={isLoading}
              className="w-full h-auto py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 flex items-center justify-between disabled:opacity-50"
            >
              <div className="flex items-center gap-3">
                <Icon name="Smartphone" size={24} />
                <div className="text-left">
                  <p className="font-bold text-base">
                    {isLoading ? 'Загрузка...' : 'Оплатить через СБП и карты'}
                  </p>
                  <p className="text-xs opacity-90">Переход на защищённую страницу оплаты</p>
                </div>
              </div>
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>

          <div className="pt-4 border-t border-border/50">
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Icon name="Shield" size={16} className="mt-0.5 flex-shrink-0" />
              <p>
                Безопасная оплата через Robokassa. Доступны СБП, банковские карты и другие способы.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}