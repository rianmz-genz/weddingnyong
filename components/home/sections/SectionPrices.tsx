import React, { FC } from "react";
import contentData from "../../../store/contentData";

const SectionPrices: FC<SectionPriceProps> = ({ title, description }) => {
  return (
    <section
      id="price"
      className="w-full h-fit py-12 bg-white flex flex-col items-center max-sm:items-start"
    >
      <h1 data-aos="fade-up" className="text-[#8758ff] font-bold text-3xl">
        {title}
      </h1>
      <p
        data-aos="fade-up"
        className="text-center w-7/12 my-3 max-sm:w-full max-sm:text-start"
      >
        {description}
      </p>
      <div
        data-aos="fade-up"
        className="grid grid-cols-3 place-items-center w-8/12 gap-2 my-8 max-sm:w-full max-sm:grid-cols-1"
      >
        {contentData.prices.map((price, index) => (
          <div
            key={index}
            className="w-full group overflow-hidden relative rounded-sm py-3 px-1 h-fit flex flex-col items-center hover:shadow-md justify-start bg-[#f3f4f6]  transition-all duration-300  hover:transition-all hoveer:duration-300  hover:transform hover:scale-105 max-sm:hover:scale-100 max-sm:hover:shadow-md max-sm:py-6"
          >
            <h2 className="text-lg text-[#8758ff] font-semibold mb-3">
              {price.tier}
            </h2>
            <h3 className=" mb-3">
              Rp.
              <span className="text-2xl text-[#181818] font-semibold">
                {" "}
                {price.price.toLocaleString("id-ID")}{" "}
              </span>
            </h3>
            <div className="w-full h-fit py-1 flex flex-col items-center justify-start gap-x-2">
              {price.benefits.map((benefit, index) => (
                <p className="text-center" key={index}>
                  {benefit.benefit}
                </p>
              ))}
            </div>
            <a
              href=""
              className="bg-[#8758ff] text-white px-5 font-semibold rounded-full mt-3"
            >
              Lihat
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionPrices;
