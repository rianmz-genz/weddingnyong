import React from "react";
import { ReactNode, FC } from "react";

const NavItem: FC<NavItemProps> = ({ show, children }) => {
  return <ul  className={`max-sm:mt-10  ${show ? "flex flex-col max-sm:bg-white max-sm:w-full shadow-md p-3" : "max-sm:hidden"}`}>{children}</ul>;
};

export default NavItem;
