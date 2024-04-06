"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { filterData } from "./SearchFilterData";
import NormalFilter from "@/components/SearchFilterComponents/NormalFilter";
import SizeFilter from "@/components/SearchFilterComponents/SizeFilter";
import PriceFilter from "@/components/SearchFilterComponents/PriceFilter";
import RateFilter from "@/components/SearchFilterComponents/RateFilter";
import ColorFilter from "@/components/SearchFilterComponents/ColorFilter";
import StarRate from "@/components/StarRate/StarRate";

import { Checkbox } from "@mui/material";


import {
  CloseFilter,
  DeleteFilterIcon,
  DropDownArrow,
  SettingIcon,
} from "../../../../public/assets/svg/searchSvgs";
import {
  UnCheckboxIcon,
  CheckboxIcon,
} from "../../../../public/assets/svg/checkoutSvg";

const items = [
  {
    id: 1,
    name: "Products only",
  },
  {
    id: 2,
    name: "Reels only",
  },
];

interface FilterItems {
  name: string;
  categoryName: string;
  color: string;
  min: number;
  max: number;
}

interface Props {
  onChange: (selectedFilter: any) => void;
  filterItems: FilterItems[];
  onClose: () => void;
  removeItem: (name: string) => void;
  removeAll: () => void;
}

const SerachFilterMobile = ({
  onChange,
  filterItems,
  onClose,
  removeItem,
  removeAll,
}: Props) => {
  const t = useTranslations();
  const [selectedMenuId, setSelectedMenu] = useState<number | null>(null);
  const [openOffer, setOpenOffer] = useState<boolean>(false);
  const [data, setData] = useState(filterData);
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleItemChange = (value: string) => {
    setSelectedItem(value);
  };

  const handleMenuChange = (id: number) => {
    id === selectedMenuId ? setSelectedMenu(null) : setSelectedMenu(id);
  };

  const handleChange = (filterData: any, selectedItem: any) => {
    const updatedData = data.map((item) => {
      if (item.id === filterData.id) {
        return filterData;
      }
      return item;
    });

    onChange({ ...selectedItem, categoryName: filterData.name });
    setData(updatedData);
  };

  const handleOpenOffer = () => {
    setOpenOffer(!openOffer);
  };

  return (
    <div className="fixed top-0 left-0 bg-black/60 w-full min-h-screen z-50 lg:hidden">
      <div className="fixed bg-cloud top-0 min-h-screen overflow-scroll h-full hide-scrollbar z-50 w-full flex flex-col gap-6 rtl:right-0 ltr:left-0 max-w-[374px] md:max-w-[576px]">
        <div className="flex items-center justify-between bg-white p-6 md:p-8">
          <div className="flex items-center gap-2">
            <SettingIcon />
            <p className="text-2xl font-bold">{t("Filter products")}</p>
          </div>
          <div className="cursor-pointer" onClick={onClose}>
            <CloseFilter />
          </div>
        </div>

        {/* filtered items */}
        <div className="flex items-center flex-wrap gap-[6px]">
          {filterItems.map((item, index) => (
            <div
              key={index}
              className="bg-asphalt/10 rounded-full py-1 px-2 rtl:pr-3 ltr:pl-3 flex items-center gap-2 text-primary text-sm"
            >
              {item.categoryName === "Price" ? (
                <p className="opacity-70">
                  {item.min} {t("SAR")} - {item.max} {t("SAR")}
                </p>
              ) : item.categoryName === "Rate" ? (
                <StarRate rate={parseInt(item.name)} starSize={14} />
              ) : item.categoryName === "Size" ? (
                <p className="opacity-70">
                  {t("Size")} {item.name}
                </p>
              ) : item.categoryName === "Color" ? (
                <div className="flex items-center gap-2">
                  <div
                    className="rounded-full w-3 h-3"
                    style={{ background: item.color }}
                  ></div>
                  <p className="opacity-70">{item.name}</p>
                </div>
              ) : (
                <p className="opacity-70">{item.name}</p>
              )}
              <div
                className="cursor-pointer"
                onClick={() => removeItem(item.name)}
              >
                <DeleteFilterIcon />
              </div>
            </div>
          ))}

          {filterItems.length > 0 && (
            <p
              className="font-bold text-sm text-primary cursor-pointer"
              onClick={removeAll}
            >
              {t("Remove All")}
            </p>
          )}
        </div>

        <div className="px-1 md:px-8 pb-8">
          <div className="px-4 md:px-6 py-2 bg-white rounded-xl flex flex-col text-asphalt">
            <div className="py-4 border-b-cloud">
              <div
                onClick={handleOpenOffer}
                className="flex items-center justify-between cursor-pointer mb-4"
              >
                <p className="font-bold">{t("offer")}</p>
                <motion.span
                  animate={{ rotate: openOffer ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-1 bg-cloud rounded-full"
                >
                  <DropDownArrow />
                </motion.span>
              </div>

              {openOffer && (
                <div className="flex flex-col gap-2">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleItemChange(item.name)}
                      className="flex items-center justify-between cursor-pointer py-2"
                    >
                      <p className="text-primary font-bold text-sm">
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
              )}
            </div>

            {data.map((item) => (
              <div
                key={item.id}
                className={`py-4 border-b-cloud ${
                  item.id !== data[data.length - 1].id && "border-b"
                }`}
              >
                <div
                  onClick={() => handleMenuChange(item.id)}
                  className="flex items-center justify-between cursor-pointer mb-4"
                >
                  <p className="font-bold">{item.name}</p>
                  <motion.span
                    animate={{ rotate: selectedMenuId === item.id ? 180 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-1 bg-cloud rounded-full"
                  >
                    <DropDownArrow />
                  </motion.span>
                </div>

                {selectedMenuId === item.id &&
                  (item.name === "Size" ? (
                    <SizeFilter
                      filterData={item}
                      onChange={handleChange}
                      filterItems={filterItems}
                      removeItem={removeItem}
                    />
                  ) : item.name === "Price" ? (
                    <PriceFilter
                      filterData={item}
                      onChange={handleChange}
                      filterItems={filterItems}
                    />
                  ) : item.name === "Rate" ? (
                    <RateFilter
                      filterData={item}
                      onChange={handleChange}
                      filterItems={filterItems}
                    />
                  ) : item.name === "Color" ? (
                    <ColorFilter
                      filterData={item}
                      onChange={handleChange}
                      filterItems={filterItems}
                      removeItem={removeItem}
                    />
                  ) : (
                    <NormalFilter
                      filterData={item}
                      onChange={handleChange}
                      filterItems={filterItems}
                      removeItem={removeItem}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerachFilterMobile;
