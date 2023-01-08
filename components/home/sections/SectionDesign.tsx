import React, { FC } from "react";
import contentData from "../../../store/contentData";
import { AiOutlineEye } from "react-icons/ai";
import { RiPencilLine } from "react-icons/ri";
const SectionDesign: FC<SectionDesignProps> = ({ title, description }) => {
  return (
    <section
      id="design"
      className="w-full h-fit py-12 bg-white flex flex-col items-center max-sm:items-start transition-all duration-300  hover:transition-all hoveer:duration-300 "
    >
      <h1 className="text-[#8758ff] font-bold text-3xl">{title}</h1>
      <p className="text-center w-7/12 my-3 max-sm:w-full max-sm:text-start">
        {description}
      </p>
      <div
        data-aos="fade-up"
        className="grid grid-cols-2 max-sm:grid-cols-1 place-items-center w-8/12 gap-6 my-8 max-sm:w-full"
      >
        {contentData.designs.map((design, index) => (
          <div
          data-aos="fade-up"
            key={index}
            className="w-full group overflow-hidden relative rounded-xl h-96 flex flex-col items-center shadow-md justify-start bg-[#f3f4f6]  transition-all duration-300  hover:transition-all hoveer:duration-300 "
          >
            <div className="w-full text-white text-2xl h-96 bg-black bg-opacity-0 group-hover:bg-opacity-60 group-hover:visible invisible transition-all duration-500  hover:transition-all hoveer:duration-500 flex gap-3 justify-center items-center">
              <AiOutlineEye className="cursor-pointer" />
              <RiPencilLine className="cursor-pointer" />
            </div>
            <div className="w-full z-10 h-14 absolute bottom-0 bg-white flex justify-around items-center">
              <h2>{design.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionDesign;
