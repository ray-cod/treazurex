import { Edit, MapPin, Star, Trash2 } from "lucide-react";

const Address = ({ address }) => {
  return (
    <article className="group relative p-6 bg-gray-900 hover:shadow-lg transition-all duration-300 rounded-xl min-h-70 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div
              className={`flex items-center text-xs rounded-2xl px-2 py-1 font-medium ${
                address.type === "Home"
                  ? "bg-green-500 text-gray-900"
                  : "border border-gray-500"
              }`}
            >
              <MapPin className="w-3 h-3 mr-1" />
              {address.type}
            </div>
            {address.isDefault && (
              <div className="inline-flex items-center text-xs border border-green-500 rounded-2xl px-2 py-1 text-green-500 font-medium">
                <Star className="w-3 h-3 mr-1 fill-current" />
                Default
              </div>
            )}
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

        <div className="space-y-2 text-gray-600 dark:text-gray-400">
          <h3 className="font-semibold text-foreground text-white">{address.name}</h3>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>{address.street}</p>
            <p>
              {address.city}, {address.state} {address.zipCode}
            </p>
            <p>{address.country}</p>
            {address.phone && <p>{address.phone}</p>}
          </div>
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        <button className="flex-1 bg-gray-950 py-1 cursor-pointer">Edit</button>
        {!address.isDefault && (
          <button className="flex-1 bg-gray-950 py-1 cursor-pointer">
            Set Default
          </button>
        )}
      </div>
    </article>
  );
};

export default Address;
