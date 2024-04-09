import { useTranslations } from "next-intl";

import Items from "./Items";
import DropDown from "@/components/DropDown/DropDown";
import StarRate from "@/components/StarRate/StarRate";
import PagePagination from "@/components/PagePagination/PagePagination";

import {
  DeleteFilterIcon,
  FilterArrowDown,
  FilterArrowUp,
  FilterFLash,
  FilterFire,
  FilterStar,
  ProductIcon,
  ReelsIcon,
} from "../../../../public/assets/svg/searchSvgs";

const dropdown1 = {
  label: "offer",
  items: [
    {
      id: 1,
      name: "Products only",
      icon: <ProductIcon color="#455560" />,
    },
    {
      id: 2,
      name: "Reels only",
      icon: <ReelsIcon color="#455560" />,
    },
  ],
};

const dropdown2 = {
  label: "sort by",
  items: [
    {
      id: 1,
      name: "The popular",
      icon: <FilterFire />,
    },
    {
      id: 2,
      name: "recently arrived",
      icon: <FilterFLash />,
    },
    {
      id: 3,
      name: "The highest price",
      icon: <FilterArrowUp />,
    },
    {
      id: 4,
      name: "Lowest price",
      icon: <FilterArrowDown />,
    },
    {
      id: 5,
      name: "Best rated",
      icon: <FilterStar />,
    },
  ],
};

interface FilterItems {
  name: string;
  categoryName: string;
  color: string;
  min: number;
  max: number;
}

interface Props {
  searchType: string;
  filterItems: FilterItems[];
  removeAll: () => void;
  removeItem: (name: string) => void;
}

const filterData = ["products", "reels", "influencers"];

const SerachedItems = ({
  filterItems,
  removeAll,
  removeItem,
  searchType,
}: Props) => {
  const t = useTranslations();
  const showFilter = filterData.includes(searchType);

  return (
    <div className="w-full flex flex-col gap-6">
      {showFilter && (
        <div className="hidden lg:flex flex-col gap-4">
          {/* dropdown filters */}

          <div className="flex items-center justify-between">
            <p>(105 {t("items")})</p>
            <div className="flex items-center gap-4">
              <DropDown data={dropdown1} />
              <DropDown data={dropdown2} />
            </div>
          </div>

          {/* filtered items */}
          <div className="flex items-center flex-wrap gap-[6px]">
            {filterItems.map((item, index) => (
              <div
                key={index}
                className="bg-asphalt/10 rounded-full py-1 px-2 pl-3 flex items-center gap-2 text-primary text-sm"
              >
                {item.categoryName === "Price" ? (
                  <p className="opacity-70">
                    {item.min} {t("SAR")} - {item.max} {t("SAR")}
                  </p>
                ) : item.categoryName === "Rate" ? (
                  <StarRate rate={parseInt(item.name)} starSize={14} />
                ) : item.categoryName === "Size" ? (
                  <p className="opacity-70">{t("Size")} {item.name}</p>
                ) : item.categoryName === "Color" ? (
                  <div className="flex items-center gap-2">
                    <div
                      className="rounded-full w-3 h-3"
                      style={{ background: item.color }}
                    ></div>
                    <p className="opacity-70">{item.name}</p>
                  </div>
                ) : (
                  <p className="opacity-70">{item.name}</p>
                )}
                <div
                  className="cursor-pointer"
                  onClick={() => removeItem(item.name)}
                >
                  <DeleteFilterIcon />
                </div>
              </div>
            ))}

            {filterItems.length > 0 && (
              <p
                className="font-bold text-sm text-primary cursor-pointer"
                onClick={removeAll}
              >
                {t("Remove All")}
              </p>
            )}
          </div>
        </div>
      )}

      <Items searchType={searchType} />
      {showFilter && <PagePagination />}
    </div>
  );
};

export default SerachedItems;
