import React from "react";
import Profile from "../profile/Profile";
import Link from "next/link";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TemplateTitle from "../toptitle/TemplateTitle";
import ListInvitations from "../list/ListInvitations";
import contentData from "../../../store/contentData";
const SectionInvitations = () => {
  const [value, setValue] = useState<string>("");
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
      <TemplateTitle title="Undanganmu" value={value} setValue={setValue} link="/create/invitation"/>
      <ul className="w-11/12 mt-10">
        {contentData.invitations.map((invitation, index) => (
          <ListInvitations key={index} slug={invitation.slug} id={invitation.id} />
        ))}
      </ul>
    </section>
  );
};

export default SectionInvitations;
