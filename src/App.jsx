import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import OffcanvasExample from './navbar/navbar'
import Landing from './pages/landing.jsx';
import EagleGallery from './pages/EagleGallery.jsx';
import SyracuseGallery from './pages/SyracuseGallery.jsx';
import SeascapesGallery from './pages/SeascapesGallery.jsx';
import WildlifeGallery from './pages/WildlifeGallery.jsx';
import GallerySlider from './components/ImageSlider.jsx';
import Eagle1 from './components/eagleslides/Eagle1.jsx';
import Eagle2 from './components/eagleslides/Eagle2.jsx';
import Eagle3 from './components/eagleslides/Eagle3.jsx';
import Eagle4 from './components/eagleslides/Eagle4.jsx';
import Eagle5 from './components/eagleslides/Eagle5.jsx';
import Eagle6 from './components/eagleslides/Eagle6.jsx';
import Eagle7 from './components/eagleslides/Eagle7.jsx';
import Eagle8 from './components/eagleslides/Eagle8.jsx';
import Navbarfull from './navbar/navbarfull.jsx';
import Syracuse1 from './components/syracuseslides/Syracuse1.jsx';
import Syracuse2 from './components/syracuseslides/Syracuse2.jsx';
import Syracuse3 from './components/syracuseslides/Syracuse3.jsx';
import Syracuse4 from './components/syracuseslides/Syracuse4.jsx';
import Syracuse5 from './components/syracuseslides/Syracuse5.jsx';
import Syracuse6 from './components/syracuseslides/Syracuse6.jsx';
import Wildlife1 from './components/wildlifeslides/Wildlife1.jsx';
import Wildlife2 from './components/wildlifeslides/Wildlife2.jsx';
import Seascape1 from './components/seascapeslides/Seascape1.jsx';
import Seascape2 from './components/seascapeslides/Seascape2.jsx';
import Footer from './components/Footer.jsx';
function App() {
  
  return(
    
    <Router >
     
      <Routes>
        <Route exact path="/" element={<Home />}  >
        <Route exact path="/" element={<Landing />}  />
        <Route exact path="/EagleGallery" element={<EagleGallery />}  />
        <Route exact path="/SyracuseGallery" element={<SyracuseGallery />}  />
        <Route exact path="/SeascapesGallery" element={<SeascapesGallery />}  />
        <Route exact path="/WildlifeGallery" element={<WildlifeGallery />}  />
        <Route exact path="/GallerySlider" element={<GallerySlider />}  />
        <Route exact path="/Eagle1" element={<Eagle1 />}  />
        <Route exact path="/Eagle2" element={<Eagle2 />}  />
        <Route exact path="/Eagle3" element={<Eagle3 />}  />
        <Route exact path="/Eagle4" element={<Eagle4 />}  />
        <Route exact path="/Eagle5" element={<Eagle5 />}  />
        <Route exact path="/Eagle6" element={<Eagle6 />}  />
        <Route exact path="/Eagle7" element={<Eagle7 />}  />
        <Route exact path="/Eagle8" element={<Eagle8 />}  />
        <Route exact path="/Syracuse1" element={<Syracuse1 />}  />
        <Route exact path="/Syracuse2" element={<Syracuse2 />}  />
        <Route exact path="/Syracuse3" element={<Syracuse3 />}  />
        <Route exact path="/Syracuse4" element={<Syracuse4 />}  />
        <Route exact path="/Syracuse5" element={<Syracuse5 />}  />
        <Route exact path="/Syracuse6" element={<Syracuse6 />}  />
        <Route exact path="/Wildlife1" element={<Wildlife1 />}  />
        <Route exact path="/Wildlife2" element={<Wildlife2 />}  />
        <Route exact path="/Seascape1" element={<Seascape1 />}  />
        <Route exact path="/Seascape2" element={<Seascape2 />}  />
        </Route>
      </Routes>
    </Router>
  
  )
}


const Home = () => (
  <div>
    <Navbarfull />
    <OffcanvasExample />
  
      <Outlet />
      <Footer/>
  </div>);

export default App
