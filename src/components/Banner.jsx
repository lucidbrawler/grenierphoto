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
        <p className='bannerText'>
            I believe, that in life, creating something is the path to happiness. Many years ago I suffered from an injury to my hands.  
            I was unable to make music or do anything creative. I had a 8 megapixel point and shoot camera, I took that with me 
            on my hikes, and found taking photos could be an excellent outlet for my artistic world. 
           
        I dove deep into learning everything I could about cameras and composition, I’m still learning. 
        After years of shooting photographs I found a deep understanding that it’s not only satisfying but hard work.</p>
    </div>
  )
}

export default Banner