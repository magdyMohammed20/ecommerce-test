"use client";

import { useTranslations } from "next-intl";

import GoBackLink from "./GoBackLink";
import DropDown from "@/components/DropDown/DropDown";
import ProductCard from "@/components/ProductCard/ProductCard";
import PagePagination from "@/components/PagePagination/PagePagination";

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

const dropdown1 = {
  label: "offer",
  items: [
    {
      id: 1,
      name: "Products only",
    },
    {
      id: 2,
      name: "Reels only",
    },
  ],
};

const dropdown2 = {
  label: "sort by",
  items: [
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
  ],
};

const Products = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-4 lg:gap-6 px-4 md:px-8 lg:px-0">
      <GoBackLink title="Products" /> 

      <div className="flex justify-between items-center">
        <p className="text-16 font-bold">{t("December 13 - December 19")}</p>
        <div className="flex items-center gap-4">
          <DropDown data={dropdown1} />
          <DropDown data={dropdown2} />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} isStats />
        ))}
      </div>

      <PagePagination />
    </div>
  );
};

export default Products;
