import { Badge, CheckCircle, Clock, Eye, Package, RotateCcw, Truck } from 'lucide-react';
import Order from './Order'

const orders = [
  {
    id: "#TRX-2024-001",
    date: "2025-01-15",
    status: "delivered",
    total: "R299.99",
    items: 3,
    trackingNumber: "TRK123456789",
  },
  {
    id: "#TRX-2024-002",
    date: "2025-01-12",
    status: "shipped",
    total: "R159.50",
    items: 2,
    trackingNumber: "TRK987654321",
  },
  {
    id: "#TRX-2024-003",
    date: "2025-01-08",
    status: "processing",
    total: "R89.99",
    items: 1,
  },
  {
    id: "#TRX-2024-004",
    date: "2025-01-05",
    status: "delivered",
    total: "R199.99",
    items: 2,
    trackingNumber: "TRK456789123",
  },
];

const getStatusIcon = (status) => {
  switch (status) {
    case "delivered":
      return <CheckCircle className="w-4 h-4" />;
    case "shipped":
      return <Truck className="w-4 h-4" />;
    case "processing":
      return <Package className="w-4 h-4" />;
    default:
      return <Clock className="w-4 h-4" />;
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case "delivered":
      return "bg-green-500 text-black";
    case "shipped":
      return "bg-blue-500 text-black";
    case "processing":
      return "bg-yellow-500 text-black";
    default:
      return "bg-gray-300 text-black";
  }
};

const OrdersList = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Recent Orders</h2>
        <button>View All Orders</button>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <Order key={order.id}>
            <div className="flex items-center justify-between max-md:flex-col max-md:items-start">
              <div className="flex items-center space-x-4 max-md:flex-col max-md:items-start max-md:gap-2">
                <div className="p-2 bg-gray-700 rounded-lg">
                  {getStatusIcon(order.status)}
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-foreground">
                      {order.id}
                    </span>
                    <div className={`${getStatusColor(order.status)} px-2 rounded-2xl`}>
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Ordered on {new Date(order.date).toLocaleDateString()} •
                    {order.trackingNumber && (
                      <span className="ml-2 text-nowrap">
                        Tracking: {order.trackingNumber}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-right max-md:text-left">
                <div className="text-lg font-bold text-foreground mb-1">
                  {order.total}
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  {order.items} item{order.items > 1 ? "s" : ""}
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center rounded-sm bg-gray-950 px-3 py-1 cursor-pointer">
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </button>
                  {order.status === "delivered" && (
                    <button className="flex items-center rounded-sm bg-gray-950 px-3 py-1 cursor-pointer">
                      <RotateCcw className="w-4 h-4 mr-1" />
                      Reorder
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Order>
        ))}
      </div>
    </div>
  );
};

export default OrdersList