import React, { useState } from "react";
import HeroSection from "@/components/hero";
import Layout from "@/components/layout";
import Cardmover from "@/components/shared/card/card4";
import SimpleSlider from "@/components/shared/card/eventcard";
import WhatweDo from "@/components/wedo";
import Teamcard from "@/components/shared/card2/teamcard";
import TeamPart from "@/components/shared/card/teampart";
import Image from "next/image";
import Placecart from "@/components/shared/card/Placecart";
import Map from "@/components/shared/card/mapcomponent";
import InvestorForm from "@/components/shared/form/investorform";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PreviousNextMethods from "@/components/shared/card/mobievents";
import Mobieventsright from "@/components/shared/card/mobieventsright";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";


const Home = () => {

  <Head>
  <link rel="shortcut icon" href="/assets/ritslogo1.png" type="image/png" />
  <title>Rits Capital</title>
</Head>

  const [selectedCity, setSelectedCity] = useState({
    name: "New York",
    lat: 40.7128,
    lng: -74.006,
    maplink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03609235!2d-74.30933268632423!3d40.697539959410896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1724380236131!5m2!1sen!2sin",
  });

  const handleCityChange = (cityCoords) => {
    setSelectedCity(cityCoords);
  };

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

  return (
    <>
      <div className="wrapper p-2">
      <Layout>
        <section className="home h-full w-full">
          <div className="hero-banner">
            <HeroSection />
          </div>
          <div className="w-full h-[40px]  bg-[#353546]"></div>
          <div className="banner-container bg-black opacity-100 w-full h-auto bg-[#F0F0F0] flex flex-wrap justify-around items-center text-center p-4">
            <div className="w-1/2 md:w-auto flex flex-col mb-4 md:mb-0">
              <span className="text-[28px] md:text-5xl  font-bold">$10Bn</span>
              <span className="text-[14px] md:text-[18px] text-[#353B5B] pt-2">
                Raised <br /> and countingzz
              </span>
            </div>
            <div className="w-1/2 md:w-auto flex flex-col mb-4 md:mb-0">
              <span className="text-[28px] md:text-5xl  font-bold">80%</span>
              <span className="text-[14px] md:text-[18px] text-[#353B5B] pt-2">
                Average return on pre- <br />
                IPO investments
              </span>
            </div>
            <div className="w-1/2 md:w-auto flex flex-col mb-4 md:mb-0">
              <span className="text-[28px] md:text-5xl  font-bold">200X</span>
              <span className="text-[14px] md:text-[18px] text-[#353B5B] pt-2">
                Return on
                <br /> startup investments
              </span>
            </div>
            <div className="w-1/2 md:w-auto flex flex-col">
              <span className="text-[28px] md:text-5xl font-bold mb-2">$250Mn+</span>
              <span className="text-[14px] md:text-[18px] text-[#353B5B] pb-4 ">
                Assets under <br />
                management
              </span>
            </div>
          </div>
        </section  > 
        <WhatweDo />
        <section className="slider w-full py-8 bg-[#F0F0F0]">
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="text-[#0F0F0F] text-[48px] mb-6 font-semibold">
              Stories From Our Valued Clients
            </h2>
            <div className="w-full overflow-hidden px-4">
              <Cardmover />
            </div>
          </div>
        </section>

        <section className="events w-full  bg-[#F0F0F0] ">
          <div className=" w-full md:w-[98vw]  bg-[#FFFFFF] py-10 bord rounded-tr-[270px] ">
            <h1 className="text-[48px] leading-[60px] text-[#0F0F0F] flex justify-center items-center py-4">
              Events
            </h1>
            <div className="event_container ">
              <SimpleSlider />
             <Mobieventsright/>
              <PreviousNextMethods/>
             
            </div>
          </div>
         
        </section>
        {/* <section className="insight w-full h-auto bg-[#FFFFFF] py-10 overflow-hidden">
          <div className="flex w-full overflow-hidden">
          
            <p className="flex justify-center items-center text-center text-[28px] md:text-[48px] leading-[36px] md:leading-[60px] text-[#0F0F0F] mb-6 md:mb-10 w-full">
              Insights and Expertise
            </p>
          </div>
          <div className="flex w-full flex-col md:flex-row overflow-hidden">
            <div className="insight-container_left hidden md:block w-1/2 md:w-1/2 xl:w-2/3">
              <div className="expertise-container max-w-md mx-auto">
                <InsightCard />
              </div>
            </div>

            <div className="insight-container_right w-full md:w-2/3 xl:w-1/2 md:mt-0">
              <div className="expertise-container mx-auto md:px-0">
                <Expertise />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6">
            <button className="px-6 py-2 bg-[#353546] text-white rounded">
              View All Insights
            </button>
          </div>
        </section> */}
        <section className="team w-full h-auto bg-gray-600/10 py-10">
          <div className="team_up flex  flex-col md:flex-row justify-center items-center text-center px-10">
            <div id="career" className="team_up_left  w-full font-bold text-[48px] leading-[60px]">
              Become Part <br />
              of Our Team
            </div>
            <div className="team_up_right font-normal text-[14px] md:text-[18px] leading-8 text-[#5F5F5F] pb-[150px] md:py-12 text-left">
              Meet our people, see where we work and join a diverse, dynamic and
              growing organization that continually invests in advancing your
              skills and professional opportunities.
            </div>
          </div>
          <div className="team_down w-full">
            <div className="team_down_container flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="team_down_container_left hidden md:block ">
                <Teamcard />
              </div>
              <div className="team_down_container_right hidden md:block  mt-6 md:mt-0">
        
                {/* Add margin-top for spacing in mobile view */}
                <TeamPart />
              </div>
            </div>
            <div className="team_bottom mt-10 flex justify-center">
              {/* Desktop Image */}
              <div className="hidden md:block">
                <Image src="/assets/team.png" width={1500} height={200} />
              </div>

              {/* Mobile Image */}
              <div className="block md:hidden relative">
                {/* Mobile Image */}
                <Image src="/assets/mobileteam.png" width={360} height={658} />

                {/* Teamcard and TeamPart Components positioned over the image */}

                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-4">
                  {/* Teamcard Component */}
                  <div className="w-full flex justify-start mt-[-120px]">
                    <Teamcard />
                  </div>

                  {/* TeamPart Component */}
                  <div className="w-full md:flex justify-center">
                    <TeamPart />
          
                  </div>
  

                </div>
                z
              </div>
            </div>
          </div>
        </section>
     
        <section className="connected w-full h-auto ">
          <div className="connected-class w-full h-auto flex flex-col justify-between items-center py-20">
            <h1 className="text-[#0F0F0F]  text-[35px] md:text-[48px] font-[700px] text-center leading-[33px] md:leading-[60px] text-center">
              Let’s Stay Connected
            </h1>
            <p className="text-[#5F5F5F]md:text-[#556987] font-[500px] text-[14px] md:text-[18px] leading-[24px] md:leading-[30px] text-center py-6">
              It's never been easier to get in touch with Rits Capital. Call us,
              use our live chat widget or email and we'll get back to <br /> you
              as soon as possible!
            </p>
            <div className="mapdesec w-full h-auto flex flex-col-reverse md:flex-row justify-evenly items-center  lg:px-[80px]">
              {/* Placecart section - will be below on small screens */}
              <div className="mapdesec_left w-full md:w-[35%] mb-6 md:mb-0 pl-3">
                <Placecart onCitySelect={handleCityChange} />
              </div>
              {/* Map section - will be above on small screens */}
              <div className="mapdesec_right w-full md:w-[65%] h-auto">
                <Map center={selectedCity} />
              </div>
              {/* Map section - will be above on small screens */}
              <div className="mapdesec_right w-full md:w-[65%] h-auto">
                {/* <Map /> */}
              </div>
            </div>
          </div>
          <div className="investor-background flex flex-col md:flex-row w-full relative">
            <video
              src="/assets/team-video.mp4"
              autoPlay
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="investor_left flex-1 p-5 flex flex-col items-start justify-center ml-0 md:ml-[55px] relative z-10">
              <h1 className="text-white font-lato font-bold text-[38px] md:text-[60px] leading-[45px] md:leading-[72px] text-left p-4">
                Invest in Tomorrow’s <br /> Giants Today!
              </h1>
              <p className="text-white font-lato text-[16px] md:text-[18px] font-bold leading-[32px] text-left mt-4 ml-0 md:ml-[30px]">
                Get Latest Updates
              </p>
              <a
                href="https://chat.whatsapp.com/GUXsxsREZfIIY7RW9Q7lcW"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="mt-4 flex items-center ml-0 md:ml-[30px]">
                  <button className="flex items-center font-lato text-[16px] font-semibold leading-[19.2px] text-left border border-2 text-white py-2 px-4 rounded ">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="text-white font-semibold font-lato text-[16px] mr-2 bg-[#4CAF50] h-[20px] rounded-full "
                    />
                    Join WhatsApp Community
                    <Image
                      src="/icon/Vector.png"
                      alt="Arrow Icon"
                      width={8}
                      height={8}
                      className="ml-2"
                    />
                  </button>
                </div>
              </a>
            </div>
            <div className="investor_right flex-1 p-5 -mt-28 relative z-10">
              <InvestorForm />
            </div>
          </div>
        </section>
      </Layout>
      </div>
    </>
  );
};

export default Home;