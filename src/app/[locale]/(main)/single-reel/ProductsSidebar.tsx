import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import Image from "next/image";

import StarRate from "@/components/StarRate/StarRate";

import {
  BuyReel,
  CloseSidebar,
  FlashDealSvg,
} from "../../../../public/assets/svg/singleReel";
import ProductDetails from "../../../components/ProductDetails/ProductDetails";
import { ProductClose } from "../../../../public/assets/svg/checkoutSvg";

const products = [
  {
    id: 1,
    name: "Hermes",
    price: 120.99,
    image: "/assets/images/cart/product.png",
  },
  {
    id: 2,
    name: "Hermes",
    price: 120.99,
    image: "/assets/images/cart/product.png",
  },
  {
    id: 3,
    name: "Hermes",
    price: 120.99,
    image: "/assets/images/cart/product.png",
  },
];

interface Props {
  onClose: () => void;
}

const ProductsSidebar = ({ onClose }: Props) => {
  const locale = useLocale();
  const t = useTranslations();
  const [openProductDetails, setOpenProductDetails] = useState<boolean>(false);

  const handleProductDetails = () => {
    setOpenProductDetails(!openProductDetails);
  };

  return (
    <div className="lg:w-[554px] h-full fixed lg:static z-50 bg-black/60 w-full">
      <div className="h-full flex gap-6 w-full fixed top-0 max-w-[554px]">
        <div className="md:h-full w-full p-4 md:p-8 bg-cloud flex flex-col gap-6 rounded-t-2xl md:rounded-none h-fit md:max-h-full max-h-[80%] fixed bottom-0 md:static">
          <div className="flex items-center justify-between pb-6 border-b border-silver/50">
            <p className="text-20">{t("Products")}</p>
            <span className="cursor-pointer lg:hidden" onClick={onClose}>
              <ProductClose />
            </span>
          </div>

          <div className="flex flex-col gap-3 md:gap-4 overflow-scroll hide-scrollbar">
            <div
              className={`${locale === "ar" ? "flash-deal-ar" : "flash-deal"} text-sm md:text-base`}
            >
              <p className="p-[10px] rounded-full bg-white/30">
                <FlashDealSvg />
              </p>
              <p>
                {t("Buy")} <span className="font-bold"> 3 </span>
                {t("Together at a price")}
                <span className="font-bold"> 300 {t("SAR")} </span>
                {t("instead of")}
                <span className="font-bold"> 400 {t("SAR")} </span>
              </p>
            </div>

            {products.map((product) => (
              <div
                key={product.id}
                onClick={handleProductDetails}
                className="p-3 md:p-4 bg-white rounded-xl custome-shadow flex items-start justify-between gap-3 cursor-pointer"
              >
                <div className="flex gap-3 md:gap-4">
                  <Image
                    src={product.image}
                    alt="product"
                    width={102}
                    height={118}
                    className="w-[87px] md:w-[102px] h-[97px] md:h-[118px] object-cover rounded-lg cursor-pointer"
                  />
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                      <div className="rounded-full bg-cloud text-asphalt font-bold px-2 py-[2px] text-[10px] md:text-xs w-fit">
                        <p># {t(product.name)}</p>
                      </div>
                      <StarRate rate={5} starSize={18} />
                    </div>
                    <p className="text-asphalt text-sm">
                      {t("sports shoes")} Carina Street Blossom..
                    </p>
                    <p className="text-18 font-bold">
                      {product.price} {t("SAR")}
                    </p>
                  </div>
                </div>

                <div className="bg-primary p-2 md:p-3 rounded-full cursor-pointer">
                  <BuyReel />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="hidden lg:block cursor-pointer mt-8" onClick={onClose}>
          <CloseSidebar />
        </p>
      </div>
        {openProductDetails && (
          <ProductDetails onClose={handleProductDetails} />
        )}
    </div>
  );
};

export default ProductsSidebar;
