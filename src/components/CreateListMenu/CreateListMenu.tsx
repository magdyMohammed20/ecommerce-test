import { useTranslations } from "next-intl";

import { ProductClose } from "../../../public/assets/svg/checkoutSvg";

interface Props {
  onClose: () => void;
}

const CreateListMenu = ({ onClose }: Props) => {
  const t = useTranslations();

  return (
    <div className="text-primary fixed top-0 left-0 w-full min-h-screen bg-black/60 flex justify-center items-center z-40">
      <div className="bg-cloud bottom-0 md:top-0 md:my-auto fixed h-[92%] max-h-[569px] rounded-t-2xl md:rounded-[20px] p-5 md:p-8 w-full md:max-w-[660px] flex flex-col gap-6 overflow-scroll hide-scrollbar">
        <div className="flex items-center justify-between pb-6 border-b border-b-silver/50">
          <p className="text-20">{t("Create a list")}</p>
          <div className="cursor-pointer" onClick={onClose}>
            <ProductClose />
          </div>
        </div>

        <div className="pb-6 border-b border-b-silver/50 bg-white p-6 rounded-xl flex flex-col gap-4">
          <div className="bg-cloud py-3 px-4 rounded-lg">
            <p className="capitalize text-asphalt text-14">{t("List name")}</p>
            <input
              type="text"
              className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold"
              placeholder={t("Such as:") + " " + t("Jewelry")}
            />
          </div>

          <p className="text-16 font-bold">{t("Suggestions")}</p>

          <div className="flex flex-col gap-2 text-asphalt font-bold text-sm">
            <div className="bg-cloud p-4 rounded-lg">
              <p>{t("list-1")}</p>
            </div>
            <div className="bg-cloud p-4 rounded-lg">
              <p>{t("list-2")}</p>
            </div>
            <div className="bg-cloud p-4 rounded-lg">
              <p>{t("list-3")}</p>
            </div>
          </div>
        </div>

        <button className="bg-primary rounded-full w-full p-4 text-center text-white font-bold">
          {t("Save")}
        </button>
      </div>
    </div>
  );
};

export default CreateListMenu;
