import React from "react";
import { FC, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { FiMenu, FiX, FiBook } from "react-icons/fi";
import { VscEdit } from "react-icons/vsc";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
const ListInvitations: FC<ListInvitationsProps> = ({ slug, id }) => {
  const [menu, setMenu] = useState<boolean>(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <li className="flex justify-between items-center px-3 py-4 rounded-lg bg-[#f3f4f6] mb-3">
      <h1 className="text-md">{slug}</h1>
      <div className="flex items-center text-xl pr-6">
        <Link href={`/${slug}`}>
          <BsEye className="mr-3" />
        </Link>
        <div className="cursor-pointer relative transition-all duration-300">
          <span
            className={`flex-col transition-all duration-300 justify-center items-end absolute bg-[#f3f4f6] z-20 backdrop-blur-md -mt-3 ${
              menu ? "opacity-100 visible " : "opacity-0 invisible"
            }`}
          >
            <FiX onClick={() => setMenu(!menu)} className="mb-2" />
            <VscEdit className="mb-2" />
            <Link href={`/guest/${id}`}><FiBook className="mb-2" /></Link>
            <AiOutlineDelete className="mb-2" />
          </span>

          <FiMenu
            onClick={() => setMenu(!menu)}
            className={`transition-all duration-300 absolute -mt-3 ${
              menu ? "hidden" : "block"
            }`}
          />
        </div>
      </div>
    </li>
  );
};

export default ListInvitations;
