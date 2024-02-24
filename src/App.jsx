import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Kesfet from './Pages/Kesfet';
import GeziRotalari from './Pages/GeziRotalari';
import EczaneHastane from './Pages/EczaneHastane';
import Parklar from './Pages/Parklar';



function App() {
 

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className="col-sm-12">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Kesfet' element={<Kesfet />} />
            <Route path="/GeziRotalari" element={<GeziRotalari/>} />
            <Route path="/Parklar" element={<Parklar />} />
            <Route path="/EczaneHastane" element={<EczaneHastane/>} />

          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
