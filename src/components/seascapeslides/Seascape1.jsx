
import React, { useState } from 'react'
import {Nav } from 'react-bootstrap';

import Seascape1 from '../../jodyimages/seascapes/Seascape1.jpg';

const Seascapeone = () => {

  const [buylink, setBuylink] = useState('https://buy.stripe.com/00g9CogNH0xrekweV4')
  return (
    <div>
    <div className='archives'>
    <a href='/Wildlife2'>
        <button className='button1'>prev</button>
        </a>
    <Nav.Link className='' >
   
    <img className='archives1' src={Seascape1}/>
   
    </Nav.Link>
    <a href='/Seascape2'>
    <button  className='button2'>next</button>
    </a>
    </div>
    <section className='printOptions'>
    
    <select className='button' onChange={(event) => {
        setBuylink(event.target.value);
      }}>
         <option value="https://buy.stripe.com/00g9CogNH0xrekweV4">Giclee-print: 8x12</option>
        <option value="https://buy.stripe.com/bIY29W9lf6VP2BO00b">Giclee-print: 12x18</option>
        <option value="https://buy.stripe.com/cN26qc40V93X7W8aEQ">Giclee-print: 16x24</option>
        <option value="https://buy.stripe.com/14keWI2WRa813FS6oB">Giclee-print: 20x40</option>
   
       
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

export default Seascapeone