import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import image1 from '/public/guest/1.png';
import image2 from '/public/guest/2.png';
import image3 from '/public/guest/3.png';
import image4 from '/public/guest/4.png';
import profileIcon from '/public/icon/profileico.png';

function Cardmover() {
  const cardData = [
    { title: "Greg Yates", position: "CMO - MaAvatar", text: "Partnering with Rits Capital was a game-changer for Maavatar. Their deep understanding of metaverse and web3 startups guided us on the appropriate direction to take, building relevant partnerships and strategies to expand", image: profileIcon },
    { title: "Mike Wilson", position: "Investor", text: "Rits Capital’s Climifi has been instrumental in helping us identify and invest in promising sustainable investments. Their insight and dedication to impact-driven investing made all the difference in our portfolio’s success", image: profileIcon },
    { title: "Asitava Bose", position: "Group CFO, Lava International", text: "Rits Capital provided exceptional strategic advisory and fundraising support that was pivotal for our growth at Lava International. Their deep expertise and commitment to our success set them apart", image: profileIcon },
    { title: "Carolina", position: "Moon Capital", text: "Rits Capital has consistently delivered top-tier quality in investment transactions, exceeding our expectations. Their meticulous approach and insightful strategies have proven invaluable for our success in the market.", image: profileIcon },
  ];

  // Duplicating the card data for smooth infinite scrolling
  const cards = [...cardData, ...cardData]; 

  return (
    <div className="slider-wrapper overflow-hidden p-6">
      <div className="animate-scroll flex w-max">
        {cards.map((card, index) => (
          <Card key={index} className="w-80 min-w-[300px] flex-shrink-0 mx-2 bg-white">
            <Card.Body>
              <div className="flex items-center mb-4">
                <Image 
                  src={card.image} 
                  alt={`Image for ${card.title}`} 
                  width={40} 
                  height={40} 
                  className="mr-4 rounded-full"
                />
                <div className='text-left'>
                  <Card.Title className="text-[18px] font-semibold mb-1 text-[#0F0F0F]">
                    {card.title}
                  </Card.Title>
                  <Card.Subtitle className="text-sm text-[#5F5F5F] leading-[22px] text-[15px]">
                    {card.position}
                  </Card.Subtitle>
                </div>
              </div>
              <Card.Text className="text-sm leading-tight mt-4 font-[400] leading-7 text-left">
                {card.text}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Cardmover;
