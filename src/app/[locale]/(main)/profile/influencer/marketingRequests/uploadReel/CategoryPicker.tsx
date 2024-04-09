import { useState } from "react";
import { useTranslations } from "next-intl";

import { ProductClose } from "../../../../../../../../public/assets/svg/checkoutSvg";
import { WarningSvg } from "../../../../../../../../public/assets/svg/marketingRequests";
import { ArrowDown20 } from "../../../../../../../../public/assets/svg/profile";

const categories = [
  {
    id: 1,
    name: "💃 Fashion and beauty",
    subCategories: [
      {
        id: 1,
        name: "shoes",
      },
      {
        id: 2,
        name: "fancy dress",
      },
    ],
  },
  {
    id: 2,
    name: "👟 shoes",
    subCategories: [
      {
        id: 1,
        name: "Home shoes",
      },
      {
        id: 2,
        name: "Occasion shoes",
      },
    ],
  },
];

interface Props {
  onClose: () => void;
  onChange: (name: string) => void;
  selectedCategories: string[];
}

const CategoryPicker = ({ onClose, onChange, selectedCategories }: Props) => {
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleCategoryOpen = (id: number) => {
    selectedCategory === id
      ? setSelectedCategory(null)
      : setSelectedCategory(id);
  };

  return (
    <div className="text-primary fixed top-0 left-0 w-full min-h-screen bg-black/60 flex justify-center items-center z-40">
      <div className="bg-cloud bottom-0 md:top-0 md:my-auto fixed h-fit max-h-[92%] rounded-t-2xl md:rounded-[20px] p-5 md:p-8 w-full max-w-[660px] flex flex-col gap-6 overflow-scroll hide-scrollbar">
        <div className="flex items-center justify-between pb-6 border-b border-b-silver/50">
          <p className="text-20">{t("Add categories")}</p>
          <div className="cursor-pointer" onClick={onClose}>
            <ProductClose />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <WarningSvg />
            <p className="text-asphalt text-sm">
              {t(
                "Select up to 3 categories to help match your Rails video to the right viewers"
              )}
              .
            </p>
          </div>

          {categories.map((item) => (
            <div
              key={item.id}
              className="p-4 md:p-6 flex flex-col gap-4 rounded-12 bg-white">
              <div
                onClick={() => handleCategoryOpen(item.id)}
                className="flex items-center justify-between cursor-pointer">
                <p className="font-bold">{t(item.name)}</p>
                <span
                  className={`${selectedCategory === item.id && "rotate-180"}`}>
                  <ArrowDown20 />
                </span>
              </div>

              {selectedCategory === item.id && (
                <div className="pt-4 border-t border-cloud flex flex-wrap items-center gap-2">
                  {item.subCategories.map((subCat) => (
                    <div
                      key={subCat.id}
                      onClick={() => onChange(subCat.name)}
                      className={`py-2 px-4 rounded-full text-xs md:text-sm cursor-pointer
                  ${
                    selectedCategories.includes(subCat.name)
                      ? "bg-primary text-white font-bold"
                      : "bg-cloud text-asphalt"
                  }`}>
                      {t(subCat.name)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-silver/50">
          <button onClick={onClose} className="btn-primary">
            {t("Save")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPicker;
