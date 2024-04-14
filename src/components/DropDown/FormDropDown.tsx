import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { Checkbox } from "@mui/material";

import {
  DropDownArrow,
  FilterCheckBox,
  FilterUnCheckBox,
} from "../../../public/assets/svg/searchSvgs";
import {
  CheckboxIcon,
  ProductClose,
  UnCheckboxIcon,
} from "../../../public/assets/svg/checkoutSvg";
import Menu from "./Menu";

interface Props {
  data: {
    label: string;
    items: {
      id: number;
      name: string;
      icon?: JSX.Element;
    }[];
  };
  isChecked?: boolean;
  different?: boolean;
  isRounded?: boolean;
  showSelected?: boolean;
  Icon?: React.FC;
  customStyle?: string;
  notFw?: boolean;
}

const FormDropDown = ({
  data,
  isChecked,
  different,
  isRounded,
  Icon,
  showSelected,
  customStyle,
  notFw,
}: Props) => {
  const t = useTranslations();
  const menuRef = useRef<any>(null);
  const [selectedItem, setSelectedItem] = useState<string>(data.items[0]?.name);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current.contains(e.target)) {
        handleMenuChange(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleItemChange = (value: string) => {
    setSelectedItem(value);
    handleMenuChange(false);
  };

  const handleMenuChange = (value: boolean) => {
    setOpenMenu(value);
  };

  const handleIdsChange = (id: number) => {
    const updatedData = [...selectedIds];
    if (updatedData.includes(id)) {
      const filteredData = updatedData.filter((item) => item !== id);
      setSelectedIds(filteredData);
    } else {
      updatedData.push(id);
      setSelectedIds(updatedData);
    }
  };

  return (
    <div
      ref={menuRef}
      className={`relative text-asphalt text-sm capitalize w-full    `}>
      <div
        onClick={() => handleMenuChange(!openMenu)}
        className={`w-full cursor-pointer flex items-center justify-between justify-between lg:gap-8`}>
        <p className="flex items-center">
          {Icon && <Icon />}

          <span
            className={`font-bold ${!isRounded && "hidden"}  md:block ${
              !isRounded && "mx-2"
            }`}>
            {t(selectedItem)}
          </span>

          <span
            className={`font-bold  ${showSelected ? "flex" : "hidden"}  ${
              showSelected && ""
            }`}>
            {t(selectedItem)}
          </span>
        </p>

        {!isRounded && (
          <motion.span
            animate={{ rotate: openMenu ? 180 : 0 }}
            transition={{ duration: 0.5 }}>
            <DropDownArrow />
          </motion.span>
        )}
      </div>

      {openMenu &&
        (isChecked ? (
          <div
            className={`absolute bg-white px-2 py-4 md:flex flex-col gap-1 w-full min-w-[261px] left-0 z-40 shadow-xl rounded-xl top-14 hidden ${
              isRounded && "h-[200px] lg:h-[300px] overflow-y-scroll"
            }`}>
            {data.items.map((item) => (
              <div
                key={item.id}
                onClick={() => handleIdsChange(item.id)}
                className="flex items-center justify-between px-2 py-3 rounded-lg w-full cursor-pointer">
                <div className="flex items-center gap-4">
                  <p>{item.icon}</p>
                  <p
                    className={`${
                      selectedIds.includes(item.id) && "font-bold text-primary"
                    }`}>
                    {t(item.name)}{" "}
                    <span className="text-xs text-asphalt/40">(288)</span>
                  </p>
                </div>
                <Checkbox
                  checked={selectedIds.includes(item.id) ? true : false}
                  className="!p-0"
                  icon={<FilterUnCheckBox />}
                  checkedIcon={<FilterCheckBox />}
                />
              </div>
            ))}
          </div>
        ) : (
          <Menu
            items={data.items}
            isRounded={isRounded}
            className="hidden"
            onChange={(name) => handleItemChange(name)}
          />
        ))}

      {openMenu && (
        <div className="bg-black/60 fixed top-0 left-0 w-full min-h-screen  md:hidden z-[999]">
          <div className="bg-cloud bottom-0 w-full fixed rounded-t-2xl py-6 px-4 flex flex-col gap-6">
            <div className="flex items-center justify-between pb-6 border-b border-silver/50">
              <p className="font-bold text-primary text-base">
                {t(data.label)}
              </p>
              <div
                className="cursor-pointer"
                onClick={() => handleMenuChange(false)}>
                <ProductClose />
              </div>
            </div>

            <div className="bg-white rounded-xl w-full">
              {data.items.map((item, index) =>
                isChecked ? (
                  <div
                    key={item.id}
                    className={`p-4 flex items-center justify-between border-cloud cursor-pointer ${
                      index !== data.items.length - 1 && "border-b"
                    }`}
                    onClick={() => handleIdsChange(item.id)}>
                    <p
                      className={`${
                        selectedIds.includes(item.id) &&
                        "text-primary font-bold text-sm"
                      }`}>
                      {t(item.name)}
                    </p>
                    <Checkbox
                      checked={selectedIds.includes(item.id) ? true : false}
                      className="!p-0"
                      icon={<FilterUnCheckBox />}
                      checkedIcon={<FilterCheckBox />}
                    />
                  </div>
                ) : (
                  <div
                    key={item.id}
                    className={`${
                      isRounded ? "p-2" : "p-4"
                    } flex items-center justify-between border-cloud cursor-pointer ${
                      index !== data.items.length - 1 && "border-b"
                    }`}
                    onClick={() => handleItemChange(item.name)}>
                    <p
                      className={`${
                        selectedItem === item.name &&
                        "text-primary font-bold text-sm"
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
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormDropDown;
