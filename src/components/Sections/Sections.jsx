import Image from "next/image";
import {
  sectionsList,
  ecoLeft,
  ecoRight,
  phasesList,
  tokenomicsList,
} from "../../constant";
import { Tokenomics, Phases } from "./components";

const Sections = () => {
  return (
    <div className="mt-[160px] container relative">
      <div className="grid grid-cols-2 place-items-center mb-[80px]">
        <div
          className="w-[400px] h-[400px] bg-cover"
          style={{ backgroundImage: "url(/images/moon.png)" }}
        ></div>
        <div>
          <h2>
            <div
              className="w-[410px] h-[40px] bg-cover"
              style={{ backgroundImage: "url(/images/origin.png)" }}
            ></div>
          </h2>
          <p className="text-white mt-[16px]">
            {`Everyone has seen the potential of Aptos and witness how hype the
            comunity react to Aptos recently. However, noone knows for sure how
            will Aptos develop in the future. AptosMoon is the early-built
            project on Aptos that have gone a long way to wait for the time to
            MOOOOOON!!! Realizing everyone's dream of a prosperous Aptos
            ecosystem, we provide the best Dapp, attract users to Aptos and join
            hand to build a flourishing Aptos community.`}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[60px]">
        {sectionsList.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-2 gap-x-[60px] place-items-center"
          >
            <div className={`order-${item.content.order}`}>
              <div
                className={`h-[40px] w-[500px] bg-cover ${
                  item.content.order === 1 ? "ml-auto" : ""
                }`}
                style={{ backgroundImage: `url(${item.content.img})` }}
              ></div>
              <div className={`${item.content.order === 1 ? "text-end" : ""}`}>
                <p className="text-[32px] font-semibold text-primary-blue py-[16px]">
                  {item.content.title ? item.content.title : ""}
                </p>
                <p className="text-white leading-[150%]">{item.content.para}</p>
              </div>
            </div>
            <div className={`order-${item.img.order}`}>
              <Image
                className="object-cover"
                width={item.img.width}
                height={item.img.height}
                alt=""
                src={item.img.url}
              ></Image>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[100px] ">
        <div className="mx-auto text-center">
          <Image src="/images/eco.png" alt="" width={417} height={40}></Image>
          <p className="text-neutral-white mt-[16px] w-[600px] mx-auto">
            AptosMoon is NOT just one project, this is the ecosystem that will
            strongly develop on Aptos network. We aims to support Aptos users
            from A to Z with our highest and best resources, providing your the
            experience you deserve.{" "}
          </p>
        </div>
        <div className="mt-[60px] relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2">
            <Image
              src="/images/eco-circle.png"
              alt=""
              width={480}
              height={480}
            ></Image>
          </div>
          <div class="grid grid-cols-3 place-items-center ">
            <div className="flex flex-col gap-[155px]">
              {ecoLeft.map((item, idx) => (
                <div key={idx} className="text-end">
                  <h3 className="mb-[12px] font-semibold text-[20px] text-primary-blue">
                    {item.title}
                  </h3>
                  <p className="text-neutral-white w-[400px] ml-auto">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <Image
                src="/images/eco-spaceship.png"
                alt=""
                width={210}
                height={430}
              ></Image>
            </div>
            <div className="flex flex-col gap-[155px]">
              {ecoRight.map((item, idx) => (
                <div key={idx} className="text-start">
                  <h3 className="mb-[12px] font-semibold text-[20px] text-primary-blue">
                    {item.title}
                  </h3>
                  <p className="text-neutral-white w-[400px] mr-auto">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          className="mx-auto h-[48px] w-[152px] bg-primary-blue text mt-[110px] font-semibold text-text flex items-center justify-center rounded-[8px] "
          style={{ boxShadow: "0px 0px 20px 0px rgb(6 212 191)" }}
        >
          Get Incubated
        </button>
      </div>
      <div className="mt-[100px]">
        <Phases phasesList={phasesList} />
      </div>
      <div className="mt-[100px]">
        <Tokenomics tokenomicsList={tokenomicsList} />
      </div>
      <div className="mt-[100px] relative z-[1]">
        <div
          className="pt-[36.2%] bg-cover"
          style={{ backgroundImage: "url(/images/table.png)" }}
        ></div>
      </div>
      <div className="mt-[100px] relative z-[1]">
        <div
          className="pt-[82%] bg-cover"
          style={{ backgroundImage: "url(/images/pie-chart.png)" }}
        ></div>
      </div>
      <div
        className="w-full bg-w-full h-[1848px] absolute  bottom-[520px]"
        style={{ backgroundImage: "url(/images/decorate.png)" }}
      ></div>
    </div>
  );
};

export default Sections;
