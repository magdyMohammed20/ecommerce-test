import Checkbox from "@mui/material/Checkbox";

import {
  CheckboxIcon,
  UnCheckboxIcon,
} from "../../../public/assets/svg/checkoutSvg";
import StarRate from "../StarRate/StarRate";

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
}

const RateFilter = ({ filterData, onChange, filterItems }: Props) => {

  const handleSelectFilter = (cat: any) => {
    let updatedData = [...filterData.selectedItems];

    updatedData = [cat.id];

    onChange({ ...filterData, selectedItems: updatedData }, cat);
  };

  return (
    <div className="flex flex-col">
      {filterData.items?.map((cat: any) => (
        <div
          key={cat.id}
          onClick={() => handleSelectFilter(cat)}
          className="py-3 flex items-center justify-between text-asphalt text-sm cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <StarRate rate={parseInt(cat.name)} starSize={18} />
            <p className="opacity-40 text-xs font-normal">({cat.qty})</p>
          </div>
          <Checkbox
            checked={filterItems.some((item) => item.name === cat.name) ? true : false}
            className="!p-0"
            icon={<UnCheckboxIcon />}
            checkedIcon={<CheckboxIcon />}
          />
        </div>
      ))}
    </div>
  );
};

export default RateFilter;
