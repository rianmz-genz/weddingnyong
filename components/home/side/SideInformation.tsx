import Link from "next/link";
import React from "react";

const SideInformation = () => {
  return (
    <aside className="max-sm:hidden pt-8 z-10 fixed right-10 transition-all duration-300 lg:w-1/6 h-screen flex justify-start items-end flex-col">
      <Link
        href="/login"
        className="px-3 shadow-sm py-1 rounded-full bg-[#D0FF58] font-semibold"
      >
        Buat Undangan
      </Link>
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
