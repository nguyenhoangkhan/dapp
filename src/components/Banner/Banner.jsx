import { bannerList } from "../../constant";

const Banner = () => {
  return (
    <div
      className="bg-full-w h-[793px] bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(/images/banner.png)" }}
    >
      <div class="pt-[140px] grid grid-cols-2 place-items-center">
        <div>
          <h1 className="text-[40px] font-semibold text-white flex items-center gap-[12px]">
            The one-way trip to{" "}
            <div
              class="h-[50px]  bg-cover w-[310px]"
              style={{ backgroundImage: "url(/images/logo.png)" }}
            ></div>{" "}
          </h1>
          <p className="text-[16px] leading-[150%] text-white w-[542px] mt-[16px]">
            The leading hyper-deflationary ecosystem where users is the center
            of the development. Experience the best DEX aggregator, NFTs, and
            Metaverse world built on APTOS
          </p>
          <button
            className="w-[168px] h-[48px] mt-[40px] bg-primary-blue rounded-[8px] font-semibold text-[16px]"
            style={{ boxShadow: "0px 0px 20px 0px rgb(6 212 191)" }}
          >
            Buy Aptosmoon
          </button>
        </div>
        <div
          className="w-[540px] h-[540px] bg-cover"
          style={{ backgroundImage: "url(/images/iIlustration.png)" }}
        ></div>
      </div>
      <ul className="w-[1200px] h-[106px] flex justify-evenly items-center mx-auto border-[2px] border-primary-blue rounded-[100px] bg-black-1 relative translate-y-1/2">
        {bannerList.map((item, idx) => (
          <li className="text-white flex flex-col" key={idx}>
            {item.title}
            {item.content ? <span>{item.content}</span> : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Banner;
