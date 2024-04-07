import { useTranslations } from "next-intl";
import React from "react";

interface Props {
  selectedType: string;
  types: Array<{ id: number; value: string; name: string }>;
  handleTypeChange: any;
}
const Tabs: React.FC<Props> = ({ selectedType, types, handleTypeChange }) => {
  const t = useTranslations();
  return (
    <div className="flex items-center gap-4 ">
      {types.map((type) => (
        <div
          key={type.id}
          className={`cursor-pointer   rounded-full py-2 px-4 ${
            selectedType === type.value
              ? "bg-primary text-white "
              : "bg-[#D9DCE1B2]"
          }`}
          onClick={() => handleTypeChange(type.value)}>
          <p
            className={` font-bold  whitespace-nowrap text-[14px] flex items-center ${
              selectedType !== type.value && "text-asphalt "
            }`}>
            {t(type.name)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
