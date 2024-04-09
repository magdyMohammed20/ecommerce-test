import GoBackLink from "../GoBackLink";
import Last7Notifications from "./Last7Notifications";
import LastMonthNotifications from "./LastMonthNotifications";
import NewNotifications from "./NewNotifications";
import OlderNotifications from "./OlderNotifications";

const Notifications = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 w-full p-[24px]">
      {/*       <GoBackLink title="Personal Information" />
       */}
      <div className=" profile-width-70 flex flex-col gap-8">
        <NewNotifications />
        <Last7Notifications />
        <LastMonthNotifications />
        <OlderNotifications />
      </div>
    </div>
  );
};

export default Notifications;
