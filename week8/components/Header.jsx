import React from 'react'
import logo from '../src/assets/chefify.png'

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="text-pink-500 font-bold text-xl"><img src={logo} alt="" srcset="" /></div>
          <input
            type="text"
            placeholder="What would you like to cook?"
            className="px-4 py-2 border border-gray-300 rounded-md w-72"
          />
        </div>
        <nav className="flex items-center space-x-6 text-sm text-gray-700">
          <a href="#" className="hover:underline">What to cook</a>
          <a href="#" className="hover:underline">Recipes</a>
          <a href="#" className="hover:underline">Ingredients</a>
          <a href="#" className="hover:underline">Occasions</a>
          <a href="#" className="hover:underline">About Us</a>
          <button className="text-pink-500 font-semibold">Login</button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm">Subscribe</button>
        </nav>
      </header>
  )
}

export default Header