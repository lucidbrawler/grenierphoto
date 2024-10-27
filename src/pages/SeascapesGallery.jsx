import React from 'react'
import {Nav } from 'react-bootstrap';
import Seascape1 from '../jodyimages/seascapes/GodsCanvas.jpg';
import Seascape2 from '../jodyimages/seascapes/seascape.jpeg';
const SeascapesGallery = () => {
  return (
    <div className='Grid-wrapper'>
       
   
    <div >
    <Nav.Link>
        <img className='' src={Seascape1}/>
        </Nav.Link>
      
        <Nav.Link>
        <img className='' src={Seascape2}/>
        </Nav.Link>
    
    </div>
    </div>
  )
}

export default SeascapesGallery