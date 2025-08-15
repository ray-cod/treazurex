import { Edit, Shield, Star, Trash2 } from 'lucide-react';
import React from 'react'

const getBrandIcon = (brand) => {
  switch (brand) {
    case "visa":
      return "💳";
    case "mastercard":
      return "💳";
    case "amex":
      return "💳";
    case "paypal":
      return "🅿️";
    case "apple":
      return "🍎";
    default:
      return "💳";
  }
};

const getBrandColor = (brand) => {
  switch (brand) {
    case "visa":
      return "text-blue-600";
    case "mastercard":
      return "text-red-600";
    case "amex":
      return "text-green-600";
    case "paypal":
      return "text-blue-500";
    case "apple":
      return "text-gray-800";
    default:
      return "text-gray-600";
  }
};

const PaymentMethod = ({ method }) => {
  return (
    <article className="relative p-6 hover:shadow-lg transition-all duration-300 rounded-xl min-h-70 bg-gray-900 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl">{getBrandIcon(method.brand)}</div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-lg font-semibold capitalize ${getBrandColor(
                    method.brand
                  )}`}
                >
                  {method.brand}
                </span>
                <div className="text-xs border border-gray-600 rounded-2xl px-2 py-1 font-medium">
                  {method.type}
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-gray-600 dark:text-gray-400">
                •••• •••• •••• {method.last4}
              </p>
            </div>
          </div>

          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="h-8 w-8 text-muted-foreground cursor-pointer">
              <Edit className="w-4 h-4" />
            </button>
            <button className="h-8 w-8 text-muted-foreground hover:text-red-500 cursor-pointer">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">
            {method.holderName}
          </p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="text-gray-600 dark:text-gray-400">
              Expires {method.expiryMonth.toString().padStart(2, "0")}/
              {method.expiryYear}
            </span>
            {method.isExpired && (
              <div className="text-xs bg-red-500 rounded-2xl px-2 py-1 font-medium">
                Expired
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {method.isDefault && (
            <div
              variant="outline"
              className="inline-flex items-center text-xs border border-green-500 rounded-2xl px-2 py-1 text-green-500 font-medium"
            >
              <Star className="w-3 h-3 mr-1 fill-current" />
              Default
            </div>
          )}
          <div className="flex items-center gap-1 text-xs text-muted-foreground text-gray-600 dark:text-gray-400">
            <Shield className="w-3 h-3" />
            <span>Secured</span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        <button className="flex-1 bg-gray-950 py-1 cursor-pointer">Edit</button>
        {!method.isDefault && !method.isExpired && (
          <button className="flex-1 bg-gray-950 py-1 cursor-pointer">
            Set Default
          </button>
        )}
      </div>
    </article>
  );
}

export default PaymentMethod