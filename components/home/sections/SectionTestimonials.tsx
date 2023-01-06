import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { VscAccount } from "react-icons/vsc";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import contentData from "../../../store/contentData";
const SectionTestimonials: FC<SectionTestimonialsProps> = ({
  title,
  description,
}) => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return (
    <section
      id="testimonial"
      className="w-full h-fit py-12 bg-white flex flex-col items-center max-sm:items-start"
    >
      <h1
        data-aos="fade-up"
        className="text-[#8758ff] font-bold text-3xl max-sm:text-start"
      >
        {title}
      </h1>
      <p
        data-aos="fade-up"
        className="text-center w-7/12 my-3 max-sm:w-full max-sm:text-start"
      >
        {description}
      </p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        className="w-1/2 mt-8 mb-12 cursor-grab bannerswiper max-sm:w-full"
        spaceBetween={8}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        // pagination={{ dynamicBullets: true }}
      >
        {contentData.testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div
              className={`w-full shadow-md h-[22rem]  bg-no-repeat bg-cover bg-center rounded-lg relative overflow-hidden ${testimonial.coverinvitation}`}
            >
              <div className="absolute w-full h-fit bg-[#f3f4f6] bottom-0 flex flex-col items-center p-3">
                <div className="flex w-full h-fit justify-between items-center">
                  <span className="flex items-center">
                    <VscAccount className="text-3xl" />
                    <h2 className="font-semibold ml-2 ">
                      {testimonial.username}
                    </h2>
                  </span>
                  <span className="bg-green-300 px-3 rounded-full text-green-700">
                    {testimonial.invitationname}
                  </span>
                </div>
                <p className="w-full text-ellipsis mt-3 ml-3 ">
                  {testimonial.commentuser}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SectionTestimonials;
