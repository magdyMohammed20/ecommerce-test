import { useTranslations } from "next-intl";
import { ProductClose } from "../../../../../../../public/assets/svg/checkoutSvg";
import { InfoSVG } from "../../../../../../../public/assets/svg/influencer";
import Accordion from "./Accordion";

interface Props {
  onClose: () => void;
}

const CatModal = ({ onClose }: Props) => {
  const t = useTranslations();

  return (
    <div className="text-primary fixed top-0 left-0 w-full min-h-screen bg-black/60 flex justify-center items-center z-[999]">
      <div className="bg-cloud bottom-0 md:top-0 md:my-auto fixed h-[59%] md:h-[59%] lg:h-[59%]  rounded-t-2xl md:rounded-[20px] p-5 md:p-8  flex flex-col gap-6 overflow-scroll hide-scrollbar">
        <div className="flex items-center justify-between pb-6 border-b border-b-silver/50">
          <p className="text-[16px] font-bold md:text-[20px]">
            {t("Categories")}
          </p>
          <div className="cursor-pointer" onClick={onClose}>
            <ProductClose />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-8   ">
          <div>
            <div className="flex flex-col gap-4">
              <div className=" flex flex-col gap-1 bg-cloud ">
                <div className=" flex  gap-2">
                  <InfoSVG color="#455560" className="w-[20px] h-[20px]" />
                  <span className="text-[14px] text-asphalt">
                    {t("specify_cat")}
                  </span>
                </div>
              </div>
              <Accordion title={t("💃 Fashion and beauty")} />
              <Accordion title={t("👟 shoes")} />
              <Accordion title={t("💃 Fashion and beauty")} />
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-silver/50">
          <button onClick={onClose} className="btn-primary">
            {t("Save")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatModal;
