import { useTranslations } from "next-intl";

import Image from "next/image";

import { CategoryArrow } from "../../../public/assets/svg/searchSvgs";
import { ArrowRightIconSvg } from "../../../public/assets/svg/categoryBarSvgs";

interface Props {
  category: {
    name: string;
    image: string[];
  };
}

const CategoryCard = ({ category }: Props) => {
  const t = useTranslations();

  return (
    <div className="bg-white p-6 flex flex-col gap-6 rounded-xl border border-cloud">
      <div className="flex items-center justify-between">
        <p className="capitalize text-xl font-bold">{t(category.name)}</p>
        <div className="bg-cloud p-1 cursor-pointer rounded-full">
          <ArrowRightIconSvg />
        </div>
      </div>
      <div className="grid grid-cols-3 w-full gap-2">
        {category.image.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt="category"
            width={128}
            height={133}
            className="rounded-lg w-full h-full aspect-square object-cover"
          />
        ))}
      </div>
      <button className="bg-primary p-3 w-full flex gap-4 items-center justify-center rounded-full text-white font-bold text-sm md:text-base">
        <p>{t("View all")}</p>
        <span className="rtl:rotate-180">

        <CategoryArrow />
        </span>
      </button>
    </div>
  );
};

export default CategoryCard;
