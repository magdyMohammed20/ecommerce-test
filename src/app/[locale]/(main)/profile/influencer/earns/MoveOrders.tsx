import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Card from "./Card";
import {
  ArrowLeftSVG,
  ArrowRightSVG,
  MoneySVG,
} from "../../../../../../../public/assets/svg/influencer";
import InfluencerProfitRequestDetailsModal from "@/components/InfluencerProfitRequestDetailsModal/InfluencerProfitRequestDetailsModal";

interface Items {
  id?: number;
  price?: number;
  status?: number;
}

interface MoveRequestsProps {
  items?: Items[];
}

const MoveRequests: React.FC<MoveRequestsProps> = ({ items }) => {
  const t = useTranslations();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const lang = useLocale();
  const toggleCreateModal = () => {
    setOpenModal(!openModal);
  };
  const MapItems = ({ items }: { items: Items[] | undefined }) => {
    return items?.map((item, index) => (
      <Card
        item={item}
        key={index}
        index={index}
        toggleCreateModal={toggleCreateModal}
      />
    ));
  };
  return (
    <div className="flex flex-col gap-y-[16px]">
      {openModal && (
        <InfluencerProfitRequestDetailsModal onClose={toggleCreateModal} />
      )}
      <div className="flex  justify-between items-center">
        <div className="px-2 flex items-center gap-2">
          <MoneySVG />

          <h3 className="text-[16px] md:text-[20px] font-[700] transform translate-y-[2px]">
            {t("transfer requests")}
          </h3>
        </div>
        <div>
          <Link
            href={`/profile?tab=show-all`}
            className="flex items-center gap-2 cursor-pointer font-semibold text-gray-600 text-[14px] ">
            <span>{t("show all")}</span>

            <span>{lang == "en" ? <ArrowRightSVG /> : <ArrowLeftSVG />}</span>
          </Link>
        </div>
      </div>
      <div className="gap-y-[8px] justify-between items-center gap-[16px] overflow-hidden grid grid-cols-1 lg:grid-cols-2  ">
        <MapItems items={items} />
      </div>
    </div>
  );
};

export default MoveRequests;
