import { useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";

import RatingEmojis from "./RatingEmojis";
import StarContainer from "./StarContainer";
import CompletedMenu from "./CompletedMenu";
import AddProductReview from "./AddProductReview";

import {
  ProgressBar0,
  ProgressBar20,
  ToolTipBg,
  TruckSvg,
} from "../../../public/assets/svg/profile";

const data = [
  {
    id: 1,
    name: "Shipping services",
    value: "",
  },
  {
    id: 2,
    name: "customers service",
    value: "",
  },
  {
    id: 3,
    name: "Delivery speed",
    value: "",
  },
];

const AddReview = ({ onClose }: { onClose: () => void }) => {
  const t = useTranslations();
  const [emojisStatus, setEmojisStatus] = useState(data);
  const [points, setPoints] = useState<number>(0);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleStatusChange = (value: string, id: number) => {
    setEmojisStatus((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, value: value };
        }
        return item;
      })
    );
  };

  const handlePointsChange = () => {
    if (points === 0) {
      setPoints(20);
    } else {
      setOpenMenu(!openMenu);
    }
  };

  const handleSave = () => {
    onClose();
  };

  return (
    <div className="flex flex-col gap-6 md:gap-8 lg:gap-6 w-full">
      <div className="bg-white p-4 md:px-8 lg:p-4 lg:rounded-lg border-cloud border-b flex flex-col gap-2">
        <span className={`${points === 20 && "mx-[90px]"} relative w-fit`}>
          <ToolTipBg />
          <div className="absolute inset-0 w-full h-full bg- flex flex-col items-center justify-center gap-[6px]">
            <Image
              src="/assets/images/profile/smile.png"
              alt="img"
              width={26}
              height={26}
              className="w-[26px] h-[26px] mx-auto"
            />
            <p className="text-[#5A46FA] font-bold">{points}</p>
          </div>
        </span>
        <div className="flex items-center gap-4">
          <div className="w-full h-3 bg-silver rounded-full">
            {points === 0 && <ProgressBar0 />}
            {points === 20 && <ProgressBar20 />}
          </div>
          <p className="text-asphalt text-sm whitespace-nowrap">
            {t("Points")} ({points} / 96)
          </p>
        </div>
      </div>

      {points === 0 && (
        <div className="flex flex-col gap-4 px-4 md:px-8 lg:px-0">
          <div className="flex items-center gap-2">
            <TruckSvg />
            <p className="text-16 font-bold">{t("Logistics services")}</p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl flex flex-col gap-6">
            {emojisStatus.map((item) => (
              <div
                key={item.id}
                className={`flex md:items-center md:justify-between flex-col gap-4 md:flex-row border-cloud ${
                  item.id !== 3 && "pb-6 border-b"
                }`}
              >
                <p className="text-sm font-bold capitalize">{t(item.name)}:</p>
                <RatingEmojis
                  value={item.value}
                  onChange={(value: string) =>
                    handleStatusChange(value, item.id)
                  }
                />
              </div>
            ))}
            <StarContainer>
              {t("Earn")} <span className="font-bold">20 {t("points")}</span>{" "}
              {t("When you evaluate logistics services")}
            </StarContainer>
          </div>
        </div>
      )}

      {points === 20 && (
        <div className="px-4 md:px-8 lg:px-0">
          <AddProductReview />
        </div>
      )}

      <button
        className="btn-primary !hidden lg:!flex"
        onClick={handlePointsChange}
      >
        {t("Continue")}
      </button>

      <div className="fixed bottom-0 left-0 w-full px-4 md:px-8 py-6 bg-white border-t border-silver/50 lg:hidden">
        <button className="btn-primary" onClick={handlePointsChange}>
          {t("Continue")}
        </button>
      </div>

      {openMenu && (
        <CompletedMenu onClose={handlePointsChange} onSave={handleSave} />
      )}
    </div>
  );
};

export default AddReview;
