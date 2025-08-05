import React from "react";

const Profile = () => {
  return (
    <section className="min-h-screen container mx-auto px-4 py-10">
      {/* Profile Header */}
      <div className="bg-gray-900 p-6 rounded-xl shadow border-gray-800 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img
            src="https://i.pravatar.cc/100"
            alt="User"
            className="w-20 h-20 rounded-full border"
          />
          <div>
            <h2 className="text-xl font-bold">
              Alexandra <span className="text-yellow-500">Chen</span>
            </h2>
            <p className="text-sm text-gray-500">@alexandra_chen</p>
            <div className="text-xs text-gray-400">San Francisco, CA</div>
            <div className="text-xs text-gray-600 mt-1 underline cursor-pointer">
              Show email
            </div>
          </div>
        </div>
        <button className="bg-indigo-900 text-white px-4 py-2 rounded-md text-sm">
          Edit Profile
        </button>
      </div>

      <div className="flex py-6 gap-6">
        {/* Sidebar */}
        <nav className="w-64 bg-gray-900 rounded-xl p-4 shadow border-gray-800 space-y-4 max-lg:hidden">
          <div className="space-y-2">
            <NavItem active label="Profile Overview" />
            <NavItem label="Orders" />
            <NavItem label="Wishlist" />
            <NavItem label="Address Book" />
            <NavItem label="Payment Methods" />
            <NavItem label="Settings" />
          </div>
          <button className="text-red-500 font-medium">Logout</button>
        </nav>

        {/* Main Content */}
        <section className="flex-1 space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <SummaryCard title="Lifetime orders" value="24" note="This month" />
            <SummaryCard
              title="Items saved"
              value="8"
              note="2 recent"
              icon="❤️"
            />
            <SummaryCard
              title="Last order"
              value="3 days"
              note="Delivered"
              icon="⏱️"
            />
            <SummaryCard title="Premium member" value="2022" note="2 years" />
          </div>

          {/* Recently Viewed */}
          <div className="bg-gray-900 p-6 rounded-xl shadow border-gray-800">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recently Viewed</h3>
              <button className="text-sm text-gray-500 underline">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <ProductCard
                image="/watch.jpg"
                title="Luxury Swiss Watch"
                price="$2,499"
                tag="Watches"
              />
              <ProductCard
                image="/handbag.jpg"
                title="Designer Handbag"
                price="$899"
                tag="Bags"
              />
              <ProductCard
                image="/jewelry.jpg"
                title="Premium Jewelry Set"
                price="$1,259"
                tag="Jewelry"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

// Reusable Components
const NavItem = ({ label, active }) => (
  <div
    className={`px-3 py-2 rounded-lg text-sm cursor-pointer ${
      active ? "bg-gray-700 font-semibold" : "hover:bg-gray-700"
    }`}
  >
    {label}
  </div>
);

const SummaryCard = ({ title, value, note, icon }) => (
  <div className="bg-gray-900 p-4 rounded-xl shadow border-gray-800 text-center">
    {icon && <div className="text-2xl mb-1">{icon}</div>}
    <div className="text-lg font-semibold">{value}</div>
    <div className="text-xs text-gray-500">{title}</div>
    {note && <div className="text-[11px] text-gray-400 mt-1">{note}</div>}
  </div>
);

const ProductCard = ({ image, title, price, tag }) => (
  <div className="border-gray-800 rounded-xl p-2 bg-gray-950 shadow-sm hover:shadow-md transition">
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-cover rounded-md"
    />
    <div className="mt-2 text-xs text-gray-400">{tag}</div>
    <div className="text-sm font-semibold">{title}</div>
    <div className="text-yellow-600 font-medium">{price}</div>
  </div>
);

export default Profile;
