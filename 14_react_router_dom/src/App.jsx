import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  )
}

export default App

// 1. Install react-router-dom if you haven't already:
//    npm install react-router-dom
/* 

react-router-dom is a powerful library for handling routing in React applications. 
In this example, we set up a simple application with three pages: Home, About, and Contact. 
The Navbar component contains links to navigate between these pages without reloading the entire page. 
The Routes component defines the different routes and their corresponding components.

Usage:
import { BrowserRouter as Router } from 'react-router-dom'
*/