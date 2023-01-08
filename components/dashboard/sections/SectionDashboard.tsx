import React from "react";
import Profile from "../profile/Profile";
import Link from "next/link";
import Banner from "../banner/Banner";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const SectionDashboard = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
      <Banner />
    </section>
  );
};

export default SectionDashboard;
