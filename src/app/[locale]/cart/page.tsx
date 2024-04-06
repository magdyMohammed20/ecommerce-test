import { getTranslations } from "next-intl/server";

import CartProducts from "./CartProducts";
import CompletePurchase from "./CompletePurchase";
import ProductSlider from "@/components/ProductSlider/ProductSlider";

const page = async () => {
  const t = await getTranslations();
  return (
    <>
      <div className="global-padding">
        <p className="py-6 text-20 font-bold">{t("Shopping Cart")}</p>
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <CartProducts />
          <CompletePurchase />
        </div>
      </div>
      <ProductSlider title="You might also like this" />
    </>
  );
};

export default page;
