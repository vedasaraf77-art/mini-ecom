import React from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'

const Home = () => {

      const products = [
    {
      id: 1,
      title: "iPhone 15",
      price: 80000,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    },
    {
      id: 2,
      title: "MacBook Air",
      price: 120000,
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
    },
    {
      id: 3,
      title: "Samsung S25",
      price: 70000,
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    },
  ];
   return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home