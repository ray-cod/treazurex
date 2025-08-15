import {
  CheckCircle,
  Clock,
  Eye,
  Package,
  RotateCcw,
  Truck,
} from "lucide-react";

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

const Order = ({ order, onClick }) => {
  return (
    <article
      className={`p-6 transition-shadow duration-200 bg-gray-200 dark:bg-gray-900 rounded-xl shadow border-gray-800`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between max-md:flex-col max-md:items-start">
        <div className="flex items-center space-x-4 max-md:flex-col max-md:items-start max-md:gap-2">
          <div className="p-2 bg-gray-700 rounded-lg">
            {getStatusIcon(order.status)}
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="font-semibold text-foreground">{order.id}</span>
              <div
                className={`${getStatusColor(
                  order.status
                )} px-2 rounded-2xl text-xs font-medium py-1`}
              >
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </div>
            </div>
            <div className="text-sm text-muted-foreground text-gray-600 dark:text-gray-400">
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
          <div className="text-sm text-muted-foreground mb-2 text-gray-600 dark:text-gray-400">
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
    </article>
  );
};

export default Order;
