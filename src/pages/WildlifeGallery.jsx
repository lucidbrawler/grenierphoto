import React from 'react'
import {Nav } from 'react-bootstrap';
import Wildlife1 from '../jodyimages/wildlife/goodfox.jpg';
import Wildlife2 from '../jodyimages/wildlife/foxtounge.jpeg';
const WildlifeGallery = () => {
  return (
    <div className='Grid-wrapper'>
       
 
    <div >
    <Nav.Link>
        <img className='' src={Wildlife1}/>
        </Nav.Link>
      
        <Nav.Link>
        <img className='' src={Wildlife2}/>
        </Nav.Link>
    
    </div>
    </div>
  )
}

export default WildlifeGallery