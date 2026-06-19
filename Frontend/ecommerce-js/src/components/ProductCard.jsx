import React from 'react'

const ProductCard = ({ product , onAddToCart}) => {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain"
      />

      <h2 className="font-semibold mt-4">
        {product.title}
      </h2>

      <p className="text-green-600 font-bold mt-2">
        ₹{product.price}
      </p>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" onClick={() => onAddToCart(product)}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard