import React, {FC} from "react";
import Profile from "../profile/Profile";
import Link from "next/link";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TemplateTitle from "../toptitle/TemplateTitle";

import contentData from "../../../store/contentData";
import ListGuest from '../list/ListGuest';

interface ParamsGuest{
  id: string
}
const SectionGuest:FC<ParamsGuest> = ({id}) => {
  const [value, setValue] = useState<string>("");
  const [guestlist, setGuestList] = useState<Invitations[]>([]);
  useEffect(()=> {
    const getData = contentData.invitations.filter((filtered) => filtered.id === id)
    setGuestList(getData)
  },[])

  return (
    <section
      data-aos-delay="200"
      data-aos-duration="350"
      data-aos="fade-up"
      id="home"
      className=" w-full h-full pt-8"
    >
      <Profile
        imageSrc="/images/user/kuncungboy.svg"
        name="Ucup"
        gmail="ucup@gmail.com"
        username=""
      />
      <TemplateTitle title="Tamu Di Undangan Mu" value={value} setValue={setValue} link="/create/invitation"/>
      <ul className="w-11/12 mt-10">
        <div className="flex justify-around items-center px-3 py-3 rounded-full bg-[#f3f4f6] mb-3 text-start">
          <h2 className="flex-1">Nama</h2>
          <h2 className="flex-1">No Whatsapp</h2>
          <h2 className="flex-1">Kehadiran</h2>
          <h2 className="flex-1">Qr</h2>
          <h2 className="flex-1">Aksi</h2>
        </div>
        {guestlist &&  guestlist.map((list)=> (
          list.guest.map(({guestname, whatsapp, qr, attedance},i) => (
            <ListGuest key={i} guestname={guestname} whatsapp={whatsapp} attedance={attedance} qr={qr} />
          ))
        ))}
      </ul>
    </section>
  );
};

export default SectionGuest;
