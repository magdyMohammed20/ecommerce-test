import { useTranslations } from "next-intl";

import Image from "next/image";

import StarRate from "@/components/StarRate/StarRate";

import { ProductFlashIcon } from '../../../../../../public/assets/svg/marketingRequests'

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

const RequestProducts = () => {
  const t = useTranslations();

  return (
    <div className="p-4 md:p-6 flex flex-col gap-4 rounded-12 bg-white">
      <div className="flex items-center gap-1 pb-4 border-b border-cloud">
        <ProductFlashIcon />
        <p className="text-20 font-bold">{t("Products")}</p>
      </div>

      {products.map((product, index) => (
        <div
          key={product.id}
          className={`flex gap-3 md:gap-4 border-cloud ${index !== products.length - 1 && "pb-4 border-b"
            }`}
        >
          <Image
            src={product.image}
            alt="product"
            width={102}
            height={118}
            className="w-[87px] h-[97px] object-cover rounded-lg cursor-pointer"
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-1">
              <div className="rounded-full bg-cloud text-asphalt font-bold px-2 py-[2px] text-[10px] md:text-xs w-fit">
                <p># {t(product.name)}</p>
              </div>
              <StarRate rate={5} starSize={18} />
            </div>
            <p className="text-asphalt text-sm line-clamp-1">
              {t("sports shoes")} Carina Street Blossom..
            </p>
            <p className="text-sm font-bold">
              {product.price} {t("SAR")}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RequestProducts