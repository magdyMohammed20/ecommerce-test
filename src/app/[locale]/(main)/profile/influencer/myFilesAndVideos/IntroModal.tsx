import { useLocale, useTranslations } from "next-intl";
import { ProductClose } from "../../../../../../../public/assets/svg/checkoutSvg";
import { useState } from "react";

interface Props {
  onClose: () => void;
}

const IntroModal = ({ onClose }: Props) => {
  const t = useTranslations();
  const [notes, setNotes] = useState<string>("");
  const handleNotes = (val: string) => {
    setNotes(val);
  };
  return (
    <div className="text-primary fixed top-0 left-0 w-full min-h-screen bg-black/60 flex justify-center items-center z-[999]">
      <div className="bg-cloud bottom-0 md:top-0 md:my-auto fixed h-[41%] md:h-[45%]  rounded-t-2xl md:rounded-[20px] p-5 md:p-8 w-full md:max-w-[660px] flex flex-col gap-6 overflow-scroll hide-scrollbar">
        <div className="flex items-center justify-between pb-6 border-b border-b-silver/50">
          <p className="text-20">{t("diff_note")}</p>
          <div className="cursor-pointer" onClick={onClose}>
            <ProductClose />
          </div>
        </div>
        <div className="flex flex-col gap-5 md:gap-8  border-b border-b-cloud">
          <div className="flex flex-col  gap-4  w-full">
            <div className="p-4 flex flex-col gap-1 rounded-12 bg-white relative">
              <p className="text-asphalt text-[10px] md:text-sm">
                {t("diff_note")}
              </p>
              <textarea
                onChange={(e) => handleNotes(e.target.value)}
                className="bg-transparent border-none text-sm md:text-base focus:outline-none resize-none h-[100px] hide-scrollbar md:min-w-[576px]"
                placeholder={
                  t("merchant_2") + "\n" + t("merchant_3")
                }></textarea>

              <span
                className={`absolute bottom-2  text-[14px] text-asphalt ${
                  useLocale() == "en" ? "right-2" : "left-2"
                }`}>
                150 / {notes.length}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-silver/50">
          <button
            onClick={onClose}
            className="btn-primary text-[16px] font-bold">
            {t("Save")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroModal;
