import { Fragment, useState } from "react";
import { useTranslations } from "next-intl";

import RequestStore from "./RequestStore";
import TimerContainer from "./TimerContainer";
import RequestProducts from "./RequestProducts";
import UploadReel from "./uploadReel/UploadReel";
import RequestCommission from "./RequestCommission";
import StarContainer from "@/components/MyReviews/StarContainer";

import { Arrow16 } from "../../../../../../../public/assets/svg/categoryBarSvgs";
import {
  BoxWhite16,
  UnionPrimary,
  UnionSecondary,
} from "../../../../../../../public/assets/svg/marketingRequests";
import { BannerFireSvg } from "../../../../../../../public/assets/svg/landingPageSvgs";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "First week",
    number: 1,
  },
  {
    id: 2,
    name: "Second week",
    number: 7,
  },
  {
    id: 3,
    name: "Third week",
    number: 14,
  },
];

interface Props {
  onSave: () => void;
}

const PromoteReel = ({ onSave }: Props) => {
  const t = useTranslations();
  const [showUpload, setShowUpload] = useState<boolean>(false);

  const handleUploadChange = () => {
    setShowUpload((prevState) => !prevState);
  };

  return (
    <>
      <div className="p-4 md:p-6 flex flex-col gap-4 md:gap-6 rounded-12 bg-white">
        <div className="flex items-center gap-4 xl:gap-12 justify-between flex-col-reverse xl:flex-row">
          <div className="w-full">
            <StarContainer className="w-9 h-9">
              <span className="font-bold text-sm md:text-base">
                {t("Seize the opportunity and start promoting early!")}
              </span>
              <span className="text-asphalt text-xs">
                {t(
                  "Promote early and get a special commission rate when you start"
                )}
                .
              </span>
            </StarContainer>
          </div>

          <div className="hidden lg:block lg:w-full">
            <TimerContainer title="Promotion duration" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="p-6 flex flex-col gap-4 rounded-lg bg-cloud/50">
            <div className="flex justify-between w-full items-end">
              <div className="relative">
                <UnionPrimary />
                <div className="absolute w-full flex flex-col items-center justify-center gap-1 inset-0 mb-1">
                  <Image
                    alt="emoji"
                    src="/assets/images/profile/accept-order.png"
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px]"
                  />
                  <p className="text-white font-bold">5%</p>
                </div>
              </div>
              <div className="relative">
                <UnionSecondary />
                <div className="absolute w-full flex flex-col items-center justify-center gap-1 inset-0 mb-1">
                  <Image
                    alt="emoji"
                    src="/assets/images/profile/review6.png"
                    width={26}
                    height={26}
                    className="w-4 md:w-[27px] h-4 md:h-[18px] object-cover"
                  />
                  <p className="text-asphalt text-xs md:text-sm font-bold">
                    4%
                  </p>
                </div>
              </div>
              <div className="relative">
                <UnionSecondary />
                <div className="absolute w-full flex flex-col items-center justify-center gap-1 inset-0 mb-1">
                  <Image
                    alt="emoji"
                    src="/assets/images/profile/review1.png"
                    width={26}
                    height={26}
                    className="w-4 md:w-[27px] h-4 md:h-[18px] object-cover"
                  />
                  <p className="text-asphalt text-xs md:text-sm font-bold">
                    3%
                  </p>
                </div>
              </div>
            </div>

            <div className="h-[10px] w-full rounded-full bg-silver overflow-hidden">
              <div className="w-full h-full bg-primary" />
            </div>

            <div className="flex w-full justify-between">
              {data.map((item) => (
                <div key={item.id} className="flex flex-col text-asphalt">
                  <p className="opacity-70 text-xs md:text-sm">
                    {t(item.name)}
                  </p>
                  <p className="font-bold text-16">
                    {item.number}/{t("May")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleUploadChange}
            className="btn-primary !hidden lg:!flex">
            {t("Promote now")} <BannerFireSvg color="white" />
          </button>
        </div>
      </div>

      <RequestCommission />
      <RequestStore />
      <RequestProducts />

      <div className="p-4 flex items-center justify-between rounded-12 bg-white">
        <div className="flex items-center gap-3">
          <p className="p-2 rounded-full bg-primary">
            <BoxWhite16 />
          </p>
          <p className="font-bold">{t("Product delivered")}</p>
        </div>

        <div
          onClick={onSave}
          className="flex items-center gap-2 cursor-pointer">
          <p className="text-sm">{t("Details")}</p>
          <span className="p-1 rounded-full bg-cloud ltr:rotate-180">
            <Arrow16 />
          </span>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-[101px] inset-x-0 z-10">
        <TimerContainer title="Promotion duration" />
      </div>

      <div className="lg:hidden fixed bottom-0 inset-x-0 w-full py-6 px-4 flex items-center gap-2 bg-white">
        <button onClick={handleUploadChange} className="btn-primary">
          {t("Promote now")} <BannerFireSvg color="white" />
        </button>
      </div>

      {showUpload && <UploadReel onClose={handleUploadChange} />}
    </>
  );
};

export default PromoteReel;
