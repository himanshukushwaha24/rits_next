import { faArrowLeft, faArrowRight, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";



function PreviousNextMethods() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows:false,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container block md:hidden">
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
        
        <div key={1}>
          <div>
<div className="maindiv">
    <div className="maindiv_up  w-full  text-center bg-[#009837] p-4 border-l-[3px] border-l-solid border-l-[#1D9B82] bg-opacity-10">
        <h1 className="text-[14px] md:text-[20px] font-[700px] text-[#009837]">Sep 26, 2024</h1>
    </div>
    <div className="maindiv_down w-full text-center flex flex-col justify-between bg-[#FFFFFF] p-4">
  <div className="flex items-center justify-center item-start space-x-2 mt-2 text-center p-3 gap-4">
    <span className="text-sm text-gray-500 flex items-center">
      <Image
        src="/icon/physical.png"
        alt="In-person Icon"
        width={16}
        height={16}
        className="mr-1"
      />
      In-person
    </span>
    <span className="text-sm text-gray-500">|</span>
    <span className="text-sm text-gray-500">
      <FontAwesomeIcon icon={faMapMarkerAlt} /> USA
    </span>
  </div>
  <Link
    href="https://www.ritscapital.com/startup-pitch-day/index.html"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[22px] text-[#0F0F0F] font-semibold"
  >
    Rits Capital Startup Pitch Day
  </Link>
</div>

</div>
          </div>
        </div>
        <div key={2}>
         <div>
<div className="maindiv">
    <div className="maindiv_up  w-full  text-center bg-[#009837] p-4 border-l-[3px] border-l-solid border-l-[#1D9B82] bg-opacity-10">
        <h1 className="text-[14px] md:text-[20px] font-[700px] text-[#009837]">Sep 26, 2024</h1>
    </div>
    <div className="maindiv_down w-full text-center flex flex-col justify-between bg-[#FFFFFF] p-4">
  <div className="flex items-center justify-center item-start space-x-2 mt-2 text-center p-3 gap-4">
    <span className="text-sm text-gray-500 flex items-center">
      <Image
        src="/icon/physical.png"
        alt="In-person Icon"
        width={16}
        height={16}
        className="mr-1"
      />
      In-person
    </span>
    <span className="text-sm text-gray-500">|</span>
    <span className="text-sm text-gray-500">
      <FontAwesomeIcon icon={faMapMarkerAlt} /> USA
    </span>
  </div>
  <Link
    href="https://www.ritscapital.com/startup-pitch-day/index.html"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[22px] text-[#0F0F0F] font-semibold"
  >
    Rits Capital Startup Pitch Day
  </Link>
</div>

</div>
          </div>
        </div>
        <div key={3}>
        <div>
<div className="maindiv">
    <div className="maindiv_up  w-full  text-center bg-[#009837] p-4 border-l-[3px] border-l-solid border-l-[#1D9B82] bg-opacity-10">
        <h1 className="text-[14px] md:text-[20px] font-[700px] text-[#009837]">27th March 2024</h1>
    </div>
    <div className="maindiv_down w-full text-center flex flex-col justify-between bg-[#FFFFFF] p-4">
  <div className="flex items-center justify-center item-start space-x-2 mt-2 text-center p-3 gap-4">
    <span className="text-sm text-gray-500 flex items-center">
      <Image
        src="/icon/physical.png"
        alt="In-person Icon"
        width={16}
        height={16}
        className="mr-1"
      />
      In-person
    </span>
    <span className="text-sm text-gray-500">|</span>
    <span className="text-sm text-gray-500">
      <FontAwesomeIcon icon={faMapMarkerAlt} /> USA
    </span>
  </div>
  <Link
    href="https://www.ritscapital.com/startup-pitch-day/index.html"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[22px] text-[#0F0F0F] font-semibold"
  >
     Rits Capital Investor Symposium
  </Link>
</div>

</div>
          </div>
        </div>
        <div key={4}>
        <div>
<div className="maindiv">
    <div className="maindiv_up  w-full  text-center bg-[#009837] p-4 border-l-[3px] border-l-solid border-l-[#1D9B82] bg-opacity-10">
        <h1 className="text-[14px] md:text-[20px] font-[700px] text-[#009837]">29th January 2024</h1>
    </div>
    <div className="maindiv_down w-full text-center flex flex-col justify-between bg-[#FFFFFF] p-4">
  <div className="flex items-center justify-center item-start space-x-2 mt-2 text-center p-3 gap-4">
    <span className="text-sm text-gray-500 flex items-center">
      <Image
        src="/icon/physical.png"
        alt="In-person Icon"
        width={16}
        height={16}
        className="mr-1"
      />
      In-person
    </span>
    <span className="text-sm text-gray-500">|</span>
    <span className="text-sm text-gray-500">
      <FontAwesomeIcon icon={faMapMarkerAlt} /> USA
    </span>
  </div>
  <Link
    href="https://www.ritscapital.com/startup-pitch-day/index.html"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[22px] text-[#0F0F0F] font-semibold"
  >
     Rits Capital CXO Conclave
  </Link>
</div>

</div>
          </div>
        </div>
        <div key={5}>
        <div>
<div className="maindiv">
    <div className="maindiv_up  w-full  text-center bg-[#009837] p-4 border-l-[3px] border-l-solid border-l-[#1D9B82] bg-opacity-10">
        <h1 className="text-[14px] md:text-[20px] font-[700px] text-[#009837]">12th January  2024</h1>
    </div>
    <div className="maindiv_down w-full text-center flex flex-col justify-between bg-[#FFFFFF] p-4">
  <div className="flex items-center justify-center item-start space-x-2 mt-2 text-center p-3 gap-4">
    <span className="text-sm text-gray-500 flex items-center">
      <Image
        src="/icon/physical.png"
        alt="In-person Icon"
        width={16}
        height={16}
        className="mr-1"
      />
      In-person
    </span>
    <span className="text-sm text-gray-500">|</span>
    <span className="text-sm text-gray-500">
      <FontAwesomeIcon icon={faMapMarkerAlt} /> USA
    </span>
  </div>
  <Link
    href="https://www.ritscapital.com/startup-pitch-day/index.html"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[22px] text-[#0F0F0F] font-semibold"
  >
     Climifi Investors’ Day
  </Link>
</div>

</div>
          </div>
        </div>
       
      </Slider>
      <div className="text-center py-3">
  <button className="button mr-4" onClick={previous}>
    <FontAwesomeIcon icon={faArrowLeft} />
  </button>
  <button className="button ml-4" onClick={next}>
    <FontAwesomeIcon icon={faArrowRight} />
  </button>
</div>

    </div>
  );
}

export default PreviousNextMethods;
