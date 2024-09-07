import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Card, CardBody, Container, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import MobileMenu from "../mobiheader";

function Headers() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [showWealthSubpoints, setShowWealthSubpoints] = useState(false);
  const [showBankingSubpoints, setShowBankingSubpoints] = useState(false);
  const [showAccountingSubpoints, setShowAccountingSubpoints] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleToggleOverlay = () => {
    setOverlayVisible(true);
  };

  const handleToggleOverlayOut = () => {
    setOverlayVisible(false);
  };

  const handleMenuItemClick = (menu) => {
    if (menu === "wealth") {
      setActiveSubmenu("wealth");
    } else if (menu === "banking") {
      setActiveSubmenu("banking");
    } else if (menu === "accounting") {
      setActiveSubmenu("accounting");
    } else {
      setActiveSubmenu(null);
    }
  };

  const handleClickOutside = (event) => {
    const overlayElement = document.querySelector(".overlay");
    const buttonElement = document.querySelector(".what-we-do-btn");
    const subpointsWealthElement = document.querySelector(".subpoints-wealth");
    const subpointsBankingElement =
      document.querySelector(".subpoints-banking");
    const subpointsAccountingElement = document.querySelector(
      ".subpoints-accounting"
    );

    if (
      isOverlayVisible &&
      overlayElement &&
      !overlayElement.contains(event.target) &&
      buttonElement &&
      !buttonElement.contains(event.target) &&
      (!subpointsWealthElement ||
        !subpointsWealthElement.contains(event.target)) &&
      (!subpointsBankingElement ||
        !subpointsBankingElement.contains(event.target)) &&
      (!subpointsAccountingElement ||
        !subpointsAccountingElement.contains(event.target))
    ) {
      setOverlayVisible(false);
      setShowWealthSubpoints(false);
      setShowBankingSubpoints(false);
      setShowAccountingSubpoints(false);
      setActiveSubmenu(null);
    }
  };

  const handleMouseEnterWealth = () => {
    setShowWealthSubpoints(true);
  };

  const handleMouseLeaveWealth = () => {
    setShowWealthSubpoints(false);
  };

  const handleMouseEnterBanking = () => {
    setShowBankingSubpoints(true);
  };

  const handleMouseLeaveBanking = () => {
    setShowBankingSubpoints(false);
  };

  const handleMouseEnterAccounting = () => {
    setShowAccountingSubpoints(true);
  };

  const handleMouseLeaveAccounting = () => {
    setShowAccountingSubpoints(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOverlayVisible]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rits Capital</title>
      </Head>
      <Navbar
        expand="lg"
        className="bg-body-tertiar headerWrap bg-transparent  w-full h-18 bg-white"
      >
        <Container className="bg-white">
          <Navbar.Brand href="#home">
            <div className="items-center flex">
              <Image
                src="/assets/ritslogo1.png"
                alt="RITS Logo"
                width={100}
                height={50}
                className="block"
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto nav-spaced  hidden md:flex ">
              {/* <Nav.Link href="#">About</Nav.Link> */}
              <Nav.Link
                href="#"
                onMouseEnter={handleToggleOverlay}
                className="what-we-do-btn"
                suppressHydrationWarning={true}
              >
                What We Do
              </Nav.Link>
              {/* <Nav.Link href="#">Insight</Nav.Link> */}
              <Nav.Link href="#career">Career</Nav.Link>
            </Nav>

            <div className="mr-[15px] ">
              <Nav className="me-auto hidden md:block">
                <Nav.Link
                  href="#investor-form"
                  className="bg-[#070707] text-white rounded font-normal py-2 px-4 flex items-center"
                >
                  Invest Now
                  <Image
                    src="/icon/Vector.png"
                    alt="Arrow Icon"
                    width={8}
                    height={8}
                    className="ml-2"
                  />
                </Nav.Link>
              </Nav>
            </div>
            <MobileMenu />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {isOverlayVisible && (
        <div
          className="overlay bg-white hidden md:flex"
          onMouseLeave={handleToggleOverlayOut}
        >
          <Card className="container-fluid flex justify-start  border-none items-c flex-col text-start bg-[#F9F9F9">
            <CardBody className="w-[50%] bg-[#F9F9F9]">
              <ul className="list-unstyled  flex flex-col items-end text-right ">
                <li onMouseEnter={() => setActiveSubmenu(null)}>
                  <a
                    className="py-2 px-3  border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold"
                    href="#investor-form"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    Pre IPO & Unlisted Equities
                    <span className="ml-2">
                      <Image
                        src="/assets/events/arrowicon.png"
                        alt="arrow icon"
                        width={16}
                        height={16}
                        className={`transition-opacity duration-200  ${
                          activeSubmenu === "Pre IPO"
                            ? "opacity-100"
                            : "opacity-0 "
                        }`}
                      />
                    </span>
                  </a>
                </li>
                <li
                  onMouseEnter={() => handleMenuItemClick("wealth")}
                  // onMouseLeave={() => handleMenuItemClick("")}
                >
                  <a
                    className="py-2 px-3  border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold "
                    href="#"
                    onClick={() => handleMenuItemClick("wealth")}
                    style={{ display: "flex", alignItems: "center" }} // Ensures proper alignment
                  >
                    <span> Wealth Management Services</span>
                    <span className="ml-2">
                      <Image
                        src="/assets/events/arrowicon.png"
                        alt="arrow icon"
                        width={16}
                        height={16}
                        className={`transition-opacity duration-200  ${
                          activeSubmenu === "wealth"
                            ? "opacity-100"
                            : "opacity-0 "
                        }`}
                      />
                    </span>
                  </a>
                </li>

                <li onMouseEnter={() => setActiveSubmenu(null)}>
                  <a
                    className="py-2 px-3 border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold"
                    href="#investor-form"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    Smart Model Portfolio
                    <span className="ml-2">
                      <Image
                        src="/assets/events/arrowicon.png"
                        alt="arrow icon"
                        width={16}
                        height={16}
                        className={`transition-opacity duration-200  ${
                          activeSubmenu === "smart"
                            ? "opacity-100"
                            : "opacity-0 "
                        }`}
                      />
                    </span>
                  </a>
                </li>

                <li
                  onMouseEnter={() => handleMenuItemClick("banking")}
                  // onMouseLeave={() => handleMenuItemClick("")} // optional if you want to handle mouse leave differently
                >
                  <a
                    className="py-2 px-3  border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold"
                    href="#"
                    onClick={() => handleMenuItemClick("banking")}
                    style={{ display: "flex", alignItems: "center" }} // Ensures proper alignment
                  >
                    <span>Investment Banking</span>
                    <span className="ml-2">
                      <Image
                        src="/assets/events/arrowicon.png"
                        alt="arrow icon"
                        width={16}
                        height={16}
                        className={`transition-opacity duration-200  ${
                          activeSubmenu === "banking"
                            ? "opacity-100"
                            : "opacity-0 "
                        }`}
                      />
                    </span>
                  </a>
                </li>

                <li
                  onMouseEnter={() => handleMenuItemClick("accounting")}
                  // onMouseLeave={handleMouseLeaveAccounting}
                  className="relative transition-all duration-300 ease-in-out h-auto py-2"
                >
                  <a
                    className="py-2 px-3  border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold "
                    href="#"
                    onClick={() => handleMenuItemClick("accounting")}
                    style={{ display: "flex", alignItems: "center" }} // Ensures proper alignment
                  >
                    <span>Accounting and Tax Services Support</span>
                    <span className="ml-2">
                      <Image
                        src="/assets/events/arrowicon.png"
                        alt="arrow icon"
                        width={16}
                        height={16}
                        className={`transition-opacity duration-200  ${
                          activeSubmenu === "accounting"
                            ? "opacity-100"
                            : "opacity-0 "
                        }`}
                      />
                    </span>
                  </a>
                </li>

                <li
                  onMouseEnter={() => handleMenuItemClick("startup")}
                  // onMouseLeave={handleMouseLeaveStartup}
                  className="relative transition-all duration-300 ease-in-out"
                >
                  <a
                    className="py-2 px-3 border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold"
                    href="#investor-form"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    Startup Fundraise Support
                    <span className="ml-2">
                      <Image
                        src="/assets/events/arrowicon.png"
                        alt="arrow icon"
                        width={16}
                        height={16}
                        className={`transition-opacity duration-200  ${
                          activeSubmenu === "smart"
                            ? "opacity-100"
                            : "opacity-0 "
                        }`}
                      />
                    </span>
                  </a>
                </li>

                <li onMouseEnter={() => setActiveSubmenu(null)}>
                  <a
                    className="py-2 px-3  border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold"
                    href="https://climifi.com/"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    Sustainable Investing
                    <span className="ml-2">
                      <Image
                        src="/assets/events/arrowicon.png"
                        alt="arrow icon"
                        width={16}
                        height={16}
                        className={`transition-opacity duration-200  ${
                          activeSubmenu === "smart"
                            ? "opacity-100"
                            : "opacity-0 "
                        }`}
                      />
                    </span>
                  </a>
                </li>
              </ul>
            </CardBody>
            {/* Render Submenu based on the active menu */}
            {activeSubmenu === "wealth" && (
              <div
                className="position-absolute top-0 end-0  subpoints-wealth w-[50%]"
                onMouseLeave={handleMouseLeaveWealth}
              >
                <div
                  className=" rounded-lg  bg-white w-full flex justify-start items-start pl-6"
                  style={{ width: "100%" }}
                >
                  <ul className="list-unstyled text-start">
                    <li className="py-2 px-3 border-b border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold">
                      <a href="#investor-form">
                        Portfolio Management Service PMS
                      </a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold">
                      <a href="#investor-form">Startup Investment</a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold">
                      <a href="#investor-form">SME IPO Investment</a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold">
                      <a href="#investor-form">Real Estate Investment</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeSubmenu === "banking" && (
              <div
                className="position-absolute top-0 end-0  w-[50%] subpoints-banking"
                onMouseLeave={handleMouseLeaveBanking}
              >
                <div
                  className=" rounded-lg  bg-white w-full flex justify-start items-start pl-6 "
                  style={{ width: "100%" }}
                >
                  <ul className="wbkit list-unstyled text-start overflow-y-scroll h-[250px] justify-start items-start pl-4">
                    <li className="py-2 px-3 border-b border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold">
                      <a href="#investor-form">IPO Advisory</a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold">
                      <a href="#investor-form">M&A</a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold">
                      <a href="#investor-form">
                        Private Equity/Pre-IPO placement
                      </a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold">
                      <a href="#investor-form">Valuation</a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      <a href="#investor-form">ECM Advisory</a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      <a href="#investor-form">Debt Advisory</a>
                    </li>
                    <li className="py-2 px-3">
                      <a href="#investor-form">SPAC</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeSubmenu === "accounting" && (
              <div
                className="position-absolute top-0 end-0  w-[50%] subpoints-accounting"
                onMouseLeave={handleMouseLeaveAccounting}
              >
                <div
                  className="rounded-lg  bg-white w-full flex justify-start items-start pl-6"
                  style={{ width: "100%" }}
                >
                  <ul className="wbkit list-unstyled text-start overflow-y-scroll h-[250px]">
                    <li
                      className="py-2 px-3 border-b
                     border-gray-200"
                    >
                      {/* <a href="#investor-fx`orm">IPO Advisory</a> */}
                    </li>
                    <li className="py-2 px-3 border-b border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold">
                      <a href="#investor-form">
                        Virtual CFO & Corporate Finance
                      </a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold">
                      <a href="#investor-form">Bookkeeping</a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold">
                      <a href="#investor-form">Audit Support & Assurance</a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold">
                      <a href="#investor-form">Financial Reporting</a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold">
                      <a href="#investor-form">Budgeting and Forecasting</a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold">
                      <a href="#investor-form">Corporate Tax & Compliances</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </Card>
        </div>
      )}
    </>
  );
}

export default Headers;
