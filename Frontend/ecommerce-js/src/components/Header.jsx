import React from 'react'

const Header = ({ cartItems }) => {
  return (
    <header className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto ">
        <h1>
          ShopEasy
        </h1>

        <div>
          Cart ({ cartItems.length })
        </div>

      </div>

    </header>
  )
}

export default Header