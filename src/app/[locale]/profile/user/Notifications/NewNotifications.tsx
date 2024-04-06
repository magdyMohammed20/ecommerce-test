import { useTranslations } from "next-intl";

import RemainingProduct from "./RemainingProduct";
import OrderNumberContainer from "./OrderNumberContainer";
import NotificationContainer from "./NotificationContainer";

import { BoxBlue } from "../../../../../../public/assets/svg/notifications";

const NewNotifications = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-2">
      <p className="text-16 font-bold">{t("New")}</p>

      <div className="flex flex-col gap-3">
        <NotificationContainer name="notification_1" isNew icon={<BoxBlue />}>
          <OrderNumberContainer />
        </NotificationContainer>

        <NotificationContainer name="notification_2" isNew icon={<BoxBlue />} />

        <NotificationContainer name="notification_3" isNew icon={<BoxBlue />}>
          <RemainingProduct />
        </NotificationContainer>
      </div>
    </div>
  );
};

export default NewNotifications;
