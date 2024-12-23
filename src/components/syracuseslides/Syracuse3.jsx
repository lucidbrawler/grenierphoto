import React, { useState } from 'react'
import {Nav } from 'react-bootstrap';

import Syracuse3 from '../../jodyimages/syracuse/syracuse3.jpg';

const Syracusethree = () => {

  const [buylink, setBuylink] = useState('')
  return (
    <div>
    <div className='archives'>
    <a href='/Syracuse2'>
        <button className='button1'>prev</button>
        </a>
    <Nav.Link className='' >
   
    <img className='archives1' src={Syracuse3}/>
   
    </Nav.Link>
    <a href='/Syracuse4'>
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

export default Syracusethree