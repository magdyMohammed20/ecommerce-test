import SideBar from "./SideBar";
import Orders from "./user/Orders";
import Products from "./user/Products";
import Favorites from "./user/Favorites";
import Followers from "./user/Followers";
import Addresses from "./user/Addresses";
import MyReviews from "./user/MyReviews";
import GoBackLink from "./user/GoBackLink";
import MobileSideBar from "./MobileSideBar";
import OrderDetails from "./user/OrderDetails";
import SelectedList from "./user/SelectedList";
import ReturnOrders from "./user/ReturnOrders";
import MyWallet from "./user/MyWallet/MyWallet";
import PaymentMethod from "./user/PaymentMethod";
import ReturnDetails from "./user/ReturnDetails";
import AllEarns from "./influencer/earns/allEarns";
import AllReels from "./influencer/reels/allReels";
import AllSales from "./influencer/selles/AllSales";
import MainProfits from "./influencer/earns/MainProfits";
import PersonalInforamtion from "./user/PersonalInforamtion";
import Notifications from "./user/Notifications/Notifications";
import AllStats from "./influencer/followersStats/allStatistics";
import AllReelsStats from "./influencer/reelsStats/allReelsStats";
import AllStatistics from "./influencer/statistics/allStatistics";
import MarketingRequests from "./influencer/marketingRequests/MarketingRequests";
import AllSalesStatistics from "./influencer/sellesStatistics/AllSalesStatistics";
import InfluencerNotifications from "./influencer/Notifications/InfluencerNotifications";

const UserPage = ({ searchParams }: { searchParams: { tab: string } }) => {
  const tab = searchParams.tab;
  return (
    <div>
      <div className="lg:pt-10 pb-40 lg:pb-20 global-slider-padding w-full lg:flex items-start lg:gap-4 h-full">
        {tab &&
          tab !== "list" &&
          tab !== "addresses" &&
          tab !== "marketing_requests" && (
            <GoBackLink
              title={tab == "show-all" ? "transfer requests" : tab}
              url={tab == "show-all" ? "/profile?tab=earns" : "/profile"}
              percentageExist={tab == "followers-stats" || tab == "selles"}
            />
          )}

        <SideBar tab={tab} />

        {!tab && <MobileSideBar />}

        {tab === "orders" && <Orders />}
        {tab === "list" && <SelectedList />}
        {tab === "reviews" && <MyReviews />}
        {tab === "products" && <Products />}
        {tab === "my_wallet" && <MyWallet />}
        {tab === "addresses" && <Addresses />}
        {tab === "followers" && <Followers />}
        {tab === "favorites" && <Favorites />}
        {tab === "returns" && <ReturnOrders />}
        {tab === "order_details" && <OrderDetails />}
        {tab === "notifications" && <Notifications />}
        {tab === "return_details" && <ReturnDetails />}
        {tab === "payment_method" && <PaymentMethod />}
        {tab === "marketing_requests" && <MarketingRequests />}
        {tab === "personal_information" && <PersonalInforamtion />}

        {/*  <div className="px-4 md:px-8 lg:px-0 mt-6 md:mt-8 lg:mt-0"> */}
        {tab === "selles" && <AllSales />}
        {tab === "earns" && <MainProfits />}
        {tab === "show-all" && <AllEarns />}
        {tab === "statistics" && <AllStatistics />}
        {tab === "followers-stats" && <AllStats />}
        {tab === "influencer-reels" && <AllReels />}
        {tab === "reels-stats" && <AllReelsStats />}
        {tab === "selles-statistics" && <AllSalesStatistics />}
        {tab === "influencer-notifications" && <InfluencerNotifications />}
        {/* </div> */}
      </div>
    </div>
  );
};

export default UserPage;
