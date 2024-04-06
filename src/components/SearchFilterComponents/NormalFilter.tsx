import Checkbox from "@mui/material/Checkbox";

import {
  FilterCheckBox,
  FilterUnCheckBox,
} from "../../../public/assets/svg/searchSvgs";

interface FilterData {
  id: number;
  name: string;
  selectedItems: number[];
  items?: {
    id: number;
    name: string;
    qty: number;
  }[];
}

interface FilterItems {
  name: string;
  categoryName: string;
  color: string;
  min: number;
  max: number;
}

interface Props {
  filterData: FilterData;
  onChange: (item: FilterData, selectedItem: any) => void;
  filterItems: FilterItems[];
  removeItem: (name: string) => void;
}

const NormalFilter = ({
  filterData,
  onChange,
  filterItems,
  removeItem,
}: Props) => {
  
  const handleSelectFilter = (cat: any) => {
    const updatedData = [...filterData.selectedItems];
    if (filterItems.some((item) => item.name === cat.name)) {
      removeItem(cat.name);
    } else {
      updatedData.push(cat.id);
      onChange({ ...filterData, selectedItems: updatedData }, cat);
    }
  };

  return (
    <div className="flex flex-col">
      {filterData.items?.map((cat: any) => (
        <div
          key={cat.id}
          onClick={() => handleSelectFilter(cat)}
          className="py-3 flex items-center justify-between text-asphalt text-sm cursor-pointer"
        >
          <p
            className={`${
              filterItems.some((item) => item.name === cat.name) &&
              "font-bold text-primary"
            }`}
          >
            {cat.name}{" "}
            <span className="opacity-40 text-xs font-normal">({cat.qty})</span>
          </p>
          <Checkbox
            checked={
              filterItems.some((item) => item.name === cat.name) ? true : false
            }
            className="!p-0"
            icon={<FilterUnCheckBox />}
            checkedIcon={<FilterCheckBox />}
          />
        </div>
      ))}
    </div>
  );
};

export default NormalFilter;
