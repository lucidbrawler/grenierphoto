import React from 'react'
import {Nav } from 'react-bootstrap';

import Cuse1 from '../jodyimages/syracuse/clinton1.jpeg';
import Cuse2 from '../jodyimages/syracuse/clinton2.jpg';
import Cuse3 from '../jodyimages/syracuse/reddress2.jpg';
import Cuse4 from '../jodyimages/syracuse/syracuse1.jpeg';
import Cuse5 from '../jodyimages/syracuse/christmasGold.jpg';
import Cuse6 from '../jodyimages/syracuse/greatcityshotcopy.jpg';
const SyracuseGallery = () => {
  return (
    <div className='Grid-wrapper'>
       
  
    <div >
    <Nav.Link>
        <img className='' src={Cuse4}/>
        </Nav.Link>
      
        <Nav.Link>
        <img className='' src={Cuse3}/>
        </Nav.Link>
        <Nav.Link>
        <img className='' src={Cuse2}/>
        </Nav.Link>
        <Nav.Link>
        <img className='' src={Cuse5}/>
        </Nav.Link>
        <Nav.Link>
        <img className='' src={Cuse6}/>
        </Nav.Link>
        <Nav.Link>
        <img className='' src={Cuse1}/>
        </Nav.Link>
    </div>
    </div>
  )
}

export default SyracuseGallery