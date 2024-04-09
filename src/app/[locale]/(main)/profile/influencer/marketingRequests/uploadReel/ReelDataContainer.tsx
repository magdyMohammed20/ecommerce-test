import { useTranslations } from "next-intl";
import ReelInfo from "./ReelInfo";

interface Props {
  selectedReel: string;
  onSave: () => void;
  openCategory: () => void;
  selectedCategories: string[];
}

const ReelDataContainer = ({
  selectedReel,
  onSave,
  openCategory,
  selectedCategories,
}: Props) => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-6">
      <ReelInfo
        selectedReel={selectedReel}
        openCategory={openCategory}
        selectedCategories={selectedCategories}
      />

      <div onClick={onSave} className="pt-6 border-t border-silver/50">
        <button className="btn-primary">{t("Publish")}</button>
      </div>
    </div>
  );
};

export default ReelDataContainer;
