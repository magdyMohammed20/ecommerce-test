"use client";

import { useTranslations } from "next-intl";
import { ProductClose } from "../../../public/assets/svg/checkoutSvg";

import {
  DocumentDownloadSVG,
  TickCircleSVG,
} from "../../../public/assets/svg/influencer";
interface Props {
  onClose: () => void;
}

const InfluencerProfitRequestDetailsModal = ({ onClose }: Props) => {
  const t = useTranslations();

  return (
    <div className="text-primary fixed top-0 left-0 w-full min-h-screen bg-black/60 flex justify-center items-center z-40">
      <div className="bg-cloud bottom-0 md:top-0 md:my-auto fixed h-[95%] max-h-[710px] rounded-t-2xl md:rounded-[20px] p-5 md:p-y-7 md:px-7 w-full max-w-[600px] flex flex-col gap-6 overflow-scroll hide-scrollbar">
        <div className="flex items-center justify-between pb-6 border-b border-b-silver/50">
          <p className="text-20">{t("transfer details")}</p>
          <div className="cursor-pointer" onClick={onClose}>
            <ProductClose />
          </div>
        </div>
        <div className="bg-white p-4 md:p-6 flex flex-col gap-4 gap-y-2 rounded-xl">
          <div className="flex justify-between ">
            <div>
              <span className="text-gray-400 text-[14px]">{t("price")}</span>
              <h4 className="font-bold mt-2 text-[16px]">$500</h4>
            </div>

            <div>
              <div
                className={`
         
             bg-green-100
           
             rounded-full px-3 lg:px-5 py-[7px] lg:py-2 flex items-center gap-x-2`}>
                <TickCircleSVG />
                <span
                  className={`font-bold text-[13px] lg:text-sm 
              text-green-700
              mt-1`}>
                  {t("transfered")}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 border-t border-t-gray-100 pt-5">
            <div>
              <span className="text-gray-400 text-[14px]">
                {t("bank name")}{" "}
              </span>
              <h4 className=" font-bold mt-2 text-[16px]">بنك الراجحي</h4>
            </div>
          </div>

          <div className="flex justify-between mt-3 border-t border-t-gray-100 pt-5">
            <div>
              <div>
                <span className="text-gray-400 text-[14px]">
                  {" "}
                  {t("transfer date")}
                </span>
                <h4 className="text-[16px] font-bold mt-2">31 مايو، 2023</h4>
              </div>
            </div>

            <div>
              <span className="text-gray-400 text-[14px]">
                {" "}
                {t("transfer time")}
              </span>
              <h4 className="text-[16px] font-bold mt-2"> 12:00pm</h4>
            </div>
          </div>

          <div className="mt-3 border-t border-t-gray-100 pt-5">
            <div>
              <span className="text-gray-400 text-[14px]">
                {" "}
                {t("account number")}
              </span>
              <h4 className="text-[16px] font-bold mt-2">
                {" "}
                **** **** **** 4567
              </h4>
            </div>
          </div>

          <div className="flex justify-between mt-3 border-t border-t-gray-100 pt-5">
            <div>
              <div>
                <span className="text-gray-400 text-[14px]">
                  {" "}
                  {t("transfer code")}
                </span>
                <h4 className="text-[16px] font-bold mt-2">8392-8768-9853</h4>
              </div>
            </div>

            <div>
              <span className="text-gray-400 text-[14px]"> ID</span>
              <h4 className="text-[16px] font-bold mt-2"> 8392-8768</h4>
            </div>
          </div>
        </div>

        <button className="bg-primary rounded-full w-full p-4 text-center text-white font-bold flex justify-center items-center gap-2">
          <DocumentDownloadSVG />
          <span className="mt-1 font-medium">{t("download pill")}</span>
        </button>
      </div>
    </div>
  );
};

export default InfluencerProfitRequestDetailsModal;
