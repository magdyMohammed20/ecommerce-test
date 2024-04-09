import { useTranslations } from "next-intl";
import {
  DownSVG,
  UpSVG,
} from "../../../../../../../public/assets/svg/influencer";

const ReelsReacts = () => {
  const t = useTranslations();

  return (
    <div className="grid grid-cols-1 gap-[16px]">
      <div className="bg-white rounded-12 p-[16px] md:p-[24px]  flex flex-col gap-[16px] ">
        <p className="text-[16px] md:text-[20px] font-[700]">
          {" "}
          {t("reels reacts")}
        </p>

        <div>
          <div className="flex items-center justify-between">
            <p className="text-small md:text-medium font-[400] text-asphalt">
              {t("buy count")}
            </p>
            <div className="flex flex-col ">
              <span className="text-medium md:text-large font-[700] mt-0.5 text-asphalt">
                $10K
              </span>

              <span className="mt-0.5 text-green-600 flex gap-1 items-center">
                <UpSVG />
                <span className="text-[10px] md:text-[14px] lg:text-[14px] font-[400]">
                  20%
                </span>
              </span>
            </div>
          </div>
        </div>
        <hr className="border-0 border-b border-b-cloud" />
        <div>
          <div className="flex items-center justify-between">
            <p className="text-small md:text-medium font-[400] text-asphalt">
              {t("likes record")}
            </p>
            <div className="flex flex-col ">
              <span className=" text-medium md:text-large font-[700] mt-0.5 text-asphalt">
                340
              </span>

              <span className="mt-0.5 text-red-600 flex gap-1 items-center">
                <DownSVG />
                <span className="text-[10px] md:text-[14px] lg:text-[14px] font-[400]">
                  25%
                </span>
              </span>
            </div>
          </div>
        </div>
        <hr className="border-0 border-b border-b-cloud" />
        <div>
          <div className="flex items-center justify-between">
            <p className="text-small md:text-medium font-[400] text-asphalt">
              {t("saving process")}
            </p>
            <div className="flex flex-col ">
              <span className=" text-medium md:text-large font-[700] mt-0.5 text-asphalt">
                340
              </span>

              <span className="mt-0.5 text-green-600 flex gap-1 items-center">
                <UpSVG />
                <span className="text-[10px] md:text-[14px] lg:text-[14px] font-[400]">
                  20%
                </span>
              </span>
            </div>
          </div>
        </div>
        <hr className="border-0 border-b border-b-cloud" />
        <div>
          <div className="flex items-center justify-between">
            <p className="text-small md:text-medium font-[400] text-asphalt">
              {t("comments")}
            </p>
            <div className="flex flex-col ">
              <span className=" text-medium md:text-large font-[700] mt-0.5 text-asphalt">
                340
              </span>

              <span className="mt-0.5 text-green-600 flex gap-1 items-center">
                <UpSVG />
                <span className="text-[10px] md:text-[14px] lg:text-[14px] font-[400]">
                  20%
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelsReacts;
