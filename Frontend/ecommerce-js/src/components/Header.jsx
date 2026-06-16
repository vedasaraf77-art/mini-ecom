import React from 'react'

const Header = () => {
   return (
    <header className="bg-blue-600 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          ShopEasy
        </h1>

        <div className="text-lg">
          Cart (0)
        </div>
      </div>
    </header>
  );
}

export default Header