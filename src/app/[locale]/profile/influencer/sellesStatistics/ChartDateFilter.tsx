import DropDown from "@/components/DropDown/DropDown";
import { useTranslations } from "next-intl";

const dropdown2 = {
  label: "show",
  items: [
    {
      id: 1,
      name: "Recently 7 Days",
    },
    {
      id: 2,
      name: "Recently 1 Month",
    },
    {
      id: 3,
      name: "Recently 1 Year",
    },
  ],
};

interface Props {
  documentWidth: number;
}
const ChartDateFilter: React.FC<Props> = ({ documentWidth }) => {
  const t = useTranslations();
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-[12px] md:text-[16px] md:font-[400] xl:font-[700] text-asphalt">
          13 {t("December")} - 19 {t("December")}
        </div>
        <div>
          <DropDown
            customStyle="bg-cloud py-[12px] pl-[12px] pr-[16px] rounded-[8px] text-[14px]"
            data={dropdown2}
            different={true}
            showSelected={documentWidth < 768 ? true : false}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartDateFilter;
