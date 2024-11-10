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
         <p className='portraitBio'> I have been an artist my entire life. I was driven to teach myself to play piano at an early age 
            and become a professional pianist. This was a true gift. I’ve painted, written songs, and have made some of the best pizza around the world. 

 
            In 2015 I was very lucky to have been at the right place at the right time and captured Syracuse’s Christmas tree. 
            The photo went viral around the world and took third place in the prettiest Christmas tree internationally of that year.</p>
            <p className='portraitBio'>
            I believe, that in life, creating something is the path to happiness. Many years ago I suffered from an injury to my hands.  
            I was unable to make music or do anything creative. I had a 8 megapixel point and shoot camera, I took that with me 
            on my hikes, and found taking photos could be an excellent outlet for my artistic world. 
           
          I dove deep into learning everything I could about cameras and composition, I’m still learning. 
          After years of shooting photographs I found a deep understanding that it’s not only satisfying but hard work.</p>
   
        
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