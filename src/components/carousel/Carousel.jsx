import React, { useEffect, useState } from 'react'
import {HiArrowSmLeft, HiArrowSmRight} from 'react-icons/hi'
import './carousel.css'
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

const Carousel = ({images}) => {
    const [carouselImages, setCarourselImages]= useState(images);
    const [currentIndex, setCurrentIndex] = useState(2);

    const handleLeft =() => {
        const carousel = [...carouselImages];
        const firstImage = carousel.shift(); 
        carousel.push(firstImage); 
        setCarourselImages(carousel)
    }

    const handleRight = () => {
        const carousel = [...carouselImages];
        const lastImage = carousel.pop(); 
        carousel.unshift(lastImage); 
        setCarourselImages(carousel)
    }

  return (
    <div className='carousel-container'>
        {/* Images */}
        <div className='carousel-image-section'>
            <div className='carousel-image-stepTwo-left'>
                <img src={carouselImages[0].img}/>
            </div>

            <div className='carousel-image-stepOne-left'>
                <img src={carouselImages[1].img}/>
            </div>

            <div className='carousel-center-image'>
                <img src={carouselImages[2].img}/>
                <div>Sample text here</div>
            </div>

            <div className='carousel-image-stepOne-right'>
                <img src={carouselImages[3].img}/>
            </div>

            <div className='carousel-image-stepTwo-right'>
                <img src={carouselImages[4].img}/>
            </div>
        </div>

        {/* Pagination */}
        <div className='pagination-section'>
            <div className='pagination-left-arrow' onClick={() => handleLeft()}><HiArrowSmLeft size={24}/></div>
            <div className='pagination-dot'>
                {
                    carouselImages.map((i) => (
                        <div className={currentIndex === i.index ? "selected-dot" : "dot"}></div>
                    ))
                }
            </div>
            <div className='pagination-right-arrow' onClick={() => handleRight()}><HiArrowSmRight size={24}/></div>
        </div>
    </div>
  )
}

export default Carousel