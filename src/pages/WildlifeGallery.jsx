import React from 'react'
import {Nav } from 'react-bootstrap';
import Wildlife2 from '../jodyimages/wildlife/wildlife2.jpg';
import Wildlife1 from '../jodyimages/wildlife/wildlife1.jpeg';
const WildlifeGallery = () => {
  return (
    <div className='Grid-wrapper'>
       
 
    <div >

      
        <Nav.Link href='/Wildlife1'>
        <img className='' src={Wildlife1}/>
        </Nav.Link>
        <Nav.Link href='/Wildlife2'>
        <img className='' src={Wildlife2}/>
        </Nav.Link>
    </div>
    </div>
  )
}

export default WildlifeGallery