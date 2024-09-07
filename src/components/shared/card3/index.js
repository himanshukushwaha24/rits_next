import React from "react";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import { useRouter } from "next/router";

function Cardthree({ paragraphContent, title }) {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    // router.push('#investor-form');
    console.log("title==", title);
    if (title === "Sustainable Investment") {
      window.location.href = "https://climifi.com";
    } else {
      router.push("#investor-form");
    }
  };

  return (
    <div className="flex justify-start items-center w-full md:w-[350px] p-3 ">
      <div className="card_3 no-borderw-full md:w-[350px] h-full  border-none ">
       
          <div className=" w-full md:w-[300px] font-bold text-[24px] text-[#0F0F0F] mb-3">
            {title}
          </div>
          <div className="text-start text-[16px] font-regular text-[#5F5F5F]">
            {Array.isArray(paragraphContent) ? (
              <ul className="list-inside list-disc space-y-2 w-full md:w-[300px]">
                {paragraphContent.map((item, index) => (
                  <li key={index} className="leading-6">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <span className="leading-6">{paragraphContent}</span>
            )}
          </div>
          <div className="mt-4">
            <Card.Link
              className="learn-more-link flex items-center text-blue-500 cursor-pointer w-full md:w-[200px] "
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
          {/* <div
            className="flex justify-end  ml-[340px] mt-[250px] hidden md:block  "
            style={{
              backgroundImage: `url(${"/assets/whatwedo/wedologo1.png"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "200px",
              width: "125px",
              borderRadius: "10px 10px 0 0",
              marginTop: "60px",
              marginRight: "0px",
              opacity: "0.3",
            }}
          ></div> */}
        
      </div>
    </div>
  );
}

export default Cardthree;
