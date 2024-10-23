import React from 'react'
import GoodFox from '../lowrezimages/goodfox.jpeg';
import GreatEagle from '../lowrezimages/greateagle.jpg';
import GodsCanvas from '../lowrezimages/GodsCanvas.jpg';
import Seascapes from '../lowrezimages/seascape.jpeg';
import Greatcityshot from '../lowrezimages/greatcityshot.jpg';
import Sunprint from '../lowrezimages/sunprint.jpg';
const Banner = () => {
  return (
    <div>
    <h1 className='GalleryTitle'>Galleries</h1>
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