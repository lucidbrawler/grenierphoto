import React from 'react'
import {Nav } from 'react-bootstrap';
import Seascape1 from '../jodyimages/seascapes/Seascape1.jpg';
import Seascape2 from '../jodyimages/seascapes/Seascape2.jpeg';
const SeascapesGallery = () => {
  return (
    <div className='Grid-wrapper'>
       
   
    <div >
        <Nav.Link href='/Seascape1'>
          <img className='' src={Seascape1}/>
        </Nav.Link>
      
        <Nav.Link href='/Seascape2'>
          <img className='' src={Seascape2}/>
        </Nav.Link>
    
    </div>
    </div>
  )
}

export default SeascapesGallery