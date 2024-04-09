"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";

import Checkbox from "@mui/material/Checkbox";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

import {
  AddBtn,
  ArrowDown,
  LoveIcon,
  MinusBtn,
} from "../../../../../public/assets/svg/cart";
import {
  FilterCheckBox,
  FilterUnCheckBox,
} from "../../../../../public/assets/svg/searchSvgs";

const data = [
  {
    id: 1,
    name: "Carina Street..",
    image: "/assets/images/cart/product.png",
    price: 120.99,
    size: "xs",
    qty: 1,
    checked: false,
    color: {
      name: "Brown",
      code: "#8F7D7A",
    },
  },
  {
    id: 2,
    name: "Carina Street..",
    image: "/assets/images/cart/product.png",
    price: 120.99,
    size: "xs",
    qty: 1,
    checked: false,
    color: {
      name: "Brown",
      code: "#8F7D7A",
    },
  },
  {
    id: 3,
    name: "Carina Street..",
    image: "/assets/images/cart/product.png",
    price: 120.99,
    size: "xs",
    qty: 1,
    checked: false,
    color: {
      name: "Brown",
      code: "#8F7D7A",
    },
  },
];

const CartProducts = () => {
  const t = useTranslations();
  const [cartData, setCartData] = useState(data);
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [selectAllProducts, setSelectAllProducts] = useState<boolean>(false);

  const handleSelectAllProducts = () => {
    setCartData((prevState) =>
      prevState.map((item) => {
        return { ...item, checked: !selectAllProducts };
      })
    );
    setSelectAllProducts((prevState) => !prevState);
  };

  const handleSelectProduct = (id: number) => {
    setCartData((prevState) =>
      prevState.map((product) => {
        if (product.id === id) {
          return { ...product, checked: !product.checked };
        }
        return product;
      })
    );
  };

  const handleIncrement = (id: number) => {
    setCartData((prevState) =>
      prevState.map((product) => {
        if (product.id === id) {
          return { ...product, qty: product.qty + 1 };
        }
        return product;
      })
    );
  };

  const handleDecrement = (id: number) => {
    setCartData((prevState) =>
      prevState.map((product) => {
        if (product.id === id && product.qty > 1) {
          return { ...product, qty: product.qty - 1 };
        }
        return product;
      })
    );
  };

  const handleOpenDetails = () => {
    setOpenDetails(!openDetails);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="bg-white p-4 md:p-6 flex items-center gap-1 md:gap-4 rounded-xl">
        <Checkbox
          className="!p-0"
          icon={<FilterUnCheckBox />}
          checkedIcon={<FilterCheckBox />}
          checked={selectAllProducts}
          onChange={handleSelectAllProducts}
        />
        <p className="text-[20px] font-bold">{t("All Products")}</p>
      </div>

      <div className="bg-white p-4 md:p-6 flex flex-col gap-4 rounded-xl">
        {cartData.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-start gap-1 md:gap-4 border-asphalt/10 h-full ${
              index !== cartData.length - 1 && "pb-4 border-b "
            }`}>
            <Checkbox
              checked={item.checked}
              className="!p-0"
              icon={<FilterUnCheckBox />}
              checkedIcon={<FilterCheckBox />}
              onChange={() => handleSelectProduct(item.id)}
            />

            <div className="flex w-full gap-3 md:gap-4 h-[90px] md:h-[121px]">
              <div
                onClick={handleOpenDetails}
                className="min-w-[80px] md:min-w-[109px] rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={item.image}
                  alt="product"
                  width={109}
                  height={121}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full flex flex-col">
                <div className="flex justify-between w-full">
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-xs md:text-sm">{item.name}</p>
                    <div className="flex items-center gap-2 p-1 w-fit rounded-full bg-cloud">
                      <div className="flex items-center gap-1 text-asphalt text-xs lg:text-sm">
                        <p
                          className="w-[18px] h-[18px] rounded-full"
                          style={{ background: item.color.code }}></p>
                        <p>{item.color.name}</p>
                        <p className="text-silver">/</p>
                        <p>{item.size}</p>
                      </div>
                      <ArrowDown />
                    </div>
                  </div>
                  <div className="md:bg-cloud md:p-3 cursor-pointer rounded-full h-fit">
                    <LoveIcon />
                  </div>
                </div>
                <div className="flex justify-between items-end w-full h-full">
                  <p className="text-sm md:text-lg font-bold">
                    {item.price} {t("SAR")}
                  </p>
                  <div className="px-2 py-2 bg-cloud flex items-center gap-1 md:gap-3 rounded-full text-asphalt overflow-hidden">
                    <p
                      className="cursor-pointer"
                      onClick={() => handleDecrement(item.id)}>
                      <MinusBtn />
                    </p>
                    <p className="px-2 md:px-3 border border-silver/50 border-b-0 border-t-0">
                      {item.qty}
                    </p>
                    <p
                      className="cursor-pointer"
                      onClick={() => handleIncrement(item.id)}>
                      <AddBtn />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openDetails && (
        <ProductDetails onClose={handleOpenDetails} isCart={true} />
      )}
    </div>
  );
};

export default CartProducts;
