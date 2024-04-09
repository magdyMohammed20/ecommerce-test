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

import {
  DropDownArrow,
  SettingIcon,
} from "../../../../../public/assets/svg/searchSvgs";

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
  removeItem: (name: string) => void;
}

const SerachFilter = ({ onChange, filterItems, removeItem }: Props) => {
  const t = useTranslations();
  const [selectedMenuId, setSelectedMenu] = useState<number | null>(null);
  const [data, setData] = useState(filterData);

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

  return (
    <div className="bg-white px-2 min-h-full w-full max-w-[19vw] rounded-lg hidden lg:block capitalize">
      <div className="sticky top-0">
        <div className="py-6 px-3 flex items-center gap-2 mb-4 border-b border-b-cloud">
          <SettingIcon />
          <p className="text-2xl font-bold">{t("Filter products")}</p>
        </div>

        <div className="px-4 flex flex-col text-asphalt">
          {data.map((item) => (
            <div
              key={item.id}
              className={`py-4 border-b-cloud ${
                item.id !== data[data.length - 1].id && "border-b"
              }`}>
              <div
                onClick={() => handleMenuChange(item.id)}
                className="flex items-center justify-between cursor-pointer mb-4">
                <p className="font-bold">{item.name}</p>
                <motion.span
                  animate={{ rotate: selectedMenuId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-1 bg-cloud rounded-full">
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
  );
};

export default SerachFilter;
