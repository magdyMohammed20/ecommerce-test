import { useTranslations } from "next-intl";
import { ProductClose } from "../../../../../../public/assets/svg/checkoutSvg";
import Badge from "./Tag";
import { Fragment, useState } from "react";

interface Props {
  onClose: () => void;
}

const tags = [
  {
    id: 1,
    name: "Home furnishings",
  },
  {
    id: 2,
    name: "Electronics",
  },
  {
    id: 3,
    name: "Jewelry & Watches",
  },
  {
    id: 4,
    name: "shoes",
  },
];
const InterestsModal = ({ onClose }: Props) => {
  const t = useTranslations();
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);

  const handleBadgeClick = (badge: string) => {
    if (selectedBadges.includes(badge)) {
      setSelectedBadges(selectedBadges.filter((item) => item !== badge));
    } else {
      setSelectedBadges([...selectedBadges, badge]);
    }
  };
  return (
    <div className="text-primary fixed top-0 left-0 w-full min-h-screen bg-black/60 flex justify-center items-center z-[999]">
      <div className="bg-cloud bottom-0 md:top-0 md:my-auto fixed h-[50%] md:h-[47%]  rounded-t-2xl md:rounded-[20px] p-5 md:p-8 w-full md:max-w-[660px] flex flex-col gap-6 overflow-scroll hide-scrollbar">
        <div className="flex items-center justify-between pb-6 border-b border-b-silver/50">
          <p className="text-20">{t("interests")}</p>

          <div className="cursor-pointer" onClick={onClose}>
            <ProductClose />
          </div>
        </div>
        <div className="flex flex-col gap-4  border-b border-b-cloud">
          <p className=" text-[14px] text-asphalt">{t("dummy_interests")}</p>

          <div className="flex  gap-3 bg-white  w-full rounded-[8px] p-4 flex-wrap">
            {tags.map((tag) => (
              <Fragment key={tag.id}>
                <Badge
                  label={tag.name}
                  selected={selectedBadges.includes(tag.name)}
                  onClick={() => handleBadgeClick(tag.name)}
                />
              </Fragment>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-silver/50">
          <button onClick={onClose} className="btn-primary">
            {t("Save")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterestsModal;
