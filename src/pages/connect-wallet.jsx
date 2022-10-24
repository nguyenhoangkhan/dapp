import React from "react";
import Container from "../components/Container";
import { saleInformationsList } from "../constant";

const ConntectWalltet = () => {
  return (
    <Container>
      <div className="bg-black h-[793px] lg:h-fit lg:pb-[200px]">
        <div
          className="bg-w-full w-full h-full bg-cover bg-no-repeat relative"
          style={{ backgroundImage: "url(/images/connect-wallet-bg.png)" }}
        >
          <div
            className="absolute h-[260px] left-0 bottom-0 right-0 w-full z-[1]"
            style={{
              background:
                "linear-gradient(180deg, rgba(1, 1, 1, 0.01) 0%, rgba(1, 1, 1, 0.2) 32.81%, rgba(1, 1, 1, 0.5) 57.81%, rgba(1, 1, 1, 0.8) 76.56%, #010101 100%)",
            }}
          ></div>
          <div className="md:px-[16px] overflow-hidden w-fit mx-auto relative z-[1] translate-y-[200px] sm:translate-y-[150px]  grid grid-cols-[repeat(2,540px)] xl:grid-cols-[repeat(2,450px)] lg:grid-cols-1 gap-[65px] sm:w-full">
            <div className="border-[2px] overflow-hidden rounded-[16px] border-primary-blue h-[650px] xl:order-2">
              <div className="bg-green   h-[68px] flex justify-center items-center text-[24px] font-semibold text-white">
                Public Sale Information
              </div>
              <ul className="p-[36px] md:p-[20px]  flex flex-col gap-[32px]">
                {saleInformationsList.map((item, idx) => (
                  <li
                    key={idx}
                    className="grid grid-cols-[1fr,2fr] gap-x-[80px] sm:grid-cols-1 "
                  >
                    <div className="font-semibold text-white ">
                      {item.title}
                    </div>
                    <div className="font-semibold text-primary-blue ">
                      {item.content}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-[2px] overflow-hidden rounded-[16px] border-primary-blue h-[650px] xl:order-1">
              <div className="bg-green   h-[68px] flex justify-center items-center text-[24px] font-semibold text-white">
                Join Public Sale
              </div>
              <div className="p-[36px] md:p-[20px]">
                <div className="uppercase text-red text-center font-semibold mb-[8px]">
                  close in
                </div>
                <div className="flex gap-x-[16px] text-[32px] font-semibold text-white justify-center items-center mb-[16px]">
                  <span>00</span>
                  <span>:</span>
                  <span>00</span>
                  <span>:</span>
                  <span>00</span>
                  <span>:</span>
                  <span>00</span>
                </div>
                <div>
                  <div className="flex gap-[8px] flex-col mb-[24px]">
                    <p className="text-end  font-semibold text-white">
                      84.243%
                    </p>
                    <div className="h-[14px] w-full max-w-full border-[1px] overflow-hidden border-primary-blue rounded-[8px]">
                      <div className="w-[84%] h-full bg-primary-blue rounded-[8px]"></div>
                    </div>
                    <div className="flex justify-between items-center text-[13px] text-white">
                      <p>63,182.544 APT</p>
                      <p>75,000 APT</p>
                    </div>
                  </div>
                  <div className="mb-[24px]">
                    <div className=" border-b-[1px] mb-[16px] border-gray">
                      <div className="flex gap-[8px] justify-between text-white mb-[16px]">
                        <p>YOUR APT BALANCE</p>
                        <p className="text-primary-blue">0 APT</p>
                      </div>
                    </div>
                    <div className=" border-b-[1px] border-gray">
                      <div className=" flex gap-[8px] justify-between text-white mb-[16px]">
                        <p>YOUR CONTRIBUTION</p>
                        <p className="text-primary-blue">0 APT</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <div className="text-white text-[14px]">
                      AMOUNT (MAX: 500 APT)
                    </div>
                    <div className="flex justify-between px-[16px] py-[13px] items-center border-gray rounded-[8px] border-[1px]">
                      <input
                        type="text"
                        className="bg-transparent flex-1 outline-none border-none text-gray pr-[6px]"
                      />
                      <span className="text-white text-[14px] uppercase">
                        max
                      </span>
                    </div>
                    <p className="text-neutral-white text-[14px]">
                      You will receive:{" "}
                      <span className="text-primary-blue">31,080 ADX</span>
                    </p>
                  </div>
                </div>
                <button
                  className="w-[162px] h-[48px] hover:scale-105 duration-400 bg-primary-blue rounded-[8px]  font-semibold text-[16px] md:w-[140px] md:h-[40px] flex items-center justify-center mx-auto mt-[36px] mb-[40px]"
                  style={{ boxShadow: "0px 0px 20px 0px rgb(6 212 191)" }}
                >
                  Buy Aptosmoon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ConntectWalltet;
