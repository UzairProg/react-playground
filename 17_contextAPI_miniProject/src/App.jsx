import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { ThemeContextData } from './context/ThemeContext.jsx'
function App() {

  const data = useContext(ThemeContextData)
  return (
    <div className='bg-black min-h-screen flex flex-col gap-10'>
      <Navbar />
      <button className='py-4 px-8 rounded bg-blue-600 text-white m-auto block active:scale-95 transition-transform'
      onClick={() =>{
        data.setTheme(data.theme === 'light' ? 'dark' : 'light')
      }}
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default App
