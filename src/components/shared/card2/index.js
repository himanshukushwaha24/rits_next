import Card from "react-bootstrap/Card";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
function Cardtwo({ showWhatsAppIcon, selectedTitle, currentImage }) {
  const whatsAppLinks = {
    "Pre-IPO & Unlisted Equities":
      "https://chat.whatsapp.com/LSUnSmEfCWB7Wigomyg7CU",
    "Accounting and tax services support":
      "https://chat.whatsapp.com/B6MQCCWPLS8AosK7U6wiIp",
  };
  return (
    <div className=" justify-start items-center border-none ">
      <div
        className="rounded-tl-lg w-full h-auto custom-radius border-none "
        style={{ borderTopLeftRadius: "3.5rem", border: "none" }}
      >
        <div className="whatwedo_img relative h-[400px] md:h-[400px]  w-full md:w-[350px] ">
          <Image
            className="whtwedo_img2 md:ml-[-50px] md:mt-[30px] md:mr-[-16px] p-3 "
            src={currentImage}
            alt="What We Do 1"
            layout="fill"
            //   objectFit="cover"
          />
        </div>
      </div>
      <div className="relative w-full p-3 ">
        {showWhatsAppIcon && (
          <a
            href={whatsAppLinks[selectedTitle]}
            title="click to open whatsapp chat"
          >
            <button className="btn btn-success w-full md:w-[200px] text-sm whitespace-nowrap mt-[15px] md:mt-[-35px] md:ml-[140px]">
              <FontAwesomeIcon icon={faWhatsapp} /> Join WhatsApp Group
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default Cardtwo;
