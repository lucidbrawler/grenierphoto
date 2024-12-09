
import React, { useState } from 'react'
import {Nav } from 'react-bootstrap';

import Syracuse1 from '../../jodyimages/syracuse/christmasGold.jpg';
import Wallart from '../../jodyimages/syracuse/wallart/wallartChristmasgold.jpg'

const Syracuseone = () => {
  var [imgsrc, setImgsrc] = useState(`${Syracuse1}`)
  const [buylink, setBuylink] = useState('https://buy.stripe.com/cN2eWI1SN1Bv4JW3cd')
const Cycleimgsrc = () => {
if(imgsrc==Syracuse1){
  setImgsrc(`${Wallart}`)
}
else if(imgsrc==Wallart){
  setImgsrc(`${Syracuse1}`)
}
}
 
  return (
    <div>
    <div className='archives'>
    <a href='/Eagle8'>
        <button className='button1'>prev</button>
        </a>
    <Nav.Link onClick={()=>Cycleimgsrc()} className='' >
   
    <img className='archives1' src={imgsrc}/>
   
    </Nav.Link>
    <a href='/Syracuse2'>
    <button  className='button2'>next</button>
    </a>
    </div>
    <section className='printOptions'>
    
    <select className='button' onChange={(event) => {
        setBuylink(event.target.value);
      }}>
        <option value="https://buy.stripe.com/cN2eWI1SN1Bv4JW3cd"> Giclee-print: 8x10</option>
        <option value="https://buy.stripe.com/eVa29W2WReoh3FS3ce"> Giclee-print: 11x14</option>
        <option value="https://buy.stripe.com/8wMeWI1SN7ZT2BObIL"> Giclee-print: 16x20</option>
        <option value="https://buy.stripe.com/28o15SfJD3JD0tG004"> Giclee-print: 20x30</option>
   
       
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

export default Syracuseone