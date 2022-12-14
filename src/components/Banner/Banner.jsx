import Lottie from "react-lottie";
import { bannerList, iconHeaders } from "../../constant";
import rocketBanner from "../../lotties/rocketBanner.json";

const Banner = () => {
  return (
    <div
      className="bg-full-w h-[793px] bg-cover bg-no-repeat lg:h-fit lg:pb-[30px]"
      style={{ backgroundImage: "url(/images/banner.png)" }}
    >
      <div className="pt-[140px] grid grid-cols-2 place-items-center container lg:grid-cols-1 sm:pt-[90px]">
        <div className="lg:order-2">
          <h1 className="text-[40px] tracking-tight font-semibold text-white flex items-center 2xl:items-start gap-[12px] 2xl:flex-col xl:items-start sm:text-[20px] sm:mt-[20px]">
            The one-way trip to{" "}
            <div
              className="h-[50px] w-[314px] bg-cover sm:w-[148px] sm:h-[24px]"
              style={{ backgroundImage: "url(/images/logo.png)" }}
            ></div>{" "}
          </h1>
          <p className="text-[16px] leading-[150%] text-white w-[542px] mt-[16px] lg:w-auto max-w-full sm:text-[14px]">
            The leading hyper-deflationary ecosystem where users is the center
            of the development. Experience the best DEX aggregator, NFTs, and
            Metaverse world built on APTOS
          </p>
          <button className="w-[168px] h-[48px] mt-[40px] bg-primary-blue rounded-[8px] font-semibold text-[16px] btn">
            Buy Aptosmoon
          </button>
        </div>
        {/* <div
          className="w-[540px] h-[540px] xl:w-[400px] xl:h-[400px] lg:w-[300px] lg:h-[300px] bg-cover lg:order-1 sm:w-[240px] sm:h-[240px]"
          style={{ backgroundImage: "url(/images/iIlustration.png)" }}
        ></div> */}
        <div className="pointer-events-none lottie-rocket-banner">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: rocketBanner,
              interactivity: false,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={540}
            width={540}
          />
        </div>
      </div>
      <ul className="w-[1200px] h-[106px] container flex justify-evenly items-center mx-auto border-[2px] border-primary-blue rounded-[100px] bg-black-1 relative translate-y-1/2 max-w-full md:hidden  lg:translate-y-0 lg:mt-[30px]">
        {bannerList.map((item, idx) => (
          <li className="text-white flex flex-col" key={idx}>
            <span
              className={`font-semibold text-[14px] ${
                bannerList.indexOf(item) === 1 && "text-primary-blue"
              }`}
            >
              {item.title}
            </span>
            {item.content ? (
              <span className="text-[16px]">{item.content}</span>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
      <div className="container hidden md:block">
        <div className=" items-center gap-x-[16px] h-full flex mt-[30px]">
          {iconHeaders.map((item) => (
            <button
              className="h-[40px] hover:scale-105 duration-300 transition-all w-[40px] rounded-full border-[1px] border-neutral-white flex justify-center items-center"
              key={item.id}
            >
              {item.svg}
            </button>
          ))}
        </div>
        <ul className="w-full gap-[8px] grid grid-cols-3  border-[2px] border-primary-blue rounded-[12px] bg-black-1 relative max-w-full h-fit p-[12px]  mt-[40px] sm:justify-start ">
          <li className="text-neutral-white text-[14px] font-semibold">
            Token Information
          </li>
          <li className="text-primary-blue text-[14px] text-center font-semibold">
            AptosMoon (APM)
          </li>
          <li className="flex flex-col text-neutral-white text-[14px] text-end">
            <span className="font-semibold"> Network</span>
            <p>Aptos</p>
          </li>
          <li className="flex flex-col text-neutral-white col-span-2 text-[14px]">
            <span className="font-semibold"> Smart contract address</span>
            <p>0xd74b78209aa45bc73208dgh667826gb</p>
          </li>
          <li className="flex flex-col text-neutral-white text-end  text-[14px]">
            <span className="font-semibold">Decimals</span>
            <p>9</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
