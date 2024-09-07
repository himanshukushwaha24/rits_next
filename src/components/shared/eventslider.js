
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import PreviousNextMethods from "./card/mobievents";

function EventSlider() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 3000,
    waitForAnimate: false,
    
  };

  return (
    <div className="slider-container" style={{width:"500px",height:"auto"}}>
      
      <Slider {...settings}>
         <div className="image-wrapper  ">
          <Image
             src="/assets/hemevents/Event1.png"
            alt="Event 1"
            layout="responsive"  // Use 'responsive' layout instead of 'fill'
            width={80}  // Specify width and height for 'responsive' layout
            height={20}
            className="image-style eventborder_radius "
          />
        </div>   
        <div className="image-wrapper">
          <Image
             src="/assets/hemevents/Event2.png"
            alt="Event 2"
            layout="responsive"
            width={80}
            height={20}
            className="image-style eventborder_radius"
          />
        </div> 
         <div className="image-wrapper">
          <Image
             src="/assets/hemevents/Event3.png"
            alt="Event 3"
            layout="responsive"
            width={80}
            height={20}
            className="image-style eventborder_radius"
          />
        </div> 
       <div className="image-wrapper">
          <Image
             src="/assets/hemevents/Event4.png"
            alt="Event 4"
            layout="responsive"
            width={80}
            height={20}
            className="image-style eventborder_radius"
          />
        </div> 
        <div className="image-wrapper">
          <Image
             src="/assets/hemevents/Event5.png"
            alt="Event1"
            layout="responsive"
            width={80}
            height={20}
            className="image-style eventborder_radius"
          />
        </div> 
        <div className="image-wrapper">
          <Image
             src="/assets/hemevents/Event6.png"
            alt="Event1"
            layout="responsive"
            width={80}
            height={20}
            className="image-style eventborder_radius"
          />
        </div> 
        <div className="image-wrapper">
          <Image
             src="/assets/hemevents/Event7.png"
            alt="Event1"
            layout="responsive"
            width={80}
            height={20}
            className="image-style eventborder_radius"
          />
        </div>
        
      </Slider>
      <div className=" w-full h-auto"><PreviousNextMethods /></div>
      {/* Style adjustments */}
      <style jsx>{`
        .slider-container {
          position: relative;
          width: 100%;
          max-width: 100%;
          height: auto; /* Allow height to adjust based on image aspect ratio */
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: auto;
          overflow: hidden;
        }

        .image-style {
          width: 100%;
          height: auto;
          object-fit: cover; /* Ensure images cover the container */
        }

        /* Slick slider adjustments */
        .slick-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .slick-dots {
          bottom: 15px; /* Adjust dot position */
        }

        @media (max-width: 768px) {
          .slider-container {
            height: auto; /* Adjust height for smaller screens */
          }
                 .slider-container {
          position: relative;
          width: 100%;
          max-width: 100%;
          height: auto; /* Allow height to adjust based on image aspect ratio */
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: auto;
          overflow: hidden;
        }

        }
      `}</style>
    </div>
  );
}

export default EventSlider;


