//import DropDown from "./DropDown";
import DropDown from "@/components/DropDown/DropDown";
import { useTranslations } from "next-intl";
interface Props {
  documentWidth: number;
}
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
const UpperFilter: React.FC<Props> = ({ documentWidth }) => {
  const t = useTranslations();
  return (
    <div className="flex items-center justify-between">
      <div className="text-[16px] font-[700]">
        13 {t("December")} - 19 {t("December")}
      </div>
      <div>
        <DropDown
          data={dropdown2}
          different={true}
          showSelected={documentWidth < 768 ? true : false}
        />
      </div>
    </div>
  );
};

export default UpperFilter;
