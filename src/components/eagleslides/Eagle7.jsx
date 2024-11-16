
import React, { useState } from 'react'
import {Nav} from 'react-bootstrap';

import Eagle7 from '../../jodyimages/eagles/eagle7.jpeg';

const Eagleseven = () => {
  const [buylink, setBuylink] = useState('https://buy.stripe.com/8wMdSE40V4NH4JW4gG')
  return (
    <div>
    <div className='archives'>
    <a href='/Eagle6'>
        <button className='button1'>prev</button>
        </a>
    <Nav.Link className=''>
   
    <img className='archives1' src={Eagle7}/>
   
    </Nav.Link>
    <a href='/Eagle8'>
    <button  className='button2'>next</button>
    </a>
    </div>
    <section className='printOptions'>
    
  
      <select className='button' onChange={(event) => {
        setBuylink(event.target.value);
      }}>
        <option value="https://buy.stripe.com/8wMdSE40V4NH4JW4gG">Giclee-print: 8x12</option>
        <option value="https://buy.stripe.com/3csbKw7d72Fz3FS9B1">Giclee-print: 11x14</option>
        <option value="https://buy.stripe.com/8wM8ykfJD4NHa4gfZq">Giclee-print: 12x18</option>
        <option value="https://buy.stripe.com/aEUdSEeFz4NH4JW00v">Giclee-print: 16x24</option>
        <option value="https://buy.stripe.com/3csdSE7d75RL7W800t">Giclee-print: 20x30</option>
        <option value="https://buy.stripe.com/8wM8ykfJD4NHa4gfZq">Giclee-print: 24x36</option>
       

       
       
      </select>

      </section>
      <section className='archives'>
      <a href={buylink}>
      <button className='buybutton'>Go to Checkout</button>
      </a>
            </section>
</div>
  )
}

export default Eagleseven