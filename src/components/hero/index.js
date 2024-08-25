import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


const HeroSection = () => {
  const imagePaths = [
    "/assets/hero/bannerimage1.jpg",
    "/assets/hero/bannerimage2.jpg",
    "/assets/hero/bannerimage5.jpg",
    "/assets/hero/bannerimage4.jpg",
  ];

  const texts = [
    {
      title: "WEALTH MANAGEMENT",
      subtitle: "Playing Defense in a Risky Market",
    }, // Image 1
    {
      title: "THOUGHTS ON THE MARKET",
      subtitle: "Economics Roundtable: Global Elections",
    }, // Image 2
    {
      title: "INVESTMENT MANAGEMENT",
      subtitle: "Understanding Private Credit",
    }, // Image 3
    {
      title: "WEALTH MANAGEMENT",
      subtitle: "Playing Defense in a Risky Market",
    }, // Image 4
    {
      title: "INVESTMENT MANAGEMENT",
      subtitle: "Understanding Private Credit",
    }, // Image 5
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(imagePaths[0]);

  const handleNext = () => {
    const nextIndex = (currentImageIndex + 1) % imagePaths.length;
    setCurrentImageIndex(nextIndex);
    setBackgroundImage(imagePaths[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex =
      currentImageIndex === 0 ? imagePaths.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setBackgroundImage(imagePaths[prevIndex]);
  };
  const scrollToForm = () => {
    const element = document.getElementById("investor-form");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className=" w-full h-screen hero-bg"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Text Overlay for First Three Images */}
      {currentImageIndex < 3 && (
        <div className="absolute inset-0 flex flex-col items-start justify-center bg-black  bg-opacity-50 pl-20 ">
          <h1 className="text-white text-[38px] md:text-[53px] font-[700]  leading-[72px] letter-spacing-[0.01em] text-left font-lato mb-0 md:mb-8 mt-[-130px]">
  Empowering Your Financial Future <br />
  with Innovative Investment <br />
  Solutions
</h1>
          {/* Adjusted margin-top to reduce space */}
          <div>
          <button
  onClick={scrollToForm}
  className="px-6 py-2 absolute z-10 border border-2 sm:text-[16px] font-bold text-white rounded-sm hover:bg-green-600 transition-all duration-300 mt-8 flex items-center"
>
  Contact Us
  <Image
    src="/icon/Vector.png"
    alt="Arrow Icon"
    width={8}
    height={8}
    className="ml-2"
  />
</button>

          </div>
        </div>
      )}

      {/* Desktop View: Display all images in a row */}
      <div className="hidden lg:flex justify-evenly h-full">
        {imagePaths.map((image, index) => (
          <div
            key={index}
            className="w-[25%] h-full border border-gray-50 hover:border-[#009837] transition-all duration-300 cursor-pointer relative"
            onMouseEnter={() => setBackgroundImage(image)}
            onMouseLeave={() =>
              setBackgroundImage(imagePaths[currentImageIndex])
            }
          >
            <div className="w-full h-full flex items-end justify-center p-4 hover:bg-black hover:bg-opacity-90">
              <div className="absolute bottom-4 flex flex-col items-start text-white">
                <h1
                  className={`text-[14px] font-[400] leading-[32px] text-left font-lato mb-1`}
                >
                  {/* {texts[index].title} */}
                </h1>
                <h2
                  className={`text-[16px] font-[700] leading-[19.2px] text-left font-lato`}
                >
                  {/* {texts[index].subtitle} */}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View: Display one image with navigation arrows */}
      <div className="flex lg:hidden justify-center items-center h-full relative ">
        <button
          className="absolute left-4 text-white bg-[#009837] hover:bg-green-600 p-3 rounded-full font-bold bottom-[220px]"
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <div className="w-full h-full flex items-end justify-center relative ">
          <div className="absolute bottom-4 flex flex-col items-start text-white">
            <h1 className="text-[14px] font-[400] leading-[32px] text-left font-lato mb-1">
              {texts[currentImageIndex].title}
            </h1>
            <h2 className="text-[16px] font-[700] leading-[19.2px] text-left font-lato">
              {texts[currentImageIndex].subtitle}
            </h2>
          </div>
        </div>
        <button
          className="absolute right-4 text-white bg-[#009837] hover:bg-green-600 p-3 rounded-full bottom-[220px]"
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
