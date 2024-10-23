import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import OffcanvasExample from './navbar/navbar'
import Landing from './pages/landing.jsx';
import EagleGallery from './pages/EagleGallery.jsx';

function App() {
  
  return(
    
    <Router >
     
      <Routes>
        <Route exact path="/" element={<Home />}  >
        <Route exact path="/" element={<Landing />}  />
        <Route exact path="/EagleGallery" element={<EagleGallery />}  />
        </Route>
      </Routes>
    </Router>
  
  )
}


const Home = () => (
  <div>
    <OffcanvasExample />
  
      <Outlet />
  </div>);

export default App
