import React, { useEffect, useState } from 'react'
import {HiArrowSmLeft, HiArrowSmRight} from 'react-icons/hi'
import './carousel.css'
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

const Carousel = ({images}) => {
    const [displayedImages, setDisplayedImages] = useState(images.slice(0, 5));
    const [currentIndex, setCurrentIndex] = useState(2);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLeft =() => {
        if (images.length > 1) { 
            var firstImage = images.shift(); 
            images.push(firstImage); 
        }
    }

    const handleRight = () => {
        if (images.length > 1) { 
            var lastImage = images.pop(); 
            images.unshift(lastImage); 
        }
    }

    useEffect(() => {
       setDisplayedImages(images.slice(0, 5)); 
    }, [displayedImages])

  return (
    <div className='carousel-container'>
        {/* Images */}
        <div className='carousel-image-section'>
            <div className='carousel-image-stepTwo-left'>
                <img src={displayedImages[0].img}/>
            </div>

            <div className='carousel-image-stepOne-left'>
                <img src={displayedImages[1].img}/>
            </div>

            <div className='carousel-center-image'>
                <img src={displayedImages[2].img}/>
                <div>Sample text here</div>
            </div>

            <div className='carousel-image-stepOne-right'>
                <img src={displayedImages[3].img}/>
            </div>

            <div className='carousel-image-stepTwo-right'>
                <img src={displayedImages[4].img}/>
            </div>
        </div>

        {/* Pagination */}
        <div className='pagination-section'>
            <div className='pagination-left-arrow' onClick={() => handleLeft()}><HiArrowSmLeft size={24}/></div>
            <div className='pagination-dot'>
                {
                    images.map((i) => (
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