
import React, { useState } from 'react'
import {Nav } from 'react-bootstrap';

import Eagle4 from '../../jodyimages/eagles/eagle4.jpg';

const Eaglefour = () => {
  const [buylink, setBuylink] = useState('')
  return (
    <div>
    <div className='archives'>
    <a href='/Eagle3'>
        <button className='button1'>prev</button>
        </a>
    <Nav.Link className='' >
   
    <img className='archives1' src={Eagle4}/>
   
    </Nav.Link>
    <a href='/Eagle5'>
    <button  className='button2'>next</button>
    </a>
    </div>
    <section className='printOptions'>
    
    <select className='button' onChange={(event) => {
        setBuylink(event.target.value);
      }}>
         <option value="Cups"> paper: 8x16</option>
        <option value="Cup">paper: 12x36</option>
        <option value="fluid oz">paper: 18x58</option>
        <option value="Cups">metal: 8x16</option>
        <option value="Cup">metal: 12x36</option>
        <option value="fluid oz">metal: 18x58</option>
        <option value="Cups"> framed: 8x16</option>
        <option value="Cup">framed: 12x36</option>
        <option value="fluid oz">framed: 18x58</option>
       
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

export default Eaglefour