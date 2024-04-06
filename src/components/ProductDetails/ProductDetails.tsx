import { useLocale, useTranslations } from "next-intl";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import Image from "next/image";

import ReelGallery from "./ReelGallery";
import ProductInfo from "./ProductInfo";

import { ProductClose } from "../../../public/assets/svg/checkoutSvg";
import { WishListSvg } from "../../../public/assets/svg/landingPageSvgs";

interface Props {
  onClose: () => void;
  isCart?: boolean;
}

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ProductDetails = ({ onClose, isCart }: Props) => {
  const locale = useLocale();
  const t = useTranslations();

  return (
      <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center p-[60px] z-50">
        <div className="w-full h-full max-w-[1281px] bg-cloud rounded-[20px] hidden lg:flex flex-col gap-6 p-8 max-h-[756px] overflow-scroll hide-scrollbar">
          <div className="flex items-center justify-between h-full">
            <p className="text-20">{t("Product Details")}</p>
            <span className="cursor-pointer" onClick={onClose}>
              <ProductClose />
            </span>
          </div>

          <div className="bg-white rounded-xl grid grid-cols-2 py-8 h-full">
            <div className="flex gap-2 px-8 border-cloud rtl:border-l ltr:border-r">
              <ReelGallery />
            </div>

            <div className="px-8 flex flex-col justify-between">
              <ProductInfo isCart={isCart} />

              {isCart ? (
                <button className="btn-primary">{t("Update")}</button>
              ) : (
                <div className="flex items-center gap-2">
                  <button className="btn-primary">{t("Add to cart")}</button>
                  <div className="cursor-pointer p-4 bg-cloud rounded-full">
                    <WishListSvg color="#455560" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:h-full w-full py-6 md:py-8 overflow-hidden bg-cloud lg:hidden flex flex-col gap-6 md:relative rounded-t-2xl md:rounded-[20px] max-h-[1131px] h-[80%] fixed bottom-0">
          <div className="px-4 md:px-8">
            <div className="flex items-center justify-between pb-6 border-b border-silver/50">
              <p className="text-20">{t("Products")}</p>
              <span className="cursor-pointer lg:hidden" onClick={onClose}>
                <ProductClose />
              </span>
            </div>
          </div>

          <div className="overflow-scroll flex flex-col gap-6 hide-scrollbar pb-36">
            <div className="rtl:pr-4 rtl:md:pr-8 ltr:pl-4 ltr:md:pl-8">
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
      </div>
  );
};

export default ProductDetails;
