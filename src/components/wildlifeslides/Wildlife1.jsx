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
  

export default Wildlifeone