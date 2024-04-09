import React, { useState } from "react";
import { useTranslations } from "next-intl";
import InfluencerProfitModal from "@/components/InfluencerProfitModal/InfluencerProfitModal";

const Banner: React.FC = () => {
  const t = useTranslations();

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const toggleCreateModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <div className="hidden lg:flex justify-between items-center gap-x-6 overflow-hidden bg-white py-6 sm:px-3.5 rounded-lg px-5 w-full  lg:mt-0">
      {isOpenModal && <InfluencerProfitModal onClose={toggleCreateModal} />}
      <div className="flex items-center gap-3">
        <div>
          <h2 className="text-sm lg:text-lg font-bold">
            {t("transfer requests")}
          </h2>
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
          className="text-sm lg:text-[17px] sm:static lg:block bg-black text-white p-[16px]  cursor-pointer  rounded-full focus:ring-4 focus:ring-gray-400 transition-all ease-linear"
          onClick={toggleCreateModal}>
          {t("request new transfer")}
        </button>
      </div>
    </div>
  );
};

export default Banner;
