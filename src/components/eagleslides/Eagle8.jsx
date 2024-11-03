
import React, { useState } from 'react'
import {Nav } from 'react-bootstrap';

import Eagle8 from '../../jodyimages/eagles/eaglewithfish.jpg';

const Eagleeight = () => {
    const [buylink, setBuylink] = useState('')
  return (
    <div>
    <div className='archives'>
    <a href='/Eagle7'>
        <button className='button1'>prev</button>
        </a>
    <Nav.Link className='' >
   
    <img className='archives1' src={Eagle8}/>
   
    </Nav.Link>
    <a href='/Eagle1'>
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

export default Eagleeight