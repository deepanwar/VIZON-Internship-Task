import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const links = [
  { link: "Products", path: "/product" },
  { link: "Club", path: "/club" },
  { link: "Get In Touch", path: "/getInTouch" },
];

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  function hanndleNav() {
    console.log("nav is opened");
    setOpenNav(!openNav);
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-[#070707] px-5 sm:px-10 py-3 sm:py-5  flex justify-between items-center z-50">
        <div className="sm:h-[60px] sm:w-[90px] h-[50px] w-[80px]">
          <img src={logo} alt="" className="h-full" />
        </div>

        <ul className="hidden md:flex text-white text-xl font-normal gap-10 ">
          {links.map((link, i) => (
            <li key={i} className="cursor-pointer">
              <a href={link.path}> {link.link}</a>
            </li>
          ))}
        </ul>
        <div
          onClick={hanndleNav}
          className=" md:hidden text-[#3053ff] cursor-pointer"
        >
          {openNav ? <FiX size={40} /> : <FiMenu size={40} />}
        </div>
      </div>

      {/* mobile navigation */}
      {openNav && (
        <div className="fixed top-[70px] left-0 right-0 bottom-0 flex justify-center items-center flex-col bg-[#070707]/95 gap-5">
          <ul>
            {links.map((link, i) => (
              <li
                key={i}
                className="cursor-pointer text-white text-2xl p-3 hover:bg-black/90 rounded-lg "
                onClick={hanndleNav}
              >
                <a href={link.path}> {link.link}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
