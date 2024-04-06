"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

interface Props {
  toggleCreateModal: Function;
}
const Banner: React.FC<Props> = ({ toggleCreateModal }) => {
  const t = useTranslations();

  return (
    <div className="flex justify-between items-center gap-x-6 overflow-hidden bg-white py-6 sm:px-3.5 rounded-lg px-5 w-full lg:mt-0">
      <div className="flex items-center gap-3">
        <div className="w-[50px] h-[50px] text-center ">
          <div className=" p-[9.636px] bg-cloud rounded-full  flex h-[50px] w-[50px] justify-center items-center gap-[18.182px]">
            <Image
              width={55}
              layout="responsive"
              height={55}
              src="/assets/images/influencer/CTA.png"
              alt="cta"
            />
          </div>
        </div>
        <div>
          <h2 className="text-[12px] lg:text-[16px] text-gray-600 font-[400]">
            {t("total earn")}
          </h2>
          <span className="text-[24px] font-bold mt-2 block">$5000</span>
        </div>
      </div>

      <div className="z-40 px-[12px] lg:hidden fixed bottom-0 flex justify-center left-0 w-full bg-white py-[24px]">
        <button
          className="w-full lg:w-auto text-sm lg:text-[17px] sm:static lg:block bg-black text-white p-[16px] cursor-pointer  rounded-full focus:ring-4 focus:ring-gray-400 transition-all ease-linear"
          onClick={() => toggleCreateModal()}>
          {t("request new transfer")}
        </button>
      </div>

      <div className="hidden lg:flex">
        <button
          className="text-sm lg:text-[16px] sm:static lg:block bg-black text-white p-[16px] cursor-pointer  rounded-full "
          onClick={() => toggleCreateModal()}>
          {t("request new transfer")}
        </button>
      </div>
    </div>
  );
};

export default Banner;
