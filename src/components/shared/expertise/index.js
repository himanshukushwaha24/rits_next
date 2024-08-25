import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';

const expertiseData = [
  {
    image: "/assets/insight/expertise1.png",
    text: "Revisiting the 2024 IPO Outlook: Where are we now?",
  },
  {
    image: "/assets/insight/expertise2.png",
    text: "Revisiting the 2024 IPO Outlook: Where are we now?",
  },
  {
    image: "/assets/insight/expertise3.png",
    text: "Revisiting the 2024 IPO Outlook: Where are we now?",
  },
  {
    image: "/assets/insight/expertise4.png",
    text: "Revisiting the 2024 IPO Outlook: Where are we now?",
  },
];

function Expertise() {
  return (
    <div className="expertise-grid flex  md:overflow-x-hidden md:grid md:grid-cols-2 gap-4 overflow-y-hidden w-full">
      {expertiseData.map((item, index) => (
        <Card 
          key={index} 
          className="flex-shrink-0 w-11/12 md:w-full transform transition-all duration-300 hover:scale-105 mx-auto cursor-default overflow-hidden"
        >
          <div className="relative h-40 md:h-56 xl:h-64 overflow-hidden">
            <Image
              src={item.image}
              alt={item.text}
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
          <Card.Body>
            <Card.Text className="text-center text-xs md:text-sm">
              {item.text}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}


export default Expertise;
