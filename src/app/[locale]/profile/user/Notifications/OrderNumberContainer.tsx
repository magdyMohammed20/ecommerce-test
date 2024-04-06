import { useTranslations } from "next-intl";

import GroupAvatars from "@/components/GroupAvatars/GroupAvatars";

const images = [
  "/assets/images/product/product-1.png",
  "/assets/images/product/product-2.png",
  "/assets/images/product/product-3.png",
  "/assets/images/product/product-4.png",
];

const OrderNumberContainer = () => {
  const t = useTranslations();

  return (
    <div className="p-3 flex items-center justify-between rounded-xl bg-cloud text-asphalt text-xs">
      <p className="font-bold">
        {t("Order number")} <span className="rtl:hidden">#</span>92839
        <span className="ltr:hidden">#</span>
      </p>

      <div className="p-1 flex items-center gap-1 bg-white rounded-full">
        <GroupAvatars images={images} imageSize={26} />
        <p className="w-[22px] font-[700]">+3</p>
      </div>
    </div>
  );
};

export default OrderNumberContainer;
