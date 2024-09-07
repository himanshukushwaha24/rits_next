import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


export default function MobileMenu() {
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  
  const ToggleWhatWeDo = () => {
    setIsWhatWeDoOpen(!isWhatWeDoOpen);
  };


  return (
    <div className="bg-white w-full block md:hidden">
      {/* <div className="p-4 border-b">
        <h2 className="font-bold text-lg">About</h2>
      </div> */}
      <div className=" border-b text-start flex flex-col items-start bg-[#]">
        <button
          className=" p-4 w-full flex justify-center items-center text-center font-semibold text-[18px] leading-6 text-[#0F0F0F]"
          onClick={ToggleWhatWeDo}
        >
          What We Do
          {/* {isWhatWeDoOpen ? "-" : "+"} */}
          <Image
            src="/icon/downarrow.png"
            alt="arrow icon"
            width={16}
            height={16}
            className={`ml-auto transition duration-200 ${isWhatWeDoOpen ? "rotate-180" :""}`}
          />
        </button>
        {isWhatWeDoOpen && (
          <div className=" mt-2 bg-[#F0F0F0] w-full">
            <ul className="w-full list-unstyled  flex flex-col items-start text-left justify-center">
              <li
                className="w-full flex flex-col py-2 px-3"
                onMouseEnter={() => setActiveSubmenu(null)}
              >
                <a
                  className="py-2  border-gray-400  flex-wrap whitespace-nowrap text-[15px] font-semibold"
                  href="#investor-form"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  Pre IPO & Unlisted Equities
                  <span className="ml-2">
                    <Image
                      src="/icon/downarrow.png"
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
                className="w-full flex flex-col py-2 px-3"
                onMouseEnter={() => setActiveSubmenu(null)}
              >
                <a
                  className={`w-full flex justify-between items-center py-2  border-gray-400 flex-wrap whitespace-nowrap text-[16px] font-semibold ${
                    activeSubmenu === "Wealth Management Services"
                      ? "text-green-500"
                      : ""
                  }`}
                  href="#wealth-management"
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={() =>
                    setActiveSubmenu(
                      activeSubmenu === "Wealth Management Services"
                        ? null
                        : "Wealth Management Services"
                    )
                  }
                >
                  Wealth Management Services
                  <span className="ml-2">
                    <Image
                      src="/icon/downarrow.png"
                      alt="arrow icon"
                      width={16}
                      height={16}
                      className={`transition-opacity duration-200 ${
                        activeSubmenu === "Wealth Management Services"
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </span>
                </a>
                {activeSubmenu === "Wealth Management Services" && (
                  <ul className="list-unstyled pl-4">
                    <li className="py-3">
                      <a href="#investor-form" className="text-[15px] font-semibold">
                        Portfolio Management Service PMS
                      </a>
                    </li>
                    <li className="py-3">
                      <a href="#investor-form" className="text-[15px] font-semibold">
                        Startup Investment Service
                      </a>
                    </li>
                    <li className="py-3">
                      <a href="#investor-form" className="text-[15px] font-semibold">
                        SME IPO Investment Service
                      </a>
                    </li>
                    <li className="py-3">
                      <a href="#investor-form" className="text-[15px] font-semibold">
                        Real Estate Investment
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className="w-full flex flex-col py-2 px-3"
                onMouseEnter={() => setActiveSubmenu(null)}
              >
                <a
                  className="w-full flex justify-between items-center py-2  border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold"
                  href="#investor-form"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  Smart Model Portfolio
                  <span className="ml-2">
                    <Image
                      src="/icon/downarrow.png"
                      alt="arrow icon"
                      width={16}
                      height={16}
                      className={`transition-opacity duration-200  ${
                        activeSubmenu === "smart" ? "opacity-100" : "opacity-0 "
                      }`}
                    />
                  </span>
                </a>
              </li>

              <li
                className="w-full flex flex-col py-2 px-3"
                onMouseEnter={() => setActiveSubmenu(null)}
              >
                <a
                  className={`w-full flex justify-between items-center py-2 border-gray-400 flex-wrap whitespace-nowrap text-[16px] font-semibold ${
                    activeSubmenu === "Investment Banking"
                      ? "text-green-500"
                      : ""
                  }`}
                  href="#"
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={() =>
                    setActiveSubmenu(
                      activeSubmenu === "Investment Banking"
                        ? null
                        : "Investment Banking"
                    )
                  }
                >
                  Investment Banking
                  <span className="ml-2">
                    <Image
                      src="/icon/downarrow.png"
                      alt="arrow icon"
                      width={16}
                      height={16}
                      className={`transition-opacity duration-200 ${
                        activeSubmenu === "Investment Banking"
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </span>
                </a>
                {activeSubmenu === "Investment Banking" && (
                  <ul className="list-unstyled pl-4">
                    <li className="py-3">
                      <a href="#investor-form" className="text-[15px] font-semibold">
                        IPO Advisory
                      </a>
                    </li>
                    <li className="py-3">
                      <a href="#investor-form" className="text-[15px] font-semibold">
                        M&A
                      </a>
                    </li>
                    <li className="py-3">
                      <a
                        href="#investor-form"
                        className="text-[15px] font-semibold"
                      >
                        Private Equity/Pre-IPO placement
                      </a>
                    </li>
                    <li className="py-3">
                      <a
                        href="#investor-form"
                        className="text-[15px] font-semibold"
                      >
                        Valuation
                      </a>
                    </li>
                    <li className="py-3">
                      <a
                        href="#investor-form"
                        className="text-[15px] font-semibold"
                      >
                        ECM Advisory
                      </a>
                    </li>
                    <li className="py-3">
                      <a
                        href="#investor-form"
                        className="text-[15px] font-semibold"
                      >
                        Debt Advisory
                      </a>
                    </li>
                    <li className="py-3">
                      <a
                        href="#investor-form"
                        className="text-[15px] font-semibold"
                      >
                        SPAC
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="w-full flex flex-col py-2 px-3"
                onMouseEnter={() => setActiveSubmenu(null)}
              >
                <a
                  className={`w-full flex justify-between items-center py-2 border-gray-400 flex-wrap whitespace-nowrap text-[16px] font-semibold ${
                    activeSubmenu === "accounting" ? "text-green-500" : ""
                  }`}
                  href="#"
                  style={{ display: "flex", alignItems: "center" }}
                  // onClick={() => setActiveSubmenu("accounting")}
                  onClick={() =>
                    setActiveSubmenu(
                      activeSubmenu === "accounting" ? null : "accounting"
                    )
                  }
                >
                  Accounting & Tax Service Support
                  <span className="ml-2">
                    <Image
                      src="/icon/downarrow.png"
                      alt="arrow icon"
                      width={16}
                      height={16}
                      className={`transition-opacity duration-200 ${
                        activeSubmenu === "accounting"
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </span>
                </a>
                {activeSubmenu === "accounting" && (
                  <ul className="list-unstyled pl-4">
                    <li className="py-3">
                      <a href="#investor-form" className="text-[15px] font-semibold">
                        Virtual CFO & Corporate Finance
                      </a>
                    </li>
                    <li className="py-3">
                      <a href="#investor-form" className="text-[15px] font-semibold">
                        Bookkeeping
                      </a>
                    </li>
                    <li className="py-3">
                      <a
                        href="#investor-form"
                        className="text-[16px] font-semibold"
                      >
                        Audit Support & Assurance
                      </a>
                    </li>
                    <li className="py-3">
                      <a
                        href="#investor-form"
                        className="text-[16px] font-semibold"
                      >
                        Financial Reporting
                      </a>
                    </li>
                    <li className="py-3">
                      <a
                        href="#investor-form"
                        className="text-[15px] font-semibold"
                      >
                        Budgeting and Forecasting
                      </a>
                    </li>
                    <li className="py-3">
                      <a
                        href="#investor-form"
                        className="text-[15px] font-semibold"
                      >
                        Corporate Tax & Compliances
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className="w-full flex flex-col py-2 px-3"
                onMouseEnter={() => setActiveSubmenu(null)}
              >
                <a
                  className="py-2   border-gray-400  flex-wrap whitespace-nowrap text-[16px] font-semibold"
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
                        activeSubmenu === "Pre IPO"
                          ? "opacity-100"
                          : "opacity-0 "
                      }`}
                    />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* <div className="p-4 border-b">
        <h2 className="font-bold text-lg">Insights</h2>
      </div> */}
      <div className="p-4 border-b">
        <h2 className="font-semibold text-lg">Career</h2>
      </div>
      <div className="p-4 ">
        <button className=" flex flex-col bg-[#353546] text-white px-5 py-2.5 rounded text-[16px] text-center items-center">
        <Link className="flex justify-center items-center" href="#investor-form">
    Invest Now
    <Image
      src="/icon/Vector.png"
      alt="Arrow Icon"
      width={8}
      height={8}
      className="ml-1"
    />
  </Link>
        </button>
      </div>
    </div>
  );
}
