import Head from "next/head";
import Image from "next/image";
import React from "react";
import { VscAccount, VscArrowLeft } from "react-icons/vsc";
import {
  AiOutlineKey,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/router";
const login = () => {
  const [view, setView] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [users, setUsers] = useState<login[]>([])
  const router = useRouter();
  const passView = (e: string) => {
    setPassword(e);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUsers([{username, password}])
    if(username === "admin@gmail.com" && password === "admin"){
      router.push("/dashboard/admin")
    }else{
      router.push("/dashboard/user")
    }
  };
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
      <div className="w-10/12 mx-auto h-screen rounded-full max-sm:w-full max-sm:rounded-none bg-[#d4f3fb] flex justify-center items-center">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="max-w-[450px] w-full max-sm:w-11/12 h-fit bg-white shadow-[0px_0px_3px_rgba(0,0,0,.25)] py-7 px-4 rounded-xl relative"
        >
          <a href="/" className=" absolute top-4 left-4 cursor-pointer">
            <VscArrowLeft className="text-black text-opacity-75 text-2xl" />
          </a>
          <label className="flex justify-center items-center mb-8">
            <Image
              src="/favicon.svg"
              width={50}
              height={50}
              alt="WeddingnyongIcon"
            />
            <h1 className="font-bold ml-3 text-3xl max-sm:text-xl text-[#8758ff]">
              Weddingnyong
            </h1>
          </label>
          <label className="w-10/12 mx-auto flex flex-col max-sm:w-11/12">
            <h2 className="font-semibold mb-3">E-mail*</h2>
            <span className="flex text-xl shadow-[0px_0px_3px_rgba(0,0,0,.25)] px-2 py-1 rounded-full">
              <VscAccount className="text-3xl mr-3 text-[#181818] text-opacity-75" />
              <input
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                id="gmail"
                type="email"
                className="bg-transparent w-full placeholder:text-sm placeholder:text-[#181818] placeholder:text-opacity-75 text-sm focus:outline-none"
                placeholder="example@gmail.com"
              />
            </span>
          </label>
          <label className="w-10/12 mx-auto flex flex-col mt-6  max-sm:w-11/12">
            <h2 className="font-semibold mb-3">Password*</h2>
            <span className="flex text-xl px-2 py-1 rounded-full shadow-[0px_0px_3px_rgba(0,0,0,.25)]">
              <AiOutlineKey className="text-3xl mr-3 text-[#181818] text-opacity-75" />
              <input
                onChange={(e) => passView(e.target.value)}
                value={password}
                type={view ? "text" : "password"}
                id="gmail"
                className="bg-transparent w-full placeholder:text-sm placeholder:text-[#181818] placeholder:text-opacity-75 text-sm focus:outline-none"
                placeholder="password"
              />
              <span
                onClick={() => setView(!view)}
                className="cursor-pointer h-8 flex items-center w-4"
              >
                {view ? (
                  <AiOutlineEyeInvisible className="text-2xl  text-[#181818] text-opacity-75" />
                ) : (
                  <AiOutlineEye className="text-2xl  text-[#181818] text-opacity-75" />
                )}
              </span>
            </span>
          </label>
          <button
            type="submit"
            className="bg-[#8758ff] text-white text-lg max-sm:w-11/12 flex mx-auto items-center justify-center w-10/12 mt-10 rounded-full py-1 "
          >
            Masuk
          </button>
          <span className="flex w-10/12 mx-auto justify-center mt-4">
            <p>Belum memiliki akun?</p>
            <a href="/auth/register" className="text-[#8758ff] ml-1">
              Daftar
            </a>
          </span>
        </form>
      </div>
    </section>
  );
};

export default login;
