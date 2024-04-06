"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import SearchContainer from "./SearchContainer";
import ReelCard from "@/components/ReelCard/ReelCard";
import SerachFilter from "../search-experience/SerachFilter";
import ProductCard from "@/components/ProductCard/ProductCard";
import SerachFilterMobile from "../search-experience/SearchFilterMobile";

import { FilterBtn, RankBtn } from "../../../../public/assets/svg/searchSvgs";
import PagePagination from "@/components/PagePagination/PagePagination";
import SortByMenu from "../search-experience/SortByMenu";
import ReviewCard from "./ReviewCard";

const products = [
  {
    id: 1,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 2,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 3,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 4,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 5,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 6,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },

  {
    id: 7,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 8,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 9,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
];

const reels = [
  {
    id: 1,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 2,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 3,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 4,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 5,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 6,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 7,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 8,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 9,
    video: "/assets/videos/video1.mp4",
  },
];

const MainContainer = () => {
  const t = useTranslations();
  const [filterItems, setFilterItems] = useState<any>([]);
  const [showMobileFilter, setShowMobileFilter] = useState<boolean>(false);
  const [searchType, setSearchType] = useState<string>("products");
  const [showSortBy, setShowSortBy] = useState<boolean>(false);

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
    <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 relative">
      <SearchContainer onChange={handleTypeChange} searchType={searchType} />

      <div className="flex gap-4 global-padding pb-6 md:pb-8 lg:pb-20">
        <SerachFilter
          onChange={handleItemChange}
          filterItems={filterItems}
          removeItem={handleRemoveItem}
        />
        <div className="flex flex-col gap-6 w-full">
          {searchType === "products" && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {searchType === "reels" && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
              {reels.map((reel) => (
                <ReelCard key={reel.id} reel={reel} />
              ))}
            </div>
          )}

          {searchType === "reviews" && 
          <div className="grid gap-6 w-full">
            <ReviewCard />
          </div>
          }

          <PagePagination />
        </div>
      </div>

      <div className="lg:hidden sticky z-40 bottom-0 left-0 right-0 mx-auto max-w-fit pb-1">
        <div className="bg-primary rounded-full py-5 px-8 flex items-center gap-4 text-white cursor-pointer font-bold capitalize">
          <div
            className="flex items-center gap-2 ltr:pr-4 ltr:border-r rtl:pl-4 rtl:border-l border-silver/50"
            onClick={handleSortBy}
          >
            <RankBtn />
            <p>{t("ranking")}</p>
          </div>
          <div className="flex items-center gap-2" onClick={handleMobileFilter}>
            <FilterBtn />
            <p>{t("filtering")}</p>
          </div>
        </div>
      </div>

      {showMobileFilter && (
        <SerachFilterMobile
          onChange={handleItemChange}
          filterItems={filterItems}
          onClose={handleMobileFilter}
          removeItem={handleRemoveItem}
          removeAll={handleRemoveAll}
        />
      )}
      {showSortBy && <SortByMenu onClose={handleSortBy} />}
    </div>
  );
};

export default MainContainer;
