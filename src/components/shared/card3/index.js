import React from "react";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import { useRouter } from 'next/router';


function Cardthree({ paragraphContent, title }) {

  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push('#investor-form');
  };



  return (
    <div className="flex justify-start items-center w-full bg-white">
      <Card className="card_3 no-border  h-full p-4">
        <Card.Body>
          <Card.Title className="font-bold text-[24px] text-[#0F0F0F] mb-3">
            {title}
          </Card.Title>
          <Card.Text className="text-start text-[16px] font-regular text-[#5F5F5F]">
            {Array.isArray(paragraphContent) ? (
              <ul className="list-inside list-disc space-y-2">
                {paragraphContent.map((item, index) => (
                  <li key={index} className="leading-6">{item}</li>
                ))}
              </ul>
            ) : (
              <span className="leading-6">{paragraphContent}</span>
            )}
          </Card.Text>
          <div className="mt-4">
            <Card.Link
              className="learn-more-link flex items-center text-blue-500 cursor-pointer"
              onClick={handleLearnMoreClick}
            >
              Learn More
              <Image
                src="/assets/events/arrowicon.png"
                alt="arrow icon"
                width={16}
                height={16}
                className="ml-2"
              />
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cardthree;
