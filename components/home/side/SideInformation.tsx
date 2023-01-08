import Link from "next/link";
import React from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const SideInformation = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <aside
      data-aos="fade-left"
      data-aos-delay="200"
      data-aos-duration="350"
      className="max-sm:hidden pt-8 z-10 fixed right-24 transition-all duration-300 lg:w-1/6 h-screen flex justify-start items-end flex-col"
    >
      <a
        href="/auth/login"
        className="px-3 shadow-sm py-1 rounded-full bg-[#D0FF58] font-semibold"
      >
        Buat Undangan
      </a>
      <div className="w-11/12 h-fit p-2 bg-[#f3f4f6] rounded-lg mt-24 py-4 flex flex-col items-center">
        <div className="text-lg text-[#181818] font-semibold flex items-center">
          <img
            src="/iconsideinfo.svg"
            className="w-7 mr-2"
            alt="WeddingnyongIcon"
          />
          Weddingnyong
        </div>
        <p className="text-sm w-10/12 mt-3">
          WeddingNyong adalah layanan untuk membuat undangan pernikahan secara
          online gratis dengan mudah. Undangan yang dibuat akan berbentuk sebuah
          website yang dapat di akses dan dibagikan kapanpun.
        </p>
      </div>
    </aside>
  );
};

export default SideInformation;
