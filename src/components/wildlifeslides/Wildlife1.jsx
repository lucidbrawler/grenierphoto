import React, { useState } from 'react';
import {Nav } from 'react-bootstrap';
import Wildlife1 from '../../jodyimages/wildlife/wildlife1.jpeg';

const Wildlifeone = () => {

    const [buylink, setBuylink] = useState('')
    return (
      <div>
      <div className='archives'>
      <a href='/Syracuse6'>
          <button className='button1'>prev</button>
          </a>
      <Nav.Link className='' >
     
      <img className='archives1' src={Wildlife1}/>
     
      </Nav.Link>
      <a href='/Wildlife2'>
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
  

export default Wildlifeone