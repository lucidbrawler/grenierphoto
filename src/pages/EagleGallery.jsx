import React from 'react'

import {Nav } from 'react-bootstrap';

import Eagle1 from '../jodyimages/eagles/eagle1.jpeg';
import Eagle2 from '../jodyimages/eagles/eagle2.jpeg';
import Eagle3 from '../jodyimages/eagles/eagle3.jpg';
import Eagle4 from '../jodyimages/eagles/eagle4.jpg';
import Eagle5 from '../jodyimages/eagles/eagle5.jpeg';
import Eagle6 from '../jodyimages/eagles/eagle6.jpeg';

import Eagle7 from '../jodyimages/eagles/eagle7.jpeg';

const EagleGallery = () => {
  return (
    <div className='Grid-wrapper'>
       
   
    <div >
   
        <Nav.Link href='/Eagle1'>
        <img className='' src={Eagle1}/>
        </Nav.Link>
     
      
        <Nav.Link  href='/Eagle2'>
        <img className='' src={Eagle2}/>
        </Nav.Link>
     
        
        <Nav.Link  href='/Eagle3'>
        <img className='' src={Eagle3}/>
        </Nav.Link>
       
        <Nav.Link  href='/Eagle4'>
        <img className='' src={Eagle4}/>
        </Nav.Link>
       
      
       
      
      
    
   
       
        <Nav.Link  href='/Eagle5'>
        <img className='' src={Eagle5}/>
        </Nav.Link>
      
     
       
      
        <Nav.Link  href='/Eagle6'>
        <img className='' src={Eagle6}/>
        </Nav.Link>
          <Nav.Link href='/Eagle7'>
        <img className='' src={Eagle7}/>
        </Nav.Link>
     
      
  
       
    </div>
    </div>
  )
}

export default EagleGallery