import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import Tools from './pages/Tools'
import CaseStudy from './pages/CaseStudy'
import Test from './pages/Test'

function App() {


  return (
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/casestudy" element={<CaseStudy/>}/>
    <Route exact path="/partners" element={<Partners/>}/>
    <Route exact path="/tools" element={<Tools/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/test" element={<Test/>}/>
    </Routes>
  )
}

export default App
