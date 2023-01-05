import React, { FC } from "react";
import contentData from "../../../store/contentData";

const SectionFeatures: FC<SectionFeatureProps> = ({
  title,
  description,
  titleCreateInvitations,
  descriptionCreateInvitations,
}) => {
  return (
    <section
      id="feature"
      className="w-full h-fit py-12 bg-white flex flex-col items-center"
    >
      <h1 className="text-[#8758ff] font-bold text-3xl">{title}</h1>
      <p className="text-center w-7/12 my-3">{description}</p>
      <div className="grid grid-cols-2 place-items-center w-8/12 gap-6 my-8">
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
      <h1 className="text-[#8758ff] font-bold text-3xl mt-3">
        {titleCreateInvitations}
      </h1>
      <p className="text-center w-7/12 my-3">{descriptionCreateInvitations}</p>
      <div className="w-5/12 h-1 rounded-full my-8 relative bg-[#8758ff]">
        <span className="w-3 h-3 rounded-full absolute block bg-[#8758ff] -top-1"></span>
        <span className="w-3 h-3 rounded-full absolute block bg-[#8758ff] -top-1 left-1/2 -translate-x-1/2"></span>
        <span className="w-3 h-3 rounded-full absolute block bg-[#8758ff] -top-1 right-0"></span>
      </div>
      <div className="grid grid-cols-3 w-7/12 gap-1">
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
