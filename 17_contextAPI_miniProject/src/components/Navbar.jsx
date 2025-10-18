import React, { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext.jsx'

function Navbar() {

    const {theme, seTheme, name} = useContext(ThemeContextData)
    // console.log(theme)

  return (
    <div className={`flex justify-between items-center py-8 px-16 ${theme==='light' ? 'light' : 'dark'}`}>
      <h1>{name}</h1>
      <div className='flex justify-center items-center gap-10'>
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Contact</h2>

        <div className='capitalize text-white bg-black py-2 px-4 rounded-xl'>{theme}</div>
      </div>
    </div>
  )
}

export default Navbar
