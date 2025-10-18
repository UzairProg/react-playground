import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Product() {
  return (
    <div className='flex justify-center items-center gap-12 flex-col text-white'>
        <div className='flex gap-4 items-start justify-start'>
            <Link to='/product/mens'>Men's</Link>
            <Link to='/product/womens'>Women's</Link>
        </div>
      
      <Outlet />
    </div>
    
  )
}

export default Product
