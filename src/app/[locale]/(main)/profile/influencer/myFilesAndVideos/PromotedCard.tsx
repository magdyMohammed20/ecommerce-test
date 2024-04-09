import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

interface Props {
  brand?: string;
  name: string;
  image: string;
  desc?: string;
}
const PromotedCard: React.FC<Props> = ({ brand, name, image, desc }) => {
  const t = useTranslations();
  return (
    <div className="bg-cloud p-3 flex gap-2 rounded-[8px]">
      <div className=" overflow-hidden  w-[67px] h-[75px]  rounded-[8px]">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-start">
          <div
            className="inline-block  rounded-full cursor-pointer gap-3  
        bg-[#D9DCE1B2] 
       px-2 py-[2px] text-[12px] font-bold">
            # {t(brand)}
          </div>
        </div>

        <div
          className="text-[14px] text-asphalt font-[400]"
          style={{ lineHeight: "160%" }}>
          {desc}
          <br />
          Blossom..
        </div>
      </div>
    </div>
  );
};

export default PromotedCard;
