import React from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import EventSlider from "../eventslider";
import { CardBody } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container max-w-full px-4">
      <Slider {...settings}>
        <div className="">
          <Card className="w-full  border-none shadow-xl">
            <Card.Body className="flex flex-col md:flex-row justify-evenly space-y-4 md:space-y-0">
              <div className="card_left w-full md:w-[45%]">
                <Card className="w-full h-auto bg-white shadow-sm border-none">
                  <Card.Body className="flex flex-col space-y-4">
                    {/* First Row: Split into 30% and 70% */}
                    <div className="flex w-full justify-between">
                      <div className="w-[30%] bg-[#009837] p-4 border-l-[3px] border-l-solid border-l-[#1D9B82] bg-opacity-10">
                        <h4 className="text-[14px] md:text-[20px] font-[700px] text-[#009837]">
                          Sep 26, <br /> 2024
                        </h4>
                      </div>
                      <div className="w-[70%] bg-[#FFFFFF] p-2 ">
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
                    <div className="flex w-full justify-between">
                      <div className="w-[30%] bg-[#009837] p-4 border-l-[3px] border-l-solid border-l-[#1D9B82] bg-opacity-10">
                        <h4 className="text-[14px] md:text-[20px] font-[700px] text-[#009837]">
                          27th April <br /> 2024
                        </h4>
                      </div>
                      <div className="w-[70%] bg-[#FFFFFF] p-2">
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
                    <div className="flex w-full ">
                      <div className="w-[30%] bg-[#009837] p-4 border-l-[3px] border-l-solid border-l-[#1D9B82] bg-opacity-10">
                        <h4 className="text-[14px] md:text-[20px] font-[700px] text-[#009837]">
                          27th March <br /> 2024
                        </h4>
                      </div>
                      <div className="w-[70%] bg-[#FFFFFF] p-2">
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
                    {/* Fourth Row */}
                    {/* <div className="flex w-full ">
                      <div className="w-[40%] bg-[#009837] p-4 border-l-[3px] border-l-solid border-l-[#1D9B82] bg-opacity-10">
                        <h4 className="text-[20px] font-[700px] text-[#009837]">
                          Jan 29, <br/> 2024
                        </h4>
                      </div>
                      <div className="w-[70%] bg-[#FFFFFF] p-2">
                        <p className="text-sm text-gray-600">
                        Rits Capital CXO Conclave
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-sm text-gray-500">In-person</span>
                          <span className="text-sm text-gray-500">|</span>
                          <span className="text-sm text-gray-500"><FontAwesomeIcon icon={faMapMarkerAlt} />  India</span>
                        </div>
                      </div>
                    </div> */}
                    {/* Fifth Row */}
                    {/* <div className="flex w-full ">
                      <div className="w-[40%] bg-[#009837] p-4 border-l-[3px] border-l-solid border-l-[#1D9B82] bg-opacity-10">
                        <h4 className="text-[20px] font-[700px] text-[#009837]">
                          Jan 12, <br/> 2024
                        </h4>
                      </div>
                      <div className="w-[70%] bg-[#FFFFFF] p-2">
                        <p className="text-sm text-gray-600">
                        Climifi Investors Day
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-sm text-gray-500">In-person</span>
                          <span className="text-sm text-gray-500">|</span>
                          <span className="text-sm text-gray-500"><FontAwesomeIcon icon={faMapMarkerAlt} />  India</span>
                        </div>
                      </div>
                    </div> */}
                  </Card.Body>
                </Card>
              </div>

              <div className="card_right w-full md:w-[45%]">
                <Card className="w-full h-auto bg-white shadow-md border-none">
                  {/* <Image
                    src="/assets/events/events1.png"
                    alt="Event Image"
                    width={500}
                    height={300}
                    layout="responsive"
                    className="rounded-t-md"
                  /> */}
                
                    <EventSlider />
                 

                  <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label></Form.Label>
                      <Form.Control className="w-full md:w-[400px]"
                        type="email"
                        placeholder="Enter your email address"
                      />
                    </Form.Group>
                    <Button className="w-full md:w-[400px]" variant="success">
                      Subscribe for upcoming events
                    </Button>
                  </Form>
                </Card>
                {/* <EventSlider/> */}
              </div>
            </Card.Body>
          </Card>
        </div>

        {/* Additional slides can go here */}
        <div className="flex flex-col">
          <div className="">
            <Card className="w-full  border-none shadow-xl">
              <Card.Body className="flex flex-col md:flex-row justify-evenly space-y-4 md:space-y-0">
                <div className="card_left w-full md:w-[45%]">
                  <Card className="w-full h-auto bg-white shadow-sm border-none">
                    <Card.Body className="flex flex-col space-y-4">
                      {/* First Row: Split into 30% and 70% */}
                      <div className="flex w-full ">
                        <div className="w-[30%] bg-[#009837] p-4 border-l-[3px] border-l-solid border-l-[#1D9B82] bg-opacity-10">
                          <h4 className="text-[14px] md:text-[20px] font-[700px] text-[#009837]">
                            29th January <br /> 2024
                          </h4>
                        </div>
                        <div className="w-[70%] bg-[#FFFFFF] p-2">
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
                      <div className="flex w-full justify-between">
                        <div className="w-[30%] bg-[#009837] p-4 border-l-[3px] border-l-solid border-l-[#1D9B82] bg-opacity-10">
                          <h4 className="text-[14px]md:text-[20px] font-[700px] text-[#009837]">
                            12th January <br /> 2024
                          </h4>
                        </div>
                        <div className="w-[70%] bg-[#FFFFFF] p-2">
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
                      {/* <div className="flex w-full ">
                      <div className="w-[40%] bg-[#009837] p-4 border-l-[3px] border-l-solid border-l-[#1D9B82] bg-opacity-10">
                        <h4 className="text-[20px] font-[700px] text-[#009837]">
                          Mar 27, <br/> 2024
                        </h4>
                      </div>
                      <div className="w-[70%] bg-[#FFFFFF] p-2">
                        <p className="text-sm text-gray-600">
                        Rits Capital Investor Symposium
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-sm text-gray-500">In-person</span>
                          <span className="text-sm text-gray-500">|</span>
                          <span className="text-sm text-gray-500"><FontAwesomeIcon icon={faMapMarkerAlt} />  USA</span>
                        </div>
                      </div>
                    </div> */}
                      {/* Fourth Row */}

                      {/* Fifth Row */}
                    </Card.Body>
                  </Card>
                </div>

                <div className="card_right w-full md:w-[45%]">
                  <Card className="w-full bg-white shadow-md border-none">
                    {/* <Image
                    src="/assets/events/events1.png"
                    alt="Event Image"
                    width={500}
                    height={300}
                    layout="responsive"
                    className="rounded-t-md"
                  /> */}
                    <CardBody>
                      <EventSlider />
                    </CardBody>

                    <Form>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label></Form.Label>
                        <Form.Control className="w-full md:w-[400px]"
                          type="email"
                          placeholder="Enter your email address"
                        />
                      </Form.Group>
                      <Button className="w-full md:w-[400px]" variant="success">
                        Subscribe for upcoming events
                      </Button>
                    </Form>
                  </Card>
                  {/* <EventSlider/> */}
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
