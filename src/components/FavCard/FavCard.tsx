"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

import Link from "next/link";
import Image from "next/image";

import FavCardMenu from "./FavCardMenu";

import { Arrow16 } from "../../../public/assets/svg/categoryBarSvgs";
import { ExportIcon, FavMenu } from "../../../public/assets/svg/profile";

interface Props {
  favorite: {
    name: string;
    image: string[];
  };
}

const FavCard = ({ favorite }: Props) => {
  const t = useTranslations();
  const menuRef = useRef<any>(null);
  const [favMenu, setFavMenu] = useState<boolean>(false);

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current.contains(e.target) && favMenu) {
        handleFavMenuChange();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleFavMenuChange = () => {
    setFavMenu(!favMenu);
  };

  return (
    <div className="bg-white rounded-xl p-6 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <p className="text-20">{favorite.name}</p>
        <Link
          href="/profile?tab=list"
          className="flex items-center gap-2 cursor-pointer">
          <p className="text-14">{t("View all")}</p>
          <div className="rounded-full bg-cloud p-1 ltr:rotate-180">
            <Arrow16 />
          </div>
        </Link>
      </div>

      <div className="pb-6 border-b border-b-cloud grid grid-cols-3 gap-2">
        {favorite.image.map((item, index) => (
          <Image
            src={item}
            key={index}
            alt="product"
            width={134}
            height={134}
            className="rounded-lg aspect-square w-full object-cover"
          />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <p className="text-asphalt text-14">{t("Share")}</p>
          <div className="flex items-center">
            <div className="z-10 w-8 h-8 rounded-full border border-cloud">
              <Image
                src="/assets/images/hero/icon-1.png"
                alt="follower"
                width={40}
                height={40}
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="-mx-3 w-8 h-8 rounded-full border border-cloud">
              <Image
                src="/assets/images/hero/icon-2.png"
                alt="follower"
                width={40}
                height={40}
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="cursor-pointer">
            <ExportIcon />
          </span>
          <div ref={menuRef} className="cursor-pointer relative">
            <span onClick={handleFavMenuChange}>
              <FavMenu />
            </span>
            {favMenu && <FavCardMenu onSelect={handleFavMenuChange} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavCard;
