import Link from "next/link";
import { footerList } from "../../constant";

const Footer = () => {
  return (
    <footer>
      <div
        className="w-full bg-w-full h-[362px] bg-cover relative"
        style={{
          backgroundImage: "url(/images/footer.png)",
        }}
      >
        <div className="footer-overlay"></div>
        <div className="container flex justify-between absolute bottom-[24px] left-[60px]">
          <div className="text-white">
            {" "}
            Copyright @ <span className="text-primary-blue">
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
