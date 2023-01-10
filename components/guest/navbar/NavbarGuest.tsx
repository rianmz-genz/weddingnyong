import { FiX, FiMenu } from "react-icons/fi";
import { CgHomeAlt } from "react-icons/cg";
import { BiLayout, BiLogOut, BiLogOutCircle } from "react-icons/bi";
import { IoPricetagOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { VscMail, VscSymbolProperty, VscAccount } from 'react-icons/vsc';
import React, { useState, useEffect } from "react";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import NavItemGuest from './NavItemGuest';
import NavLinkGuest from './NavLinkGuest';
const NavbarGuest = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <header
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="350"
      className="bg-white z-10 max-sm:h-14 fixed transition-all duration-300 lg:w-2/12 h-screen max-sm:w-11/12 max-sm:shadow-lg"
    >
      <nav
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
        className="h-4/6 grid grid-rows-2 place-items-start max-sm:h-full"
      >
        <div className="w-full h-14 flex justify-between items-center px-2">
          <a
            href="/"
            className="text-xl text-[#8758ff] font-semibold flex mt-6 max-sm:mt-0 items-center"
          >
            <img
              src="/favicon.svg"
              className="w-9 mr-2"
              alt="WeddingnyongIcon"
            />
            Weddingnyong
          </a>
          <button
            className=" text-2xl lg:hidden text-[#8758ff] duration-300 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX className="hover:rotate-90 duration-300 transition-all" />
            ) : (
              <FiMenu className="hover:scale-125 duration-300 transition-all" />
            )}
          </button>
        </div>
        <NavItemGuest show={isMenuOpen}>
          <NavLinkGuest target="/dashboard/user/undangan">
            <VscMail />
            Undangan
          </NavLinkGuest>
        </NavItemGuest>
      </nav>
    </header>
  );
};

export default NavbarGuest;
