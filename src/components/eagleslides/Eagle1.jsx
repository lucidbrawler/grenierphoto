
import React, { useState } from 'react'
import { Nav } from 'react-bootstrap';

import Eagle1 from '../../jodyimages/eagles/eagle1.jpeg';
import Wallart from '../../jodyimages/eagles/wallart/wallartEagle1.jpg';
const Eagleone = () => {

  var [imgsrc, setImgsrc] = useState(`${Eagle1}`)
  const [buylink, setBuylink] = useState('')
const Cycleimgsrc = () => {
if(imgsrc==Eagle1){
  setImgsrc(`${Wallart}`)
}
else if(imgsrc==Wallart){
  setImgsrc(`${Eagle1}`)
}
}
  return (
    <div>
      <div className='archives'>
        <a href='/Seascape2'>
          <button className='button1'>prev</button>
        </a>
        <Nav.Link onClick={()=>Cycleimgsrc()} className='' >

          <img className='archives1' src={imgsrc} />

        </Nav.Link>
        <a href='/Eagle2'>
          <button className='button2'>next</button>
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
          <option value="">metal: 18x58</option>
          <option value="Cups"> framed: 8x16</option>
          <option value="Cup">framed: 12x36</option>
          <option value="fluid oz">framed: 18x58</option>

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

export default Eagleone