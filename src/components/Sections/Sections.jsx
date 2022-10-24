import Image from "next/image";
import {
  sectionsList,
  ecoLeft,
  ecoRight,
  phasesList,
  tokenomicsList,
} from "../../constant";
import { Tokenomics, Phases } from "./components";
import EcoSystem from "./components/EcoSystem/EcoSystem";

const Sections = () => {
  return (
    <div className="mt-[160px] container relative lg:mt-[80px]">
      <div className="grid grid-cols-2 place-items-center mb-[80px] lg:grid-cols-1 lg:gap-[30px]">
        <div
          className="w-[400px] h-[400px] lg:w-[300px] lg:h-[300px]  bg-cover"
          style={{ backgroundImage: "url(/images/moon.png)" }}
        ></div>
        <div>
          <h2>
            <div
              className="pt-[9%] bg-center bg-cover "
              style={{ backgroundImage: "url(/images/origin.png)" }}
            ></div>
          </h2>
          <p className="text-white mt-[16px] sm:text-[14px]">
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
      <div className="grid grid-cols-1 gap-[60px] ">
        {sectionsList.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-2 gap-x-[60px] place-items-center lg:grid-cols-1 lg:gap-[30px] lg:place-items-center"
          >
            <div style={{ order: `${item.content.order}` }}>
              {item.content.img ? (
                <div
                  className={`pt-[8%] bg-center lg:w-full max-w-full bg-cover ${
                    item.content.order === 1 ? "ml-auto" : ""
                  }`}
                  style={{ backgroundImage: `url(${item.content.img})` }}
                ></div>
              ) : (
                ""
              )}
              <div className={`${item.content.order === 1 ? "text-end " : ""}`}>
                <p className="text-[32px] font-semibold text-primary-blue py-[16px]">
                  {item.content.title ? item.content.title : ""}
                </p>
                <p className="text-white leading-[150%] max-w-full sm:text-[14px]">
                  {item.content.para}
                </p>
              </div>
            </div>
            <div style={{ order: `${item.img.order}` }}>
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
      <div className="mt-[100px] lg:mt-[80px] ">
        <EcoSystem ecoLeft={ecoLeft} ecoRight={ecoRight} />
      </div>
      <div className="mt-[100px] lg:mt-[80px]">
        <Phases phasesList={phasesList} />
      </div>
      <div className="mt-[100px] lg:mt-[80px]">
        <Tokenomics tokenomicsList={tokenomicsList} />
      </div>
      <div className="mt-[100px] lg:mt-[80px] relative z-[1]">
        <div
          className="pt-[36.25%] bg-cover "
          style={{ backgroundImage: "url(/images/table.png)" }}
        ></div>
      </div>
      <div className="mt-[100px] lg:mt-[80px] relative z-[1]">
        <div
          className="pt-[82%] bg-cover"
          style={{ backgroundImage: "url(/images/pie-chart.png)" }}
        ></div>
      </div>
      <div
        className="w-full bg-w-full h-[1848px] max-w-full absolute left-0  bottom-[520px]"
        style={{ backgroundImage: "url(/images/decorate.png)" }}
      ></div>
    </div>
  );
};

export default Sections;
