import React from 'react'

const CollectionCard = () => {
  return (
    <article className="relative w-full h-[28rem] lg:h-[35rem] shadow-lg overflow-hidden">
      <img
        src="https://res.cloudinary.com/dicqdr7wa/image/upload/v1752845781/woman-with-shopping-bags-studio-yellow-background-isolated_vst2sp.jpg"
        alt="Fashion"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end items-start text-white p-6">
        <h3 className="text-2xl font-bold mb-2">Product Name</h3>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full">
          Shop Now
        </button>
      </div>
    </article>
  );
}

export default CollectionCard