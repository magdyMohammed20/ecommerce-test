import { useTranslations } from "next-intl";
import Product from "./Product";

const Products = () => {
  const t = useTranslations();

  const products = [
    {
      id: 1,
      src: "/assets/images/cart/product.png",
      title: "Title",
      category: t("flat shoes"),
      description: "هذا النص هو مثال لنص يمكن أن يستبدل..",
    },
    {
      id: 2,
      src: "/assets/images/cart/product.png",
      title: "Title",
      category: t("flat shoes"),
      description: "هذا النص هو مثال لنص يمكن أن يستبدل..",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-[16px]">
      <div className="bg-white rounded-12 p-[16px] md:p-[24px]  flex flex-col gap-[16px] md:gap-[24px] ">
        <p className="text-[16px] md:text-[20px] font-[700]">
          {" "}
          {t("products")}
        </p>

        <div className="flex flex-col gap-[16px]">
          <Product product={products[0]} key={products[0].id} />
          <hr className="border-cloud xl:my-[16px]" />
          <Product product={products[1]} key={products[1].id} />
        </div>
      </div>
    </div>
  );
};

export default Products;
