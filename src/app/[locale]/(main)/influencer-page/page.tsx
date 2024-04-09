import InfluencerInfo from "./InfluencerInfo";
import InfluencerReels from "./InfluencerReels";

const page = () => {
  return (
    <div className="global-padding pt-4 md:pt-8 lg:pt-10 pb-6 md:pb-20 flex flex-col gap-4 md:gap-6">
      <InfluencerInfo />
      <InfluencerReels />
    </div>
  );
};

export default page;
