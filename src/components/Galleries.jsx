import React from 'react'
import Syracuse from '../jodyimages/greatcityshotcopy.jpg';
import Eagles from '../jodyimages/greateagle.jpg';
import Abstract from '../jodyimages/reddress2.jpg';
import Composite from '../jodyimages/sunprint.jpg';

const Gallaries = () => {
  return (
    <div className='Galleries'>
    <h1 className='GalleryTitle'>Gallaries</h1>
    <section className='flex'>
        <a  >Syracuse<br/>

          <img className='GalleryLinks' src={Syracuse}></img>
        </a>
        <a  >Eagles<br/>
        <img className='GalleryLinks' src={Eagles}></img>
        </a>
        <a  >Abstract<br/>
        <img className='GalleryLinks' src={Abstract}></img>
        </a>
        <a  >Composite<br/>
        <img className='GalleryLinks' src={Composite}></img>
        </a>
    </section>
    </div>
  )
}

export default Gallaries