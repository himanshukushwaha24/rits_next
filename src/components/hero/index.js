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
    },
    {
      title: "THOUGHTS ON THE MARKET",
      subtitle: "Economics Roundtable: Global Elections",
    },
    {
      title: "INVESTMENT MANAGEMENT",
      subtitle: "Understanding Private Credit",
    },
    {
      title: "WEALTH MANAGEMENT",
      subtitle: "Playing Defense in a Risky Market",
    },
    {
      title: "INVESTMENT MANAGEMENT",
      subtitle: "Understanding Private Credit",
    },
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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className=" w-full h-screen hero-bg "
      id="hero-sec"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Text Overlay for First Three Images */}
      {/* {currentImageIndex < 3 && ( */}
      <div
        className="absolute inset-0 flex flex-col items-start justify-center bg-black 
         bg-opacity-50 pl-10 md:pl-20"
      >
        <h1
          className="text-white absolute z-10 text-[38px] md:text-[48px] font-[700]
            leading-[55px] md:leading-[72px] letter-spacing-[0.01em] text-left font-lato mb-0 md:mb-8 
            mt-[-250px] md:mt-[-150px] mr-[5px]md:mr-[0px]"
          onMouseEnter={() => setBackgroundImage(imagePaths[0])}
        >
          {/*Empowering Your Financial Future <br />
            with Innovative Investment <br />
            Solutions */}

          <span
            onMouseEnter={() => {
              setBackgroundImage(imagePaths[0]);
              setCurrentImageIndex(0); // Update currentImageIndex state
            }}
          >
            Empowering your financial future
          </span>
          <br />

          <span
            onMouseEnter={() => {
              setBackgroundImage(imagePaths[1]);
              setCurrentImageIndex(1); // Update currentImageIndex state
            }}
          >
            with innovative investment
          </span>

          <br />
          <span
            onMouseEnter={() => {
              setBackgroundImage(imagePaths[3]);
              setCurrentImageIndex(3); // Update currentImageIndex state
            }}
          >
            solutions
          </span>
        </h1>
      </div>
      {/* <div className="block lg:hidden">
        <h1
          className="text-white absolute z-10 text-[38px] font-[700]
      leading-[55px] letter-spacing-[0.01em] text-left font-lato mb-0 
      mt-[-250px] mr-[5px]"
        >
          <span
            onMouseEnter={() => setBackgroundImage(imagePaths[0])} // hover on "Empowering your" sets 1st image as background
          >
            Empowering your
          </span>
        </h1>
        <h1
          className="text-white absolute z-10 text-[38px] font-[700]
      leading-[55px] letter-spacing-[0.01em] text-left font-lato mb-0 
      mt-[-200px] mr-[5px]"
        >
          <span
            onMouseEnter={() => setBackgroundImage(imagePaths[1])} // hover on "financial future" sets 2nd image as background
          >
            financial future
          </span>
        </h1>
        <h1
          className="text-white absolute z-10 text-[38px] font-[700]
      leading-[55px] letter-spacing-[0.01em] text-left font-lato mb-0 
      mt-[-150px] mr-[5px]"
        >
          <span
            onMouseEnter={() => setBackgroundImage(imagePaths[0])} // hover on "With innovative" sets 1st image as background
          >
            With innovative
          </span>
        </h1>
        <h1
          className="text-white absolute z-10 text-[38px] font-[700]
      leading-[55px] letter-spacing-[0.01em] text-left font-lato mb-0 
      mt-[-100px] mr-[5px]"
        >
          <span
            onMouseEnter={() => setBackgroundImage(imagePaths[3])} // hover on "Investment" sets 4th image as background
          >
            Investment
          </span>
        </h1>
        <h1
          className="text-white absolute z-10 text-[38px] font-[700]
      leading-[55px] letter-spacing-[0.01em] text-left font-lato mb-0 
      mt-[-50px] mr-[5px]"
        >
          <span
            onMouseEnter={() => setBackgroundImage(imagePaths[0])} // hover on "solutions" sets 1st image as background
          >
            solutions
          </span>
        </h1>
      </div> */}
      <div>
        <button
          onClick={scrollToForm}
          className="px-6 py-2 absolute z-10 border-2 sm:text-[16px] font-bold text-white rounded-sm
              hover:bg-green-600 transition-all duration-300 mt-[500px] md:mt-[350px] flex items-center ml-12 md:ml-20"
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

      {/* )} */}

      {/* Desktop View: Display all images in a row */}
      <div className="hidden lg:flex justify-evenly h-full">
        {imagePaths.map((image, index) => (
          <div
            key={index}
            className="w-[25%] h-full border border-[0.5px] border-[rgba(255,255,255,0.2)] hover:border-[#009837] transition-all duration-300 cursor-pointer relative"
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
      <div className="flex lg:hidden justify-evenly items-center h-full relative ">
  <button
    className="flex justify-center w-16 h-16 bg-[#009837] hover:bg-green-600 rounded-full items-center mt-[310px] ml-2 p-3"
    onClick={handlePrev}
  >
    <FontAwesomeIcon
      icon={faArrowLeft}
      className="text-white text-2xl flex justify-center items-center font-semibold"
      style={{ transform: "scaleX(1)" }} // Add this to flip the left arrow icon
    />
  </button>

  <div className="w-full h-full flex items-end justify-center relative ">
    <div className="absolute bottom-4 flex flex-col items-start text-white ">
      <h1 className="text-[14px] font-[400] leading-[32px] text-left font-lato mr-[20px] mb-[13px]">
        {/* {texts[currentImageIndex].title} */}
      </h1>
      <h2 className="text-[16px] font-[700] leading-[19.2px] text-left font-lato">
        {/* {texts[currentImageIndex].subtitle} */}
      </h2>
    </div>
  </div>

  <button
    className="flex justify-center w-16 h-16 bg-[#009837] hover:bg-green-600 rounded-full items-center mt-[310px] mr-2 p-3"
    onClick={handleNext}
  >
    <FontAwesomeIcon
      icon={faArrowRight}
      className="text-white text-2xl flex justify-center items-center font-semibold"
    />
  </button>
</div>
    </div>
  );
};

export default HeroSection;
