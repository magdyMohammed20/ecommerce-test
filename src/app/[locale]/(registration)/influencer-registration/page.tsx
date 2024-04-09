import SideBar from "../../(main)/profile/SideBar";
import ReelsPage from "./ReelsPage";

const page = ({ searchParams }: { searchParams: { tab: string } }) => {
  const tab = searchParams.tab;

  return (
    <div className="lg:pt-10 pb-40 lg:pb-20 global-slider-padding w-full lg:flex items-start lg:gap-4 h-full">
      <SideBar tab={tab} />
      <ReelsPage />
    </div>
  );
};

export default page;
