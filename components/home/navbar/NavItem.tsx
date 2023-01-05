import React from 'react'
import { ReactNode, FC } from 'react';
interface NavItemProps{
    show: boolean
    children: ReactNode
}
const NavItem: FC<NavItemProps> = ({show, children}) => {
  return (
    <ul className={`${show ? "flex" : "max-sm:hidden"}`}>
      {children}
    </ul>
  )
}

export default NavItem
