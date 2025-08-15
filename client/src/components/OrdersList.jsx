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
];

const OrdersList = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Recent Orders</h2>
        <button className="cursor-pointer">View All Orders</button>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <Order order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
};

export default OrdersList