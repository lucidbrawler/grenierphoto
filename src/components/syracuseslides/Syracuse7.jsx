
import React, { useState } from 'react'
import {Nav } from 'react-bootstrap';

import Syracuse7 from '../../jodyimages/syracuse/syracuse7.jpg';
import Wallart from '../../jodyimages/syracuse/wallart/wallartSyracuse7.jpg'

const Syracuseseven = () => {
  var [imgsrc, setImgsrc] = useState(`${Syracuse7}`)
  const [buylink, setBuylink] = useState('https://buy.stripe.com/cN2eWI1SN1Bv4JW3cd')
const Cycleimgsrc = () => {
if(imgsrc==Syracuse7){
  setImgsrc(`${Wallart}`)
}
else if(imgsrc==Wallart){
  setImgsrc(`${Syracuse7}`)
}
}
 
  return (
    <div>
    <div className='archives'>
    <a href='/Syracuse6'>
        <button className='button1'>prev</button>
        </a>
    <Nav.Link onClick={()=>Cycleimgsrc()} className='' >
   
    <img className='archives1' src={imgsrc}/>
   
    </Nav.Link>
    <a href='/Wildlife1'>
    <button  className='button2'>next</button>
    </a>
    </div>
    <section className='printOptions'>
    
    <select className='button' onChange={(event) => {
        setBuylink(event.target.value);
      }}>
        <option value=""> Giclee-print: 8x10</option>
        <option value=""> Giclee-print: 11x14</option>
        <option value=""> Giclee-print: 16x20</option>
        <option value=""> Giclee-print: 20x30</option>
   
       
      </select>
 
      </section>
      <section className='archives3'>
        <a href={buylink}>
      <button className='buybutton'>Go to Checkout</button>
      </a>
      </section>
</div>
  )
}

export default Syracuseseven