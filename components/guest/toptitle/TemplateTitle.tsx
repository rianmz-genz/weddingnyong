import React from 'react'
import { BsSearch, BsPlus } from 'react-icons/bs'
import { FC } from 'react';
import Link from 'next/link';


const TemplateTitle: FC<TemplateTitleProps> = ({
    title,
    value,
    setValue,
    link,
}) => {
  return (
    <div className='mt-8 w-11/12 border-3 h-fit flex items-center justify-between'>
      <h1 className='text-2xl font-semibold'>{title}</h1>
      <div className='flex items-center justify-center'>
        <Link href={link} className='bg-[#f3f4f6] text-3xl text-opacity-75 cursor-pointer mr-4 rounded-full'>
            <BsPlus />
        </Link>
        <label className='flex px-4 py-2 items-center rounded-full bg-[#f3f4f6]'>
            <BsSearch />
        <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} className='bg-transparent ml-2 focus:outline-none placeholder:text-black placeholder:text-opacity-70 placeholder:text-sm flex items-center text-sm' placeholder='search by domain' />
        </label>
      </div>
    </div>
  )
}

export default TemplateTitle
