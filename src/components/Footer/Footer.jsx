import Link from "next/link";
import { footerList } from "../../constant";

const Footer = () => {
  return (
    <footer>
      <div
        className="w-full bg-w-full pt-[25%] bg-center bg-cover relative p-[20px]"
        style={{
          backgroundImage: "url(/images/footer.png)",
        }}
      >
        <div className="footer-overlay"></div>
        <div className="container flex justify-between lg:static lg:translate-y-[-14px] sm:flex-col mx-auto">
          <div className="text-white">
            {" "}
            Copyright Ⓒ{" "}
            <span className="text-primary-blue font-semibold">
              AptosMoon
            </span>{" "}
          </div>
          <ul className="flex gap-[36px] items-center  z-[1] ">
            {footerList.map((item, idx) => (
              <li key={idx} class>
                <Link href="#">
                  <a className="text-neutral-white"> {item}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
