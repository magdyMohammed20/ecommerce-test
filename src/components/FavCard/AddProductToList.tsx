import { SetStateAction, useState } from "react";
import { useTranslations } from "next-intl";

import ProductCardCheck from "../ProductCard/ProductCardCheck";

import { Checkbox } from "@mui/material";

import { ProductClose } from "../../../public/assets/svg/checkoutSvg";
import {
  FilterCheckBox,
  FilterUnCheckBox,
} from "../../../public/assets/svg/searchSvgs";

interface Props {
  onClose: () => void;
}

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
];

const AddProductToList = ({ onClose }: Props) => {
  const t = useTranslations();
  const [addAll, setAddAll] = useState<boolean>(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleAddAllChange = () => {
    const data: SetStateAction<number[]> = [];
    if (!addAll) {
      products.map((product) => data.push(product.id));
    }

    setSelectedIds(data);
    setAddAll(!addAll);
  };

  const handleAddProduct = (id: number) => {
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
    <div className="text-primary fixed top-0 left-0 w-full min-h-screen bg-black/60 flex justify-center items-center z-40">
      <div className="bg-cloud bottom-0 md:top-0 md:my-auto fixed h-[92%] max-h-[890px] rounded-t-2xl md:rounded-[20px] p-5 md:p-8 w-full md:max-w-[660px] flex flex-col gap-6 overflow-scroll hide-scrollbar">
        <div className="flex items-center justify-between pb-6 border-b border-b-silver/50">
          <p className="text-20">{t("Your favorite products")}</p>
          <div className="cursor-pointer" onClick={onClose}>
            <ProductClose />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-6 border-b border-b-silver/50 max-h-[644px] overflow-scroll hide-scrollbar">
          {products.map((product) => (
            <ProductCardCheck
              key={product.id}
              product={product}
              selectedIds={selectedIds}
              onChange={handleAddProduct}
            />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleAddAllChange}
          >
            <Checkbox
              checked={addAll}
              className="!p-0"
              icon={<FilterUnCheckBox />}
              checkedIcon={<FilterCheckBox />}
            />
            <p className="font-bold">{t("Choose All")}</p>
          </div>
          <button className="btn-primary max-w-[305px]">
            {t("Add to list")} (2)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductToList;
