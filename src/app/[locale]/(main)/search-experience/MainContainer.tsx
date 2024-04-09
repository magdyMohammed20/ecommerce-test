"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import TopBar from "./TopBar";
import SerachFilter from "./SerachFilter";
import SerachedItems from "./SerachedItems";
import SerachFilterMobile from "./SearchFilterMobile";
import { FilterBtn, RankBtn } from "../../../../public/assets/svg/searchSvgs";
import SortByMenu from "./SortByMenu";

const filterData = ["products", "reels"];

const MainContainer = () => {
  const t = useTranslations();
  const [filterItems, setFilterItems] = useState<any>([]);
  const [showMobileFilter, setShowMobileFilter] = useState<boolean>(false);
  const [showSortBy, setShowSortBy] = useState<boolean>(false);
  const [searchType, setSearchType] = useState<string>("products");
  const showFilter = filterData.includes(searchType);

  const handleTypeChange = (value: string) => {
    setSearchType(value);
  };

  const handleItemChange = (item: any) => {
    let data = [...filterItems];

    if (item.categoryName !== "Price" && item.categoryName !== "Rate") {
      const index = data.findIndex(
        (filterItem) => filterItem.name === item.name
      );
      index === -1 && data.push(item);
    } else {
      const index = data.findIndex(
        (filterItem) => filterItem.categoryName === item.categoryName
      );
      index === -1 ? data.push(item) : (data[index] = item);
    }

    setFilterItems(data);
  };

  const handleRemoveAll = () => {
    setFilterItems([]);
  };

  const handleRemoveItem = (name: string) => {
    let updatedData = [...filterItems];
    if (name) {
      updatedData = updatedData.filter((item) => item.name !== name);
    } else {
      updatedData = updatedData.filter((item) => item.categoryName !== "Price");
    }

    setFilterItems(updatedData);
  };

  const handleMobileFilter = () => {
    setShowMobileFilter(!showMobileFilter);
  };

  const handleSortBy = () => {
    setShowSortBy(!showSortBy);
  };

  return (
    <div className="relative">
      <TopBar onChange={handleTypeChange} searchType={searchType} />
      <div className="py-6 lg:py-10 flex gap-6 global-padding">
        {showFilter && (
          <SerachFilter
            onChange={handleItemChange}
            filterItems={filterItems}
            removeItem={handleRemoveItem}
          />
        )}
        {showFilter && showMobileFilter && (
          <SerachFilterMobile
            onChange={handleItemChange}
            filterItems={filterItems}
            onClose={handleMobileFilter}
            removeItem={handleRemoveItem}
            removeAll={handleRemoveAll}
          />
        )}
        <SerachedItems
          filterItems={filterItems}
          removeAll={handleRemoveAll}
          removeItem={handleRemoveItem}
          searchType={searchType}
        />
      </div>
      {showFilter && (
        <div className="lg:hidden sticky z-40 bottom-0 left-0 right-0 mx-auto max-w-fit pb-1">
          <div className="bg-primary rounded-full py-5 px-8 flex items-center gap-4 text-white cursor-pointer font-bold capitalize">
            <div
              className="flex items-center gap-2 ltr:pr-4 ltr:border-r rtl:pl-4 rtl:border-l border-silver/50"
              onClick={handleSortBy}
            >
              <RankBtn />
              <p>{t("ranking")}</p>
            </div>
            <div
              className="flex items-center gap-2"
              onClick={handleMobileFilter}
            >
              <FilterBtn />
              <p>{t("filtering")}</p>
            </div>
          </div>
        </div>
      )}

      {showSortBy && <SortByMenu onClose={handleSortBy} />}
    </div>
  );
};

export default MainContainer;
