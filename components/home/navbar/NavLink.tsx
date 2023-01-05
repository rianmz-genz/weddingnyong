import { useState, useEffect, ReactNode, FC } from "react";

const NavLink: FC<NavLinkProps> = ({ children, target }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const headerHeight: number = 82;

  useEffect(() => {
    const targetElement = document.querySelector<HTMLElement>(target);
    if (targetElement) {
      if (target === "#home") {
        setIsActive(true);
      }
      window.addEventListener("scroll", () => {
        if (
          window.scrollY + headerHeight >
            targetElement.offsetTop - headerHeight &&
          window.scrollY <
            targetElement.offsetTop + targetElement.clientHeight - headerHeight
        ) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      });
    }
  }, [target]);
  return (
    <li>
      <a
        href={target}
        className={` text-xl flex items-center gap-3 mb-4 ${
          isActive ? "font-semibold text-[#8758ff]" : "text-gray-500"
        } hover:text-[#8758ff]`}
        onClick={(e) => {
          e.preventDefault();
          if (document && window) {
            const targetElement = document.querySelector<HTMLElement>(target);
            if (targetElement) {
              window.scrollTo(0, targetElement.offsetTop - headerHeight);
            }
          }
        }}
      >
        {children}
      </a>
    </li>
  );
};

export default NavLink;
