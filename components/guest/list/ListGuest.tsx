import React from "react";
import { FC, useState } from "react";
import { BsEye } from "react-icons/bs";
import { FiMenu, FiX, FiBook, FiSend } from "react-icons/fi";
import { VscEdit } from "react-icons/vsc";
import {AiOutlineCheckCircle, AiOutlineSync, AiOutlineDelete} from "react-icons/ai"
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
const ListGuest: FC<ListGuestProps> = ({ guestname, whatsapp, attedance, qr }) => {
  const [attedanceMessage, setAttedanceMessage] = useState<string>("")
  const date = new Date()
  const getdatenow = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}, ${date.getHours()}:${date.getSeconds()}`
  useEffect(() => {
    attedance ?  setAttedanceMessage(getdatenow) : setAttedanceMessage("belum hadir")
    AOS.init();
  }, []);
  return (
    <li className="flex justify-between items-center px-3 py-4 mb-3">
      <h1 className="text-md flex-1">{guestname}</h1>
      <p className="flex-1">{whatsapp}</p>
      <p className="flex-1">{attedanceMessage}</p>
      <p className="flex-1">{qr}</p>
      <div className="flex gap-1 flex-1 text-xl cursor-pointer">
        <AiOutlineCheckCircle className="text-green-600" />
        <AiOutlineSync className="text-blue-600"  />
        <FiSend className="text-[#8758ff]" />
        <VscEdit className="text-indigo-600" />
        <AiOutlineDelete  className="text-[#EA7C77]"/>
      </div>
    </li>
  );
};

export default ListGuest;
