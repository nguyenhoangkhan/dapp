import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { iconHeaders } from "../../constant";
const Header = () => {
  const [headerColor, setHeaderColor] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHeaderColor("bg-black");
      } else {
        setHeaderColor("");
      }
    });
  }, []);

  return (
    <header className={`fixed left-0 top-0 right-0 z-[9999] ${headerColor}`}>
      <div className="container flex justify-between items-center py-[28px]  ">
        <Link href="/">
          <a>
            <div
              className="bg-cover w-[298px] h-[48px] bg-no-repeat"
              style={{ backgroundImage: "url(/images/logo.png)" }}
            ></div>
          </a>
        </Link>
        <div class="flex items-center gap-x-[24px]">
          <div class="flex items-center gap-x-[16px] h-full">
            {iconHeaders.map((item) => (
              <button
                className="h-[40px] hover:scale-105 duration-400 w-[40px] rounded-full border-[1px] border-neutral-white flex justify-center items-center"
                key={item.id}
              >
                {item.svg}
              </button>
            ))}
          </div>
          <button
            className="w-[162px] h-[48px] hover:scale-105 duration-400 bg-primary-blue rounded-[8px]  font-semibold text-[16px]"
            style={{ boxShadow: "0px 0px 20px 0px rgb(6 212 191)" }}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
