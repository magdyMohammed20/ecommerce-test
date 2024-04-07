import { useTranslations } from "next-intl";
import { ProductClose } from "../../../../../../public/assets/svg/checkoutSvg";

interface Props {
  onClose: () => void;
}

const EditNameModal = ({ onClose }: Props) => {
  const t = useTranslations();

  return (
    <div className="text-primary fixed top-0 left-0 w-full min-h-screen bg-black/60 flex justify-center items-center z-[999]">
      <div className="bg-cloud bottom-0 md:top-0 md:my-auto fixed h-[50%] md:h-[53%]  rounded-t-2xl md:rounded-[20px] p-5 md:p-8 w-full md:max-w-[660px] flex flex-col gap-6 overflow-scroll hide-scrollbar">
        <div className="flex items-center justify-between pb-6 border-b border-b-silver/50">
          <p className="text-20">{t("name")}</p>
          <div className="cursor-pointer" onClick={onClose}>
            <ProductClose />
          </div>
        </div>
        <div className="flex flex-col gap-5 md:gap-8  border-b border-b-cloud">
          <div className="flex flex-col  gap-4  w-full">
            <div className="bg-white py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
              <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
                {t("First Name")}
              </p>
              <input
                type="text"
                className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
                placeholder={t("Ahlam")}
              />
            </div>
            <div className="bg-white py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
              <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
                {t("Last Name")}
              </p>
              <input
                type="text"
                className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
                placeholder={t("Muhammad")}
              />
            </div>
          </div>

          <p className="text-[12px] md:text-[14px] text-asphalt">
            {t("dummy")}
          </p>
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

export default EditNameModal;
