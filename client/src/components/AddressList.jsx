import { Plus } from 'lucide-react';
import Address from './Address';

const addresses = [
  {
    id: "1",
    type: "Home",
    name: "Raimi Dikamona",
    street: "15 Sandton Drive",
    city: "Johannesburg",
    state: "Gauteng",
    zipCode: "2196",
    country: "South Africa",
    phone: "+27 82 123 4567",
    isDefault: true,
  },
  {
    id: "2",
    type: "Work",
    name: "Raimi Dikamona",
    street: "102 Rivonia Road, Sandhurst Office Park",
    city: "Johannesburg",
    state: "Gauteng",
    zipCode: "2191",
    country: "South Africa",
    phone: "+27 82 987 6543",
    isDefault: false,
  },
];

const AddressList = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Address Book</h2>
        <button className="cursor-pointer">View All Addresses</button>
      </div>

      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
        {addresses.map((address) => (
          <Address key={address.id} address={address} />
        ))}

        <div className="flex items-center justify-center flex-col-reverse bg-gray-900 rounded-xl p-6 min-h-70 hover:border border-green-300 cursor-pointer">
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold text-foreground">Address Book</h2>
            <p className="text-muted-foreground">
              Manage your saved addresses for faster checkout
            </p>
          </div>
          <button className="bg-[#00461c70] hover:bg-[#00461c54] text-primary-foreground rounded-full cursor-pointer">
            <Plus className="w-8 h-8 m-3 text-green-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddressList