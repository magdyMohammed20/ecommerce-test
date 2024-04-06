"use client";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import BasicCard from "./PlainCard";
import { useEffect } from "react";

const products = [
  {
    id: 1,
    imageUrl: "/assets/images/influencer/product1.png",
    title: 1000,
    category: "flat shoes",
    name: "sandal",
    rate: 3,
    visits: { number: "20M", percentage: "20%" },
    buy: { number: "10M", percentage: "26%" },
  },
  {
    id: 2,
    imageUrl: "/assets/images/influencer/product3.png",
    title: 1000,
    category: "flat shoes",
    name: "flat shoes",
    rate: 3,
    visits: { number: "15M", percentage: "20%" },
    buy: { number: "29M", percentage: "26%" },
  },
  {
    id: 3,
    imageUrl: "/assets/images/influencer/product1.png",
    title: 1000,
    category: "flat shoes",
    name: "sandal",
    rate: 3,
    visits: { number: "10M", percentage: "21%" },
    buy: { number: "5M", percentage: "22%" },
  },
  {
    id: 4,
    imageUrl: "/assets/images/influencer/product2.png",
    title: 1000,
    category: "flat shoes",
    name: "flat shoes",
    rate: 3,
    visits: { number: "16M", percentage: "12%" },
    buy: { number: "17M", percentage: "14%" },
  },
  {
    id: 5,
    imageUrl: "/assets/images/influencer/product3.png",
    title: 1000,
    category: "flat shoes",
    name: "sandal",
    rate: 3,
    visits: { number: "20M", percentage: "20%" },
    buy: { number: "10M", percentage: "26%" },
  },
  {
    id: 6,
    imageUrl: "/assets/images/influencer/product1.png",
    title: 1000,
    category: "flat shoes",
    name: "flat shoes",
    rate: 3,
    visits: { number: "20M", percentage: "20%" },
    buy: { number: "10M", percentage: "26%" },
  },
  {
    id: 7,
    imageUrl: "/assets/images/influencer/product2.png",
    title: 1000,
    category: "flat shoes",
    name: "sandal",
    rate: 3,
    visits: { number: "20M", percentage: "20%" },
    buy: { number: "10M", percentage: "26%" },
  },
];

interface Props {
  setCurrentProduct: React.Dispatch<React.SetStateAction<Product>>;
}

interface Product {
  id: number;
  imageUrl: string;
  title: number;
  category: string;
  name: string;
  rate: number;
  visits: { number: string; percentage: string };
  buy: { number: string; percentage: string };
}

const ProductsSlider: React.FC<Props> = ({ setCurrentProduct }) => {
  const handleClick = (item: Product) => {
    setCurrentProduct(item);
  };

  useEffect(() => {
    setCurrentProduct(products[0]);
  }, []);
  return (
    <div className="relative">
      <Swiper
        zoom={true}
        onActiveIndexChange={(swip) => console.log(swip)}
        slidesPerView={"auto"}
        spaceBetween={16}
        mousewheel={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          430: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 3,
          },

          1536: {
            slidesPerView: 5,
          },
        }}
        modules={[Mousewheel]}>
        {products.map((item) => (
          <SwiperSlide
            zoom={true}
            key={item.id}
            className="w-full max-w-[111px] md:max-w-[151px] lg:max-w-full lg:max-h-[500px] group cursor-pointer">
            <BasicCard
              hasOverlay={true}
              onClick={() => handleClick(item)}
              imageUrl={item.imageUrl}
              title={item.title}
              key={item.id}
              hideDetails={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
