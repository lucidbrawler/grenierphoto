import React from 'react'
import GoodFox from '../jodyimages/goodfox.jpg';
import GreatEagle from '../jodyimages/greateagle.jpg';
import GodsCanvas from '../jodyimages/GodsCanvas.jpg';
import Seascapes from '../jodyimages/seascape.jpeg';
import Greatcityshot from '../jodyimages/greatcityshotcopy.jpg';
import Sunprint from '../jodyimages/sunprint.jpg';
const Banner = () => {
  return (
    <div>
   
    <div className='Banner'>
      <a className='GalleryHeaders'><flag className='GalleryHeaders1'>Wildlife</flag><br/>
        <img className='BannerImg' src={GoodFox}/>
        </a>
        <a className='GalleryHeaders'><flag className='GalleryHeaders1'>Landscapes</flag><br/>
        <img className='BannerImg' src={GodsCanvas}/>
        </a>
        <a className='GalleryHeaders'><flag className='GalleryHeaders1'>Composite</flag><br/>
        <img className='BannerImg' src={Sunprint}/>
        </a>
        <a href='./EagleGallery' className='GalleryHeaders'><flag className='GalleryHeaders1'>Eagles</flag><br/>
        <img className='BannerImg' src={GreatEagle}/>
        </a>
        <a className='GalleryHeaders'><flag className='GalleryHeaders1'>Seascapes</flag><br/>
        <img className='BannerImg' src={Seascapes}/>
        </a>
        <a className='GalleryHeaders'><flag className='GalleryHeaders1'>Syracuse</flag><br/>
        <img className='BannerImg' src={Greatcityshot}/>
        </a>
    </div>
    </div>
  )
}

export default Banner