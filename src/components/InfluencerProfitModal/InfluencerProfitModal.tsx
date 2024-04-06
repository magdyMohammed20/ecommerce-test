import React from "react";
import { useTranslations } from "next-intl";
import { ProductClose } from "../../../public/assets/svg/checkoutSvg";
import { InfoIconSVG } from "../../../public/assets/svg/influencer";

interface Props {
  onClose: () => void;
}

const InfluencerProfitModal: React.FC<Props> = ({ onClose }: Props) => {
  const t = useTranslations();

  return (
    <div
      onClick={onClose}
      className="text-primary  fixed top-0 left-0 w-full min-h-screen bg-black/60 flex justify-center items-center z-40">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-cloud bottom-0 md:top-0 md:my-auto fixed rounded-t-2xl  max-h-[600px] md:rounded-[20px] p-5 md:p-8 w-full max-w-[600px] flex flex-col gap-7 overflow-scroll hide-scrollbar">
        <div className="flex items-center justify-between pb-6 border-b border-b-silver/50">
          <p className="text-20">{t("new transfer request")}</p>
          <div className="cursor-pointer" onClick={onClose}>
            <ProductClose />
          </div>
        </div>
        <div className="bg-white p-4 md:p-6 flex flex-col gap-4 rounded-xl">
          <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg">
            <p className="capitalize text-asphalt text-[12px] lg:text-[14px]">
              {t("price")}
            </p>
            <input
              type="text"
              className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold"
              placeholder={t("Such as:") + " " + t("hundred")}
            />
          </div>

          <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg">
            <p className="capitalize text-asphalt text-[12px] lg:text-[14px]">
              {t("order date")}
            </p>
            <input
              type="text"
              className="bg-transparent focus:outline-none text-asphalt w-full"
              placeholder={t("day") + " / " + t("month") + " / " + t("year")}
            />
          </div>

          <div className="bg-cloud py-3 px-4 flex flex-col gap-1 rounded-lg">
            <p className="capitalize text-asphalt text-[12px] lg:text-[14px]">
              {t("ipan")}
            </p>
            <input
              type="text"
              className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold"
              placeholder={t("Such as:") + " SA00 0000 0000 0000 0000 0000"}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <InfoIconSVG />
          <p className=" text-[#455560]   block text-[14px]">
            {t("need help")}
          </p>
        </div>
        <div className="border-t pt-6">
          <button className=" bg-primary rounded-full w-full p-4 text-center text-white font-bold">
            {t("confirm request")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfluencerProfitModal;
