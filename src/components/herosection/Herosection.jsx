import React from 'react'
import './herosection.css'
import Carousel from '../carousel/Carousel';
import Img1 from '../../assets/img1.jpg'
import Img2 from '../../assets/img2.jpg'
import Img3 from '../../assets/img3.jpg'
import Img4 from '../../assets/img4.jpg'
import Img5 from '../../assets/img5.jpg'
import Img6 from '../../assets/img6.jpg'
import Img7 from '../../assets/img7.jpg'
import Img8 from '../../assets/img8.jpg'
import Img9 from '../../assets/img9.jpg'

const Herosection = () => {
  const images = [
    {
      img: Img1,
      index: 0,
    },
    {
      img: Img2,
      index: 1,
    },
    {
      img: Img3,
      index: 2,
    },
    {
      img: Img4,
      index: 3,
    },
    {
      img: Img5,
      index: 4,
    },
    {
      img: Img6,
      index: 5,
    },
    {
      img: Img7,
      index: 6,
    },
    {
      img: Img8,
      index: 7,
    },
    {
      img: Img9,
      index: 8,
    },
  ]
  return (
    <div className='hero-section'>
      <div className='hero-section-heading-section'>
        <h1>Featured Products</h1>
        <h2>Explore and discover a variety of products</h2>
      </div>

      <div className='carousel'>
        <Carousel images={images}/>
      </div>
    </div>
  )
}

export default Herosection