import { phasesListMobile } from "../../../../constant";

const Phases = ({ phasesList }) => {
  return (
    <>
      <h1 className="font-semibold text-[32px] text-white sm:text-[24px] text-center">
        So, how are we going to do all of this in 2022 & 2023?
      </h1>
      <div className="mt-[60px] grid grid-cols-3 md:hidden">
        {phasesList.map((item, idx) => (
          <div key={idx}>
            <p className="text-white font-semibold mb-[20px]">
              Phase {idx + 1}
            </p>
            <div
              className="w-full h-[120px] bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <p
              className="mb-[20px] text-primary-blue font-semibold text-[32px]"
              style={{ textShadow: "0px 0px 20px  rgb(6 212 191)" }}
            >
              {item.title}
            </p>
            <ul>
              {item.list.map((item, idx) => (
                <li key={idx} className="flex items-center gap-x-[8px]">
                  <div className="w-[6px] flex-shrink-0 flex-0 h-[6px] bg-primary-blue rounded-full"></div>
                  <p className="text-[14px] text-white leading-[24px]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-[60px] hidden grid-cols-1 md:grid">
        {phasesListMobile.map((item, idx) => (
          <div key={idx} className="grid grid-cols-[1fr,2.3fr]">
            <div
              className="w-[80px] h-[424px] bg-contain bg-no-repeat "
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <div className="flex flex-col lg:mt-[-7px]">
              <p className="text-white font-semibold mb-[20px]">
                Phase {idx + 1}
              </p>
              <p
                className="mb-[20px] text-primary-blue font-semibold text-[32px]"
                style={{ textShadow: "0px 0px 20px  rgb(6 212 191)" }}
              >
                {item.title}
              </p>
              <ul>
                {item.list.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-[8px]">
                    <div className="w-[6px] flex-shrink-0 flex-0 h-[6px] bg-primary-blue rounded-full"></div>
                    <p className="text-[14px] text-white">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Phases;
