import CustomMonthsSelect from "./CustomMonthsSelect";

const ChartMonthSelect: React.FC = () => {
  return (
    <div>
      <div className="flex mt-6 justify-between items-center">
        <div className="px-1 flex items-center gap-3 justify-between w-full">
          <h3 className="text-[13px] lg:text-sm font-bold text-gray-500">
            1 ديسمبر - 31 ديسمبر
          </h3>
          <CustomMonthsSelect />
        </div>
      </div>
    </div>
  );
};

export default ChartMonthSelect;
