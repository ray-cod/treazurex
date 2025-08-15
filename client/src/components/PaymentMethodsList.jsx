import PaymentMethod from './PaymentMethod';
import { CreditCard } from 'lucide-react';

const paymentMethods = [
  {
    id: "1",
    type: "credit",
    brand: "visa",
    last4: "4242",
    expiryMonth: 12,
    expiryYear: 2027,
    holderName: "Raimi Dikamona",
    isDefault: true,
    isExpired: false,
  },
  {
    id: "2",
    type: "credit",
    brand: "mastercard",
    last4: "8888",
    expiryMonth: 3,
    expiryYear: 2024,
    holderName: "Raimi Dikamona",
    isDefault: false,
    isExpired: true,
  },
];

const PaymentMethodsList = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">
          Payment Methods
        </h2>
        <button className="cursor-pointer">View All Methods</button>
      </div>

      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
        {paymentMethods.map((method) => (
          <PaymentMethod key={method.id} method={method} />
        ))}

        <div className="flex items-center justify-center flex-col-reverse bg-gray-900 rounded-xl p-6 min-h-70 hover:border border-green-300 cursor-pointer">
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold text-foreground">
              Payment Methods
            </h2>
            <p className="text-muted-foreground">
              Manage your saved payment methods for secure checkout
            </p>
          </div>
          <button className="bg-[#00461c70] hover:bg-[#00461c54] text-primary-foreground rounded-full cursor-pointer">
            <CreditCard className="w-8 h-8 m-3 text-green-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethodsList