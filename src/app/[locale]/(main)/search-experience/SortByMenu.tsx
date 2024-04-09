import { useState } from "react";
import { useTranslations } from "next-intl";

import { Checkbox } from "@mui/material";

import { CloseFilter } from "../../../../../public/assets/svg/searchSvgs";
import {
  CheckboxIcon,
  UnCheckboxIcon,
} from "../../../../../public/assets/svg/checkoutSvg";

const items = [
  {
    id: 1,
    name: "The popular",
  },
  {
    id: 2,
    name: "recently arrived",
  },
  {
    id: 3,
    name: "The highest price",
  },
  {
    id: 4,
    name: "Lowest price",
  },
  {
    id: 5,
    name: "Best rated",
  },
];

interface Props {
  onClose: () => void;
}

const SortByMenu = ({ onClose }: Props) => {
  const t = useTranslations();
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleItemChange = (value: string) => {
    setSelectedItem(value);
  };

  return (
    <div className="fixed top-0 left-0 bg-black/60 w-full min-h-screen z-50 lg:hidden">
      <div className="bg-cloud top-0 min-h-screen overflow-scroll h-full hide-scrollbar relative z-50 w-full flex flex-col gap-6 rtl:right-0 ltr:left-0 max-w-[374px] md:max-w-[576px]">
        <div className="flex items-center justify-between bg-white p-6 md:p-8">
          <p className="text-2xl font-bold capitalize">{t("sort by")}</p>
          <div className="cursor-pointer" onClick={onClose}>
            <CloseFilter />
          </div>
        </div>

        <div className="px-1 md:px-8 flex flex-col gap-2">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemChange(item.name)}
              className="flex items-center justify-between cursor-pointer p-4 rounded-xl bg-white">
              <p
                className={`text-sm ${
                  selectedItem === item.name
                    ? "text-primary font-bold"
                    : "text-asphalt"
                }`}>
                {t(item.name)}
              </p>
              <Checkbox
                checked={selectedItem === item.name ? true : false}
                className="!p-0"
                icon={<UnCheckboxIcon />}
                checkedIcon={<CheckboxIcon />}
              />
            </div>
          ))}
        </div>

        {selectedItem && (
          <div className="absolute bottom-0 bg-white w-full py-6 px-[21px] md:px-8">
            <button className="btn-primary" onClick={onClose}>
              {t("Apply")}{" "}
              <span className="text-xs font-normal"> (104 {t("items")})</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortByMenu;
