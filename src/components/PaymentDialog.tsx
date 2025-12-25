import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: string;
  amount: string;
}

export function PaymentDialog({ open, onOpenChange, service, amount }: PaymentDialogProps) {
  const priceNumber = parseInt(amount.replace(/[^0-9]/g, ''));
  const cardNumber = '2200702071522895';
  const sbpPhone = '+79000000000';

  const handleCardPayment = () => {
    navigator.clipboard.writeText(cardNumber);
    window.open(`https://t.me/zxcvuier`, '_blank');
  };

  const handleSBPPayment = () => {
    window.open(`https://t.me/zxcvuier`, '_blank');
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

          <div className="space-y-3">
            <Button 
              onClick={handleSBPPayment}
              className="w-full h-auto py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Icon name="Smartphone" size={24} />
                <div className="text-left">
                  <p className="font-bold text-base">Оплатить через СБП</p>
                  <p className="text-xs opacity-90">Быстрый платёж по номеру телефона</p>
                </div>
              </div>
              <Icon name="ChevronRight" size={20} />
            </Button>

            <Button 
              onClick={handleCardPayment}
              className="w-full h-auto py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Icon name="CreditCard" size={24} />
                <div className="text-left">
                  <p className="font-bold text-base">Перевод на карту Сбербанка</p>
                  <p className="text-xs opacity-90">Номер карты скопируется автоматически</p>
                </div>
              </div>
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>

          <div className="pt-4 border-t border-border/50">
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Icon name="Info" size={16} className="mt-0.5 flex-shrink-0" />
              <p>
                После оплаты напишите в Telegram <a href="https://t.me/zxcvuier" className="text-primary hover:underline" target="_blank">@zxcvuier</a> с подтверждением платежа
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
