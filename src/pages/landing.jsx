import React from 'react'


import Hero from '../components/Hero';
import Banner from '../components/Banner';
import ContactMe from '../components/ContactMe';
import ContactForm from '../components/ContactForm';


const Landing = () => {
  return (
   
    <div className=''>
  <Hero/>
  
  <Banner/>
 
 <ContactForm id='contactme'/>
  
  
    </div>
   
  )
}

export default Landing