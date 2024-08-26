import React from "react";
import Image from "next/image";
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
  return (
    <>
      <footer className="footer-container h-full bg-white   py-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
          <div className="lg:col-span-1">
            <Image
              src="/assets/ritslogo1.png"
              alt="Rits Capital Logo"
              width={150}
              height={100}
              className=""
            />
            <p className="text-black-800">
              Rits Capital is an independent investment firm with offices in
              United States, India, United Kingdom, Singapore, Hong Kong, and
              UAE.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black-800 mb-4">Services</h3>
            <ul className="space-y-2 text-black-600">
              <li>Wealth Management Service</li>
              <li>Investment Banking</li>
              <li>Financial Support Services</li>
              <li>Start-Up Incubation</li>
              <li>Pre-IPO</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black-800 mb-4">Quick Link</h3>
            <ul className="space-y-2 text-black-800">
              <li>Home</li>
              <li>About</li>
              <li>Insights</li>
              <li></li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
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
              </div>

              <div>
                <h3 className="font-semibold text-black-800 mb-4">Subscribe</h3>
                <div className="relative w-full flex items-center">
                  <input
                    type="text"
                    placeholder="support@ritscapital.com"
                    className="w-full p-2 border border-gray-300 rounded-md flex-grow"
                  />
                  <button className="bg-black text-white px-4 py-2 rounded-md">
                    Send
                  </button>
                </div>

                <p className="text-black-800 mt-2">
                  <span>Want to know the secret to grow your wealth</span>
                  <br />
                  Contact us Now +91 8130806145
                </p>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/company/rits-capital/" className="text-gray-600">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.instagram.com/rits_capital/" className="text-gray-600">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61554233074916" className="text-gray-600">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center text-black-800">
          <p>Copyright © 2024 Rits Capital.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-black-800">
              Terms of Use
            </a>
            <a href="#" className="hover:text-black-800">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
