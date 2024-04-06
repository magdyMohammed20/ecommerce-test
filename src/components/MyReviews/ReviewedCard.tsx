import { useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import { Calendar16, PaymenTrash } from "../../../public/assets/svg/profile";
import RemoveModal from "../RemoveModal/RemoveModal";

const statusImages = [
  {
    id: 1,
    image: "/assets/images/profile/review1.png",
    status: "sad",
  },
  {
    id: 2,
    image: "/assets/images/profile/review2.png",
    status: "spheechless",
  },
  {
    id: 3,
    image: "/assets/images/profile/review3.png",
    status: "blush",
  },
  {
    id: 4,
    image: "/assets/images/profile/review4.png",
    status: "happy",
  },
  {
    id: 5,
    image: "/assets/images/profile/review5.png",
    status: "star",
  },
];

const products = [1, 2, 3];

const ReviewedCard = () => {
  const t = useTranslations();
  const status = "blush";
  const [openDeleteMenu, setOpenDeleteMenu] = useState<boolean>(false);

  const handleDeleteMenu = () => {
    setOpenDeleteMenu(!openDeleteMenu);
  };

  return (
    <div className="bg-white rounded-xl w-full flex flex-col gap-4 lg:gap-6 p-4 lg:p-6">
      <div className="flex gap-4 pb-4 lg:pb-6 border-b border-cloud">
        <Image
          alt="product"
          src="/assets/images/product/product-1.png"
          width={84}
          height={92}
          className="rounded-lg w-[70px] md:w-[84px] h-[86px] md:h-[92px] object-cover"
        />
        <div className="flex flex-col justify-between text-asphalt">
          <p className=" text-sm">{t("address-3")}</p>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-cloud flex items-center gap-1 p-1 pr-2 text-xs">
              <div className="w-[10px] h-[10px] rounded-full bg-[#8F7D7A]"></div>
              <p>{t("brown")}</p>
              <p className="text-silver">/</p>
              <p>xs</p>
            </div>
            <p className="text-xs">1x</p>
          </div>

          <p className="price-text lg:!text-base">
            <del className="price-text-del">240.99</del>
            <span>120.99 {t("SAR")}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 lg:gap-4">
        {statusImages.map((item) => (
          <div
            key={item.id}
            className={`p-1 rounded-full ${
              status === item.status ? "bg-primary" : "bg-cloud"
            }`}
          >
            <Image
              src={item.image}
              alt="emoji"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </div>
        ))}
      </div>

      <div className="p-3 flex flex-col gap-4 rounded-lg bg-cloud">
        <p className="text-asphalt text-sm">{t("review-1")}</p>
        <div className="flex items-center flex-wrap gap-2">
          {products.map((item) => (
            <div
              key={item}
              className="w-[60px] h-[60px] rounded-md overflow-hidden"
            >
              <Image
                src="/assets/images/profile/product.png"
                alt="product"
                width={60}
                height={60}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 text-asphalt text-sm pb-4 lg:pb-6 border-cloud border-b">
        <p>
          {t("Size")}:{" "}
          <span className="font-bold text-primary">{t("suitable")}</span>
        </p>
        <p className="px-4 border-cloud border-x">
          {t("Weight")}: <span className="font-bold text-primary">45kg</span>
        </p>
        <p>
          {t("Length")}: <span className="font-bold text-primary">170cm</span>
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-asphalt text-sm">
          <Calendar16 />
          <p>{t("May 14, 2023")}</p>
        </div>
        <span className="cursor-pointer" onClick={handleDeleteMenu}>
          <PaymenTrash />
        </span>
      </div>

      {openDeleteMenu && (
        <RemoveModal
          title="Review"
          onSave={handleDeleteMenu}
          onClose={handleDeleteMenu}
        />
      )}
    </div>
  );
};

export default ReviewedCard;
