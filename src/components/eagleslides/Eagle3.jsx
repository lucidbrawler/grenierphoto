import React, { useState } from 'react'
import {Nav } from 'react-bootstrap';

import Eagle3 from '../../jodyimages/eagles/eagle3.jpg';

const Eaglethree = () => {
  const [buylink, setBuylink] = useState('https://buy.stripe.com/6oEg0M7d74NH5O014i')
  return (
    <div>
    <div className='archives'>
    <a href='/Eagle2'>
        <button className='button1'>prev</button>
        </a>
    <Nav.Link className='' >
   
    <img className='archives1' src={Eagle3}/>
   
    </Nav.Link>
    <a href='/Eagle4'>
    <button  className='button2'>next</button>
    </a>
    </div>
    <section className='printOptions'>
    
    <select className='button' onChange={(event) => {
        setBuylink(event.target.value);
      }}>
         <option value="https://buy.stripe.com/6oEg0M7d74NH5O014i"> Giclee-print: 8x10</option>
        <option value="https://buy.stripe.com/3cs9Co7d793XfoAbIX">Giclee-print: 11x14</option>
        <option value="https://buy.stripe.com/28o5m80OJ7ZTdgs00g">Giclee-print: 12X18</option>
        <option value="https://buy.stripe.com/fZe9Cobtn93X7W89AS">Giclee-print: 16X24</option>
        <option value="https://buy.stripe.com/3cs9Co7d7bc5b8kdR9">Giclee-print: 20x30</option>
   
       
      </select>
 
      </section>
      <section className='archives'>
      <a href={buylink}>
      <button className='buybutton'>Go to Checkout</button>
      </a>      </section>
</div>
  )
}

export default Eaglethree