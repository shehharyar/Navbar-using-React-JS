import React from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Pricing from './components/pages/pricing';
import Testimonial from './components/pages/testimonial';
import Demo from './components/pages/demo';
import Navbar from './components/Navbar/Navbar';
import './App.css';
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" exact element ={<Home/>}/>
        <Route path="/Services" element ={<Services/>}/>
        <Route path="/Pricing" element ={<Pricing/>}/>
        <Route path="/Testimonial" element ={<Testimonial/>}/>
        <Route path="/Demo" element={<Demo/>}/>
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
