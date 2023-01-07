
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineKey, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {BiRename} from "react-icons/bi"
import { useState } from 'react';
const register = () => {
    const [view, setView] = useState<boolean>(false)
    const [password, setPassword] = useState<string>("")
    const passView = (e:string) => {
        setPassword(e)
        e.length > 0 ? setView(true) : setView(false)
    }
  return (
    <section className="w-full min-h-screen bg-[#E0F6FC]">
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content={`Login untuk membuat undangan di weddingnyong`}
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta property="og:title" content="Login Weddingnyong" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:description"
          content={`Login untuk membuat undangan di weddingnyong`}
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <div className="w-10/12 mx-auto h-screen rounded-full bg-[#d4f3fb] flex justify-center items-center">
        <form className="max-w-[450px] w-full h-fit bg-white shadow-[0px_0px_3px_rgba(0,0,0,.25)] py-7 px-4 rounded-xl">
          <label className="flex justify-center items-center mb-8">
            <Image
              src="/favicon.svg"
              width={50}
              height={50}
              alt="WeddingnyongIcon"
            />
            <h1 className="font-bold ml-3 text-3xl text-[#8758ff]">
              Weddingnyong
            </h1>
          </label>
          <label className="w-10/12 mx-auto flex flex-col">
            <h2 className="font-semibold mb-3">Nama*</h2>
            <span className="flex text-xl shadow-[0px_0px_3px_rgba(0,0,0,.25)] px-2 py-1 rounded-full">
              <VscAccount className="text-3xl mr-3 text-[#181818] text-opacity-75" />
              <input
                type="text"
                className="bg-transparent w-full placeholder:text-sm placeholder:text-[#181818] placeholder:text-opacity-75 text-sm focus:outline-none"
                placeholder="Ucup"
              />
            </span>
          </label>
          <label className="w-10/12 mx-auto flex flex-col mt-4">
            <h2 className="font-semibold mb-3">E-mail*</h2>
            <span className="flex text-xl shadow-[0px_0px_3px_rgba(0,0,0,.25)] px-2 py-1 rounded-full">
              <VscAccount className="text-3xl mr-3 text-[#181818] text-opacity-75" />
              <input
                type="email"
                className="bg-transparent w-full placeholder:text-sm placeholder:text-[#181818] placeholder:text-opacity-75 text-sm focus:outline-none"
                placeholder="example@gmail.com"
              />
            </span>
          </label>
          <label className="w-10/12 mx-auto flex flex-col mt-4 ">
            <h2 className="font-semibold mb-3 text-[#181818]">Password*</h2>
            <span className="flex text-xl px-2 py-1 rounded-full shadow-[0px_0px_3px_rgba(0,0,0,.25)]">
              <AiOutlineKey className="text-3xl mr-3 text-[#181818] text-opacity-75" />
              <input
                value={password}
                type={view ? "password" : "text"}
                className="bg-transparent w-full placeholder:text-sm placeholder:text-[#181818] placeholder:text-opacity-75 text-sm focus:outline-none"
                placeholder="password"
                onChange={(e)=> passView(e.target.value)}
              />
              <span onClick={()=> setView(!view)} className="cursor-pointer">
                {view ?  <AiOutlineEyeInvisible  className="text-3xl  text-[#181818] text-opacity-75"/> :  <AiOutlineEye  className="text-3xl  text-[#181818] text-opacity-75"/>}
                </span>
            </span>
          </label>
          <button
            type="submit"
            className="bg-[#8758ff] text-white text-lg flex mx-auto items-center justify-center w-10/12 mt-10 rounded-full py-1 "
          >
            Daftar
          </button>
          <span className="flex w-10/12 mx-auto justify-center mt-4">
            <p>Sudah memiliki akun?</p>
            <a href="/auth/login" className="text-[#8758ff] ml-1">Masuk</a>
          </span>
        </form>
      </div>
    </section>
  )
}

export default register
