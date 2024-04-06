import { useLocale, useTranslations } from "next-intl";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import Image from "next/image";

import ProductInfo from "../../../components/ProductDetails/ProductInfo";

import { CloseSidebar } from "../../../../public/assets/svg/singleReel";
import { ProductClose } from "../../../../public/assets/svg/checkoutSvg";
import { WishListSvg } from "../../../../public/assets/svg/landingPageSvgs";

interface Props {
  onClose: () => void;
}

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const SingleProductBar = ({ onClose }: Props) => {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <div className="lg:w-[554px] h-full fixed lg:static z-50 bg-black/60 w-full">
      <div className="h-full w-full flex gap-6 fixed top-0 md:max-w-[554px]">
        <div className="md:h-full w-full py-8 bg-cloud flex flex-col gap-6 md:relative rounded-t-2xl md:rounded-none h-[80%] fixed bottom-0">
          <div className="px-4 md:px-8">
            <div className="flex items-center justify-between pb-6 border-b border-silver/50">
              <p className="text-20">{t("Products")}</p>
              <span className="cursor-pointer lg:hidden" onClick={onClose}>
                <ProductClose />
              </span>
            </div>
          </div>

          <div className="overflow-scroll flex flex-col gap-6 hide-scrollbar pb-36">
            <div className={`${locale === "ar" ? "pr-4" : "pl-4"}`}>
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={8}
                mousewheel={true}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Mousewheel]}
              >
                {images.map((image) => (
                  <SwiperSlide
                    key={image}
                    className="max-w-[153px] md:max-w-[217px] rounded-lg overflow-hidden relative"
                  >
                    <div className="absolute w-full h-full top-0 left-0 bg-black/15"></div>
                    <Image
                      src={"/assets/images/landingPage/reel-product.png"}
                      alt="brand"
                      width={217}
                      height={261}
                      className="w-full h-[184px] md:h-[261px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="px-4 md:px-8">
              <div className="bg-white p-4 rounded-xl">
                <ProductInfo />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 px-4 pb-6 md:p-8 pt-6 bg-white w-full flex items-center gap-2 custom-shadow2">
            <button className="btn-primary">{t("Add to cart")}</button>
            <div className="cursor-pointer p-3 md:p-4 bg-cloud rounded-full">
              <WishListSvg color="#455560" />
            </div>
          </div>
        </div>
        <p className="cursor-pointer mt-8 hidden lg:block" onClick={onClose}>
          <CloseSidebar />
        </p>
      </div>
    </div>
  );
};

export default SingleProductBar;
