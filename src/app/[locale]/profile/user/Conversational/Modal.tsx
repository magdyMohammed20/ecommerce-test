import { Checkbox } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  FilterUnCheckBox,
  FilterCheckBox,
} from "../../../../../../public/assets/svg/searchSvgs";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "This text is an example of text that can be replaced",
    price: 120.99,
    image: "/assets/images/product/product-1.png",
  },
  {
    id: 2,
    name: "This text is an example of text that can be replaced",
    price: 120.99,
    image: "/assets/images/product/product-1.png",
  },
  {
    id: 3,
    name: "This text is an example of text that can be replaced",
    price: 120.99,
    image: "/assets/images/product/product-1.png",
  },
];

interface Props {
  onSave: () => void;
}

const Modal = ({ onSave }: Props) => {
  const t = useTranslations();

  return (
    <motion.div
      className="absolute bottom-0 inset-x-0 py-6 px-4 w-full custome-shadow2 bg-white rounded-[20px] 
    max-h-[474px] h-fit overflow-scroll hide-scrollbar"
    >
      <div className="flex flex-col gap-6">
        <p className="font-bold">
          {t("The product you would like to return!")}
        </p>

        <div className="flex flex-col gap-4">
          {products.map((item, index) => (
            <div
              key={item.id}
              onClick={onSave}
              className={`flex items-start justify-between gap-4 border-cloud cursor-pointer ${
                index !== products.length - 1 && "pb-4 border-b"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                    alt="product"
                    src={item.image}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between h-full gap-1">
                  <p className="text-asphalt text-xs line-clamp-1">
                    {t(item.name)}
                  </p>
                  <div className="flex items-center gap-4 text-asphalt text-xs">
                    <div className="py-1 px-2 flex items-center gap-1 rounded-full bg-cloud w-fit">
                      <p className="w-[10px] h-[10px] rounded-full bg-[#8F7D7A]" />
                      <p>{t("brown")}</p>
                      <p className="text-silver">/</p>
                      <p>xs</p>
                    </div>
                    <p>1x</p>
                  </div>
                  <p className="font-bold text-sm">
                    {item.price} {t("SAR")}
                  </p>
                </div>
              </div>

              <Checkbox
                onClick={onSave}
                className="!p-0"
                icon={<FilterUnCheckBox />}
                checkedIcon={<FilterCheckBox />}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
