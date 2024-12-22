import React from 'react'
import ucp3 from '../jodyimages/new/ucp3.jpg';
import ucp2 from '../jodyimages/new/ucp2.jpg';
import ucp1 from '../jodyimages/new/ucp1.jpg';
import ucp4 from '../jodyimages/new/ucp4.jpg';
import ucp5 from '../jodyimages/new/ucp5.jpg';
import ucp6 from '../jodyimages/new/ucpoftheyear.jpg';

import {Nav } from 'react-bootstrap';
import facebook from '../jodyimages/socials/facebook.svg'
import instagram from '../jodyimages/socials/instagram.svg'
const Footer = () => {
  return (
    <div className=''>
         <div className='Grid-treats trophy-treats'>
       
   
       <div className=''>
      
           <Nav.Link>
           <img   src={ucp1}/>
           </Nav.Link>
           <Nav.Link >
           <img  src={ucp2}/>
           </Nav.Link>
           
           <Nav.Link >
           <img  src={ucp3}/>
           </Nav.Link>
           <Nav.Link >
           <img  src={ucp4}/>
           </Nav.Link>
         
           <Nav.Link >
           <img  src={ucp5}/>
           </Nav.Link>
           <Nav.Link >
           <img  src={ucp6}/>
           </Nav.Link>
         
         
       
       </div>
       </div>
     
    
    
    
    <div className='footerfull'>  
    
    <a className='Fullnavlinks' href={"/eaglegallery"} ><p className='Underline Underlineleft'>Eagles</p></a>
    <a className='Fullnavlinks' href={"/SyracuseGallery"}><p className='Underline Underlineleft'>Syracuse</p></a>
    <a className='Fullnavlinks' href={"/Wildlifegallery"}><p className='Underline Underlineleft'>Wildlife</p></a>
    <a className='Fullnavlinks' href={"/SeascapesGallery"}><p className='Underline Underlineleft'>Seascapes</p></a>
    <section >
            <a href='https://www.facebook.com/jody.grenier.9/'>
                <img className='socials' src={facebook}/>
            </a>
            <a href='https://www.instagram.com/jodyg88/'>
                <img className='socials' src={instagram}/>
            </a>
        </section>
    </div>
    </div>
  )
}

export default Footer