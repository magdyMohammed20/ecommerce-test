import { useTranslations } from "next-intl";

const data = [
  {
    Size: "S",
    Length: 42,
    Sleevelength: 61,
    Armlength: 35.6,
    Chestmeasurement: 82,
    shoulder: 33.5,
    cuff: 19,
  },
  {
    Size: "M",
    Length: 43,
    Sleevelength: 62,
    Armlength: 37,
    Chestmeasurement: 86,
    shoulder: 34.5,
    cuff: 20,
  },
  {
    Size: "L",
    Length: 44,
    Sleevelength: 63,
    Armlength: 38.4,
    Chestmeasurement: 90,
    shoulder: 35.5,
    cuff: 21,
  },
  {
    Size: "XL",
    Length: 45.5,
    Sleevelength: 64,
    Armlength: 40.6,
    Chestmeasurement: 96,
    shoulder: 36.5,
    cuff: 22,
  },
];

const SizesTable = () => {
  const t = useTranslations();

  return (
    <div className="md:px-8 ltr:pl-4 rtl:pr-4 overflow-x-scroll min-h-[266px] hide-scrollbar">
      <div className="border-silver text-asphalt w-full capitalize">
        <table className="w-full table-auto min-w-[744px] bg-white whitespace-nowrap">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key, index) => (
                <th key={index} className="border-[0.5px] p-3 font-bold">
                  {t(key)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, index) => (
                  <td
                    key={index}
                    className={`border-[0.5px] p-3 text-center ${
                      index === 0 && "font-bold"
                    }`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SizesTable;
