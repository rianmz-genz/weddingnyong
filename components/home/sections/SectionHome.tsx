import React, { FC, useEffect } from "react";
import contentData from "../../../store/contentData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const SectionHome: FC<SectionHomeProps> = ({
  title,
  description,
  titleWhy,
  descriptionWhy,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return (
    <section
      data-aos="fade-up"
      id="home"
      className="w-full h-fit pt-12 bg-white flex flex-col items-center"
    >
      <h1 className="text-[#8758ff] font-bold text-3xl">{title}</h1>
      <p className="text-center w-7/12 max-sm:w-11/12 mt-3">{description}</p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className="w-1/2 max-sm:w-11/12 mt-8 mb-12 cursor-grab bannerswiper"
        spaceBetween={8}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        // pagination={{ dynamicBullets: true, }}
      >
        <SwiperSlide className=" border-3 border-black w-full">
          <div className="w-full h-[30rem] bg-yellow-200 rounded-lg "></div>
        </SwiperSlide>
        <SwiperSlide className="border-3 border-black w-full">
          <div className="w-full h-[30rem] bg-indigo-600 rounded-lg "></div>
        </SwiperSlide>
        <SwiperSlide className="border-3 border-slate-900 w-full">
          <div className="w-full h-[30rem] bg-green-200 rounded-lg "></div>
        </SwiperSlide>
      </Swiper>
      <h1 data-aos="fade-up" className="text-[#8758ff] font-bold text-3xl">
        {titleWhy}
      </h1>
      <p data-aos="fade-up" className="text-center w-7/12 mt-3">
        {descriptionWhy}
      </p>
      <div
        data-aos="fade-up"
        className="grid grid-cols-2 place-items-center w-8/12 gap-6 mt-6"
      >
        {contentData.features.map((feature, index) => (
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
    </section>
  );
};

export default SectionHome;
