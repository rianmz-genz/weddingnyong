import React from "react";
import { ReactNode, FC } from "react";

const NavItemDashboard: FC<NavItemProps> = ({ show, children }) => {
  return (
    <ul
      className={`mt-5  ${
        show
          ? "flex flex-col max-sm:bg-white max-sm:w-full shadow-md p-3 visible opacity-100 transition-all duration-300"
          : "max-sm:opacity-0 transition-all duration-300 max-sm:invisible"
      }`}
    >
      {children}
    </ul>
  );
};

export default NavItemDashboard;
