
import React from 'react'
import {Nav } from 'react-bootstrap';

import Eagle6 from '../../jodyimages/eagles/eaglefish3.jpeg';

const Eaglesix = () => {
  return (
    <div>
    <div className='archives'>
    <a href='/Eagle5'>
        <button className='button1'>prev</button>
        </a>
    <Nav.Link className='' href='https://buy.stripe.com/dR6dTrdDraohaQgaEI'>
   
    <img className='archives1' src={Eagle6}/>
   
    </Nav.Link>
    <a href='/Eagle7'>
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

export default Eaglesix