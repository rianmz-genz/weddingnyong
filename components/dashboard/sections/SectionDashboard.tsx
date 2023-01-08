import React from "react";
import Profile from "../profile/Profile";
import Link from "next/link";
import Banner from "../banner/Banner";

const SectionDashboard = () => {
  return (
    <section id="home" className=" w-full h-full pt-8">
      <Profile
        imageSrc="/images/user/kuncungboy.svg"
        name="Ucup"
        gmail="ucup@gmail.com"
        username=""
      />
      <Banner />
    </section>
  );
};

export default SectionDashboard;
