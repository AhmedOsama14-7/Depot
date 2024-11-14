import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore  from 'swiper';
import { EffectFade } from 'swiper/modules';
import { Autoplay  } from 'swiper/modules';
import "swiper/css/bundle";
import "swiper/css";
import 'swiper/css/effect-fade';
import { PiCaretLeftBold } from "react-icons/pi";
import { PiCaretRightBold } from "react-icons/pi";
import { HiXMark } from "react-icons/hi2";
import PaginationContent1 from '../paginationContent/PaginationContent1';
import PaginationContent2 from '../paginationContent/PaginationContent2';
import PaginationContent3 from '../paginationContent/PaginationContent3';
import { Navigation } from 'swiper/modules'; // Import the navigation module
export default function ImgGallerySwipper({img1 , img2 , img3 , img4}) {

        const swiperRef = useRef(null); // Reference to the Swiper instance
        const [currentIndex, setCurrentIndex] = useState(0);
        const [currentSlide, setCurrentSlide] = useState(1);
        const [totalSlides, setTotalSlides] = useState(0);

        const slides = [
          { id: 1, content: img1 },
          { id: 2, content: img2 },
          { id: 3, content: img3  },
          { id: 4, content: img4  }
         
        ];
      
      
      
      
        const handleSlideChange = (swiper) => {
          
          const newIndex = swiper.realIndex; 
          setCurrentIndex(newIndex);
        }; 

        
             function slideChange () {
              // Update the current slide index
              setCurrentSlide(this.realIndex + 1); // `realIndex` is the actual slide index (0-based)
            } 
            
             function init () {
        
              setTotalSlides(this.slides.length); 
            }
          
    
  return (
    <>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        onSlideChange={handleSlideChange}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next', // Next button selector
          prevEl: '.swiper-button-prev', // Prev button selector
        }}
        
        loop={true} 
        style={{height:'80%'}}
        effect={'fade'}
        
      >
        <div className="swipperContainer">

         <div className="content">
        {slides.map((slide) => (
          <SwiperSlide style={{ height:'90%'}} key={slide.id}>
          
            {slide.content}
           
          </SwiperSlide>
        ))}
      </div>
        </div>
      
      <div className="navigation">
      
            <div className="navigationBtns">
            <PiCaretLeftBold className='swiper-button-prev' />
            <PiCaretRightBold className='swiper-button-next'  />
            </div>

            <div className="slideNo">
                <p>

                  {currentSlide} / {totalSlides}
                </p>
            </div>

            <div className="Xmark">
            <HiXMark />
            </div>
      
      </div>
      </Swiper>
      
     </> 
  )
}
