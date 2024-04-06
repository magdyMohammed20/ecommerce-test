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

const ColorFilter = ({ filterData, onChange, filterItems, removeItem }: Props) => {
  
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
    <div className="grid grid-cols-2 w-full gap-2">
      {filterData.items?.map((cat: any) => (
        <div
          key={cat.id}
          onClick={() => handleSelectFilter(cat)}
          className={`py-2 px-4 rounded-full text-asphalt cursor-pointer w-full flex items-center gap-2 text-sm
            ${
              filterItems.some((item) => item.name === cat.name)
                ? "bg-primary"
                : "bg-cloud"
            }`}
        >
          <div
            className="w-6 h-6 rounded-full border-2 border-white shadow-md"
            style={{ background: cat.color }}
          ></div>
          <p
            className={`${
              filterItems.some((item) => item.name === cat.name) && "text-white"
            }`}
          >
            {cat.name}{" "}
            <span className="opacity-40 text-xs font-normal">({cat.qty})</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ColorFilter;
