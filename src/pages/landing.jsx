import React from 'react'


import Hero from '../components/Hero';
import Banner from '../components/Banner';
import ContactMe from '../components/ContactMe';
import Gallaries from '../components/Galleries';

const Landing = () => {
  return (
   
    <div className=''>
  <Hero/>
  
  <Banner/>
  <Gallaries/>
  <ContactMe/>
    </div>
   
  )
}

export default Landing