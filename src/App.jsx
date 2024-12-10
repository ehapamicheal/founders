import React from 'react'
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from './pages/gallery/Gallery';
import AboutUs from './pages/about-us/AboutUs';
import ContactUs from './pages/contact-us/ContactUs';
// import Footer from './components/Footer';



// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Home />
//     </>
//   )
// }


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
