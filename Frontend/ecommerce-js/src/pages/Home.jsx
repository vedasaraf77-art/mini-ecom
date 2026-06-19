import React from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import Cart from '../pages/Cart'

const Home = () => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [cartItems, setCartItems] = React.useState([])

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

  const filteredProducts = (product)=>{
    return product.title.toLowerCase().includes(searchTerm.toLowerCase()
  )}

  const handleAddToCart =(product)=>{
    setCartItems((prevItems) => [...prevItems, product])
  }


   return (
    <>
      <Header cartItems={cartItems.length} />

      <Cart cartItems={cartItems} />  

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home