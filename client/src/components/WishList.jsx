import Wish from './Wish'

const WishList = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Wishlist</h2>
        <button className="cursor-pointer">View All Wishes</button>
      </div>

      <div className="grid grid-cols-4 gap-6 max-sm:gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-3 max-sm:grid-cols-2 max-[23rem]:grid-cols-1">
        <Wish />
        <Wish />
        <Wish />
        <Wish />
      </div>
    </div>
  );
}

export default WishList