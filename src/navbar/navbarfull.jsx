import React from 'react'
import facebook from '../jodyimages/socials/facebook.svg'
import instagram from '../jodyimages/socials/instagram.svg'
const Navbarfull = () => {

  

  return (
    <nav className='navbarfull'>
        
        <a className='FullnavlinksTitle' href={"/"}><h2>Jody Grenier Art</h2><p className='tagline'>a symphony of perception</p></a>
       
        <a className='Fullnavlinks' href={"/eaglegallery"} ><p className='Underline Underlineleft'>Eagles</p></a>
        <a className='Fullnavlinks' href={"/SyracuseGallery"}><p className='Underline Underlineleft'>Syracuse</p></a>
        <a className='Fullnavlinks' href={"/Wildlifegallery"}><p className='Underline Underlineleft'>Wildlife</p></a>
        <a className='Fullnavlinks' href={"/SeascapesGallery"}><p className='Underline Underlineleft'>Seascapes</p></a>
        <a className='Fullnavlinks' href={"/#contactme"}><p className='Underline Underlineleft'>Contact Me</p></a>
        
        <section >
            <a href='https://www.facebook.com/jody.grenier.9/'>
                <img className='socials' src={facebook}/>
            </a>
            <a href='https://www.instagram.com/jodyg88/'>
                <img className='socials' src={instagram}/>
            </a>
        </section>
    </nav>
  )
}

export default Navbarfull