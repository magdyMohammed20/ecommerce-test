import { useEffect, useState } from "react";

import Slider from "@mui/material/Slider";

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
function valuetext(value: number) {
  return `${value}`;
}

const PriceFilter = ({ filterData, onChange }: Props) => {
  const [value, setValue] = useState<number[]>([...filterData.selectedItems]);

  useEffect(() => {
    if (value[0] !== 0 || value[1] !== 0) {
      const selectedItem = {
        min: value[0],
        max: value[1],
      };
      onChange({ ...filterData, selectedItems: value }, selectedItem);
    }
  }, [value]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const marks = [
    { value: 0 },
    { value: 250 },
    { value: 500 },
    { value: 750 },
    { value: 1000 },
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="text-asphalt font-bold text-xs">
        {value[0]} SAR - {value[1]} SAR
      </div>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={1000}
        marks={marks}
        sx={{
          color: "#01010C",
          height: 6,
          "& .MuiSlider-thumb": {
            color: "#01010C",
            border: "2px solid white",
            width: 24,
            height: 24,
          },
          "& .MuiSlider-valueLabel": {
            backgroundColor: "#01010C",
            width: "35px",
            height: "23.593px",
            color: "white",
            borderRadius: "8px",
            "& *": {
              borderRadius: "inherit",
            },
          },
        }}
      />
    </div>
  );
};

export default PriceFilter;
