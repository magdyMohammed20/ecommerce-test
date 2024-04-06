import { useTranslations } from "next-intl";

import Image from "next/image";

import {
  CategoryType,
  InfluencerType,
  ProductType,
  ReelType,
  ViewAll,
} from "../../../public/assets/svg/allTypes";
import { ArrowRightIconSvg } from "../../../public/assets/svg/categoryBarSvgs";
import {
  WatchReelSvg,
  WatchReelSvg16,
} from "../../../public/assets/svg/landingPageSvgs";
import { CategoryArrowSvg } from "../../../public/assets/svg/product";

const AllProductsType = () => {
  const t = useTranslations();
  const reels = [1, 2, 3, 4];
  const products = [1, 2, 3, 4, 5, 6, 7, 8];
  const categories = [1, 2, 3];
  const influencers = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex w-full flex-col gap-4 lg:gap-8 items-center">
      <div className="w-full max-w-[814px] p-4 md:p-6 flex flex-col gap-4 md:gap-6 bg-white rounded-[20px] border border-cloud">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ReelType />
            <p className="text-[20px] font-bold">{t("Reels")}</p>
          </div>
          <div className="p-1 rounded-full bg-cloud cursor-pointer">
            <ArrowRightIconSvg />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 w-full">
          {reels.map((reel) => (
            <div
              key={reel}
              className="w-full h-full rounded-lg overflow-hidden relative">
              <Image
                src="/assets/images/allTypes/type.png"
                alt="img"
                width={146}
                height={248}
                className="w-full h-full object-cover"
              />
              <div className="absolute bg-black/20 w-full h-full top-0 p-2 flex items-end cursor-pointer justify-end">
                <span className="md:block hidden">
                  <WatchReelSvg />
                </span>
                <span className="md:hidden">
                  <WatchReelSvg16 />
                </span>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full bg-primary p-4 flex items-center justify-center text-white gap-4 font-bold rounded-full text-sm md:text-base">
          <p>{t("View all")}</p>
          <div className="ltr:rotate-180">
            <ViewAll />
          </div>
        </button>
      </div>

      <div className="w-full max-w-[814px] p-4 md:p-6 flex flex-col gap-4 md:gap-6 bg-white rounded-[20px] border border-cloud">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ProductType />
            <p className="text-[20px] font-bold">{t("Products")}</p>
          </div>
          <div className="p-1 rounded-full bg-cloud cursor-pointer">
            <ArrowRightIconSvg />
          </div>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 w-full">
          {products.map((reel) => (
            <div
              key={reel}
              className="w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/assets/images/allTypes/type.png"
                alt="img"
                width={146}
                height={248}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <button className="w-full bg-primary p-4 flex items-center justify-center text-white gap-4 font-bold rounded-full text-sm md:text-base">
          <p>{t("View all")}</p>
          <div className="ltr:rotate-180">
            <ViewAll />
          </div>
        </button>
      </div>

      <div className="w-full max-w-[814px] p-4 md:p-6 flex flex-col gap-4 md:gap-6 bg-white rounded-[20px] border border-cloud">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CategoryType />
            <p className="text-[20px] font-bold">{t("Categories")}</p>
          </div>
          <div className="p-1 rounded-full bg-cloud cursor-pointer">
            <ArrowRightIconSvg />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-cloud rounded-lg w-full flex justify-center flex-col items-center gap-2 md:gap-4 py-2 md:py-6">
              <p className="text-asphalt font-bold capitalize text-xs md:text-base">
                {t("sport shoes")}
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
                <p className="text-xs text-asphalt md:text-sm">
                  {t("Discover")}
                </p>
                <div className="ltr:rotate-180">
                  <CategoryArrowSvg />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full bg-primary p-4 flex items-center justify-center text-white gap-4 font-bold rounded-full text-sm md:text-base">
          <p>{t("View all")}</p>
          <div className="ltr:rotate-180">
            <ViewAll />
          </div>
        </button>
      </div>

      <div className="w-full max-w-[814px] p-4 md:p-6 flex flex-col gap-4 md:gap-6 bg-white rounded-[20px] border border-cloud">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <InfluencerType />
            <p className="text-[20px] font-bold">{t("Influencers")}</p>
          </div>
          <div className="p-1 rounded-full bg-cloud cursor-pointer">
            <ArrowRightIconSvg />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {influencers.map((influencer) => (
            <div
              key={influencer}
              className="w-full p-2 flex items-center gap-4 bg-cloud rounded-lg">
              <div className="w-[36px] md:w-[60px] h-[36px] md:h-[60px] rounded-lg overflow-hidden">
                <Image
                  alt="influe"
                  src="/assets/images/allTypes/avatar.png"
                  width={60}
                  height={60}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold">{t("Osama Marwa")}</p>
                <p className="text-asphalt text-[10px]">
                  {t("Interested in")}{" "}
                  <span className="font-bold">#{t("sport shoes")}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full bg-primary p-4 flex items-center justify-center text-white gap-4 font-bold rounded-full text-sm md:text-base">
          <p>{t("View all")}</p>
          <div className="ltr:rotate-180">
            <ViewAll />
          </div>
        </button>
      </div>
    </div>
  );
};

export default AllProductsType;
