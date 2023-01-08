import React from "react";
import { FC, useState } from "react";
import { BsEye } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

const ListInvitations: FC<ListInvitationsProps> = ({ slug }) => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <li className="flex justify-between items-center px-3 py-4 rounded-lg bg-[#f3f4f6] mb-3">
      <h1 className="text-md">{slug}</h1>
      <div className="flex items-center text-xl">
        <BsEye className="mr-3" />
        <FiMenu />
      </div>
    </li>
  );
};

export default ListInvitations;
