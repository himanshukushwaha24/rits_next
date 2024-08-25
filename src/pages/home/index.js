import Layout from "@/components/layout";
import Cardmover from "@/components/shared/card/card4";
import WhatweDo from "@/components/wedo";
import React from "react";

const Home = () => {
  return (
    <>
      <Layout>
        <section className="home h-full w-full">
          <div className="hero-banner">
            <div
              className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/assets/hero/testimage1.jpg')" }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Empowering Your Financial Future with Innovative Investment
                  Solutions
                </h1>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                  Consult Us
                </button>
              </div>
            </div>
          </div>

          <div className="banner-container w-full h-auto bg-[#F0F0F0] flex flex-wrap justify-around items-center text-center p-4">
            <div className="w-1/2 md:w-auto flex flex-col mb-4 md:mb-0">
              <span className="text-3xl font-bold">$10Bn</span>
              <span className="text-sm text-gray-600">
                Raised <br /> and counting
              </span>
            </div>
            <div className="w-1/2 md:w-auto flex flex-col mb-4 md:mb-0">
              <span className="text-3xl font-bold">80%</span>
              <span className="text-sm text-gray-600">
                Average return on pre- <br />
                IPO investments
              </span>
            </div>
            <div className="w-1/2 md:w-auto flex flex-col mb-4 md:mb-0">
              <span className="text-3xl font-bold">200X</span>
              <span className="text-sm text-gray-600">
                Return on
                <br /> startup investments
              </span>
            </div>
            <div className="w-1/2 md:w-auto flex flex-col">
              <span className="text-3xl font-bold">$250Mn+</span>
              <span className="text-sm text-gray-600">
                Assets under <br />
                management
              </span>
            </div>
          </div>
        </section>
        <WhatweDo />
        <section className="slider w-full py-8 bg-[#F0F0F0]">
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className=" stories flex text-[#0F0F0F] text-[30px] md:text-3xl mb-6 font-semibold text-center items-center justify-center ">
              Stories From Our Valued Clients
            </h2>
            <div className="w-full overflow-hidden px-4">
              <Cardmover />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
