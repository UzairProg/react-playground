import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'
import Mens from './pages/Mens.jsx'
import Womens from './pages/Womens.jsx'
import ContactDetails from './pages/ContactDetails.jsx'

import Navbar from './components/Navbar.jsx'
import Navbar2 from './components/Navbar2.jsx'

function App() {
  return (
    <div className='bg-black text-white h-screen flex flex-col justify-between'>
      <div>
        <Navbar />
      <Navbar2 />
      </div>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path='/product' element={<Product />}>
          <Route path='mens' element={<Mens />} />
          <Route path='womens' element={<Womens />} />
        </Route>
        <Route path="/contact/:id" element={<ContactDetails />}/>
        <Route path="*" element={<h1 className='flex justify-center items-center text-white text-3xl font-bold'>404 Not Found</h1>} />
        {/* the above route handles all undefined routes and displays a 404 message */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
