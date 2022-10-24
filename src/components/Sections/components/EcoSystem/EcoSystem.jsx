import Image from "next/image";
import Lottie from "react-lottie";
import rocket from "../../../../lotties/rocket.json";
const EcoSystem = ({ ecoLeft, ecoRight }) => {
  return (
    <>
      <div className="mx-auto text-center">
        <Image src="/images/eco.png" alt="" width={417} height={40}></Image>
        <p className="text-neutral-white mt-[16px] w-[600px] mx-auto max-w-full">
          AptosMoon is NOT just one project, this is the ecosystem that will
          strongly develop on Aptos network. We aims to support Aptos users from
          A to Z with our highest and best resources, providing your the
          experience you deserve.{" "}
        </p>
      </div>
      <div className="mt-[60px] relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 ">
          <Image
            src="/images/eco-circle.png"
            alt=""
            width={480}
            height={480}
          ></Image>
        </div>
        <div className="grid grid-cols-3 place-items-center lg:grid-cols-1">
          <div className="flex flex-col gap-[155px] lg:gap-5 max-w-full">
            {ecoLeft.map((item, idx) => (
              <div key={idx} className="text-end max-w-full">
                <h3 className="mb-[12px] font-semibold text-[20px] text-primary-blue">
                  {item.title}
                </h3>
                <p className="text-neutral-white w-[400px] ml-auto max-w-full">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
          <div className="eco-spaceship">
            {/* <Image
              src="/images/eco-spaceship.png"
              alt=""
              width={210}
              height={430}
            ></Image> */}
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: rocket,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={430}
              width={210}
            />
          </div>
          <div className="flex flex-col gap-[155px] lg:gap-5 max-w-full">
            {ecoRight.map((item, idx) => (
              <div key={idx} className="text-start">
                <h3 className="mb-[12px] font-semibold text-[20px] text-primary-blue">
                  {item.title}
                </h3>
                <p className="text-neutral-white w-[400px] mr-auto max-w-full">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="mx-auto h-[48px] w-[152px] bg-primary-blue text mt-[110px] font-semibold text-text flex items-center justify-center rounded-[8px] lg:mt-[60px]"
        style={{ boxShadow: "0px 0px 20px 0px rgb(6 212 191)" }}
      >
        Get Incubated
      </button>
    </>
  );
};

export default EcoSystem;
