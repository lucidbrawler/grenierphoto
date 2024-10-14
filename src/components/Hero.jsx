import React from 'react'
import headshot from '../jodyimages/faceshot.jpeg';
import christmasGold from '../jodyimages/christmasGold.jpg'
import '../App.css';

import Heroimg from './heroimg';
const Hero = () => {
  return (
    <div>
 
    <div className='flex'>
      
            
         <section className='flexcol'>
         <img className='portrait ' src={headshot} alt=''/>
          <p className='portraitBio'>I have been an artist my entire life. I was driven to teach myself to play piano at an early age 
            and become a professional pianist. This was a true gift. I’ve painted, written songs, and have made some of the best pizza around the world. 

 
            In 2015 I was very lucky to have been at the right place at the right time and captured Syracuse’s Christmas tree. 
            The photo went viral around the world and took third place in the prettiest Christmas tree internationally of that year.</p>
          
           
            </section>
            <div className='TreeContainer'>
            <img className='landscape'  src={christmasGold} alt=''/>
            </div>
    </div>
    </div>
  )
}

export default Hero