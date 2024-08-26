import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";

function Headers() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [showWealthSubpoints, setShowWealthSubpoints] = useState(false);
  const [showBankingSubpoints, setShowBankingSubpoints] = useState(false);
  const [showAccountingSubpoints, setShowAccountingSubpoints] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleToggleOverlay = () => { 
    setOverlayVisible(true);
  };

  const handleMenuItemClick = (menu) => {
    setActiveSubmenu(menu === activeSubmenu ? null : menu);
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
        className="bg-body-tertiary headerWrap bg-transparent shadow-lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <div className="flex items-center">
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
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-spaced">
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link
                href="#"
                // onClick={handleToggleOverlay}
                onMouseEnter={handleToggleOverlay}
                className="what-we-do-btn"
              >
                What We Do
              </Nav.Link>
              <Nav.Link href="#">Insight</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>
            </Nav>

            <div className="mr-[15px]">
              <Nav className="me-auto">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {isOverlayVisible && (
        <div className="overlay hidden md:flex">
          <div className="container-fluid d-flex justify-content-center align-items-center flex-column text-center">
            <ul className="list-unstyled text-start">
              <li onMouseEnter={() => setActiveSubmenu(null)}>
                <a href="#investor-form">Pre IPO & Unlisted Equities</a>
              </li>
              <li onMouseEnter={() => setActiveSubmenu(null)}>
                <a href="#investor-form">Smart Model Portfolio</a>
              </li>
              <li
                onMouseEnter={() => handleMenuItemClick("wealth")}
                // onMouseLeave={() => handleMenuItemClick("wealth")}
              >
                <a href="#" onClick={() => handleMenuItemClick("wealth")}>
                  Wealth Management Services
                </a>
              </li>
              <li
                onMouseEnter={() => handleMenuItemClick("banking")}
                // onMouseLeave={handleMouseLeaveBanking}
              >
                <a href="#" onClick={() => handleMenuItemClick("banking")}>
                  Investment Banking
                </a>
              </li>
              <li
                onMouseEnter={() => handleMenuItemClick("accounting")}
                // onMouseLeave={handleMouseLeaveAccounting}
              >
                <a href="#" onClick={() => handleMenuItemClick("accounting")}>
                  Accounting and Tax Services Support
                </a>
              </li>
              <li onMouseEnter={() => setActiveSubmenu(null)}>
                <a href="https://climifi.com/">Sustainable Investing</a>
              </li>
            </ul>
            {/* Render Submenu based on the active menu */}
            {activeSubmenu === "wealth" && (
              <div
                className="position-absolute top-0 end-0 me-5 subpoints-wealth"
                onMouseLeave={handleMouseLeaveWealth}
              >
                <div
                  className="p-3 rounded-lg ml-[-150px]"
                  style={{ width: "400px" }}
                >
                  <ul className="list-unstyled text-start">
                    <li className="py-2 px-3 border-b border-gray-200 flex-wrap whitespace-nowrap">
                      <a href="#investor-form">
                        Portfolio Management Service PMS
                      </a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      <a href="#investor-form">Startup Investment</a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      <a href="#investor-form">SME IPO Investment</a>
                    </li>
                    <li className="py-2 px-3">
                      <a href="#investor-form">Real Estate Investment</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeSubmenu === "banking" && (
              <div
                className="position-absolute top-0 end-0 me-5 subpoints-banking"
                onMouseLeave={handleMouseLeaveBanking}
              >
                <div
                  className="p-3 rounded-lg ml-[-150px]"
                  style={{ width: "400px" }}
                >
                  <ul className="wbkit list-unstyled text-start overflow-y-scroll h-[250px]">
                    <li className="py-2 px-3 border-b border-gray-200"></li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      <a href="#investor-form">IPO Advisory</a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      <a href="#investor-form">M&A</a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      <a href="#investor-form">
                        Private Equity/Pre-IPO placement
                      </a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
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
                className="position-absolute top-0 end-0 me-5 subpoints-accounting"
                onMouseLeave={handleMouseLeaveAccounting}
              >
                <div
                  className="p-3 rounded-lg ml-[-150px]"
                  style={{ width: "400px" }}
                >
                  <ul className="wbkit list-unstyled text-start overflow-y-scroll h-[250px]">
                    <li className="py-2 px-3 border-b border-gray-200">
                      <a href="#investor-form">IPO Advisory</a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      <a href="#investor-form">
                        Virtual CFO & Corporate Finance
                      </a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      <a href="#investor-form">Bookkeeping</a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      <a href="#investor-form">Audit Support & Assurance</a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      <a href="#investor-form">Financial Reporting</a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      <a href="#investor-form">Budgeting and Forecasting</a>
                    </li>
                    <li className="py-2 px-3">
                      <a href="#investor-form">Corporate Tax & Compliances</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {/* {showWealthSubpoints && (
              <div
                className="position-absolute top-0 end-0 me-5 subpoints-wealth"
                onMouseLeave={handleMouseLeaveWealth}
              >
                <div
                  className="p-3  rounded-lg ml-[-150px] border-bottom-only"
                  style={{ width: "400px" }}
                >
                  <ul className="list-unstyled">
                    <li className="py-2 px-3 border-b border-gray-200 flex-wrap whitespace-nowrap">
                      <a href="#investor-form">
                        Portfolio Management Service PMS
                      </a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      <a href="#investor-form">Startup Investment</a>
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      <a href="#investor-form">SME IPO Investment</a>
                    </li>
                    <li className="py-2 px-3">
                      <a href="#investor-form">Real Estate Investment</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            
            {showBankingSubpoints && (
              <div
                className="position-absolute top-0 end-0 me-5 subpoints-banking"
                onMouseLeave={handleMouseLeaveBanking}
              >
                <div
                  className="p-3 border-b border-gray-300 rounded-lg ml-[-150px]"
                  style={{
                    width: "400px",
                    borderLeft: "none",
                    borderRight: "none",
                    borderTop: "none",
                  }}
                >
                  <ul className="list-unstyled">
                    <li className="py-2 px-3 border-b border-gray-200 flex-wrap whitespace-nowrap">
                      IPO Advisory
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">M&A</li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      Private Equity/Pre-IPO placement
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      Valuation
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      ECM Advisory
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      Debt Advisory
                    </li>
                    <li className="py-2 px-3">SPAC</li>
                  </ul>
                </div>
              </div>
            )}
           
            {showAccountingSubpoints && (
              <div
                className="position-absolute top-0 end-0 me-5 subpoints-accounting"
                onMouseLeave={handleMouseLeaveAccounting}
              >
                <div
                  className="p-3 rounded-lg ml-[-150px]"
                  style={{
                    width: "400px",
                    borderBottom: "1px solid #E5E7EB", // Light gray border for the bottom
                    borderLeft: "none", // Remove left border
                    borderRight: "none", // Remove right border
                    borderTop: "none", // Remove top border
                  }}
                >
                  <ul className="list-unstyled">
                    <li className="py-2 px-3 border-b border-gray-200 flex-wrap whitespace-nowrap">
                      IPO Advisory
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      Virtual CFO & Corporate Finance
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      Bookkeeping
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      Audit Support & Assurance
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      Financial Reporting
                    </li>
                    <li className="py-2 px-3 border-b border-gray-200">
                      Budgeting and Forecasting
                    </li>
                    <li className="py-2 px-3">Corporate Tax & Compliances</li>
                  </ul>
                </div>
              </div>
            )}  */}
          </div>
        </div>
      )}
    </>
  );
}

export default Headers;
