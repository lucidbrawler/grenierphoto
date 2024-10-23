import React from 'react'
import GreatEagle from '../lowrezimages/greateagle.jpg';
import Eagle2 from '../lowrezimages/eagle2.jpg';
import Eagle3 from '../lowrezimages/eagle3.jpg';
import Eagle4 from '../lowrezimages/eagle4.jpg';
const EagleGallery = () => {
  return (
    <div>
    <h1>Eagle Gallery</h1>
    <div className='Grid-wrapper'>
        <a>
        <img className='BannerImg' src={GreatEagle}/>
        </a>
        <a>
        <img className='BannerImg' src={Eagle2}/>
        </a>
        <a>
        <img className='BannerImg' src={Eagle3}/>
        </a>
        <a>
        <img className='BannerImg' src={Eagle4}/>
        </a>
        <a>
        <img className='BannerImg' src={GreatEagle}/>
        </a>
        <a>
        <img className='BannerImg' src={GreatEagle}/>
        </a>
        <a>
        <img className='BannerImg' src={GreatEagle}/>
        </a>
        <a>
        <img className='BannerImg' src={GreatEagle}/>
        </a>
        <a>
        <img className='BannerImg' src={GreatEagle}/>
        </a>
        <a>
        <img className='BannerImg' src={GreatEagle}/>
        </a>
        <a>
        <img className='BannerImg' src={GreatEagle}/>
        </a>
        <a>
        <img className='BannerImg' src={GreatEagle}/>
        </a>
        <a>
        <img className='BannerImg' src={GreatEagle}/>
        </a>

    </div>
    </div>
  )
}

export default EagleGallery