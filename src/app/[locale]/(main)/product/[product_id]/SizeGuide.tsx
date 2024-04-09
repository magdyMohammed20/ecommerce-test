import { useState } from "react";
import { useTranslations } from "next-intl";

import { ProductClose } from "../../../../../../public/assets/svg/checkoutSvg";
import { DoubleRule } from "../../../../../../public/assets/svg/product";
import DropDown from "@/components/DropDown/DropDown";
import SizesTable from "./SizesTable";

const tipsData = [
  {
    id: 1,
    name: "Shoulder",
    desc: "Measure from where the shoulder line meets the sleeve from one side to the other",
  },
  {
    id: 2,
    name: "Chest",
    desc: "Measure from the stitches under the armpit from one side to the other",
  },
  {
    id: 3,
    name: "Dress Length/Length",
    desc: "Measure from where the shoulder seam meets the collar to the cuff",
  },
  {
    id: 4,
    name: "Sleeve length",
    desc: "Measure from where the shoulder line meets from armhole to cuff",
  },
];

const sizeUnit = [
  {
    id: 1,
    name: "CM",
    value: "cm",
  },
  {
    id: 2,
    name: "INCH",
    value: "inch",
  },
];

const unitType = [
  {
    id: 1,
    name: "Upper clothes",
    value: "upper",
  },
  {
    id: 2,
    name: "Pants",
    value: "pants",
  },
];

interface Props {
  onClose: () => void;
}

const SizeGuide = ({ onClose }: Props) => {
  const t = useTranslations();
  const [selectedUnit, setSelectedUnit] = useState<string>("inch");
  const [selectedType, setSelectedType] = useState<string>("upper");

  const handleUnitChange = (value: string) => {
    setSelectedUnit(value);
  };

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };

  return (
    <div className="text-primary fixed top-0 left-0 w-full min-h-screen bg-black/60 flex justify-center items-center z-40">
      <div className="bg-cloud bottom-0 md:top-0 md:my-auto fixed h-[92%] rounded-t-2xl max-h-[1009px] md:rounded-[20px] py-6 md:py-8 w-full max-w-[961px] flex flex-col gap-6 overflow-y-scroll overflow-x-hidden hide-scrollbar">
        <div className="px-4 md:px-8">
          <div className="flex items-center justify-between pb-6 border-b border-b-silver/50">
            <p className="text-20 capitalize">{t("Size reference")}</p>
            <div className="cursor-pointer" onClick={onClose}>
              <ProductClose />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-2 px-4 md:px-8">
          <p>{t("Switch to")}:</p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 bg-white p-1 rounded-full">
              {sizeUnit.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleUnitChange(item.value)}
                  className={`py-2 px-4 rounded-full cursor-pointer ${
                    selectedUnit === item.value && "bg-primary"
                  }`}>
                  <p
                    className={`${
                      selectedUnit === item.value && "text-white"
                    }`}>
                    {item.name}
                  </p>
                </div>
              ))}
            </div>

            <DropDown
              data={{
                items: [{ id: 1, name: "Size" }],
                label: "Type",
              }}
            />
          </div>
        </div>

        <div className="px-4 md:px-8">
          <div className="flex items-center gap-1 bg-white p-1 rounded-full w-fit">
            {unitType.map((item) => (
              <div
                key={item.id}
                onClick={() => handleTypeChange(item.value)}
                className={`py-2 px-4 rounded-full cursor-pointer ${
                  selectedType === item.value && "bg-primary"
                }`}>
                <p className={`${selectedType === item.value && "text-white"}`}>
                  {t(item.name)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <SizesTable />

        <div className="px-4 md:px-8">
          <div className="bg-white rounded-xl p-8 flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <DoubleRule />
              <p className="text-20">
                {t("How to take product measurements")}:
              </p>
            </div>

            {tipsData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-3 text-xs md:text-base">
                <p className="font-bold capitalize">
                  {item.id}. {t(item.name)}
                </p>
                <p>{t(item.desc)}.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
