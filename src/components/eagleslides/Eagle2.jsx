
import React from 'react'
import {Nav } from 'react-bootstrap';

import Eagle2 from '../../jodyimages/eagles/eagle2.jpeg';

const Eagletwo = () => {
  return (
    <div>
    <div className='archives'>
    <a href='/Eagle1'>
        <button className='button1'>prev</button>
        </a>
    <Nav.Link className='' href='https://buy.stripe.com/dR6dTrdDraohaQgaEI'>
   
    <img className='archives1' src={Eagle2}/>
   
    </Nav.Link>
    <a href='/Eagle3'>
    <button  className='button2'>next</button>
    </a>
    </div>
    <section className='printOptions'>
    
    <select className='button' onChange={(event) => {
        setMeasurement1(event.target.value);
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
      <button className='buybutton'>Go to Checkout</button>
      </section>
</div>
  )
}

export default Eagletwo