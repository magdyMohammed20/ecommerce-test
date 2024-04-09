"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import DropDown from "@/components/DropDown/DropDown";
import ProductCard from "@/components/ProductCard/ProductCard";
import ReelCard from "@/components/ReelCard/ReelCard";
import FavCard from "@/components/FavCard/FavCard";
import CreateListMenu from "@/components/CreateListMenu/CreateListMenu";

import {
  CategoryIcon,
  ProductIcon,
  ReelsIcon,
} from "../../../../../../public/assets/svg/searchSvgs";

const types = [
  {
    id: 1,
    name: "Products",
    value: "products",
    qty: 20,
    icon: {
      light: <ProductIcon color="white" />,
      dark: <ProductIcon color="#455560" />,
    },
  },
  {
    id: 2,
    name: "My List",
    value: "list",
    icon: {
      light: <CategoryIcon color="white" />,
      dark: <CategoryIcon color="#455560" />,
    },
  },
  {
    id: 3,
    name: "My Reels",
    value: "reels",
    icon: {
      light: <ReelsIcon color="white" />,
      dark: <ReelsIcon color="#455560" />,
    },
  },
];

const dropdown1 = {
  label: "classification",
  items: [
    {
      id: 1,
      name: "shoes",
    },
    {
      id: 2,
      name: "clothes",
    },
    {
      id: 3,
      name: "Jewelry & Watches",
    },
    {
      id: 4,
      name: "Home furnishings",
    },
    {
      id: 5,
      name: "Electronics",
    },
  ],
};

const dropdown2 = {
  label: "sort by",
  items: [
    {
      id: 1,
      name: "Recently added",
    },
    {
      id: 2,
      name: "The most popular",
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
  ],
};

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

const favorites = [
  {
    id: 1,
    name: "MyShoes",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
      "/assets/images/landingPage/product-5.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 2,
    name: "Style",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
      "/assets/images/landingPage/product-5.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 3,
    name: "Mine",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
      "/assets/images/landingPage/product-5.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 4,
    name: "WinterLook",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
      "/assets/images/landingPage/product-5.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
];

const Favorites = () => {
  const t = useTranslations();
  const [selectedType, setSelectedType] = useState<string>("list");
  const [listMenu, setListMenu] = useState<boolean>(false);

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };

  const handleListMenuChange = () => {
    setListMenu(!listMenu);
  };

  return (
    <div className="flex flex-col lg:gap-8 w-full">
      <div className="bg-white flex justify-between items-center gap-2 md:gap-8 py-3 lg:py-4 px-4 md:px-8 lg:px-6 lg:rounded-lg border-cloud border-b lg:border-0 overflow-scroll hide-scrollbar">
        <div className="flex items-center gap-2">
          {types.map((type) => (
            <div
              key={type.id}
              className={`p-1 flex items-center cursor-pointer rounded-full ${
                selectedType === type.value && "bg-cloud"
              }`}
              onClick={() => handleTypeChange(type.value)}>
              <div
                className={`p-2 rounded-full ${
                  selectedType === type.value ? "bg-primary" : "bg-cloud"
                }`}>
                {selectedType === type.value ? type.icon.light : type.icon.dark}
              </div>
              <p
                className={`mx-3 font-bold whitespace-nowrap flex items-center ${
                  selectedType !== type.value && "text-asphalt"
                }`}>
                {t(type.name)} {type.qty && <span>({type.qty})</span>}
              </p>
            </div>
          ))}
        </div>

        {selectedType === "list" && (
          <button
            className="btn-primary max-w-[137px] !hidden xl:!block"
            onClick={handleListMenuChange}>
            {t("Create a list")}
          </button>
        )}
      </div>

      {selectedType === "products" && (
        <div className="flex items-center gap-4 lg:justify-end w-full bg-white lg:bg-transparent py-2 px-4 md:px-8 lg:p-0">
          <DropDown data={dropdown1} isChecked={true} />
          <DropDown data={dropdown2} />
        </div>
      )}

      <div className="mt-6 md:mt-8 lg:mt-0">
        {selectedType === "products" && (
          <div className="flex flex-col gap-12 px-4 md:px-8 lg:px-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-28">{t("product-2")}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isAdd={true}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedType === "list" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 px-4 md:px-8 lg:px-0">
            {favorites.map((favorite) => (
              <FavCard key={favorite.id} favorite={favorite} />
            ))}
          </div>
        )}

        {selectedType === "reels" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-4 md:px-8 lg:px-0">
            {reels.map((reel) => (
              <ReelCard key={reel.id} reel={reel} />
            ))}
          </div>
        )}
      </div>

      {selectedType === "list" && (
        <button
          className="btn-primary !hidden lg:!block xl:!hidden"
          onClick={handleListMenuChange}>
          {t("Create a list")}
        </button>
      )}

      {selectedType === "list" && (
        <div className="bg-white py-6 px-4 border-t border-t-silver fixed bottom-0 lg:hidden w-full left-0 z-20">
          <button className="btn-primary" onClick={handleListMenuChange}>
            {t("Create a list")}
          </button>
        </div>
      )}

      {listMenu && <CreateListMenu onClose={handleListMenuChange} />}
    </div>

    // <EmptyLists />
  );
};

export default Favorites;
