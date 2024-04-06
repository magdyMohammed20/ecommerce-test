"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

import Link from "next/link";
import Image from "next/image";

import DropDown from "@/components/DropDown/DropDown";
import FavCardMenu from "@/components/FavCard/FavCardMenu";
import ProductCard from "@/components/ProductCard/ProductCard";

import { FavMenu } from "../../../../../public/assets/svg/profile";
import {
  AddList,
  Arrow24,
} from "../../../../../public/assets/svg/categoryBarSvgs";
import AddProductToList from "@/components/FavCard/AddProductToList";
import RemoveModal from "@/components/RemoveModal/RemoveModal";
import AddFriendMenu from "@/components/AddFriendMenu/AddFriendMenu";
import EditList from "@/components/FavCard/EditList";

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

const SelectedList = () => {
  const t = useTranslations();
  const menuRef = useRef<any>(null);
  const [favMenu, setFavMenu] = useState<boolean>(false);
  const [addProduct, setAddProduct] = useState<boolean>(false);
  const [removeList, setRemoveList] = useState<boolean>(false);
  const [editList, setEditList] = useState<boolean>(false);
  const [addFriend, setAddFriend] = useState<boolean>(false);

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current.contains(e.target) && favMenu) {
        handleFavMenuChange();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleFavMenuChange = () => {
    setFavMenu(!favMenu);
  };

  const handleAddMenuChange = () => {
    setAddProduct(!addProduct);
  };

  const handleRemoveListChange = () => {
    setRemoveList(!removeList);
  };

  const handleEditListChange = () => {
    setEditList(!editList);
  };

  const handleAddFriendChange = () => {
    setAddFriend(!addFriend);
  };

  const handleSelectMenu = (value: string) => {
    if (value === "delete") {
      handleRemoveListChange();
    } else if (value === "add") {
      handleAddFriendChange();
    } else if (value === "edit") {
      handleEditListChange();
    }
    handleFavMenuChange();
  };

  return (
    <div className="flex flex-col lg:gap-8 w-full">
      <div className="bg-white md:px-8 p-4 lg:p-6 flex items-center justify-between lg:rounded-lg border-b border-b-cloud">
        <Link
          href="/profile?tab=favorites"
          className="flex items-center gap-2">
          <span className="lg:hidden ltr:rotate-180">
            <Arrow24 />
          </span>
          <p className="text-20">Mine</p>
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1 rtl:ml-3 ltr:mr-3">
            <p className="text-asphalt text-14 hidden md:block">{t("Share")}</p>
            <div className="flex items-center">
              <div className="z-10 w-8 h-8 rounded-full border border-cloud">
                <Image
                  src="/assets/images/hero/icon-1.png"
                  alt="follower"
                  width={40}
                  height={40}
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="-mx-3 w-8 h-8 rounded-full border border-cloud">
                <Image
                  src="/assets/images/hero/icon-2.png"
                  alt="follower"
                  width={40}
                  height={40}
                  className="w-full h-full rounded-full"
                />
              </div>
            </div>
          </div>

          <button
            className="btn-primary !py-2 !w-fit !hidden md:!block"
            onClick={handleAddMenuChange}>
            {t("Add to list")}
          </button>
          <span
            className="bg-primary rounded-full p-2 cursor-pointer md:hidden"
            onClick={handleAddMenuChange}>
            <AddList />
          </span>
          <div ref={menuRef} className="cursor-pointer relative">
            <span onClick={handleFavMenuChange}>
              <FavMenu />
            </span>
            {favMenu && <FavCardMenu onSelect={handleSelectMenu} />}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex items-center justify-between w-full">
          <p className="w-fit hidden lg:block whitespace-nowrap">
            (105 {t("items")})
          </p>

          <div className="flex items-center justify-end gap-4 w-full bg-white lg:bg-transparent py-2 px-4 md:px-8 lg:p-0">
            <DropDown data={dropdown1} isChecked={true} />
            <DropDown data={dropdown2} />
          </div>
        </div>
        <div className="flex flex-col gap-12 px-4 md:px-8 lg:px-0">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-28">{t("product-1")}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} isAdd={true} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {addProduct && <AddProductToList onClose={handleAddMenuChange} />}
      {editList && <EditList onClose={handleEditListChange} />}
      {addFriend && <AddFriendMenu onClose={handleAddFriendChange} />}
      {removeList && (
        <RemoveModal
          title="List"
          listName="MyShoes"
          onClose={handleRemoveListChange}
          onSave={handleRemoveListChange}
        />
      )}
    </div>
  );
};

export default SelectedList;
