```import React from 'react'

function DoctorsCard() {
  return (
    <> <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full">
  <div className="relative">
    <img
      src="https://placehold.co/400"
      alt="Product image"
      className="w-full h-64 object-cover"
    />
    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
      SALE
    </span>
    <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
      <svg
        className="w-4 h- text-center text-blue-500"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
            stroke="#000000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
        </g>
      </svg>
    </button>
  </div>
  <div className="p-4">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          Premium Wireless Headphones
        </h2>
        <p className="text-sm text-gray-600">Electronics</p>
      </div>
    </div>
    <div className="py-2">
      <p className="text-lg font-bold text-green-600">$129.99</p>
      <p className="text-sm text-gray-500 line-through">$159.99</p>
    </div>
    <div className="flex items-center mb-2">
      <div className="flex text-yellow-400">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <span className="text-gray-600 text-sm ml-2">(4.5/5)</span>
    </div>
    
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <i className="fas fa-truck text-blue-500 mr-2" />
        <span className="text-sm text-gray-600">Free Shipping</span>
      </div>
      <div className="flex items-center">
        <i className="fas fa-clock text-blue-500 mr-2" />
        <span className="text-sm text-gray-600">In Stock</span>
      </div>
    </div>
    <div className="flex space-x-2">
      <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200">
        Add to Cart
      </button>
      <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-semibold hover:bg-gray-300 transition-colors duration-200">
        Quick View
      </button>
    </div>
  </div>
</div>
</>
  )
}

export default DoctorsCard```