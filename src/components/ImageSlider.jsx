
import React from 'react'
import {Nav } from 'react-bootstrap';

import GreatEagle from '../jodyimages/eagles/eagle1.jpeg';
const ImageSlider = () => {
  return (
    <div>
    <div className='archives'>
    <a href='/Eagle4'>
        <button className='button1'>prev</button>
        </a>
    <Nav.Link className='' href='https://buy.stripe.com/dR6dTrdDraohaQgaEI'>
   
    <img className='archives1' src={GreatEagle}/>
   
    </Nav.Link>
    <a href='/Eagle1'>
    <button  className='button2'>next</button>
    </a>
    </div>
    <section className='printOptions'>
    
     <select className='button' onChange={(event) => {
        setMeasurement1(event.target.value);
      }}>
        <option value="Cups">paper</option>
        <option value="Cup">metal</option>
        <option value="fluid oz">framed</option>
       
      </select>
      <select className='button' onChange={(event) => {
        setMeasurement1(event.target.value);
      }}>
        <option value="Cups">8x16</option>
        <option value="Cup">12x36</option>
        <option value="fluid oz">18x58</option>
       
      </select>
      <select className='button' onChange={(event) => {
        setMeasurement1(event.target.value);
      }}>
        <option value="Cups">option 1</option>
        <option value="Cup">option 2</option>
        <option value="fluid oz">option 3</option>
    
      </select>
 
      </section>
      <section className='archives'>
      <button className='buybutton'>Buy Photo Now</button>
      </section>
</div>
  )
}

export default ImageSlider