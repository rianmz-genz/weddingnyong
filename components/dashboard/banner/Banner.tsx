import React from 'react'
import Link from 'next/link';

const Banner = () => {
  return (
<div className="w-11/12 h-fit mt-7 flex flex-col justify-center items-center py-3">
        <div className="w-full h-fit mt-7 flex justify-center items-center py-3">
          <div className="flex mr-6">
            <img
              src="/images/user/loveboy.svg"
              alt="mempelaiicon"
              className=""
            />
            <img
              src="/images/user/lovegirl.svg"
              alt="mempelaiicon"
              className="-ml-4"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">50K +</h1>
            <p className="font-semibold text-xl">Undangan Telah Disebar</p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-8">
            <h2 className="text-2xl">Selamat datang di <span className="font-semibold text-[#8758ff]">Weddingnyong</span>!</h2>
            <p className="text-lg">Platform pembuatan undangan pernikahan digital terbesar di Indonesia.</p>
            <Link href="/create/invitation" className="bg-[#f3f4f6] px-3 py-1 text-xl rounded-full mt-8 font-semibold">Buat undangan</Link>
        </div>
      </div>
  )
}

export default Banner
