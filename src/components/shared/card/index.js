import Image from "next/image";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

function Cardform({ onButtonClick }) {
  const [showWhatsAppIcon, setShowWhatsAppIcon] = useState(false);
  const [showSubpoints, setShowSubpoints] = useState(false);
  const [showInvestmentpoint, setShowshowInvestmentpoint] = useState(false);
  const [showAccountTax, setShowAccountTax] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  const [arrowRotations, setArrowRotations] = useState({});

  const handleSmartModelPortfolioClick = () => {
    onButtonClick(
      "Smart Model Portfolio",
      "This is the content for Smart Model Portfolio",
      "/assets/whatwedo/whatwedo2.png"
    );
  };
  const handlePreIpoListedClick = () => {
    onButtonClick(
      "Pre-IPO & Unlisted Equities",
      "This is the content for preIpo ",
      "/assets/whatwedo/whatwedo1.png"
    );
  };
  const handleWealthMangement = () => {
    onButtonClick(
      "Wealth Mangement",
      "This is the content for Wealth Mangement ",
      "/assets/whatwedo/whatwedo3.png"
    );
  };
  const handleInvestmentBanking = () => {
    onButtonClick(
      "Investment Banking",
      "This is the content for Investment Banking ",
      "/assets/whatwedo/whatwedo4.png"
    );
  };
  const handleAccountingTax = () => {
    onButtonClick(
      "Accounting and Tax Services Support",
      "This is the content for Accounting Tax ",
      "/assets/whatwedo/whatwedo1.png"
    );
  };

  useEffect(() => {
    handleButtonClick(
      [
        "We offer investors unparalleled opportunities to participate in the success of tomorrow's market leaders.",
        "Robust growth potential with a track record of delivering average returns exceeding 80%.",
        "Curated investments unlock industry-shaping wealth potential for discerning investors.",
      ],
      "Pre-IPO & Unlisted Equities"
    );
  }, []);

  const wealthManagementSubpoints = [
    {
      title: "Portfolio Management Service (PMS)",
      details: [
        "Personalized strategy for financial success in Portfolio Management Service.",
        "Expert team tackles market challenges to enhance your investment journey.",
        "Collaborative planning creates tailored portfolios meeting customer requirements.",
      ],
    },
    {
      title: "Startup Investment",
      details: [
        "Rigorous startup selection criteria ensure investment quality.",
        "Emphasizing innovation and scalability for strong growth potential.",
        "Our Wealth Management services prioritize high-potential startup investments.",
      ],
    },
    {
      title: "SME IPO Investment",
      details: [
        "Investing in promising SMEs for exponential growth potential.",
        "Leveraging deep industry expertise and thorough due diligence for informed investment decisions.",
        "Designed to unlock significant returns for our investors, targeting an ambitious 10X return on investments.",
      ],
    },
    {
      title: "Real Estate Investment",
      details: [
        "Data-driven expertise for prime real estate investments.",
        "Focus on prime locations and quality construction.",
        "Benefit from attractive margins appreciation on construction projects.",
      ],
    },
  ];

  const investSubpoints = [
    {
      title: "IPO Advisory",
      details: [
        "Enter the world of public markets with Rits Capital's expert guidance.",
        "Transform private enterprise into publicly traded success.",
        "Seize opportunities and propel business to new heights.",
      ],
    },
    {
      title: "M&A",
      details: [
        "Navigate M&A with Rits Capital's strategic insights.",
        "Benefit from meticulous planning and execution excellence.",
        "Achieve seamless growth objectives with our expert guidance.",
      ],
    },
    {
      title: "Private Equity/Pre-IPO Placement",
      details: [
        "Explore tailored Private Equity solutions with Rits Capital.",
        "Align unique goals with lucrative investment opportunities.",
        "Unlock the full potential of private investments fostering growth, innovation, and sustained success.",
      ],
    },
    {
      title: "Valuation",
      details: [
        "Precision valuation by Rits Capital's expert methodologies.",
        "Optimize asset or business worth with industry-leading assessments.",
        "Achieve clarity and informed decisions with meticulous valuation.",
      ],
    },
    {
      title: "ECM Advisory",
      details: [
        "Leverage Rits Capital’s comprehensive ECM advisory services to tap into higher growth potential.",
        "From structuring to execution, we guide you through every stage of capital market transactions.",
        "Harness the power of ECM with our strategic insights and personalized solutions.",
      ],
    },
    {
      title: "Debt Advisory",
      details: [
        "Enhance financing strategies with Rits Capital's Debt Advisory services.",
        "Tailored solutions ensure optimal debt structuring and cost-effectiveness.",
        "Navigate complex debt landscape with confidence and expertise.",
      ],
    },
    {
      title: "SPAC",
      details: [
        "SPAC framework: meticulous evaluation for exceptional stakeholder value.",
        "Rigorous selection ensures partnerships with promising, strategic-aligned companies.",
        "Assess financial health, growth potential, and management caliber.",
      ],
    },
  ];

  const accountTaxServices = [
    {
      title: "Virtual CFO & Corporate Finance",
      details: [
        "Strategic Virtual CFO services for small business growth.",
        "Comprehensive services include accounting, financial analysis, and tax planning.",
        "Our Virtual CFOs bring industry experience and strategic foresight.",
      ],
    },
    {
      title: "Bookkeeping",
      details: [
        "Simple, efficient, and customizable outsourced bookkeeping services including payroll, receivables & payables management.",
        "Flexible solutions for businesses of all sizes and needs.",
        "Over a decade of experience across various industries.",
      ],
    },
    {
      title: "Audit Support & Assurance",
      details: [
        "Gain stakeholder confidence with our precise audit reports and certificates.",
        "Our comprehensive services include Accounts Auditing, Forensic Audit, and Special Reports & Reviews.",
        "Rits Outsourcing is reliable for tailored audit solutions and regulatory compliance.",
      ],
    },
    {
      title: "Financial Reporting",
      details: [
        "Expert financial services including ledger, balance, and asset reports.",
        "Comprehensive analysis and assessments for financial performance.",
        "Professionally prepare legal agreements and documents at Rits Outsourcing.",
      ],
    },
    {
      title: "Budgeting and Forecasting",
      details: [
        "Rits Outsourcing provides strategic budgeting and forecasting plans for your business goals.",
        "We customize solutions using software like QuickBooks for accuracy.",
        "Services include operating, project, capital, and cash flow budgets enhancing financial stability.",
      ],
    },
    {
      title: "Corporate Tax & Compliances",
      details: [
        "Stellar team of lawyers and tax advisors at Rits Outsourcing.",
        "Multidisciplinary approach ensures top-notch quality in diverse services.",
        "Strategic tax advice and regulatory solutions tailored to your needs.",
      ],
    },
  ];

  const handleButtonClick = (paragraphContent, title) => {
    onButtonClick(paragraphContent, title);
    if (
      title === "Pre-IPO & Unlisted Equities" ||
      title === "Accounting and tax services support"
    ) {
      setShowWhatsAppIcon(true);
      setActiveButton(title);
    } else {
      setShowWhatsAppIcon(false);
    }
    setActiveButton(title);
  };

  const handleWealthManagementClick = () => {
    setShowSubpoints(!showSubpoints);
    handleButtonClick([], "Wealth Management Services");
  };

  const handleSubpointClick = (subpoint) => {
    handleButtonClick(subpoint.details, subpoint.title);
    setActiveButton(subpoint.title);
  };

  const handleInvestmentPoint = () => {
    setShowshowInvestmentpoint(!showInvestmentpoint);
    if (!showInvestmentpoint) {
      onButtonClick(
        [
          "Unlock financial success with Rits Capital's Investment Banking expertise.",
          "From IPOs to M&A, our seasoned team ensures strategic growth.",
          "Access funding with tailored Private Equity solutions and secure your financial future with our Equity Capital Markets and Debt Advisory services.",
          "We provide the following comprehensive services under Investment Banking.",
        ],
        "Investment banking"
      );
    }
  };

  const handleAccountTax = () => {
    setShowAccountTax(!showAccountTax);
    if (!showAccountTax) {
      onButtonClick(
        [
          "Streamline Your Finances with Proficient Accounting Services",
          "At Rits Outsourcing, our proficient team delivers efficient finance and accounting services, encompassing IPO Advisory, Virtual CFO, Corporate Finance, Bookkeeping, Payroll, Auditing, Budgeting, Financial Reporting, and Corporate Tax & Compliance.",
          "We customize solutions to support informed decision-making and business growth, managing financial complexities expertly.",
        ],
        "Accounting and Tax Services Support"
      );
    }
    
  };

  const handleSectionClick = (sectionTitle, toggleFunction) => {
    if (openSection === sectionTitle) {
      setOpenSection(null);
      setArrowRotations((prevArrowRotations) => ({
        ...prevArrowRotations,
        [sectionTitle]: "0deg",
      }));
      handleButtonClick([], sectionTitle);
    } else {
      setOpenSection(sectionTitle);
      setArrowRotations((prevArrowRotations) => {
        const newArrowRotations = { ...prevArrowRotations };
        Object.keys(newArrowRotations).forEach((key) => {
          newArrowRotations[key] = "0deg";
        });
        newArrowRotations[sectionTitle] = "90deg";
        return newArrowRotations;
      });
      toggleFunction();
    }
  };

  return (
    <div className="flex justify-start items-center bg-white w-full">
      <div
        className="rounded-tl-lg border-none "
        style={{ borderTopLeftRadius: "3.5rem", border: "none" }}
      >
        <div>
          <div
            id="main"
            className="border-b-[1px] border-b-solid border-b-[#D5D5D5] p-3 w-full md:w-[380px]"
          >
            <button
              id="pre-ipo"
              onClick={() => {
                handleButtonClick(
                  [
                    "We offer investors unparalleled opportunities to participate in the success of tomorrow's market leaders.",
                    "Robust growth potential with a track record of delivering average returns exceeding 80%.",
                    "Curated investments unlock industry-shaping wealth potential for discerning investors.",
                  ],
                  "Pre-IPO & Unlisted Equities"
                );
                setOpenSection(null);
              }}
              className={`flex justify-between items-center  w-full font-lato font-semibold text-[18px]  ${
                activeButton === "Pre-IPO & Unlisted Equities"
                  ? "active-button"
                  : ""
              }`}
            >
              <span
                className="whitespace-nowrap block text-[18px]"
                onClick={handlePreIpoListedClick}
              >
                Pre-IPO & Unlisted Equities
              </span>
            </button>
          </div>

          <div className="border-b-[1px] border-b-solid border-b-[#D5D5D5] p-3 w-full md:w-[380px]">
            <button
              id="wealth"
              onClick={() =>
                handleSectionClick(
                  "Wealth Management Services",
                  handleWealthManagementClick
                )
              }
              className={`flex justify-between items-center  w-full font-lato font-semibold text-[18px] ${
                openSection === "Wealth Management Services"
                  ? "active-button"
                  : ""
              }`}
            >
              <span
                className="whitespace-nowrap block text-[18px]"
                onClick={handleWealthMangement}
              >
                Wealth Management Services
              </span>
              <Image
                src="/assets/events/arrowicon.png"
                alt="arrow icon"
                width={16}
                height={16}
                className={`ml-auto ${
                  arrowRotations["Wealth Management Services"] === "180deg"
                    ? "rotate-arrow"
                    : ""
                }`}
                style={{
                  transform: `rotate(${
                    arrowRotations["Wealth Management Services"] || "0deg"
                  })`,
                }}
              />
            </button>
            {openSection === "Wealth Management Services" && (
              <ul className="list-unstyled font-[400] text-[15px] leading-6 text-[#0F0F0F]">
                {wealthManagementSubpoints.map((subpoint) => (
                  <li key={subpoint.title}>
                    <button
                      onClick={() => handleSubpointClick(subpoint)}
                      className={`flex justify-between w-full ${
                        activeButton === subpoint.title ? "active-button" : ""
                      }`}
                    >
                      {subpoint.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-b-[1px] border-b-solid border-b-[#D5D5D5] p-3 w-full md:w-[380px]">
            <button
              id="smart"
              onClick={() => {
                handleButtonClick(
                  [
                    "Our Smart Model Portfolio service combines cutting-edge algorithms with expert management to create a dynamic, customized investment strategy.",
                    "We continuously monitor and adjust your portfolio to align with market trends and your financial goals.",
                    "Experience intelligent, hands-off investing that adapts to your needs.",
                    "Weekly top 5 stock picks with in-depth research analysis.",
                    "Tailored investment insights with clear targets and stop losses.",
                    "Track performance and market trends with our portfolio tracker.",
                  ],
                  "Smart Model Portfolio"
                );

                setOpenSection(null);
                setArrowRotations({
                  transform: `rotate(${
                    arrowRotations["Wealth Management Services"] || "0deg"
                  })`,
                });
              }}
              className={`flex justify-between items-center w-full font-lato font-semibold text-[18px] ${
                activeButton === "Smart Model Portfolio" ? "active-button" : ""
              }`}
            >
              <span
                className="whitespace-nowrap block text-[18px]"
                onClick={handleSmartModelPortfolioClick}
              >
                Smart Model Portfolio
              </span>
            </button>
          </div>

          <div className="border-b-[1px] border-b-solid border-b-[#D5D5D5] p-3 w-full md:w-[380px]">
            <button
              id="investment"
              onClick={() =>
                handleSectionClick("Investment banking", handleInvestmentPoint)
              }
              className={`flex justify-between items-center w-full font-lato font-semibold text-[18px] ${
                openSection === "Investment banking" ? "active-button" : ""
              }`}
            >
              <span
                className="whitespace-nowrap block text-[18px]"
                onClick={handleInvestmentBanking}
              >
                Investment Banking
              </span>

              <Image
                src="/assets/events/arrowicon.png"
                alt="arrow icon"
                width={16}
                height={16}
                className={`ml-auto ${
                  arrowRotations["Investment banking"] === "90deg"
                    ? "rotate-arrow"
                    : ""
                }`}
                style={{
                  transform: `rotate(${
                    arrowRotations["Investment banking"] || "0deg"
                  })`,
                }}
              />
            </button>
            {openSection === "Investment banking" && (
              <ul className="list-unstyled font-[400] text-[15px] leading-6 text-[#0F0F0F]">
                {investSubpoints.map((subpoint) => (
                  <li key={subpoint.title}>
                    <button
                      onClick={() => handleSubpointClick(subpoint)}
                      className={`flex justify-between w-full ${
                        activeButton === subpoint.title ? "active-button" : ""
                      }`}
                    >
                      {subpoint.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-b-[1px] border-b-solid border-b-[#D5D5D5] p-3 w-full md:w-[380px]">
            <button
              id="accounting"
              onClick={() =>
                handleSectionClick(
                  "Accounting and tax services support",
                  handleAccountTax
                )
              }
              className={`flex justify-between items-center w-full font-lato font-semibold text-[18px] gap-1 ${
                openSection === "Accounting and tax services support"
                  ? "active-button"
                  : ""
              }`}
            >
              <span
                className="whitespace-nowrap block text-[18px]"
                onClick={handleAccountingTax}
              >
                {" "}
                Accounting & Tax Services Support
              </span>

              <Image
                src="/assets/events/arrowicon.png"
                alt="arrow icon"
                width={16}
                height={16}
                className={`ml-auto ${
                  arrowRotations["Accounting and tax services support"] ===
                  "90deg"
                    ? "rotate-arrow"
                    : ""
                }`}
                style={{
                  transform: `rotate(${
                    arrowRotations["Accounting and tax services support"] ||
                    "0deg"
                  })`,
                }}
              />
            </button>
            {openSection === "Accounting and tax services support" && (
              <ul className="list-unstyled font-[400] text-[15px] leading-6 text-[#0F0F0F]">
                {accountTaxServices.map((service) => (
                  <li key={service.title}>
                    <button
                      onClick={() => handleSubpointClick(service)}
                      className={`flex justify-between w-full ${
                        activeButton === service.title ? "active-button" : ""
                      }`}
                    >
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className=" border-b-[1px] border-b-solid border-b-[#D5D5D5] p-3 w-full md:w-[380px]">
            <button
              id="startup"
              onClick={() => {
                handleButtonClick(
                  [
                    "At Rits Capital, we empower visionary startups to shape the future.",
                    "Our Startup Fund Raise service specializes in securing capital for businesses in.",
                    "B2B SaaS, AI, Deep-tech, ESG, and other transformative industries.",
                    "With a strong focus on the US market and deep connections to forward-thinking investors.",
                    "we provide the strategic support your startup needs to thrive.",
                    "Partner with us to turn your innovative ideas into reality and drive the next wave of industry change.",
                  ],
                  "Startup Fundraise Support"
                );
                setOpenSection(null);
                setArrowRotations({
                  transform: `rotate(${
                    arrowRotations["Accounting and tax services support"] ||
                    "0deg"
                  })`,
                });
              }}
              className={`flex justify-start items-center  w-full font-lato font-semibold text-[18px]  ${
                activeButton === "Startup Fundraise Support"
                  ? "active-button"
                  : ""
              }`}
            >
              <span className="whitespace-nowrap block text-[18px]"></span>{" "}
              Startup Fundraise Support
            </button>
          </div>

          <div className=" border-b-[1px] border-b-solid border-b-[#D5D5D5] p-3 w-full md:w-[380px]">
            <button
              id="sustainable"
              onClick={() => {
                handleButtonClick(
                  [
                    "Our institutional-caliber analytics to assess the sustainability characteristics of investments, enabling clients to understand ESG risks and opportunities, and to make informed decisions that balance financial returns with positive societal impact.",
                    "Tailored investment strategies focused on high-impact sustainable startups.",
                    "Expert guidance in identifying eco-friendly, growth-oriented ventures.",
                    "Aligning investments with long-term environmental and financial goals.",
                  ],
                  "Sustainable Investment"
                );
                setOpenSection(null);
              }}
              className={`flex justify-start items-center  w-full font-lato font-semibold text-[18px]  ${
                activeButton === "Sustainable Investment" ? "active-button" : ""
              }`}
            >
              <span className="whitespace-nowrap block text-[18px]"></span>{" "}
              Sustainable Investing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardform;
