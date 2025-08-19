import React from 'react'

const ShopCardSkeleton = () => {
  return (
    <div className="w-full h-80 max-sm:h-70 rounded-lg animate-pulse p-4 flex flex-col justify-between">
      {/* Image placeholder */}
      <div className="bg-gray-600/60 h-40 max-sm:h-30  rounded-md mb-4 max-sm:mb-0"></div>

      {/* Title placeholder */}
      <div className="h-6 bg-gray-600/60 rounded w-3/4 mb-2 max-sm:mb-0"></div>

      {/* Price placeholder */}
      <div className="h-5 bg-gray-600/60 rounded w-1/2"></div>

      {/* Button placeholder */}
      <div className="h-8 bg-gray-600/60 rounded w-full mt-4 max-sm:mt-0"></div>
    </div>
  );
}

export default ShopCardSkeleton