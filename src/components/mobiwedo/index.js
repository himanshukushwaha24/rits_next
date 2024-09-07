import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { AccordionBody, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
export const MobiWeDo = () => {
  const [selectedItem, setSelectedItem] = useState("0");
  const [selectedSubItem, setSelectedSubItem] = useState(null);

  const handleLearnMoreClick = () => {
    const investorFormElement = document.getElementById("investor-form");
    if (investorFormElement) {
      investorFormElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAccordionItemClick = (id) => {
    setSelectedItem((prevId) => (prevId === id ? null : id));

    const tabs = document.querySelectorAll(".accordion-header");
    tabs.forEach((tab) => tab.classList.remove("active-tab"));

    const newActiveTab = document.querySelector(
      `.accordion-header[data-bs-target="#${id}"]`
    );
    if (newActiveTab) {
      newActiveTab.classList.add("active-tab");
    }

    // Add this block to handle sub-accordion items
    const subTabs = document.querySelectorAll(
      ".accordion-header.sub-accordion"
    );
    subTabs.forEach((subTab) => subTab.classList.remove("active-tab"));

    const newActiveSubTab = document.querySelector(
      `.accordion-header.sub-accordion[data-bs-target="#${id}"]`
    );
    if (newActiveSubTab) {
      newActiveSubTab.classList.add("active-tab");
      setSelectedSubItem(id);
    } else {
      setSelectedSubItem(null);
    }
  };

  const handleSubAccordionItemClick = (subId) => {
    setSelectedSubItem((prevSubId) => (prevSubId === subId ? null : subId));
  };
  return (
    <>
      <section className="lg:hidden px-2 border-none   py-4 w-full">
        <Accordion className="border-0  bg-white ">
          <Accordion.Item eventKey="0" className="w-[100vw] border-none p-2">
            <Accordion.Header
              className={`text-[16px] font-semibold leading-[24px] tracking-tight py-2 ${
                selectedItem === "preIpoUnlistedEquities"
                  ? "active border-green-800 border-b-2 active-tab"
                  : "border-gray-300 border-b-2"
              }`}
              style={{
                "--bs-accordion-active-bg": "initial",
                "--bs-accordion-btn-focus-box-shadow": "initial",
                "--bs-accordion-active-color": "initial",
                "--bs-accordion-border-color": "initial",
                "--bs-accordion-border-width": "initial",
                "--bs-accordion-transition": "initial",
              }}
              onClick={() => handleAccordionItemClick("preIpoUnlistedEquities")}
            >
              Pre IPO & Unlisted Equities
            </Accordion.Header>

            <Accordion.Body className="px-0">
              <Image
                src="/assets/whatwedo/whatwedo1.png"
                width={16}
                height={16}
                layout="responsive"
                className="mt-2 w-full h-auto  mb-2"
              />
              <div className="relative w-full p-3 ">
       
          <a
            href="https://chat.whatsapp.com/LSUnSmEfCWB7Wigomyg7CU"
            title="click to open whatsapp chat"
          >
            <button className="btn btn-success w-full md:w-[200px] text-sm whitespace-nowrap mt-[15px] md:mt-[-35px] md:ml-[140px]">
              <FontAwesomeIcon icon={faWhatsapp} /> Join WhatsApp Group
            </button>
          </a>
      
      </div>
              <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                <li>
                  We offer investors unparalleled opportunities to participate
                  in the success of tomorrow's market leaders.
                </li>
                <li>
                  Robust growth potential with a track record of delivering
                  average returns exceeding 80%.
                </li>
                <li>
                  Curated investments unlock industry-shaping wealth potential
                  for discerning investors.
                </li>
              </ul>
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
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header
              className={`text-[16px] font-semibold leading-[24px] tracking-tight py-2
                ${
                  selectedItem === "WealthManagemnetServices"
                    ? "active border-green-800 border-b-2 active-tab"
                    : "border-gray-300 border-b-2"
                }
              `}
              style={{
                "--bs-accordion-active-bg": "initial",
                "--bs-accordion-btn-focus-box-shadow": "initial",
                "--bs-accordion-active-color": "initial",
                "--bs-accordion-border-color": "initial",
                "--bs-accordion-border-width": "initial",
                "--bs-accordion-transition": "initial",
              }}
              onClick={() =>
                handleAccordionItemClick("WealthManagemnetServices")
              }
            >
              Wealth Management Services
            </Accordion.Header>
            <Accordion.Body className="border-none">
              <Accordion className="">
                {/* Nested Accordion */}
                <Accordion.Item eventKey="10" className="border-none">
                  <Accordion.Header
                    className={`tracking-tight flex justify-center items-center w-full py-2 ${
                      selectedSubItem === "10"
                        ? "active-tab border-b-2 border-green-800"
                        : "border-b-2 border-gray-300"
                    }`}
                    style={{
                      "--bs-accordion-active-bg": "initial",
                      "--bs-accordion-btn-focus-box-shadow": "initial",
                      "--bs-accordion-active-color": "initial",
                      "--bs-accordion-border-color": "initial",
                      "--bs-accordion-border-width": "initial",
                      "--bs-accordion-transition": "initial",
                    }}
                    onClick={() => handleSubAccordionItemClick("10")}
                  >
                    <span className=" w-full   font-semibold">
                      Portfolio Management Service (PMS)
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                      <li>
                        Personalized strategy for financial success in Portfolio
                        Management Service.
                      </li>
                      <li>
                        Expert team tackles market challenges to enhance your
                        investment journey.
                      </li>
                      <li>
                        Collaborative planning creates tailored portfolios
                        meeting customer requirements.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  eventKey="11"
                  className="border-none"
                  style={{ border: "none" }}
                >
                  <Accordion.Header
                    className={`tracking-tight flex justify-center items-center w-full py-2 ${
                      selectedSubItem === "11"
                        ? "active-tab border-b-2 border-green-800"
                        : "border-b-2 border-gray-300"
                    }`}
                    style={{
                      "--bs-accordion-active-bg": "initial",
                      "--bs-accordion-btn-focus-box-shadow": "initial",
                      "--bs-accordion-active-color": "initial",
                      "--bs-accordion-border-color": "initial",
                      "--bs-accordion-border-width": "initial",
                      "--bs-accordion-transition": "initial",
                    }}
                    onClick={() => handleSubAccordionItemClick("11")}
                  >
                    <span className=" w-full font-semibold">
                      Startup Investment
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                      <li>
                        Rigorous startup selection criteria ensure investment
                        quality.
                      </li>
                      <li>
                        Emphasizing innovation and scalability for strong growth
                        potential.
                      </li>
                      <li>
                        Our Wealth Management services prioritize high-potential
                        startup investments.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="12" className="border-none">
                  <Accordion.Header
                    className={`tracking-tight flex justify-center items-center w-full py-2 ${
                      selectedSubItem === "13"
                        ? "active-tab border-b-2 border-green-800"
                        : "border-b-2 border-gray-300"
                    }`}
                    style={{
                      "--bs-accordion-active-bg": "initial",
                      "--bs-accordion-btn-focus-box-shadow": "initial",
                      "--bs-accordion-active-color": "initial",
                      "--bs-accordion-border-color": "initial",
                      "--bs-accordion-border-width": "initial",
                      "--bs-accordion-transition": "initial",
                    }}
                    onClick={() => handleSubAccordionItemClick("13")}
                  >
                    <span className=" w-full   font-semibold">
                      SME IPO Investment
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                      <li>
                        Investing in promising SMEs for exponential growth
                        potential.
                      </li>
                      <li>
                        Leveraging deep industry expertise and thorough due
                        diligence for informed investment decisions.
                      </li>
                      <li>
                        Designed to unlock significant returns for our
                        investors, targeting an ambitious 10X return on
                        investments.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="14" className="border-none">
                  <Accordion.Header
                    className={`tracking-tight flex justify-center items-center w-full py-2 ${
                      selectedSubItem === "14"
                        ? "active-tab border-b-2 border-green-800"
                        : "border-b-2 border-gray-300"
                    }`}
                    style={{
                      "--bs-accordion-active-bg": "initial",
                      "--bs-accordion-btn-focus-box-shadow": "initial",
                      "--bs-accordion-active-color": "initial",
                      "--bs-accordion-border-color": "initial",
                      "--bs-accordion-border-width": "initial",
                      "--bs-accordion-transition": "initial",
                    }}
                    onClick={() => handleSubAccordionItemClick("14")}
                  >
                    <span className=" w-full   font-semibold">
                      Real Estate Investment
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                      <li>
                        Data-driven expertise for prime real estate investments.
                      </li>
                      <li>
                        Focus on prime locations and quality construction.
                      </li>
                      <li>
                        Benefit from attractive margins appreciation on
                        construction projects.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              {/* Image and text section */}
              <Image
                src="/assets/whatwedo/whatwedo3.png"
                width={16}
                height={16}
                layout="responsive"
                className="w-full h-auto mt-2 mb-2"
              />
              <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                <li>
                  At Rits Capital, we offer personalized wealth management,
                  focusing on maximizing returns while minimizing risks.
                </li>
                <li>
                  With transparent communication and a client-centric approach,
                  we guide clients towards their financial goals.
                </li>
                <li>
                  We become trusted partners in our clients’ financial journey
                  through the following services under wealth management.
                </li>
              </ul>

              {/* Learn more button */}
              <div className="mt-4">
                <Card.Link
                  className="learn-more-link flex items-center text-blue-500 cursor-pointer w-full md:w-[200px]"
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
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header
              className={`text-[16px] font-semibold leading-[24px] tracking-tight py-2
                ${
                  selectedItem === "SmartModelPortfolio"
                    ? "active border-green-800 border-b-2 active-tab"
                    : "border-gray-300 border-b-2"
                }
              `}
              style={{
                "--bs-accordion-active-bg": "initial",
                "--bs-accordion-btn-focus-box-shadow": "initial",
                "--bs-accordion-active-color": "initial",
                "--bs-accordion-border-color": "initial",
                "--bs-accordion-border-width": "initial",
                "--bs-accordion-transition": "initial",
              }}
              onClick={() => handleAccordionItemClick("SmartModelPortfolio")}
            >
              Smart Model Portfolio
            </Accordion.Header>
            <Accordion.Body>
              <Image
                src="/assets/whatwedo/whatwedo2.png"
                width={16}
                height={16}
                layout="responsive"
                className="mt-2 w-full h-auto  mb-2"
              />
              <ul className="list-disc pl-6 text-[##5F5F5F] text-[14px] leading-6">
                <li>
                  Our Smart Model Portfolio service combines cutting-edge
                  algorithms with expert management to create a dynamic,
                  customized investment strategy.
                </li>
                <li>
                  We continuously monitor and adjust your portfolio to align
                  with market trends and your financial goals.
                </li>
                <li>
                  Experience intelligent, hands-off investing that adapts to
                  your needs.
                </li>
                <li>
                  Weekly top 5 stock picks with in-depth research analysis.
                </li>
                <li>
                  Tailored investment insights with clear targets and stop
                  losses.
                </li>
                <li>
                  Track performance and market trends with our portfolio
                  tracker.
                </li>
              </ul>
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
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header
              className={`text-[16px] font-semibold leading-[24px] tracking-tight py-2
                ${
                  selectedItem === "Investment Banking"
                    ? "active border-green-800 border-b-2 active-tab"
                    : "border-gray-300 border-b-2"
                }
              `}
              style={{
                "--bs-accordion-active-bg": "initial",
                "--bs-accordion-btn-focus-box-shadow": "initial",
                "--bs-accordion-active-color": "initial",
                "--bs-accordion-border-color": "initial",
                "--bs-accordion-border-width": "initial",
                "--bs-accordion-transition": "initial",
              }}
              onClick={() => handleAccordionItemClick("Investment Banking")}
            >
              Investment Banking
            </Accordion.Header>
            <Accordion.Body className="border-none">
              <Accordion className="">
                {/* Nested Accordion */}
                <Accordion.Item
                  eventKey="10"
                  className="border-none"
                  style={{ border: "none" }}
                >
                  <Accordion.Header
                    className={`tracking-tight flex justify-center items-center w-full py-2 ${
                      selectedSubItem === "20"
                        ? "active-tab border-b-2 border-green-800"
                        : "border-b-2 border-gray-300"
                    }`}
                    style={{
                      "--bs-accordion-active-bg": "initial",
                      "--bs-accordion-btn-focus-box-shadow": "initial",
                      "--bs-accordion-active-color": "initial",
                      "--bs-accordion-border-color": "initial",
                      "--bs-accordion-border-width": "initial",
                      "--bs-accordion-transition": "initial",
                    }}
                    onClick={() => handleSubAccordionItemClick("20")}
                  >
                    <span className=" w-full   font-semibold">
                      IPO Advisory
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                      <li>
                        Enter the world of public markets with Rits Capital's
                        expert guidance.
                      </li>
                      <li>
                        Transform private enterprise into publicly traded
                        success.
                      </li>
                      <li>
                        Seize opportunities and propel business to new heights.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  eventKey="19"
                  className="border-none"
                  style={{ border: "none" }}
                >
                  <Accordion.Header
                    className={`tracking-tight flex justify-center items-center w-full py-2 ${
                      selectedSubItem === "19"
                        ? "active-tab border-b-2 border-green-800"
                        : "border-b-2 border-gray-300"
                    }`}
                    style={{
                      "--bs-accordion-active-bg": "initial",
                      "--bs-accordion-btn-focus-box-shadow": "initial",
                      "--bs-accordion-active-color": "initial",
                      "--bs-accordion-border-color": "initial",
                      "--bs-accordion-border-width": "initial",
                      "--bs-accordion-transition": "initial",
                    }}
                    onClick={() => handleSubAccordionItemClick("19")}
                  >
                    <span className=" w-full   font-semibold">M&A</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                      <li>
                        Navigate M&A with Rits Capital's strategic insights.
                      </li>
                      <li>
                        Benefit from meticulous planning and execution
                        excellence.
                      </li>
                      <li>
                        Achieve seamless growth objectives with our expert
                        guidance.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  eventKey="11"
                  className="border-none"
                  style={{ border: "none" }}
                >
                  <Accordion.Header
                    className={`tracking-tight flex justify-center items-center w-full py-2 ${
                      selectedSubItem === "21"
                        ? "active-tab border-b-2 border-green-800"
                        : "border-b-2 border-gray-300"
                    }`}
                    style={{
                      "--bs-accordion-active-bg": "initial",
                      "--bs-accordion-btn-focus-box-shadow": "initial",
                      "--bs-accordion-active-color": "initial",
                      "--bs-accordion-border-color": "initial",
                      "--bs-accordion-border-width": "initial",
                      "--bs-accordion-transition": "initial",
                    }}
                    onClick={() => handleSubAccordionItemClick("21")}
                  >
                    <span className=" w-full font-semibold">
                      Private Equity/Pre-IPO Placement
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                      <li>
                        Explore tailored Private Equity solutions with Rits
                        Capital.
                      </li>
                      <li>
                        Align unique goals with lucrative investment
                        opportunities.
                      </li>
                      <li>
                        Unlock the full potential of private investments
                        fostering growth, innovation, and sustained success.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="12" className="border-none">
                  <Accordion.Header
                    className={`tracking-tight flex justify-center items-center w-full py-2 ${
                      selectedSubItem === "23"
                        ? "active-tab border-b-2 border-green-800"
                        : "border-b-2 border-gray-300"
                    }`}
                    style={{
                      "--bs-accordion-active-bg": "initial",
                      "--bs-accordion-btn-focus-box-shadow": "initial",
                      "--bs-accordion-active-color": "initial",
                      "--bs-accordion-border-color": "initial",
                      "--bs-accordion-border-width": "initial",
                      "--bs-accordion-transition": "initial",
                    }}
                    onClick={() => handleSubAccordionItemClick("23")}
                  >
                    <span className=" w-full   font-semibold">Valuation</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                      <li>
                        Precision valuation by Rits Capital's expert
                        methodologies.
                      </li>
                      <li>
                        Optimize asset or business worth with industry-leading
                        assessments.
                      </li>
                      <li>
                        Achieve clarity and informed decisions with meticulous
                        valuation.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="13" className="border-none">
                  <Accordion.Header
                    className={`tracking-tight flex justify-center items-center w-full py-2 ${
                      selectedSubItem === "25"
                        ? "active-tab border-b-2 border-green-800"
                        : "border-b-2 border-gray-300"
                    }`}
                    style={{
                      "--bs-accordion-active-bg": "initial",
                      "--bs-accordion-btn-focus-box-shadow": "initial",
                      "--bs-accordion-active-color": "initial",
                      "--bs-accordion-border-color": "initial",
                      "--bs-accordion-border-width": "initial",
                      "--bs-accordion-transition": "initial",
                    }}
                    onClick={() => handleSubAccordionItemClick("25")}
                  >
                    <span className=" w-full   font-semibold">
                      ECM Advisory
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                      <li>
                        Leverage Rits Capital’s comprehensive ECM advisory
                        services to tap into higher growth potential.
                      </li>
                      <li>
                        From structuring to execution, we guide you through
                        every stage of capital market transactions.
                      </li>
                      <li>
                        Harness the power of ECM with our strategic insights and
                        personalized solutions.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="14" className="border-none">
                  <Accordion.Header
                    className={`tracking-tight flex justify-center items-center w-full py-2 ${
                      selectedSubItem === "26"
                        ? "active-tab border-b-2 border-green-800"
                        : "border-b-2 border-gray-300"
                    }`}
                    style={{
                      "--bs-accordion-active-bg": "initial",
                      "--bs-accordion-btn-focus-box-shadow": "initial",
                      "--bs-accordion-active-color": "initial",
                      "--bs-accordion-border-color": "initial",
                      "--bs-accordion-border-width": "initial",
                      "--bs-accordion-transition": "initial",
                    }}
                    onClick={() => handleSubAccordionItemClick("26")}
                  >
                    <span className=" w-full   font-semibold">
                      Debt Advisory
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                      <li>
                        Enhance financing strategies with Rits Capital's Debt
                        Advisory services.
                      </li>
                      <li>
                        Tailored solutions ensure optimal debt structuring and
                        cost-effectiveness.
                      </li>
                      <li>
                        Navigate the complex debt landscape with confidence and
                        expertise.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="15" className="border-none">
                  <Accordion.Header
                    className={`tracking-tight flex justify-center items-center w-full py-2 ${
                      selectedSubItem === "27"
                        ? "active-tab border-b-2 border-green-800"
                        : "border-b-2 border-gray-300"
                    }`}
                    style={{
                      "--bs-accordion-active-bg": "initial",
                      "--bs-accordion-btn-focus-box-shadow": "initial",
                      "--bs-accordion-active-color": "initial",
                      "--bs-accordion-border-color": "initial",
                      "--bs-accordion-border-width": "initial",
                      "--bs-accordion-transition": "initial",
                    }}
                    onClick={() => handleSubAccordionItemClick("27")}
                  >
                    <span className=" w-full   font-semibold">SPAC</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                      <li>
                        SPAC framework: meticulous evaluation for exceptional
                        stakeholder value.
                      </li>
                      <li>
                        Rigorous selection ensures partnerships with promising,
                        strategic-aligned companies.
                      </li>
                      <li>
                        Rigorous selection ensures partnerships with promising,
                        strategic-aligned companies.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              {/* Image and text section */}
              <Image
                src="/assets/whatwedo/whatwedo3.png"
                width={16}
                height={16}
                layout="responsive"
                className="w-full h-auto mt-2 mb-2"
              />
              <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                <li>
                  Unlock financial success with Rits Capital's Investment
                  Banking expertise. From IPOs to M&A, our seasoned team ensures
                  strategic growth.
                </li>
                <li>
                  Access funding with tailored Private Equity solutions and
                  secure your financial future with our Equity Capital Markets
                  and Debt Advisory services.
                </li>
                <li>
                  We provide the following comprehensive services under
                  Investment Banking.
                </li>
              </ul>

              {/* Learn more button */}
              <div className="mt-4">
                <Card.Link
                  className="learn-more-link flex items-center text-blue-500 cursor-pointer w-full md:w-[200px]"
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
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header
              className={`text-[16px] font-semibold leading-[24px] tracking-tight py-2
                ${
                  selectedItem === "Accounting & Tax Services Support"
                    ? "active border-green-800 border-b-2 active-tab"
                    : "border-gray-300 border-b-2"
                }
              `}
              style={{
                "--bs-accordion-active-bg": "initial",
                "--bs-accordion-btn-focus-box-shadow": "initial",
                "--bs-accordion-active-color": "initial",
                "--bs-accordion-border-color": "initial",
                "--bs-accordion-border-width": "initial",
                "--bs-accordion-transition": "initial",
              }}
              onClick={() =>
                handleAccordionItemClick("Accounting & Tax Services Support")
              }
            >
              Accounting & Tax Services Support
            </Accordion.Header>
            <Accordion.Body className="border-none">
              <Accordion className="">
                {/* Nested Accordion */}
                <Accordion.Item
                  eventKey="10"
                  className="border-none"
                  style={{ border: "none" }}
                >
                  <Accordion.Header
                    className={`tracking-tight flex justify-center items-center w-full  ${
                      selectedSubItem === "40"
                        ? "active-tab border-b-2 border-green-800"
                        : "border-b-2 border-gray-300"
                    }`}
                    style={{
                      "--bs-accordion-active-bg": "initial",
                      "--bs-accordion-btn-focus-box-shadow": "initial",
                      "--bs-accordion-active-color": "initial",
                      "--bs-accordion-border-color": "initial",
                      "--bs-accordion-border-width": "initial",
                      "--bs-accordion-transition": "initial",
                    }}
                    onClick={() => handleSubAccordionItemClick("40")}
                  >
                    <span className=" w-full py-2  font-semibold">
                      Virtual CFO & Corporate Finance
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                      <li>
                        Strategic Virtual CFO services for small business
                        growth.
                      </li>
                      <li>
                        Comprehensive services include accounting, financial
                        analysis, and tax planning.
                      </li>
                      <li>
                        Our Virtual CFOs bring industry experience and strategic
                        foresight.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  eventKey="31"
                  className="border-none"
                  style={{ border: "none" }}
                >
                  <Accordion.Header
                    className={`tracking-tight flex justify-center items-center w-full py-2 ${
                      selectedSubItem === "41"
                        ? "active-tab border-b-2 border-green-800"
                        : "border-b-2 border-gray-300"
                    }`}
                    style={{
                      "--bs-accordion-active-bg": "initial",
                      "--bs-accordion-btn-focus-box-shadow": "initial",
                      "--bs-accordion-active-color": "initial",
                      "--bs-accordion-border-color": "initial",
                      "--bs-accordion-border-width": "initial",
                      "--bs-accordion-transition": "initial",
                    }}
                    onClick={() => handleSubAccordionItemClick("41")}
                  >
                    <span className=" w-full font-semibold">Book keeping</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                      <li>
                        Simple, efficient, and customizable outsourced
                        bookkeeping services including payroll, receivables &
                        payables management.
                      </li>
                      <li>
                        Flexible solutions for businesses of all sizes and
                        needs.
                      </li>
                      <li>
                        Over a decade of experience across various industries.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="32" className="border-none">
                  <Accordion.Header
                    className={`tracking-tight flex justify-center items-center w-full py-2 ${
                      selectedSubItem === "42"
                        ? "active-tab border-b-2 border-green-800"
                        : "border-b-2 border-gray-300"
                    }`}
                    style={{
                      "--bs-accordion-active-bg": "initial",
                      "--bs-accordion-btn-focus-box-shadow": "initial",
                      "--bs-accordion-active-color": "initial",
                      "--bs-accordion-border-color": "initial",
                      "--bs-accordion-border-width": "initial",
                      "--bs-accordion-transition": "initial",
                    }}
                    onClick={() => handleSubAccordionItemClick("42")}
                  >
                    <span className=" w-full   font-semibold">
                      Audit Support & Assurance
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                      <li>
                        Gain stakeholder confidence with our precise audit
                        reports and certificates.
                      </li>
                      <li>
                        Our comprehensive services include Accounts Auditing,
                        Forensic Audit, and Special Reports & Reviews.
                      </li>
                      <li>
                        Rits Outsourcing is reliable for tailored audit
                        solutions and regulatory compliance.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="33" className="border-none">
                  <Accordion.Header
                    className={`tracking-tight flex justify-center items-center w-full py-2 ${
                      selectedSubItem === "43"
                        ? "active-tab border-b-2 border-green-800"
                        : "border-b-2 border-gray-300"
                    }`}
                    style={{
                      "--bs-accordion-active-bg": "initial",
                      "--bs-accordion-btn-focus-box-shadow": "initial",
                      "--bs-accordion-active-color": "initial",
                      "--bs-accordion-border-color": "initial",
                      "--bs-accordion-border-width": "initial",
                      "--bs-accordion-transition": "initial",
                    }}
                    onClick={() => handleSubAccordionItemClick("43")}
                  >
                    <span className=" w-full   font-semibold">
                      Financial Reporting
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                      <li>
                        Expert financial services including ledger, balance, and
                        asset reports.
                      </li>
                      <li>
                        Comprehensive analysis and assessments for financial
                        performance.
                      </li>
                      <li>
                        Professionally prepare legal agreements and documents at
                        Rits Outsourcing.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="34" className="border-none">
                  <Accordion.Header
                    className={`tracking-tight flex justify-center items-center w-full py-2 ${
                      selectedSubItem === "44"
                        ? "active-tab border-b-2 border-green-800"
                        : "border-b-2 border-gray-300"
                    }`}
                    style={{
                      "--bs-accordion-active-bg": "initial",
                      "--bs-accordion-btn-focus-box-shadow": "initial",
                      "--bs-accordion-active-color": "initial",
                      "--bs-accordion-border-color": "initial",
                      "--bs-accordion-border-width": "initial",
                      "--bs-accordion-transition": "initial",
                    }}
                    onClick={() => handleSubAccordionItemClick("44")}
                  >
                    <span className=" w-full   font-semibold">
                      Budgeting and Forecasting
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                      <li>
                        Rits Outsourcing provides strategic budgeting and
                        forecasting plans for your business goals.
                      </li>
                      <li>
                        We customize solutions using software like QuickBooks
                        for accuracy.
                      </li>
                      <li>
                        Services include operating, project, capital, and cash
                        flow budgets enhancing financial stability.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="35" className="border-none">
                  <Accordion.Header
                    className={`tracking-tight flex justify-center items-center w-full py-2 ${
                      selectedSubItem === "45"
                        ? "active-tab border-b-2 border-green-800"
                        : "border-b-2 border-gray-300"
                    }`}
                    style={{
                      "--bs-accordion-active-bg": "initial",
                      "--bs-accordion-btn-focus-box-shadow": "initial",
                      "--bs-accordion-active-color": "initial",
                      "--bs-accordion-border-color": "initial",
                      "--bs-accordion-border-width": "initial",
                      "--bs-accordion-transition": "initial",
                    }}
                    onClick={() => handleSubAccordionItemClick("45")}
                  >
                    <span className=" w-full   font-semibold">
                      Corporate Tax & Compliances
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                      <li>
                      Stellar team of lawyers and tax advisors at Rits Outsourcing.
                      </li>
                      <li>
                      Multidisciplinary approach ensures top-notch quality in diverse services.
                      </li>
                      <li>
                      Strategic tax advice and regulatory solutions tailored to your needs.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              {/* Image and text section */}
              <Image
                src="/assets/whatwedo/whatwedo3.png"
                width={16}
                height={16}
                layout="responsive"
                className="w-full h-auto mt-2 mb-2"
              />
                 <div className="relative w-full p-3 ">
       
       <a
         href="https://chat.whatsapp.com/B6MQCCWPLS8AosK7U6wiIp"
         title="click to open whatsapp chat"
       >
         <button className="btn btn-success w-full md:w-[200px] text-sm whitespace-nowrap mt-[15px] md:mt-[-35px] md:ml-[140px]">
           <FontAwesomeIcon icon={faWhatsapp} /> Join WhatsApp Group
         </button>
       </a>
   
   </div> 
              <ul className="list-disc pl-6 text-[#5F5F5F] text-[14px] leading-6">
                <li>
                  Streamline Your Finances with Proficient Accounting Services
                </li>
                <li>
                  At Rits Outsourcing, our proficient team delivers efficient
                  finance and accounting services, encompassing IPO Advisory,
                  Virtual CFO, Corporate Finance, Bookkeeping, Payroll,
                  Auditing, Budgeting, Financial Reporting, and Corporate Tax &
                  Compliance.
                </li>
                <li>
                  At Rits Outsourcing, our proficient team delivers efficient
                  finance and accounting services, encompassing IPO Advisory,
                  Virtual CFO, Corporate Finance, Bookkeeping, Payroll,
                  Auditing, Budgeting, Financial Reporting, and Corporate Tax &
                  Compliance.
                </li>
              </ul>

              {/* Learn more button */}
              <div className="mt-4">
                <Card.Link
                  className="learn-more-link flex items-center text-blue-500 cursor-pointer w-full md:w-[200px]"
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
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header
              className={`text-[16px] font-semibold leading-[24px] tracking-tight py-2
                ${
                  selectedItem === "Startup Fundraise Support"
                    ? "active border-green-800 border-b-2 active-tab"
                    : "border-gray-300 border-b-2"
                }
              `}
              style={{
                "--bs-accordion-active-bg": "initial",
                "--bs-accordion-btn-focus-box-shadow": "initial",
                "--bs-accordion-active-color": "initial",
                "--bs-accordion-border-color": "initial",
                "--bs-accordion-border-width": "initial",
                "--bs-accordion-transition": "initial",
              }}
              onClick={() =>
                handleAccordionItemClick("Startup Fundraise Support")
              }
            >
              Startup Fundraise Support
            </Accordion.Header>
            <Accordion.Body>
              <Image
                src="/assets/whatwedo/whatwedo1.png"
                width={16}
                height={16}
                layout="responsive"
                className="mt-2 w-full h-auto  mb-2"
              />
              <ul className="list-disc pl-6 text-[##5F5F5F] text-[14px] leading-6">
                <li>
                  At Rits Capital, we empower visionary startups to shape the
                  future.
                </li>
                <li>
                  Our Startup Fund Raise service specializes in securing capital
                  for businesses in:
                </li>
                <ul className="list-disc pl-6 space-y-2">
                  <li>B2B SaaS</li>
                  <li>AI</li>
                  <li>Deep-tech</li>
                  <li>ESG</li>
                  <li>Other transformative industries</li>
                </ul>
                <li>
                  With a strong focus on the US market and deep connections to
                  forward-thinking investors, we provide the strategic support
                  your startup needs to thrive.
                </li>
                <li>
                  Partner with us to turn your innovative ideas into reality and
                  drive the next wave of industry change.
                </li>
              </ul>
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
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header
              className={`text-[16px] font-semibold leading-[24px] tracking-tight py-2
                ${
                  selectedItem === "Sustainable Investing"
                    ? "active border-green-800 border-b-2 active-tab"
                    : "border-gray-300 border-b-2"
                }
              `}
              style={{
                "--bs-accordion-active-bg": "initial",
                "--bs-accordion-btn-focus-box-shadow": "initial",
                "--bs-accordion-active-color": "initial",
                "--bs-accordion-border-color": "initial",
                "--bs-accordion-border-width": "initial",
                "--bs-accordion-transition": "initial",
              }}
              onClick={() => handleAccordionItemClick("Sustainable Investing")}
            >
              Sustainable Investing
            </Accordion.Header>
            <Accordion.Body>
              <Image
                src="/assets/whatwedo/whatwedo4.png"
                width={16}
                height={16}
                layout="responsive"
                className="mt-2 w-full h-auto  mb-2"
              />
              <ul className="list-disc pl-6 text-[##5F5F5F] text-[14px] leading-6">
                <li>
                  Our institutional-caliber analytics assess the sustainability
                  characteristics of investments, enabling clients to:
                </li>
                <ul className="list-disc pl-6 text-[##5F5F5F] text-[14px] leading-6">
                  <li>Understand ESG risks and opportunities</li>
                  <li>
                    Make informed decisions that balance financial returns with
                    positive societal impact
                  </li>
                </ul>
                <li>
                  Tailored investment strategies focused on high-impact
                  sustainable startups
                </li>
                <li>
                  Expert guidance in identifying eco-friendly, growth-oriented
                  ventures
                </li>
                <li>
                  Aligning investments with long-term environmental and
                  financial goals
                </li>
              </ul>
              <div className="mt-4">
                <Card.Link
                  href="https://climifi.com/"
                  className="learn-more-link flex items-center text-blue-500 cursor-pointer w-full md:w-[200px] "
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
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </>
  );
};
