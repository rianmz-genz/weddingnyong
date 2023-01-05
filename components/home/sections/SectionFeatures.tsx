import React, { FC, useEffect } from "react";
import contentData from "../../../store/contentData";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
const SectionFeatures: FC<SectionFeatureProps> = ({
  title,
  description,
  titleCreateInvitations,
  descriptionCreateInvitations,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="feature"
      className="w-full h-fit py-12 bg-white flex flex-col items-center"
    >
      <h1 data-aos="fade-up" className="text-[#8758ff] font-bold text-3xl">
        {title}
      </h1>
      <p data-aos="fade-up" className="text-center w-7/12 my-3">
        {description}
      </p>
      <div
        data-aos="fade-up"
        className="grid grid-cols-2 place-items-center w-8/12 gap-6 my-8"
      >
        {contentData.featureItems.map((feature, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center justify-start"
          >
            <img src={feature.logo} alt={feature.label} className="w-22" />
            <h2 className="text-lg font-semibold mt-5 text-[#181818] opacity-90">
              {feature.label}
            </h2>
            <p className="text-center text-sm mt-3">{feature.description}</p>
          </div>
        ))}
      </div>
      <h1 data-aos="fade-up" className="text-[#8758ff] font-bold text-3xl mt-3">
        {titleCreateInvitations}
      </h1>
      <p data-aos="fade-up" className="text-center w-7/12 my-3">
        {descriptionCreateInvitations}
      </p>
      <div
        data-aos="zoom-in"
        className="w-5/12 h-1 rounded-full my-8 relative bg-[#8758ff]"
      >
        <span
          data-aos="fade-right"
          data-aos-delay="200"
          className="w-3 h-3 rounded-full absolute block bg-[#8758ff] -top-1"
        ></span>
        <span
          data-aos="fade"
          data-aos-delay="200"
          className="w-3 h-3 rounded-full absolute block bg-[#8758ff] -top-1 left-1/2 -translate-x-1/2"
        ></span>
        <span
          data-aos="fade-left"
          data-aos-delay="200"
          className="w-3 h-3 rounded-full absolute block bg-[#8758ff] -top-1 right-0"
        ></span>
      </div>
      <div data-aos="fade-up" className="grid grid-cols-3 w-7/12 gap-1">
        {contentData.stepCreateInvitations.map((step, index) => (
          <div key={index} className="flex w-full flex-col items-center">
            <h2 className="font-semibold text-lg text-[#181818] opacity-90">
              {step.label}
            </h2>
            <p className="text-center text-sm mt-3">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionFeatures;
