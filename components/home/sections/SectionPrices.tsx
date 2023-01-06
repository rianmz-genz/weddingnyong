import React, {FC} from 'react'

const SectionPrices: FC<SectionPriceProps> = ({
    title,
    description
}) => {
  return (
    <section
      id="price"
      className="w-full h-fit py-12 bg-white flex flex-col items-center"
    >
      <h1 data-aos="fade-up" className="text-[#8758ff] font-bold text-3xl">
        {title}
      </h1>
      <p data-aos="fade-up" className="text-center w-7/12 my-3">
        {description}
      </p>
    </section>
  )
}

export default SectionPrices
