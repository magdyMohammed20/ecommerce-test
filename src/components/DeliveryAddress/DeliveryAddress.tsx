import { useTranslations } from "next-intl";

import {
  EditArrow,
  AddPerson,
  AddLoction,
} from "../../../public/assets/svg/orders";

const DeliveryAddress = () => {
  const t = useTranslations();

  return (
    <div className="white-container flex flex-col gap-4 md:gap-6">
      <div className="flex items-center justify-between">
        <p className="text-20">{t("Delivery Address")}</p>
        <div className="flex items-center gap-2 cursor-pointer">
          <p className="text-sm">{t("Edit address")}</p>
          <div className="bg-cloud p-1 rounded-full ltr:rotate-180">
            <EditArrow />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-asphalt">
        <div className="flex items-center gap-2">
          <AddPerson />
          <p>{t("Hanin Al-Bishri")}</p>
          <p className="mx-1 text-silver">|</p>
          <p dir="ltr">0569048346</p>
        </div>

        <div className="flex items-center gap-2">
          <AddLoction />
          <p>{t("Riyadh - King Fahd Road - Olaya")}</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
