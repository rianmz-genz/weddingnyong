import { useState, useEffect, ReactNode, FC } from "react";

const NavLinkDashboard: FC<NavLinkProps> = ({ children, target }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
      if (target === "/dashboard/user/") {
        setIsActive(true);
      }
  }, [target]);
  return (
    <li>
      <a
        href={target}
        className={` text-xl flex items-center gap-3 mb-4 ${
          isActive ? "font-semibold text-[#8758ff]" : "text-gray-500"
        } hover:text-[#8758ff]`}
      >
        {children}
      </a>
    </li>
  );
};

export default NavLinkDashboard;
