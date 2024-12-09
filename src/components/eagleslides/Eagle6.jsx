import React, { useState } from 'react'
import {Nav } from 'react-bootstrap';

import Eagle6 from '../../jodyimages/eagles/eagle6.jpeg';
import Wallart from '../../jodyimages/eagles/wallart/wallartEagle6.jpg'
const Eaglesix = () => {
  
  var [imgsrc, setImgsrc] = useState(`${Eagle6}`)
  const [buylink, setBuylink] = useState('')
const Cycleimgsrc = () => {
if(imgsrc==Eagle6){
  setImgsrc(`${Wallart}`)
}
else if(imgsrc==Wallart){
  setImgsrc(`${Eagle6}`)
}
}
  return (
    <div>
    <div className='archives'>
    <a href='/Eagle5'>
        <button className='button1'>prev</button>
        </a>
    <Nav.Link onClick={()=>Cycleimgsrc()} className='' >
   
    <img className='archives1' src={imgsrc}/>
   
    </Nav.Link>
    <a href='/Eagle7'>
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

export default Eaglesix