import React from 'react'
import GoodFox from '../jodyimages/goodfox.jpg';
import GreatEagle from '../jodyimages/greateagle.jpg';

import Seascapes from '../jodyimages/seascape.jpeg';
import Greatcityshot from '../jodyimages/greatcityshotcopy.jpg';
import EagleGallery from '../pages/EagleGallery.jsx';
import Treatsgallery from '../pages/Treatsgallery.jsx';

const Banner = () => {
  return (
    <div>
    <div className='Banner'>
     
        <a href='/EagleGallery' className='GalleryHeaders'><flag className='GalleryHeaders1'>Eagles</flag><br/>
        <img className='BannerImg' src={GreatEagle}/>
        </a>
        
        <a href='/SyracuseGallery' className='GalleryHeaders'><flag className='GalleryHeaders1'>Syracuse</flag><br/>
        <img className='BannerImg' src={Greatcityshot}/>
        </a>
        <a href='/SeascapesGallery' className='GalleryHeaders'><flag className='GalleryHeaders1'>Seascapes</flag><br/>
        <img className='BannerImg' src={Seascapes}/>
        </a>
        <a href='/WildlifeGallery' className='GalleryHeaders' ><flag className='GalleryHeaders1'>Wildlife</flag><br/>
        <img className='BannerImg' src={GoodFox}/>
        </a>
      <div className='borderland'>
        <Treatsgallery/>
        </div>
    </div>
 
    
    </div>
  )
}

export default Banner