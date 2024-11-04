import React from 'react'
import facebook from '../jodyimages/socials/facebook.svg'
import instagram from '../jodyimages/socials/instagram.svg'
const Navbarfull = () => {

  

  return (
    <nav className='navbarfull'>
        
        <a className='FullnavlinksTitle'>Jody Grenier Art</a>
       
        <a className='Fullnavlinks' >Eagles</a>
        <a className='Fullnavlinks' >Syracuse</a>
        <a className='Fullnavlinks' >Wildlife</a>
        <a className='Fullnavlinks' >Seascapes</a>
        <a className='Fullnavlinks' >Contact Me</a>
        
        <section >
            <a>
                <img className='socials' src={facebook}/>
            </a>
            <a>
                <img className='socials' src={instagram}/>
            </a>
        </section>
    </nav>
  )
}

export default Navbarfull