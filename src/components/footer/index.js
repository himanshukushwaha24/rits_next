import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const scrollToWhatWeDo = () => {
    const section = document.getElementById("what-we-do");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create payload with only email
    const payload = { email: email, website: "ritscapital" };

    try {
      const rawResponse = await fetch(
        "https://api.khubero.com/website/contact",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const content = await rawResponse.json();
      console.log("Response:", content);
      setSuccessMessage(
        "Thank you! You have successfully subscribed to upcoming events."
      );
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage(
        "Sorry, there was an error with your submission. Please try again."
      );
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 2000); // 2000ms = 2 seconds

      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts or successMessage changes
    }
  }, [successMessage]);

  return (
    <>
      <footer className="footer-container h-full bg-white py-10">
        {/* <Image 
          src="/assets/ritslogo1.png"
          alt="Rits Capital Logo"
          width={150}
          height={100}
          className="ml-[90px] mb-12 mt-6"
        /> */}
        <div className="w-full container mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-0 md:gap-2">
          <div className="lg:col-span-1 ">
            <h3 className="font-bold text-black-800  text-left ml-[10px] md:ml-[20px] md:ml-[150px] text-[15px]">
              USA
            </h3>
            {/* <p className="text-black-800">
              Rits Capital is an independent investment firm with offices in
              United States, India, United Kingdom, Singapore, Hong Kong, and
              UAE.
            </p> */}
            <div className="container mx-auto px-2 mt-4 flex flex-col md:flex-row justify-between items-center text-black-800 ">
              <div className="flex flex-col md:flex-row justify-between w-full md:w-1/2">
                <ul className="space-y-2 text-black-600 ">
                 
                  <li>
                    <FontAwesomeIcon icon={faPhone} /> +1 925 915 6637
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faWhatsapp} /> +1 925 915 6637
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} /> rit@ritscapital.com
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> 225 Broadway, New York, 10038
                   
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> 108 Bishop ranch, San Ramon, CA 94583
                   
                  </li>
                </ul>
                {/* <div className="w-full md:w-1/2 p-4 border-2 bg-teal-700 ">
              <p>1.</p>
            </div> */}
                {/* <div className="w-full md:w-1/2 p-4 border-2 bg-red-900">
              <p>2</p>
            </div> */}
              </div>
            

            </div>
          </div>
          <div className="  justify-between text-left w-full md:w-1/2  md:mt-0 ">
            <h3 className="font-bold text-black-800 mb-4 text-left  md:ml-[20px] md:ml-[150px] text-[15px] text-[15px]">
              India
            </h3>
            <ul className="space-y-2 text-black-600 ">
              <li>
                <FontAwesomeIcon icon={faPhone} /> +918130806145
           
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} /> +919911003037
                
              </li>
              <li>
                <FontAwesomeIcon icon={faWhatsapp} /> +919711996998
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} /> rit@ritscapital.com
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> A-96, 1st Floor
                Sector 63 Noida, UP - 201301
              </li>
            </ul>
            {/* <div className="w-full md:w-1/2 p-4 border-2 bg-teal-700 ">
              <p>1.</p>
            </div> */}
            {/* <div className="w-full md:w-1/2 p-4 border-2 bg-red-900">
              <p>2</p>
            </div> */}
          </div>
          <div>
            <h3 className="font-semibold text-black-800 mb-4 text-[15px]">Services</h3>
            <ul className="space-y-2 text-black-600 cursor-pointer">
              <li onClick={scrollToWhatWeDo}>Pre-IPO & Unlisted Equities </li>
              <li onClick={scrollToWhatWeDo}>Wealth Managemnet Services</li> 
              <li onClick={scrollToWhatWeDo}>Smart Model Portfolio</li> 
              <li onClick={scrollToWhatWeDo}>Investment Banking</li>         
              <li onClick={scrollToWhatWeDo}>Accounting & Tax Service Support</li>
              <li onClick={scrollToWhatWeDo}>Startup Fundraise Support</li>
              <li onClick={scrollToWhatWeDo}>Sustainable Investing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black-800 mb-4 text-[15px] ">Quick Link</h3>
            <ul className="space-y-2 text-black-800 cursor-pointer">
              <li onClick={() => navigateTo("hero-sec")}>Home</li>
              {/* <li onClick={() => navigateTo("hero-sec")}>About</li> No action needed */}
              {/* <li onClick={() => navigateTo('')}>Insights</li> */}
              <li></li> {/* No text, no action */}
              <li onClick={() => navigateTo("career")}>Career</li>
              <li onClick={() => navigateTo("investor-form")}>Contact</li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
              {/* <div>
                <h3 className="font-semibold text-black-800 mb-4">
                  Contact Us
                </h3>
                <ul className="space-y-2 text-black-600">
                  <li>
                    <FontAwesomeIcon icon={faPhone} /> +1 925 915 6637
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faWhatsapp} /> +1 950 000 6123
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} /> rit@ritscapital.com
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Suite 7000 Casper,
                    WY 82609, USA
                  </li>
                </ul>
              </div> */}

              <div>
                <h3 className="font-semibold text-black-800 mb-4 text-[15px]">Subscribe</h3>
                <form onSubmit={handleSubmit}>
                  <div className="relative w-full flex items-center">
                    <input
                      type="text"
                      placeholder="support@ritscapital.com"
                      className="w-full p-2 border border-gray-300 rounded-md flex-grow"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button className="bg-black text-white px-4 py-2 rounded-md">
                      Send
                    </button>
                  </div>
                </form>
                {successMessage && (
                  <Alert
                    variant={
                      successMessage.startsWith("Thank") ? "success" : "danger"
                    }
                    className="mt-3"
                  >
                    {successMessage}
                  </Alert>
                )}
               
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/company/rits-capital/"
                className="text-[#000000] "
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-[20px]" />
              </a>
              <a
                href="https://www.instagram.com/rits_capital/"
                className="text-[#000000]"
              >
                <FontAwesomeIcon icon={faInstagram} className=" h-[20px]" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61554233074916"
                className="[#000000]"
              >
                <FontAwesomeIcon icon={faFacebook} className="h-[20px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center text-black-800">
          <p>Copyright © 2024 Rits Capital.</p>
          <div className="flex space-x-4">
            <a href="/assets/termsofuse.pdf"  target="blank" rel="noopener noreferrer"  className="hover:text-black-800">
              Terms of Use
            </a>
            <a href="/assets/privacy.pdf" target="blank" rel="noopener noreferrer"  className="hover:text-black-800">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
