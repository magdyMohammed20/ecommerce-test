import { useTranslations } from "next-intl";

import { ShippingCart } from "../../../../../../public/assets/svg/marketingRequests";
import { Arrow16 } from "../../../../../../public/assets/svg/categoryBarSvgs";

interface Props {
  onSave: () => void;
}

const ShippingContainer = ({ onSave }: Props) => {
  const t = useTranslations();

  return (
    <div className="p-4 flex items-center justify-between rounded-12 bg-white">
      <div className="flex items-center gap-3">
        <span className="p-2 md:p-3 rounded-full bg-primary">
          <ShippingCart width="24" className="hidden md:block" />
          <ShippingCart width="16" className="md:hidden" />
        </span>
        <p className="font-bold">{t("Product shipped")}</p>
      </div>

      <div onClick={onSave} className="flex items-center gap-2 cursor-pointer">
        <p className="text-sm">{t("Details")}</p>
        <span className="p-1 rounded-full bg-cloud ltr:rotate-180">
          <Arrow16 />
        </span>
      </div>
    </div>
  );
};

export default ShippingContainer;
