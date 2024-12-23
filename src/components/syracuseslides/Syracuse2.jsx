import React, { useState } from 'react'
import {Nav } from 'react-bootstrap';

import Syracuse2 from '../../jodyimages/syracuse/syracuse2.jpeg';

const Syracusetwo = () => {

  const [buylink, setBuylink] = useState('')
  return (
    <div>
    <div className='archives'>
    <a href='/Syracuse1'>
        <button className='button1'>prev</button>
        </a>
    <Nav.Link className='' >
   
    <img className='archives1' src={Syracuse2}/>
   
    </Nav.Link>
    <a href='/Syracuse3'>
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

export default Syracusetwo