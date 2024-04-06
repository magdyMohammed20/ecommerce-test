"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Arrow16 } from "../../../../../../public/assets/svg/categoryBarSvgs";
import BasicCard from "./PlainCard";
import { BestSellingSVG } from "../../../../../../public/assets/svg/influencerStatistics";
interface Props {
  documentWidth: number;
}

const BestSelling = ({ documentWidth }: Props) => {
  const t = useTranslations();

  const data = [
    {
      id: 1,
      imageUrl: "/assets/images/influencer/product1.png",
      title: 1000,
    },
    {
      id: 2,
      imageUrl: "/assets/images/influencer/product1.png",
      title: 1000,
    },
    {
      id: 3,
      imageUrl: "/assets/images/influencer/product1.png",
      title: 1000,
    },
  ];

  const data2 = [
    {
      id: 4,
      imageUrl: "/assets/images/influencer/product1.png",
      title: 1000,
    },
  ];

  const data3 = [
    {
      id: 5,
      imageUrl: "/assets/images/influencer/product1.png",
      title: 1000,
    },
  ];

  const firstRow = data.map((item) => (
    <BasicCard imageUrl={item.imageUrl} title={item.title} key={item.id} />
  ));

  const secondCard = data2.map((item) => (
    <BasicCard imageUrl={item.imageUrl} title={item.title} key={item.id} />
  ));

  const thirdCard = data3.map((item) => (
    <BasicCard imageUrl={item.imageUrl} title={item.title} key={item.id} />
  ));
  return (
    <div className="bg-white overflow-hidden rounded-xl p-[16px] sm:p-[24px] flex flex-col gap-[16px] md:gap-[24px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[4px]">
          <BestSellingSVG />
          <p className="text-[16px] md:text-[20px] font-[700] transform translate-y-[2px]">
            {" "}
            {t("Best selling products")}
          </p>
        </div>
        <Link
          href="/profile?tab=list"
          className="flex items-center gap-2 cursor-pointer">
          <p className="text-14">{t("View all")}</p>
          <div className="rounded-full bg-cloud p-1 ltr:rotate-180">
            <Arrow16 />
          </div>
        </Link>
      </div>

      {/*
        ${
          documentWidth > 1024
            ? "grid-cols-5"
            : documentWidth > 430
            ? "grid-cols-4"
            : "grid-cols-3"
        }
        */}
      <div
        className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5  gap-[8px]  md:gap-[16px]`}>
        {firstRow}

        {documentWidth >= 768 && secondCard}

        {documentWidth >= 1536 && thirdCard}
      </div>
    </div>
  );
};

export default BestSelling;
