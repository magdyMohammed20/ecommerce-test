import { useLocale, useTranslations } from "next-intl";

import Image from "next/image";

import { Checkbox } from "@mui/material";

import {
  FilterUnCheckBox,
  FilterCheckBox,
} from "../../../public/assets/svg/searchSvgs";
import { ProductClose, UserSearch } from "../../../public/assets/svg/checkoutSvg";
import { SearchIconSvg } from "../../../public/assets/svg/headerSvgs";

interface Props {
  onClose: () => void;
}

const data = [
  {
    id: 1,
    name: "Joanna Arif",
    nameInArabic: "جوانا عارف",
    image: "/assets/images/header/profile.png",
  },
  {
    id: 2,
    name: "Joanna Arif",
    nameInArabic: "جوانا عارف",
    image: "/assets/images/header/profile.png",
  },
  {
    id: 3,
    name: "Joanna Arif",
    nameInArabic: "جوانا عارف",
    image: "/assets/images/header/profile.png",
  },
  {
    id: 4,
    name: "Joanna Arif",
    nameInArabic: "جوانا عارف",
    image: "/assets/images/header/profile.png",
  },
];

const AddFriendMenu = ({ onClose }: Props) => {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <div className="text-primary fixed top-0 left-0 w-full min-h-screen bg-black/60 flex justify-center items-center z-40">
      <div className="bg-cloud bottom-0 md:top-0 md:my-auto fixed h-[92%] max-h-[648px] rounded-t-2xl md:rounded-[20px] p-5 md:p-8 w-full md:max-w-[660px] flex flex-col gap-6 overflow-scroll hide-scrollbar">
        <div className="flex items-center justify-between pb-6 border-b border-b-silver/50">
          <p className="text-20">{t("Add a friend")}</p>
          <div className="cursor-pointer" onClick={onClose}>
            <ProductClose />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 w-full bg-white px-6 py-3 rounded-full">
            <SearchIconSvg />
            <input
              type="text"
              placeholder={t("Search for the username")}
              className="bg-transparent w-full border-0 focus:outline-none text-sm text-opacity-70 max-w-[477px]"
            />
          </div>

          <p className="text-16 font-bold">{t("Your friends")}</p>

          <div className="bg-white rounded-xl">
            {data.map((item) => (
              <div
                key={item.id}
                className="p-3 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={item.image}
                    alt="img"
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px] rounded-full object-cover"
                  />
                  <p className="text-asphalt font-bold text-sm">
                    {locale === "ar" ? item.nameInArabic : item.name}
                  </p>
                </div>
                <Checkbox
                  className="!p-0"
                  icon={<FilterUnCheckBox />}
                  checkedIcon={<FilterCheckBox />}
                />
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <UserSearch />
              <div className="text-asphalt">
                <p className="font-bold text-sm">{t("Easy to find your friends!")}</p>
                <p className="text-xs">{t("Allow access to contacts to find my friends")}</p>
              </div>
            </div>

            <button className="btn-primary !w-fit !bg-cloud !text-asphalt !py-2 !text-sm">{t("Allow")}</button>
          </div>
        </div>

        <button className="btn-primary pt-6 border-t border-t-silver/50">
          {t("Save")}
        </button>
      </div>
    </div>
  );
};

export default AddFriendMenu;
