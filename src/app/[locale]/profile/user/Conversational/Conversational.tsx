import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

import Modal from "./Modal";

import {
  EditIcon,
  SLetterSvg,
} from "../../../../../../public/assets/svg/orders";
import { ReelCloseIcon } from "../../../../../../public/assets/svg/marketingRequests";
import { ProductClose } from "../../../../../../public/assets/svg/checkoutSvg";
import Image from "next/image";

interface Props {
  onClose: () => void;
}

const Conversational = ({ onClose }: Props) => {
  const t = useTranslations();
  const listRef = useRef<any>(null);
  const [counter, setCounter] = useState<number>(0);
  const [showProductMenu, setShowProductMenu] = useState<boolean>(false);
  const [showReturnMenu, setShowReturnMenu] = useState<boolean>(false);

  useEffect(() => {
    if(counter === 2){
      setTimeout(() => {
        setShowReturnMenu(true);
      }, 3000);
    }

    listRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
  }, [counter]);

  useEffect(() => {
    setTimeout(() => {
      handleProductMenu();
    }, 3000);
  }, []);

  const handleAddClick = () => {
    setCounter(counter + 1);
  };

  const handleProductMenu = () => {
    setShowProductMenu(!showProductMenu);
    handleAddClick();
  };

  return (
    <div className="md:p-5 fixed inset-0 w-full min-h-screen bg-black/20 z-50">
      <div className="w-full h-full flex flex-col gap-[10px] justify-end">
        <div className="flex flex-col w-full md:max-w-[430px] h-full md:h-[90%] md:max-h-[728px] md:rounded-[20px] bg-cloud overflow-hidden relative">
          <div className="p-6 flex items-center justify-between bg-white md:bg-primary shadow-sm">
            <p className="flex items-center gap-2 md:text-white font-bold">
              {t("Return a product")}
              <span className="font-normal text-xs">
                ( {t("Order number")} 92839# )
              </span>
            </p>
            <span className="cursor-pointer" onClick={onClose}>
              <span className="hidden md:block">
                <ReelCloseIcon />
              </span>
              <span className="md:hidden">
                <ProductClose />
              </span>
            </span>
          </div>

          <div
            ref={listRef}
            className="px-6 pb-4 flex flex-col gap-6 overflow-scroll h-[384px] w-full hide-scrollbar"
          >
            <div className="mt-4 flex flex-col gap-2">
              <div className="py-3 px-4 rounded-2xl bg-silver/70 w-fit drop-filter">
                <p>{t("Welcome Ahlam")} 👋</p>
                <p>{t("I'm here to help you return products")}</p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
                className="py-2 px-4 rounded-full bg-silver/70 w-fit drop-filter"
              >
                <p>{t("Select the product you would like to return")}</p>
              </motion.div>
            </div>

            {counter === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
                className="flex justify-end"
              >
                <div className="py-3 px-4 rounded-2xl bg-white w-fit flex items-center gap-10">
                  <div className="flex items-center gap-2">
                    <Image
                      alt="product"
                      src="/assets/images/product/product-1.png"
                      width={36}
                      height={36}
                      className="w-9 h-9 rounded"
                    />
                    <p className="text-sm w-[170px]">
                      {t(
                        "This text is an example of text that can be replaced"
                      )}
                      ..
                    </p>
                  </div>
                  <span className="cursor-pointer">
                    <EditIcon />
                  </span>
                </div>
              </motion.div>
            )}

            {counter === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 5 }}
                className="py-2 px-4 rounded-full bg-silver/70 w-fit drop-filter"
              >
                <p>{t("Thank you, but why would you want to return it?")} 🤔</p>
              </motion.div>
            )}
          </div>

          {showProductMenu && <Modal onSave={handleProductMenu} />}
        </div>

        <p className="w-[50px] h-[50px] rounded-full bg-primary hidden md:flex items-center justify-center">
          <SLetterSvg />
        </p>
      </div>
    </div>
  );
};

export default Conversational;
