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

const SizeFilter = ({ filterData, onChange, filterItems, removeItem }: Props) => {
  
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
    <div className="flex flex-wrap gap-2">
      {filterData.items?.map((cat: any) => (
        <div
          key={cat.id}
          onClick={() => handleSelectFilter(cat)}
          className={`py-2 px-4 rounded-full text-asphalt cursor-pointer
          ${
            filterItems.some((item) => item.name === cat.name)
              ? "bg-primary"
              : "bg-cloud"
          }`}
        >
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

export default SizeFilter;
