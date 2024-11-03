import React from 'react'

import {Nav } from 'react-bootstrap';

import Eagle1 from '../jodyimages/eagles/eagle1.jpeg';
import Eagle2 from '../jodyimages/eagles/eaglefish3.jpeg';
import Eagle3 from '../jodyimages/eagles/eagle2.jpeg';
import Eagle4 from '../jodyimages/eagles/eaglesfish2.jpeg';
import Eagle5 from '../jodyimages/eagles/eaglefish2.jpeg';
import Eagle6 from '../jodyimages/eagles/eagle3.jpg';
import Eagle7 from '../jodyimages/eagles/eaglewithfish.jpg';

const EagleGallery = () => {
  return (
    <div className='Grid-wrapper'>
       
   
    <div >
   
        <Nav.Link href='/Eagle1'>
        <img className='' src={Eagle1}/>
   
       
        </Nav.Link>
     
        <Nav.Link>
        <img className='' src={Eagle7}/>
        </Nav.Link>
     
        <Nav.Link>
        <img className='' src={Eagle2}/>
        </Nav.Link>
     
        
        <Nav.Link>
        <img className='' src={Eagle3}/>
        </Nav.Link>
       
        <Nav.Link>
        <img className='' src={Eagle4}/>
        </Nav.Link>
       
      
       
      
      
    
   
       
        <Nav.Link>
        <img className='' src={Eagle5}/>
        </Nav.Link>
      
     
       
      
        <Nav.Link>
        <img className='' src={Eagle6}/>
        </Nav.Link>
        
      
  
       
    </div>
    </div>
  )
}

export default EagleGallery