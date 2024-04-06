import SideBar from "../SideBar";
import PaymentMethod from "./PaymentMethod";
import PersonalInforamtion from "./PersonalInforamtion";
import Addresses from "./Addresses";
import Orders from "./Orders";
import ReturnOrders from "./ReturnOrders";
import ReturnDetails from "./ReturnDetails";
import OrderDetails from "./OrderDetails";
import Favorites from "./Favorites";
import SelectedList from "./SelectedList";
import Followers from "./Followers";
import MyReviews from "./MyReviews";
import Products from "./Products";
import Notifications from "./Notifications/Notifications";
import MyWallet from "./MyWallet/MyWallet";
import MobileSideBar from "../MobileSideBar";

const UserPage = ({ searchParams }: { searchParams: { tab: string } }) => {
  const tab = searchParams.tab;
  return (
    <div className="lg:pt-10 pb-40 lg:pb-20 global-slider-padding flex items-start gap-4 h-full">
      <SideBar tab={tab} />
      {!tab && <MobileSideBar />}
      {tab === "personal_information" && <PersonalInforamtion />}
      {tab === "orders" && <Orders />}
      {tab === "order_details" && <OrderDetails />}
      {tab === "returns" && <ReturnOrders />}
      {tab === "return_details" && <ReturnDetails />}
      {tab === "addresses" && <Addresses />}
      {tab === "payment_method" && <PaymentMethod />}
      {tab === "favorites" && <Favorites />}
      {tab === "list" && <SelectedList />}
      {tab === "followers" && <Followers />}
      {tab === "reviews" && <MyReviews />}
      {tab === "products" && <Products />}
      {tab === "notifications" && <Notifications />}
      {tab === "my_wallet" && <MyWallet />}
    </div>
  );
};

export default UserPage;
