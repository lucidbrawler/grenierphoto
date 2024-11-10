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
  </div>);

export default App
