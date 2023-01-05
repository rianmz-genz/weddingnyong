import React from "react";
import { ReactNode, FC } from "react";

const NavItem: FC<NavItemProps> = ({ show, children }) => {
  return <ul className={`${show ? "flex" : "max-sm:hidden"}`}>{children}</ul>;
};

export default NavItem;
