import { RiMenu4Fill } from "react-icons/ri";
import { CgHomeAlt } from "react-icons/cg";
import { BiLayout } from "react-icons/bi";
import { IoPricetagOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { VscClose, VscSymbolProperty } from "react-icons/vsc";
import React, { useState } from "react";
import NavItem from "./NavItem";
import NavLink from "./NavLink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-white z-10 max-sm:h-14 fixed transition-all duration-300 lg:w-3/12 h-screen">
      <nav
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
        className="h-4/6 grid grid-rows-2 place-items-start"
      >
        <a
          href="#home"
          className="text-xl text-[#8758ff] font-semibold flex mt-6 items-center"
        >
          <img src="/favicon.svg" className="w-9 mr-2" alt="WeddingnyongIcon" />
          Weddingnyong
        </a>
        <NavItem show={isMenuOpen}>
          <NavLink target="#home"><CgHomeAlt/>Beranda</NavLink>
          <NavLink target="#feature"><VscSymbolProperty/>Fitur</NavLink>
          <NavLink target="#design"><BiLayout/>Desain</NavLink>
          <NavLink target="#price"><IoPricetagOutline/>Harga</NavLink>
          <NavLink target="#testimonial"><BsEmojiSmile/>Testimoni</NavLink>
        </NavItem>
      </nav>
    </header>
  );
};

export default Navbar;
