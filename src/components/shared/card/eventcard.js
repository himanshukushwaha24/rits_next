import React from "react";
import { useState, useEffect, useRef } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import Image from "next/image";

import EventSlider from "../eventslider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function SimpleSlider() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create payload with only email
    const payload = { email: email, website: "ritscapital.com" };

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
    <div className="slider-container max-w-full  hidden lg:block px-6">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div className="">
          <Card className="w-full  border-none">
            <Card.Body className="flex flex-col md:flex-row justify-evenly space-y-5 md:space-y-4 border-none">
              <div className="card_left w-full md:w-[90%]  ">
                <Card className="w-full h-auto bg-white  border-none  ">
                  <Card.Body className="flex flex-col gap-3  ">
                    {/* First Row: Split into 30% and 70% */}
                    <div className="flex w-full md:[30%] justify-between border md:h-[150px] items-center ">
                      <div className="w-[30%] bg-[#009837] h-full border-l-[3px]  border-l-solid border-l-[#1D9B82] bg-opacity-10 flex items-center justify-center">
                        <h4 className="text-[20px] md:text-[20px] font-bold text-[#009837] text-center ">
                          <div className="md:w-[100px] text-[20px] md:text-[15px] font-bold text-[#ffffff] text-center border-1-[1px] bg-[#009837] py-2 rounded-lg mx-auto">
                            <Link
                              href={
                                "https://www.ritscapital.com/startup-pitch-day/index.html"
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Upcoming
                            </Link>
                          </div>
                          <br />
                          26th September{" "}
                          <div className=" flex text-center justify-center items-center text-[28px]">
                            2024
                          </div>
                        </h4>
                      </div>
                      <div className="w-[70%] bg-[#FFFFFF] pl-[35px] flex flex-col gap-4 ">
                        <Link
                          href="https://www.ritscapital.com/startup-pitch-day/index.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[22px]  text-[#0F0F0F] font-semibold"
                        >
                          Rits Capital Startup Pitch Day
                        </Link>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-sm text-gray-500 flex items-center">
                            <Image
                              src="/icon/physical.png"
                              alt="In-person Icon"
                              width={16}
                              height={16}
                              className="mr-1"
                            />
                            In-person
                          </span>
                          <span className="text-sm text-gray-500">|</span>
                          <span className="text-sm text-gray-500">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> USA
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Second Row */}
                    <div className="flex w-full justify-between border md:h-[150px] items-center">
                      <div className="w-[30%] bg-[#009837] h-full border-l-[3px]  border-l-solid border-l-[#1D9B82] bg-opacity-10 flex items-center justify-center">
                        <h4 className="text-[20px] md:text-[20px] font-bold text-[#009837] ">
                          27th April{" "}
                          <div className=" flex text-center justify-center items-center text-[28px]">
                            2024
                          </div>
                        </h4>
                      </div>
                      <div className="w-[70%] bg-[#FFFFFF]  pl-[35px] flex flex-col gap-4">
                        <p className="text-[22px]  text-[#0F0F0F] font-semibold">
                          Climifi Investors’ Day 2.0
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-sm text-gray-500 flex items-center">
                            <Image
                              src="/icon/physical.png"
                              alt="In-person Icon"
                              width={16}
                              height={16}
                              className="mr-1"
                            />
                            In-person
                          </span>

                          <span className="text-sm text-gray-500">|</span>
                          <span className="text-sm text-gray-500">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> India
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Third Row */}
                    <div className="flex w-full border md:h-[150px] items-center">
                      <div className="w-[30%] bg-[#009837] h-full border-l-[3px]  border-l-solid border-l-[#1D9B82] bg-opacity-10 flex items-center justify-center">
                        <h4 className="text-[20px] md:text-[20px] font-bold text-[#009837]">
                          27th March{" "}
                          <div className=" flex text-center justify-center items-center text-[28px]">
                            2024
                          </div>
                        </h4>
                      </div>
                      <div className="w-[70%] bg-[#FFFFFF] pl-[35px] flex flex-col gap-4">
                        <p className="text-[22px]  text-[#0F0F0F] font-semibold">
                          Rits Capital Investor Symposium
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-sm text-gray-500 flex items-center">
                            <Image
                              src="/icon/physical.png"
                              alt="In-person Icon"
                              width={16}
                              height={16}
                              className="mr-1"
                            />
                            In-person
                          </span>

                          <span className="text-sm text-gray-500">|</span>
                          <span className="text-sm text-gray-500">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> USA
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>

              <div className="card_right w-full h-[480px] md:mt-[8px] md:h-[485px] md:w-[50%] flex justify-center items-center bg-[#F0F0F0] rounded-tr-[80px] px-4">
                <Card className="w-full h-auto  flex justify-center items-center  border-none bg-transparent ">
                  <EventSlider />
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label></Form.Label>
                      <Form.Control
                        className="w-full md:w-[400px]"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Button
                      className="w-full md:w-[400px]"
                      variant="success"
                      type="submit"
                    >
                      Subscribe for Upcoming Events
                    </Button>
                  </Form>
                  {successMessage && (
                    <Alert
                      variant={
                        successMessage.startsWith("Thank")
                          ? "success"
                          : "danger"
                      }
                      className="mt-3"
                    >
                      {successMessage}
                    </Alert>
                  )}
                </Card>
                {/* <EventSlider/> */}
              </div>
            </Card.Body>
          </Card>
        </div>

        {/* Additional slides can go here */}
        <div className="flex flex-col">
          <div className="">
            <Card className="w-full h-auto bg-white  border-none">
              <Card.Body className="flex flex-col md:flex-row justify-evenly space-y-4 md:space-y-4">
                <div className="card_left w-full md:w-[65%]">
                  <Card className="w-full h-auto bg-white border-none">
                    <Card.Body className="flex flex-col space-y-4">
                      {/* First Row: Split into 30% and 70% */}
                      <div className="flex w-full border md:h-[150px] items-center ">
                        <div className="w-[30%] bg-[#009837] h-full border-l-[3px]  border-l-solid border-l-[#1D9B82] bg-opacity-10 flex items-center justify-center">
                          <h4 className="text-[20px] md:text-[20px] font-bold text-[#009837]">
                            29th January
                            <div className=" flex text-center justify-center items-center text-[28px]">
                              2024
                            </div>
                          </h4>
                        </div>



                        <div className="w-[70%] bg-[#FFFFFF] pl-[35px] flex flex-col gap-4">
                          <p className="text-[22px]  text-[#0F0F0F] font-semibold">
                            Rits Capital CXO Conclave
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-sm text-gray-500 flex items-center">
                              <Image
                                src="/icon/physical.png"
                                alt="In-person Icon"
                                width={16}
                                height={16}
                                className="mr-1"
                              />
                              In-person
                            </span>

                            <span className="text-sm text-gray-500">|</span>
                            <span className="text-sm text-gray-500">
                              <FontAwesomeIcon icon={faMapMarkerAlt} /> India
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Second Row */}
                      <div className="flex w-full border md:h-[150px] items-center ">
                        <div className="w-[30%] bg-[#009837] h-full border-l-[3px]  border-l-solid border-l-[#1D9B82] bg-opacity-10 flex items-center justify-center">
                          <h4 className="text-[20px] md:text-[20px] font-bold text-[#009837]">
                            12th January{" "}
                            <div className=" flex text-center justify-center items-center text-[28px]">
                              2024
                            </div>
                          </h4>
                        </div>
                        <div className="w-[70%] bg-[#FFFFFF] pl-[35px] flex flex-col gap-4">
                          <p className="text-[22px]  text-[#0F0F0F] font-semibold">
                            Climifi Investors’ Day
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-sm text-gray-500 flex items-center">
                              <Image
                                src="/icon/physical.png"
                                alt="In-person Icon"
                                width={16}
                                height={16}
                                className="mr-1"
                              />
                              In-person
                            </span>

                            <span className="text-sm text-gray-500">|</span>
                            <span className="text-sm text-gray-500">
                              <FontAwesomeIcon icon={faMapMarkerAlt} /> USA
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Third Row */}
                      <div className="flex w-full border md:h-[150px] items-center ">
                        <div className="w-[30%] bg-[#009837] h-full border-l-[3px]  border-l-solid border-l-[#1D9B82] bg-opacity-10 flex items-center justify-center">
                          <h4 className="text-[20px] md:text-[20px] font-bold text-[#009837]">
                            26th July{" "}
                            <div className=" flex text-center justify-center items-center text-[28px]">
                              2023
                            </div>
                          </h4>
                        </div>
                        <div className="w-[70%] bg-[#FFFFFF] pl-[35px] flex flex-col gap-4">
                          <p className="text-[22px]  text-[#0F0F0F] font-semibold">
                          Rits Capital Symposium
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-sm text-gray-500 flex items-center">
                              <Image
                                src="/icon/physical.png"
                                alt="In-person Icon"
                                width={16}
                                height={16}
                                className="mr-1"
                              />
                              In-person
                            </span>

                            <span className="text-sm text-gray-500">|</span>
                            <span className="text-sm text-gray-500">
                              <FontAwesomeIcon icon={faMapMarkerAlt} /> USA
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>

                <div className="card_right w-full h-[480px] md:mt-[8px] md:h-[485px] md:w-[50%] flex justify-center items-center bg-[#F0F0F0] rounded-tr-[80px] px-4">
                  <Card className="w-full h-auto flex justify-center items-center  border-none bg-transparent">
                    <div className="flex justify-center items-center">
                      <EventSlider />
                    </div>

                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label></Form.Label>
                        <Form.Control
                          className="w-full md:w-[400px]"
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <Button
                        className="w-full md:w-[400px]"
                        variant="success"
                        type="submit"
                      >
                        Subscribe for Upcoming Events
                      </Button>
                    </Form>
                    {successMessage && (
                      <Alert
                        variant={
                          successMessage.startsWith("Thank")
                            ? "success"
                            : "danger"
                        }
                        className="mt-3"
                      >
                        {successMessage}
                      </Alert>
                    )}
                  </Card>
                  {/* <EventSlider/> */}
                </div>
      
              </Card.Body>
            </Card>
          </div>
        </div>
      </Slider>
      <div className="flex items-center justify-center gap-12 mt-4 ">
        <button className="button" onClick={previous}>
          <img src="/assets/leftarrow.png" alt="Left Arrow" />
        </button>
        <span className="w-[30px] h-[5px] bg-green-800"></span>
        <button className="button" onClick={previous}>
          <img src="/assets/rightarrow.png" alt="Right Arrow" />
        </button>
      </div>
    </div>
  );
}

export default SimpleSlider;
