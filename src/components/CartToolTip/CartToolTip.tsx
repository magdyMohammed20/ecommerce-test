import { useTranslations } from "next-intl";

import { ProductClose } from "../../../public/assets/svg/checkoutSvg";
import Image from "next/image";
import { CartRightIcon } from "../../../public/assets/svg/singleReel";
import { MinusBtn, AddBtn } from "../../../public/assets/svg/cart";

const CartToolTip = ({ onClose }: { onClose?: () => void }) => {
  const t = useTranslations();

  return (
    <div className="fixed top-0 left-0 bg-black/60 w-full h-full z-50 md:static">
      <div className="md:w-[430px] px-4 py-6 md:p-6 flex flex-col gap-6 md:absolute bg-cloud ltr:md:-right-5 rtl:md:-left-5 md:top-[150%] md:rounded-xl fixed bottom-0 h-fit rounded-t-2xl w-full z-50">
        <div className="flex w-full justify-between">
          <p className="flex items-center gap-1 font-bold text-primary text-base">
            {t("Shopping cart")}{" "}
            <span className="text-asphalt text-sm font-normal">(3) {t("Products")}</span>
          </p>
          <span className="cursor-pointer md:hidden" onClick={onClose}>
            <ProductClose />
          </span>
        </div>

        <div className="w-full bg-white rounded-xl p-4 flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="relative w-[64px] h-[81px] rounded">
              <Image
                src="/assets/images/landingPage/reel-product.png"
                alt="product"
                width={64}
                height={81}
                className="w-full h-full object-cover rounded"
              />
              <span className="absolute -top-1 rtl:-right-1 ltr:-left-1">
                <CartRightIcon />
              </span>
            </div>

            <div className="w-full flex flex-col">
              <div className="flex flex-col gap-[10px]">
                <p className="text-xs md:text-sm">Carina Street..</p>
                <div className="flex items-center gap-1 p-1 w-fit rounded-full bg-cloud text-asphalt text-xs lg:text-sm">
                  <p
                    className="w-[18px] h-[18px] rounded-full"
                    style={{ background: "#8F7D7A" }}
                  ></p>
                  <p>{t("brown")}</p>
                  <p className="text-silver">/</p>
                  <p>xs</p>
                </div>
              </div>
              <div className="flex justify-between items-end w-full h-full">
                <p className="text-sm md:text-lg font-bold">
                  120.99 {t("SAR")}
                </p>
                <div className="px-2 py-2 bg-cloud flex items-center gap-1 md:gap-3 rounded-full text-asphalt overflow-hidden">
                  <p className="cursor-pointer">
                    <MinusBtn />
                  </p>
                  <p className="px-2 md:px-3 border border-silver/50 border-b-0 border-t-0">
                    1
                  </p>
                  <p className="cursor-pointer">
                    <AddBtn />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-asphalt/10 flex items-center justify-between">
            <p className="text-sm">{t("Total")}</p>
            <p className="font-bold">1023 {t("SAR")}</p>
          </div>
        </div>

        <button className="btn-primary">{t("View shopping cart")}</button>
      </div>
    </div>
  );
};

export default CartToolTip;
