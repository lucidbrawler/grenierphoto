import React from 'react'

import {Nav } from 'react-bootstrap';
import Cuse1 from '../jodyimages/syracuse/christmasGold.jpg';
import Cuse2 from '../jodyimages/syracuse/syracuse2.jpeg';
import Cuse3 from '../jodyimages/syracuse/syracuse3.jpg';
import Cuse4 from '../jodyimages/syracuse/syracuse4.jpg';
import Cuse5 from '../jodyimages/syracuse/syracuse5.jpeg';
import Cuse6 from '../jodyimages/syracuse/syracuse6.jpg';
import Eagle1 from '../jodyimages/eagles/eagle1.jpeg';
import Eagle2 from '../jodyimages/eagles/eagle2.jpeg';
import Eagle3 from '../jodyimages/eagles/eagle3.jpg';
import Eagle4 from '../jodyimages/eagles/eagle4.jpg';
import Eagle5 from '../jodyimages/eagles/eagle5.jpeg';
import Eagle6 from '../jodyimages/eagles/eagle3.jpg';
import Eagle7 from '../jodyimages/eagles/eagle7.jpeg';
import Wildlife1 from '../jodyimages/wildlife/goodfox.jpg';
import Wildlife2 from '../jodyimages/wildlife/foxtounge.jpeg';
import Seascape1 from '../jodyimages/seascapes/GodsCanvas.jpg';
import Seascape2 from '../jodyimages/seascapes/seascape.jpeg';
const Treatsgallery = () => {
  return (
    <div className='Grid-treats'>
       
   
    <div >
   
        <Nav.Link href='/Eagle1'>
        <img  src={Eagle1}/>
        </Nav.Link>
        <Nav.Link href='/Syracuse4'>
        <img  src={Cuse4}/>
        </Nav.Link>
        
        <Nav.Link href='/Eagle7'>
        <img  src={Eagle7}/>
        </Nav.Link>
        <Nav.Link href='/Seascape1'>
        <img  src={Seascape1}/>
        </Nav.Link>
      
        <Nav.Link href='/Eagle2'>
        <img  src={Eagle2}/>
        </Nav.Link>
        <Nav.Link href='/Wildlife1'>
        <img  src={Wildlife1}/>
        </Nav.Link>
      
        
        <Nav.Link href='/Eagle3'>
        <img  src={Eagle3}/>
        </Nav.Link>
        <Nav.Link href='/Syracuse2'>
        <img  src={Cuse2}/>
        </Nav.Link>
        <Nav.Link href='/Eagle4'>
        <img  src={Eagle4}/>
        </Nav.Link>
       
      
       
      
      
    
        <Nav.Link href='/Syracuse3'>
        <img  src={Cuse3}/>
        </Nav.Link>
    
        <Nav.Link href='/Syracuse5'>
        <img  src={Cuse5}/>
        </Nav.Link>
        <Nav.Link href='/Eagle5'>
        <img  src={Eagle5}/>
        </Nav.Link>
        <Nav.Link href='/Syracuse6'>
        <img  src={Cuse6}/>
        </Nav.Link>
        <Nav.Link href='/Wildlife2'>
        <img  src={Wildlife2}/>
        </Nav.Link>
       
      
        <Nav.Link  href='/Eagle6'>
        <img  src={Eagle6}/>
        </Nav.Link>
        
      
        <Nav.Link  href='/Seascape2'>
        <img  src={Seascape2}/>
        </Nav.Link>
        <Nav.Link  href='/Syracuse1'>
        <img  src={Cuse1}/>
        </Nav.Link>
       
    </div>
    </div>
  )
}

export default Treatsgallery