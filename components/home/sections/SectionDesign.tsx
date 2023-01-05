import React, {FC} from 'react'

const SectionDesign: FC<SectionDesignProps> = ({
    title,
    description
}) => {
  return (
    <section id='design' className='w-full h-fit py-12 bg-white flex flex-col items-center'>
      <h1 className="text-[#8758ff] font-bold text-3xl">
        {title}
      </h1>
      <p className="text-center w-7/12 my-3">
       {description}
      </p>
        
    </section>
  )
}

export default SectionDesign
