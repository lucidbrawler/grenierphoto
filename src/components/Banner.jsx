import React from 'react'
import GoodFox from '../jodyimages/goodfox.jpg';
import GreatEagle from '../jodyimages/greateagle.jpg';
import GodsCanvas from '../jodyimages/Gods Canvas copy 4.jpg';
import greatcityshotcopy from '../jodyimages/greatcityshotcopy.jpg';
import eaglewithfish from '../jodyimages/eaglewithfish.jpg';
import foxtounge from '../jodyimages/foxtounge.jpeg';
const Banner = () => {
  return (
    <div className='Banner'>
        <img className='BannerImg' src={GoodFox}/>
        <img className='BannerImg' src={GreatEagle}/>
        <img className='BannerImg' src={GodsCanvas}/>
        <img className='BannerImg' src={eaglewithfish}/>
        <img className='BannerImg' src={greatcityshotcopy}/>
        
        <img className='BannerImg' src={foxtounge}/>
    </div>
  )
}

export default Banner