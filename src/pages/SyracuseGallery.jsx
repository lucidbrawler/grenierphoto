import React from 'react'
import {Nav } from 'react-bootstrap';

import Cuse1 from '../jodyimages/syracuse/christmasGold.jpg';
import Cuse2 from '../jodyimages/syracuse/syracuse2.jpeg';
import Cuse3 from '../jodyimages/syracuse/syracuse3.jpg';
import Cuse4 from '../jodyimages/syracuse/syracuse4.jpg';
import Cuse5 from '../jodyimages/syracuse/syracuse5.jpeg';
import Cuse6 from '../jodyimages/syracuse/syracuse6.jpg';
import Cuse7 from '../jodyimages/syracuse/syracuse7.jpg';
const SyracuseGallery = () => {
  return (
    <div className='Grid-wrapper'>
       
  
    <div >
    <Nav.Link href='Syracuse1'>
        <img className='' src={Cuse1}/>
        </Nav.Link>
      
        <Nav.Link  href='Syracuse2'>
        <img className='' src={Cuse2}/>
        </Nav.Link>
        <Nav.Link  href='Syracuse3'>
        <img className='' src={Cuse3}/>
        </Nav.Link>
        <Nav.Link  href='Syracuse4'>
        <img className='' src={Cuse4}/>
        </Nav.Link>
        <Nav.Link  href='Syracuse5'>
        <img className='' src={Cuse5}/>
        </Nav.Link>
        <Nav.Link  href='Syracuse6'>
        <img className='' src={Cuse6}/>
        </Nav.Link>
        <Nav.Link  href='Syracuse7'>
        <img className='' src={Cuse7}/>
        </Nav.Link>
    </div>
    </div>
  )
}

export default SyracuseGallery