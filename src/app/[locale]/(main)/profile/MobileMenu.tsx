import { useState } from "react";
import { useTranslations } from "next-intl";

import { Checkbox } from "@mui/material";

import {
  CheckboxIcon,
  ProductClose,
  UnCheckboxIcon,
} from "../../../../../public/assets/svg/checkoutSvg";
import Image from "next/image";

interface Props {
  data: {
    title: string;
    items: {
      id: number;
      name: string;
      flag?: string;
      lang?: string;
    }[];
  };
  onClose: () => void;
  onSave: (item: any) => void;
}

const MobileMenu = ({ data, onClose, onSave }: Props) => {
  const t = useTranslations();
  const [selectedItem, setSelectedItem] = useState(data.items[0]);

  return (
    <div className="fixed inset-0 w-full min-h-screen bg-black/60 z-50">
      <div className="fixed bottom-0 inset-x-0 w-full px-4 py-6 flex flex-col gap-6 bg-cloud rounded-t-2xl">
        <div className="flex items-center justify-between pb-6 border-b border-silver/50">
          <p className="font-bold">{t(data.title)}</p>
          <span onClick={onClose} className="cursor-pointer">
            <ProductClose />
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {data.items.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="p-4 flex items-center justify-between rounded-12 bg-white cursor-pointer">
              <div className="flex items-center gap-1">
                {item.flag && (
                  <Image
                    src={item.flag}
                    alt="flag"
                    width={21}
                    height={14}
                    className="w-[21px] h-[14px] object-cover"
                  />
                )}
                <p
                  className={` text-sm ${
                    selectedItem.id === item.id ? "font-bold" : "text-asphalt"
                  }`}>
                  {data.title === "Country" ? t(item.name) : item.name}
                </p>
              </div>
              <Checkbox
                checked={selectedItem.id === item.id ? true : false}
                className="!p-0"
                icon={<UnCheckboxIcon />}
                checkedIcon={<CheckboxIcon />}
              />
            </div>
          ))}
        </div>

        <button onClick={() => onSave(selectedItem)} className="btn-primary">
          {t("Save")}
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
