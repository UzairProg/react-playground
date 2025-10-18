import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='bg-amber-300 flex justify-between items-center p-8'>
      <h2>
        Uzair
      </h2>
      <div className='flex gap-4'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  )
}

export default Navbar
