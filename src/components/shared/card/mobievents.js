import {
  faArrowLeft,
  faArrowRight,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
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
    arrows: false,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container block md:hidden">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div key={1}>
          <div>
            <div className="maindiv">
              <div className="maindiv_up  w-full text-start bg-[#009837] p-4 border-l-[3px] border-l-solid border-l-[#1D9B82] bg-opacity-10">
                <span className=" w-[150px] flex justify-center items-center p-1 text-[18px] md:text-[20px] font-bold hover:text-[#009837] border-2 text-white bg-[#008000]">
                  Upcoming
                </span>
                <h1 className="flex text-[18px] md:text-[20px] font-bold text-[#009837] text-center">
                  Sep 26, 2024
                </h1>
              </div>
              <div className="maindiv_down w-full text-center flex flex-col justify-between bg-[#FFFFFF] p-2 border py-4 ">
                <div className="flex items-center justify-start item-start space-x-2 mt-2 text-center  gap-4 text-[20px]">
                  <span className="text-[20px] text-[#424242] flex items-start leading-4 gap-2">
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
                  <span className="text-[20px] text-[#424242] flex items-start leading-4 gap-2 ">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> USA
                  </span>
                </div>
                <Link
                  href="https://www.ritscapital.com/startup-pitch-day/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[22px] text-[#0F0F0F] font-semibold text-start pt-4"
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
                <h1 className="flex justify-start text-[18px] md:text-[20px] font-bold text-[#009837]">
                  Apr 27, 2024
                </h1>
              </div>
              <div className="maindiv_down w-full text-center flex flex-col justify-between bg-[#FFFFFF] p-2 border py-4">
                <div className="flex items-start justify-start item-start space-x-2 mt-2 text-center  gap-4 text-[20px]">
                  <span className=" text-[20px] text-[#424242] flex items-start leading-4 gap-2">
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
                  <span className="text-[20px] text-[#424242] flex items-start leading-4 gap-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> USA
                  </span>
                </div>
                <Link
                  href="https://www.ritscapital.com/startup-pitch-day/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[22px] text-[#0F0F0F] font-semibold flex justify-start pt-4"
                >
                  Climifi Investors’ Day 2.0
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div key={3}>
          <div>
            <div className="maindiv">
              <div className="maindiv_up  w-full  text-center bg-[#009837] p-4 border-l-[3px] border-l-solid border-l-[#1D9B82] bg-opacity-10">
                <h1 className="flex justify-start text-[18px] md:text-[20px] font-bold text-[#009837]">
                  March 27, 2024
                </h1>
              </div>
              <div className="maindiv_down w-full text-center flex flex-col justify-between bg-[#FFFFFF] p-2 border py-4">
                <div className="flex items-start justify-start item-start space-x-2 mt-2 text-center  gap-4 text-[20px]">
                  <span className="text-[20px] text-[#424242] flex items-start leading-4 gap-2">
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
                  <span className="text-[20px] text-[#424242] flex items-start leading-4 gap-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> USA
                  </span>
                </div>
                <Link
                  href="https://www.ritscapital.com/startup-pitch-day/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[22px] text-[#0F0F0F] font-semibold flex justify-start pt-4"
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
              <div className="maindiv_up  w-full  text-start bg-[#009837] p-4 border-l-[3px] border-l-solid border-l-[#1D9B82] bg-opacity-10">
                <h1 className="flex justify-start text-[18px] md:text-[20px] font-bold text-[#009837]">
                  Jan 29, 2024
                </h1>
              </div>
              <div className="maindiv_down w-full text-center flex flex-col justify-between bg-[#FFFFFF] p-2 border py-4">
                <div className="flex items-start justify-start item-start space-x-2 mt-2 text-center  gap-4 text-[20px]">
                  <span className="text-[20px] text-[#424242] flex items-start leading-4 gap-2">
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
                  <span className="text-[20px] text-[#424242] flex items-start leading-4 gap-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> USA
                  </span>
                </div>
                <Link
                  href="https://www.ritscapital.com/startup-pitch-day/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[22px] text-[#0F0F0F] font-semibold flex justify-start pt-4"
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
                <h1 className="flex justify-start text-[18px] md:text-[20px] font-bold text-[#009837]">
                  Jan 12, 2024
                </h1>
              </div>
              <div className="maindiv_down w-full text-center flex flex-col justify-between bg-[#FFFFFF] p-4 border py-4">
                <div className="flex items-start justify-start item-start space-x-2 mt-2 text-center  gap-4 text-[20px]">
                  <span className="text-[20px] text-[#424242] flex items-start leading-4 gap-2">
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
                  <span className="text-[20px] text-[#424242] flex items-start leading-4 gap-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> USA
                  </span>
                </div>
                <Link
                  href="https://www.ritscapital.com/startup-pitch-day/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[22px] text-[#0F0F0F] font-semibold flex justify-start pt-4"
                >
                  Climifi Investors’ Day
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div className="flex justify-around  py-3">
        <button
          className="button mr-4 bg-[#F0F0F0] w-[44px] h-[44px] rounded-full "
          onClick={previous}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-1 bg-gray-400" onClick={previous}></div>
          <div className="w-10 h-1 bg-green-500"></div>
          <div className="w-10 h-1 bg-gray-400" onClick={next}></div>
        </div>

        <button
          className="button bg-[#F0F0F0] w-[44px] h-[44px] rounded-full ml-4"
          onClick={next}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default PreviousNextMethods;
