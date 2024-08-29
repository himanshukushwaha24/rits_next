// import React from "react";
// import Slider from "react-slick";
// import Card from "react-bootstrap/Card";
// import { CardBody } from "react-bootstrap";
// import Image from "next/image";
// function EventSlider() {
//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//    <Card className="w-full h-auto bg-white shadow-md">
// <CardBody>
// <Image
//                     src="/assets/events/events1.png"
//                     alt="Event Image"
//                     width={200}
//                     height={200}
//                     layout="responsive"
//                     className="rounded-t-md"
//                   />

// </CardBody>
//    </Card>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//         <div>
//           <h3>7</h3>
//         </div>
//         <div>
//           <h3>8</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default EventSlider;


import React from "react";
import Slider from "react-slick";
import Image from "next/image";

function EventSlider() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrow:false,
    autoplaySpeed: 3000,
    waitForAnimate: false,
    
  };

  return (
    <div className="slider-container" style={{width:"500px",height:"auto"}}>
      
      <Slider {...settings}>
         <div className="image-wrapper p-1  ">
          <Image
             src="/assets/hemevents/Events1.jpg"
            alt="Event 1"
            layout="responsive"  // Use 'responsive' layout instead of 'fill'
            width={80}  // Specify width and height for 'responsive' layout
            height={20}
            className="image-style eventborder_radius "
          />
        </div>   
        <div className="image-wrapper">
          <Image
             src="/assets/hemevents/Events2.jpg"
            alt="Event 2"
            layout="responsive"
            width={80}
            height={20}
            className="image-style eventborder_radius"
          />
        </div> 
         <div className="image-wrapper">
          <Image
             src="/assets/hemevents/Events3.jpg"
            alt="Event 3"
            layout="responsive"
            width={80}
            height={20}
            className="image-style eventborder_radius"
          />
        </div> 
       <div className="image-wrapper">
          <Image
             src="/assets/hemevents/Events4.jpg"
            alt="Event 4"
            layout="responsive"
            width={80}
            height={20}
            className="image-style eventborder_radius"
          />
        </div> 
        <div className="image-wrapper">
          <Image
             src="/assets/hemevents/Events5.jpg"
            alt="Event1"
            layout="responsive"
            width={80}
            height={20}
            className="image-style eventborder_radius"
          />
        </div> 
        <div className="image-wrapper">
          <Image
             src="/assets/hemevents/Events6.jpg"
            alt="Event1"
            layout="responsive"
            width={80}
            height={20}
            className="image-style eventborder_radius"
          />
        </div> 
        <div className="image-wrapper">
          <Image
             src="/assets/hemevents/Events7.jpg"
            alt="Event1"
            layout="responsive"
            width={80}
            height={20}
            className="image-style eventborder_radius"
          />
        </div>
        <div className="image-wrapper">
          <Image
             src="/assets/hemevents/Events8.jpg"
            alt="Event1"
            layout="responsive"
            width={80}
            height={20}
            className="image-style eventborder_radius"
          />
        </div>
        <div className="image-wrapper">
          <Image
             src="/assets/hemevents/Events9.jpg"
            alt="Event1"
            layout="responsive"
            width={80}
            height={20}
            className="image-style eventborder_radius"
          />
        </div>
      </Slider>

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


