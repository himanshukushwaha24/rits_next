
import React, { useState } from 'react';
import Cardform from "../shared/card";
import Cardtwo from "../shared/card2";
import Cardthree from '../shared/card3';

const WhatweDo = () => {
  const [paragraphContent, setParagraphContent] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [showWhatsAppIcon, setShowWhatsAppIcon] = useState(false);
  const [currentImage, setCurrentImage] = useState('/assets/whatwedo/whatwedo2.png');


  const handleButtonClick = (paragraphContent,title,newImage) => {
    if (title === "Pre-IPO & Unlisted Equities" || title === "Accounting and tax services support") {
      setShowWhatsAppIcon(true);
    } else {
      setShowWhatsAppIcon(false);
    }
    setSelectedTitle(title);

    if (title === "Wealth Management Services") {
      // Initial content for Wealth Management Services
      setParagraphContent([
        "At Rits Capital, we offer personalised wealth management, focusing on maximizing returns while minimizing risks.",
        "With transparent communication and a client-centric approach, we guide clients towards their financial goals.",
        "We become trusted partners in our clients’ financial journey through following services under wealth management."
      ]);
    } else {
      
      setParagraphContent(paragraphContent);
    }
    if (newImage) {
      setCurrentImage(newImage);
    }
    
  };

  return (
    <>
      <section className="what-we-do w-full h-auto py-4">
        <div className="what-we-do-container flex flex-col justify-center items-center">
          <div className="top-container flex flex-col justify-center items-center text-center py-4">
            <h2 className=" flex items-center leading-[30px] md:leading-[60px] font-lato text-[28px] md:text-[48px] md:text-[#0F0F0F] font-[700px] text-[48px] text-center py-4">
              What We do 
            </h2>
          
          <p className="text-[#5F5F5F] leading-6 text-[14px] md:text-[18px] font-normal text-[#5F5F5F] text-center">
              Discover a range of services designed to meet your unique
              financial goals.
            </p>
          
          </div>
          <div className="bottom-container flex flex-col md:flex-row w-full md:w-[90vw] h-auto  flex justify-evenly  rounded-tr-[100px] py-10">
            <Cardform onButtonClick={handleButtonClick} />
            <Cardtwo showWhatsAppIcon={showWhatsAppIcon} selectedTitle={selectedTitle} 
            currentImage={currentImage} />
            <Cardthree paragraphContent={paragraphContent}  title={selectedTitle} />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatweDo;