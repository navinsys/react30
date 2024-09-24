import React from 'react'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './For routes/Home'
import About from './For routes/About'
import Contact from './For routes/Contact'

export default function Ten() {
  return (
    <BrowserRouter>
    <nav>
        <ul>
            <li>
                <Link to ='/'>Home</Link>
            </li>
            <li>
                <Link to ='/about'>About</Link>
            </li>
            <li>
                <Link to ='/contact'>Contact</Link>
            </li>
        </ul>
    </nav>
    <Routes>
        <Route path = '/' element ={<Home/>}></Route>
        <Route path = '/about' element ={<About/>}></Route>
        <Route path = '/contact' element ={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
