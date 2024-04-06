"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ReelComments from "./ReelComments";
import ProductsSidebar from "./ProductsSidebar";
import SingleProductBar from "./SingleProductBar";
import CartToolTip from "@/components/CartToolTip/CartToolTip";

import {
  ArchiveSvg,
  CloseReel,
  HeartSvg,
  MessagesSvg,
  PauseIcon,
  ReelArrowLeft,
  ReelFire,
  ReelShopping,
  ReelViews,
  ShareSvg,
  VolumeIcon,
} from "../../../../public/assets/svg/singleReel";
import { CartIconSvgWhite } from "../../../../public/assets/svg/headerSvgs";

const data = [
  {
    id: 1,
    name: "5M",
    icon: <ReelViews />,
  },
  {
    id: 2,
    name: "5K",
    icon: <ReelShopping />,
  },
  {
    id: 3,
    name: "Best products",
    icon: <ReelFire />,
  },
  {
    id: 4,
    name: "Top selling",
    icon: <ReelFire />,
  },
];

const reels = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const SingleReel = () => {
  const t = useTranslations();
  const cartRef = useRef<any>(null);
  const vidRef = useRef<HTMLVideoElement>(null);
  const [muteReel, setMuteReel] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [pauseReel, setPauseReel] = useState<boolean>(false);
  const [showOffer, setShowOffer] = useState<boolean>(false);
  const [showProducts, setShowProducts] = useState<boolean>(true);
  const [showComments, setShowComments] = useState<boolean>(false);
  const [showSingleProducts, setShowSingleProducts] = useState<boolean>(false);

  useEffect(() => {
    let handler = (e: any) => {
      if (!cartRef.current.contains(e.target) && showCart) {
        handleShowCart();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    setTimeout(() => setShowOffer(true), 1600);
  }, []);

  const handlePlayVideo = () => {
    pauseReel ? vidRef.current?.play() : vidRef.current?.pause();
    setPauseReel(!pauseReel);
  };

  const handleReelVolume = () => {
    setMuteReel(!muteReel);
  };

  const handleShowProducts = () => {
    setShowProducts(!showProducts);
    setShowCart(false);
    setShowComments(false);
    setShowSingleProducts(false);
  };

  const handleShowSingleProduct = () => {
    setShowSingleProducts(!showSingleProducts);
    setShowCart(false);
    setShowComments(false);
    setShowProducts(false);
  };

  const handleShowComments = () => {
    setShowComments(!showComments);
    setShowCart(false);
    setShowProducts(false);
    setShowSingleProducts(false);
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
    setShowComments(false);
    setShowProducts(false);
    setShowSingleProducts(false);
  };

  return (
    <div className="fixed inset-0 bg-primary z-50 flex justify-center lg:justify-between items-start">
      <div className="w-0 lg:w-fit">
        {showProducts && <ProductsSidebar onClose={handleShowProducts} />}
        {showComments && <ReelComments onClose={handleShowComments} />}
        {showSingleProducts && (
          <SingleProductBar onClose={handleShowSingleProduct} />
        )}
      </div>

      <div className="md:pt-6 w-full h-full">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={24}
          mousewheel={true}
          modules={[Mousewheel]}
          pagination={{
            clickable: true,
          }}
          direction="vertical"
          className="h-full w-full md:w-fit md:pb-8"
        >
          {reels.map((reel) => (
            <SwiperSlide key={reel}>
              <div className="flex items-end gap-4 reel-height overflow-hidden w-full">
                <div className="h-full w-full md:max-w-[519px] relative">
                  <video
                    ref={vidRef}
                    src="/assets/videos/video1.mp4"
                    loop
                    autoPlay
                    className="object-cover h-full w-full md:rounded-xl"
                  ></video>

                  <div className="hidden md:flex items-center gap-2 cursor-pointer absolute top-4 ltr:right-4 rtl:left-4 z-50">
                    <span onClick={handlePlayVideo}>
                      <PauseIcon />
                    </span>
                    <span onClick={handleReelVolume}>
                      <VolumeIcon />
                    </span>
                  </div>

                  <div className="absolute p-4 bottom-0 w-full flex items-end gap-6 bg-black/20 h-full">
                    <div className="flex flex-col justify-end gap-2 w-full h-full overflow-hidden">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/images/profile/pro-info.png"
                          alt="profile"
                          width={38}
                          height={38}
                          className="rounded-full object-cover w-[38px] h-[38px]"
                        />

                        <div className="text-white">
                          <p className="font-bold text-sm md:text-base">
                            {t("Ahlam Mohamed")}
                          </p>
                          <p className="text-xs">@ahlamMo7md</p>
                        </div>

                        <button className="btn-primary !py-1 !w-fit">
                          {t("Follow")}
                        </button>
                      </div>

                      <div className="flex items-center gap-3 text-white text-sm">
                        <p className="line-clamp-1">{t("reel-1")}</p>
                        <span className="cursor-pointer font-bold whitespace-nowrap">
                          {t("Show more")}
                        </span>
                      </div>

                      {showOffer && (
                        <motion.div
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          className="flex items-center justify-between bg-secondary p-2 md:p-4 text-primary rounded-full text-sm md:text-base"
                        >
                          <p>
                            {t("Buy")} <span className="font-bold"> 3 </span>
                            {t("Together at a price")}
                            <span className="font-bold"> 300 {t("SAR")} </span>
                            {/* {t("instead of")}
                            <span className="font-bold"> 400 {t("SAR")} </span> */}
                          </p>

                          <span className="ltr:rotate-180">
                            <ReelArrowLeft />
                          </span>
                        </motion.div>
                      )}

                      <div className="flex items-center gap-2 w-full overflow-x-scroll whitespace-nowrap hide-scrollbar">
                        {data.map((item) => (
                          <div
                            key={item.id}
                            className="py-[6px] px-3 bg-primary/30 rounded-full flex items-center gap-1 text-white font-bold text-xs"
                          >
                            <span>{item.icon}</span>
                            <p>{t(item.name)}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:hidden flex flex-col items-center gap-2 cursor-pointer text-white text-sm">
                      <div
                        className="flex flex-col gap-1 items-center"
                        onClick={handleShowProducts}
                      >
                        <Image
                          src="/assets/images/landingPage/product-2.png"
                          alt="product"
                          width={48}
                          height={48}
                          className="rounded-full w-[48px] h-[48px] object-cover"
                        />
                        <p>{t("Products")}</p>
                      </div>
                      <div
                        className="flex flex-col gap-1 items-center"
                        onClick={handleShowSingleProduct}
                      >
                        <div className="p-3 bg-primary/40 rounded-full">
                          <HeartSvg width="24" height="24" />
                        </div>
                        <p>2K</p>
                      </div>
                      <div className="flex flex-col gap-1 items-center">
                        <div className="p-3 bg-primary/40 rounded-full">
                          <ArchiveSvg width="24" height="24" />
                        </div>
                        <p>2K</p>
                      </div>
                      <div
                        className="flex flex-col gap-1 items-center"
                        onClick={handleShowComments}
                      >
                        <div className="p-3 bg-primary/40 rounded-full">
                          <MessagesSvg width="24" height="24" />
                        </div>
                        <p>245</p>
                      </div>
                      <div className="p-3 bg-primary/40 rounded-full flex items-center justify-center w-fit">
                        <ShareSvg width="24" height="24" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex flex-col items-center gap-4 cursor-pointer text-white text-sm">
                  <div
                    className="flex flex-col gap-1 items-center"
                    onClick={handleShowProducts}
                  >
                    <Image
                      src="/assets/images/landingPage/product-2.png"
                      alt="product"
                      width={52}
                      height={52}
                      className="rounded-full w-[52px] h-[52px] object-cover"
                    />
                    <p>{t("Products")}</p>
                  </div>
                  <div
                    className="flex flex-col gap-1 items-center"
                    onClick={handleShowSingleProduct}
                  >
                    <div className="p-3 bg-white/20 rounded-full">
                      <HeartSvg width="28" height="28" />
                    </div>
                    <p>2K</p>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <div className="p-3 bg-white/20 rounded-full">
                      <ArchiveSvg width="28" height="28" />
                    </div>
                    <p>2K</p>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <div
                      className="p-3 bg-white/20 rounded-full"
                      onClick={handleShowComments}
                    >
                      <MessagesSvg width="28" height="28" />
                    </div>
                    <p>245</p>
                  </div>
                  <div className="p-3 bg-white/20 rounded-full flex items-center justify-center w-fit">
                    <ShareSvg width="28" height="28" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="fixed z-40 top-4 md:top-8 ltr:right-4 ltr:md:right-8 rtl:left-4 rtl:md:left-8 flex items-center gap-4">
        <div ref={cartRef} className="cursor-pointer relative">
          <span onClick={handleShowCart}>
            <CartIconSvgWhite />
          </span>

          <div className="absolute w-4 h-4 rounded-full flex items-center justify-center left-[-4px] top-[-8px] bg-[#FF527B] border border-white font-bold text-white text-[10px]">
            5
          </div>
          {showCart && <CartToolTip onClose={handleShowCart} />}
        </div>
        <Link href="/">
          <CloseReel />
        </Link>
      </div>
    </div>
  );
};

export default SingleReel;
