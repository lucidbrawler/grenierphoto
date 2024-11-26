import React from 'react'
import headshot from '../jodyimages/faceshot.jpeg';
import christmasGold from '../lowrezimages/ChristmasGold.jpg'
import '../App.css';
import { LuArrowDownSquare } from "react-icons/lu";
import {Nav } from 'react-bootstrap';

import Collapsible from 'react-collapsible';

const Hero = () => {
const iconarrow =  <LuArrowDownSquare />;
  return (
    <div>
 
    <div className='flex'>
      
            
         <section className='flexcol'>
         <img className='portrait ' src={headshot} alt=''/>
         <h3></h3>
        
<div className='aboutme'>About me <LuArrowDownSquare /></div>
         <p className='portraitBio'> I’ve been an artist my entire life. A creator. 
          I was driven to teach myself to play piano at an early age and eventually become a professional pianist. 
          I’ve written songs, painted, and I’ve even applied my creative passion as a pizzaiolo, crafting some of 
          the best pizzas from around the world. </p>
            <p className='portraitBio'>
            I believe that in life, creating something, anything, is the path to happiness. 
            A few years ago, I suffered an injury to my hands,and suddenly I didn’t have the ability to play piano. 
            But what Idid have was an eight-megapixel, point-and-shoot camera. 
            I took it with me on my hikes and soon found that taking photos, 
            capturing moments in time, was a great outlet for my artistic passion. 
            I dove deep into learning everything I could about cameras and photography—technically and artistically. 
            Fromlenses and formats to theme, composition, and color theory. 
            </p>
            <p className='portraitBio'>In 2015, I happened to be in the right place at the right time, 
              capturing Syracuse’s beloved Christmas tree at a truly magical moment. 
              The photo went viral world-wide and took third place in an international 
              Prettiest Christmas Tree photography competition that year.
            </p>
            <p className='portraitBio'>To this day, I’m still learning, which I feel is key for any trueartist. And after years of shooting photographs, I’ve come tounderstand that while it’s hard work, it’s also very rewarding.
            </p>
   
        
            </section>
            <div className='TreeContainer'>
              <Nav.Link href='/Syracuse1'>
            <img className='landscape'  src={christmasGold} alt=''/>
            </Nav.Link>
            </div>
    </div>
    </div>
  )
}

export default Hero