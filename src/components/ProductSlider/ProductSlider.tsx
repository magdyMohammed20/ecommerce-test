"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import HomeSliderBtns from "../Home/HomeSliderBtns";
import SliderBtn from "../SliderBtn/SliderBtn";

import ViewAllHeader from "../ViewAllHeader/ViewAllHeader";
import ProductCard from "../ProductCard/ProductCard";

const products = [
  {
    id: 1,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 2,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 3,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 4,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 5,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 6,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },

  {
    id: 7,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 8,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 9,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 10,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
];

interface Props {
  title: string;
}

const ProductSlider = ({ title }: Props) => {
  const locale = useLocale();
  const [counter, setCounter] = useState<number>(0);
  const [status, setStatus] = useState<string>("");

  const handleNextSlide = () => {
    setStatus("next");
    setCounter(counter + 1);
  };

  const handlePrevSlide = () => {
    setStatus("prev");
    setCounter(counter + 1);
  };

  return (
    <div className="global-padding-y flex flex-col gap-4 md:gap-6 lg:gap-8">
      <ViewAllHeader title={title} />

      <div
        className={`${
          locale === "ar"
            ? "home-slider-container-ar"
            : "home-slider-container-en"
        }`}
      >
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={12}
          mousewheel={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: { spaceBetween: 16 },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          modules={[Mousewheel]}
        >
          <SliderBtn counter={counter} status={status} />
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="max-w-[191px] md:max-w-[222px] lg:max-w-full cursor-pointer"
            >
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <HomeSliderBtns onNext={handleNextSlide} onPrev={handlePrevSlide} />
      </div>
    </div>
  );
};

export default ProductSlider;
