import { useTranslations } from "next-intl";

import Image from "next/image";

import { ArrowRightIconSvg } from "../../../../../../public/assets/svg/categoryBarSvgs";
import { CategoryArrowSvg } from "../../../../../../public/assets/svg/product";

const categories = [
  {
    id: 1,
    name: "best seller",
  },
  {
    id: 2,
    name: "Highest rated",
  },
  {
    id: 3,
    name: "Most preferred",
  },
];

const BestProducts = () => {
  const t = useTranslations();

  return (
    <div className="global-slider-padding">
      <div className="bg-white flex flex-col gap-4 md:gap-6 lg:gap-12 p-4 lg:p-8 lg:rounded-xl">
        {/* header */}
        <div className="flex items-center justify-between w-full font-bold">
          <p className="text-34">{t("product-3")}</p>
          <div className="flex items-center gap-1 cursor-pointer">
            <p className="text-asphalt text-sm lg:text-base">{t("View all")}</p>
            <ArrowRightIconSvg />
          </div>
        </div>

        {/* categories */}
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center justify-center gap-1 md:gap-2 lg:gap-4 rounded-xl bg-cloud text-asphalt w-full h-[101px] md:h-[193px] lg:h-[246px]">
              <p className="font-bold capitalize text-xs md:text-base">
                {t(category.name)}
              </p>
              <div className="relative flex items-center cursor-pointer">
                <div className="z-10 w-[32px] md:w-[56px] lg:w-[67px] h-[32px] md:h-[56px] lg:h-[67px] rounded-full border border-cloud">
                  <Image
                    src="/assets/images/product/cat-3.png"
                    alt="follower"
                    width={67}
                    height={67}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="z-20 -mx-4 md:-mx-7 mb-2 md:mb-5 w-[32px] md:w-[56px] lg:w-[67px] h-[32px] md:h-[56px] lg:h-[67px] rounded-full border border-cloud">
                  <Image
                    src="/assets/images/product/cat-1.png"
                    alt="follower"
                    width={67}
                    height={67}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="z-10 w-[32px] md:w-[56px] lg:w-[67px] h-[32px] md:h-[56px] lg:h-[67px] rounded-full border border-cloud">
                  <Image
                    src="/assets/images/product/cat-2.png"
                    alt="follower"
                    width={67}
                    height={67}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center gap-[2px] cursor-pointer">
                <p className="text-sm">{t("Discover")}</p>
                <div className="ltr:rotate-180">
                  <CategoryArrowSvg />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
