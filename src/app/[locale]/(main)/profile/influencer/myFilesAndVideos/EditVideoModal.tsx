import { useLocale, useTranslations } from "next-intl";
import { ProductClose } from "../../../../../../../public/assets/svg/checkoutSvg";
import VideoComponent from "../statistics/VideoComponent";
import {
  CartSVG,
  EditIconSvg,
  HashSvg,
} from "../../../../../../../public/assets/svg/influencer";
import Badge from "./Tag";
import { Fragment } from "react";
import Link from "next/link";
import { BestSellingSVG } from "../../../../../../../public/assets/svg/influencerStatistics";
import PromotedCard from "./PromotedCard";

interface Props {
  onClose: () => void;
}
const tags = [
  {
    id: 1,
    name: "Home furnishings",
  },
  {
    id: 2,
    name: "Electronics",
  },
  {
    id: 3,
    name: "Jewelry & Watches",
  },
  {
    id: 4,
    name: "shoes",
  },
];
const EditVideoModal = ({ onClose }: Props) => {
  const t = useTranslations();

  const data = [
    {
      id: 1,
      image: "/assets/images/cart/product-2.png",
      name: "بوما",
      brand: "puma",
      desc: "حذاء رياضي Carina Street",
    },
    {
      id: 2,
      image: "/assets/images/cart/product-2.png",
      name: "بوما",
      brand: "puma",
      desc: "حذاء رياضي Carina Street",
    },
    {
      id: 3,
      image: "/assets/images/cart/product-2.png",
      name: "بوما",
      brand: "puma",
      desc: "حذاء رياضي Carina Street",
    },
    {
      id: 4,
      image: "/assets/images/cart/product-2.png",
      name: "بوما",
      brand: "puma",
      desc: "حذاء رياضي Carina Street",
    },
  ];
  return (
    <div className="text-primary fixed top-0 left-0 w-full min-h-screen bg-black/60 flex justify-center items-center z-[999]">
      <div className="bg-cloud bottom-0 md:top-0 md:my-auto fixed h-[88%] md:h-[95%] lg:h-[89%]  rounded-t-2xl md:rounded-[20px] p-5 md:p-8  flex flex-col gap-6 overflow-scroll hide-scrollbar">
        <div className="flex items-center justify-between pb-6 border-b border-b-silver/50">
          <p className="text-[16px] font-bold md:text-[20px]">
            {t("Edit Video")}
          </p>
          <div className="cursor-pointer" onClick={onClose}>
            <ProductClose />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8  bg-white p-4 lg:p-8 rounded-12">
          <div
            className={`col-span-1 ${
              useLocale() == "ar"
                ? "lg:border-l lg:border-l-cloud"
                : "lg:border-r lg:border-r-cloud"
            } flex justify-center`}>
            <VideoComponent
              src="/assets/videos/video1.mp4"
              isFullWidth={true}
              newDemensions="min-h-[257px] md:max-w-[220px] lg:max-w-[270px] lg:max-h-[200px] max-w-[144px] mx-auto lg:mx-0 md:min-h-[360px] lg:w-full lg:min-h-[458px] xl:min-h-[493px]"
            />
          </div>
          <div className="  col-span-2">
            <div className="flex flex-col gap-6">
              <div className="py-3 px-4 flex flex-col gap-1 bg-cloud rounded-[8px]">
                <span className="text-asphalt text-[10px]">
                  {t("Description")}
                </span>
                <div className="text-[14px] font-bold text-asphalt">
                  {t("comment-1")}
                </div>
              </div>
              <hr className=" border-0 border-b border-b-cloud" />

              <div className=" flex  justify-between">
                <div className="flex gap-2">
                  <span className="text-asphalt">
                    <HashSvg />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] font-bold text-primary">
                      {t("Add categories")}
                    </h3>

                    <div>
                      <div className="flex  gap-2  flex-wrap">
                        {tags.map((tag) => (
                          <Fragment key={tag.id}>
                            <Badge
                              label={tag.name}
                              className="py-1 px-2 text-[12px]"
                            />
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Link href="">
                    <EditIconSvg />
                  </Link>
                </div>
              </div>
              <hr className=" border-0 lg:border-b lg:border-b-cloud" />
              <div className="md:flex flex-col gap-4 hidden">
                <div className="flex items-center gap-1">
                  <BestSellingSVG />
                  <p className="text-[16px] md:text-[20px] font-bold transform translate-y-[2px]">
                    {" "}
                    {t("Promoted product")}
                  </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  {data.map(({ id, image, name, brand, desc }) => (
                    <PromotedCard
                      key={id}
                      image={image}
                      name={name}
                      brand={brand}
                      desc={desc}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-silver/50">
          <button onClick={onClose} className="btn-primary">
            {t("Save")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditVideoModal;
