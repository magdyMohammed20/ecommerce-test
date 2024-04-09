"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

import Image from "next/image";

import { ProductArrowLeft } from "../../../../../public/assets/svg/checkoutSvg";
import ProductMenu from "./ProductMenu";
import OrderSummary from "@/components/OrderSummary/OrderSummary";
import SuccessMenu from "./SuccessMenu";

const products = [
  {
    id: 1,
    quantity: 1,
    imgae: "/assets/images/product/product-1.png",
  },
  {
    id: 2,
    quantity: 5,
    imgae: "/assets/images/product/product-1.png",
  },
  {
    id: 3,
    quantity: 1,
    imgae: "/assets/images/product/product-1.png",
  },
  {
    id: 4,
    quantity: 4,
    imgae: "/assets/images/product/product-1.png",
  },
];

const OrderDetails = () => {
  const locale = useLocale();
  const t = useTranslations();
  const [openProduct, setOpenProduct] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleProductMenu = () => {
    setOpenProduct(!openProduct);
  };

  const handleSuccessMenu = () => {
    setOpenSuccess(!openSuccess);
  };

  return (
    <div className="w-full lg:max-w-[566px] flex flex-col gap-6 text-primary">
      {/* product details */}
      <div className="bg-white rounded-xl p-4 lg:p-6 flex flex-col gap-4 lg:gap-6">
        <div className="flex items-center justify-between">
          <p className="text-20 flex items-center gap-2">
            {t("Review products")}{" "}
            <span className="text-asphalt text-sm">(8)</span>
          </p>
          <div
            className={`bg-cloud p-1 cursor-pointer rounded-full ${
              locale === "en" && "rotate-180"
            }`}
            onClick={handleProductMenu}>
            <ProductArrowLeft />
          </div>
        </div>

        <div className="flex gap-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative rounded-lg w-full h-full max-w-[97px] max-h-[119px] overflow-hidden">
              <Image
                src={product.imgae}
                alt="product"
                width={97}
                height={119}
              />
              <div className="absolute w-full h-full bg-black/20 top-0 flex items-end p-[9px] justify-end">
                <p className="text-white text-xs font-bold">
                  {product.quantity}x
                </p>
              </div>
            </div>
          ))}

          <div className="relative rounded-lg w-full h-full max-w-[97px] max-h-[119px] overflow-hidden">
            <Image
              src="/assets/images/product/product-1.png"
              alt="product"
              width={97}
              height={119}
            />
            <div className="absolute w-full h-full bg-black/60 top-0 flex items-center p-[9px] justify-center">
              <p className="text-white text-sm font-bold bg-white/20 p-3 rounded-full">
                4+
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* order summary */}
      <OrderSummary />

      <button
        className="bg-primary w-full h-14 hidden lg:flex items-center justify-center rounded-full text-white font-bold"
        onClick={handleSuccessMenu}>
        {t("Complete payment")}
      </button>

      <div className="bg-white fixed bottom-0 w-full px-[21px] md:px-6 py-6 pb-2 left-0 right-0 lg:hidden z-[9] flex flex-col gap-[21px] items-center">
        <button
          className="bg-primary w-full p-4 flex items-center justify-center rounded-full text-white font-bold text-base"
          onClick={handleSuccessMenu}>
          {t("Complete payment")}
        </button>
        <div className="h-[5px] w-[134px] bg-primary rounded-full"></div>
      </div>

      {openProduct && <ProductMenu onClose={handleProductMenu} />}

      {openSuccess && <SuccessMenu onClose={handleSuccessMenu} />}
    </div>
  );
};

export default OrderDetails;
