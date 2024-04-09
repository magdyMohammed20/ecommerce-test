"use client";
import ReelCard from "@/components/ReelCard/ReelCard";
import { useLocale } from "next-intl";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRightIconSvg } from "../../../../../../../public/assets/svg/categoryBarSvgs";

import Slider from "react-slick";

const reels = [
  {
    id: 1,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 2,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 3,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 4,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 5,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 6,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 7,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 8,
    video: "/assets/videos/video1.mp4",
  },
];

const ReelsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(4);
  const [documentWidth, setDocumentWidth] = useState(window.innerWidth);
  const lang = useLocale();
  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setDocumentWidth(window.innerWidth);
      }, 200); // Adjust debounce delay as needed
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
    ],
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding:
      documentWidth <= 430 ? "50px" : documentWidth > 1536 ? "10px" : "50px",
    slidesToShow: 5,
    speed: 500,
    initialSlide: lang == "en" ? 4 : 3,
    rtl: lang == "en" ? false : true,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  const getSlideClassName = (index) => {
    if (index == currentSlide) {
      return "zoom-slide"; // Apply zoom effect to the current active slide
    }
    return ""; // No zoom effect for other slides
  };

  let sliderRef = useRef<any>(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div className="slider-container  relative">
      <Slider {...settings} ref={sliderRef}>
        {reels.map((reel, index) => (
          <div
            key={reel.id}
            className={`slider-item ${getSlideClassName(index)}`}>
            <ReelCard
              reel={reel}
              hideData={true}
              hasOverlay={index != currentSlide}
            />
          </div>
        ))}
      </Slider>

      <div className="hidden lg:block">
        <div
          className={`p-3  z-[999]  
     lg:bg-[#51504e]
         rounded-full absolute top-[45%] transform -translate-y-1/2 cursor-pointer 
  ${lang === "en" ? "right-10 xl:right-10" : "left-10 xl:left-10"}`}
          onClick={next}>
          <ArrowRightIconSvg isDark={true} />
        </div>
        <div
          className={`p-3  z-[999] 
          lg:bg-[#51504e]
         rounded-full absolute top-[45%] transform -translate-y-1/2 cursor-pointer rotate-180 
  ${lang === "en" ? "left-10 xl:left-10" : "right-10 xl:right-10"}`}
          onClick={previous}>
          <ArrowRightIconSvg isDark={true} />
        </div>
      </div>
    </div>
  );
};

export default ReelsSlider;
