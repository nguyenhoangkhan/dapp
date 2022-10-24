const Tokenomics = ({ tokenomicsList }) => {
  return (
    <>
      <h1 className="font-semibold text-[32px] text-white text-center">
        Tokenomics
      </h1>
      <div className="grid grid-cols-3 gap-[60px] mt-[60px] lg:grid-cols-2 sm:grid-cols-1 md:gap-[30px]">
        {tokenomicsList.map((item, idx) => (
          <div
            key={idx}
            className="border-[2px] border-primary-blue bg-black-1 py-[25px] px-[20px] rounded-[12px] flex items-center flex-col gap-[12px] justify-center"
          >
            {item.svg}
            <h4 className="text-white text-[16px] font-semibold uppercase">
              {item.title}
            </h4>
            <p className="text-[14px] leading-[150%] text-neutral-white text-center">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tokenomics;
