
import React, { useState } from 'react'
import {Nav } from 'react-bootstrap';

import Seascape2 from '../../jodyimages/seascapes/Seascape2.jpeg';
import Wallart from '../../jodyimages/seascapes/wallart/wallartSeascape2.jpg';
const Syracuseone = () => {
  var [imgsrc, setImgsrc] = useState(`${Seascape2}`)

const Cycleimgsrc = () => {
if(imgsrc==Seascape2){
  setImgsrc(`${Wallart}`)
}
else if(imgsrc==Wallart){
  setImgsrc(`${Seascape2}`)
}
}
  const [buylink, setBuylink] = useState('')
  return (
    <div>
    <div className='archives'>
        <a href='/Seascape1'>
          <button className='button1'>prev</button>
        </a>
    <Nav.Link onClick={()=>Cycleimgsrc()} className='' >
   
      <img className='archives1' src={imgsrc}/>
   
    </Nav.Link>
    <a href='/Eagle1'>
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

export default Syracuseone