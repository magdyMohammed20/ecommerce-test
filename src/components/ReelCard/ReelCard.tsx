import { BagSvg, ViewsSvg } from "../../../public/assets/svg/landingPageSvgs";
import { ReelWatchSvg } from "../../../public/assets/svg/product";

interface Props {
  reel: {
    video: string;
  };
  hideData?: boolean;
  hasOverlay?: boolean;
}

const ReelCard = ({ reel, hideData, hasOverlay }: Props) => {
  return (
    <div className="relative lg:max-h-[500px] rounded-lg lg:rounded-xl overflow-hidden w-full">
      {hasOverlay && (
        <div className="bg-black absolute w-full h-full left-0 top-0 opacity-65"></div>
      )}
      <video
        src={reel.video}
        loop
        autoPlay
        muted
        className="object-cover h-full w-full"
      ></video>
      <div className="bg-black/20 flex p-2 lg:p-4 flex-col justify-between w-full h-full absolute top-0">
        {!hideData && (
          <div className="rounded-full py-1 md:py-2 px-2 md:px-3 flex items-center gap-2 md:gap-1 bg-[#01010C]/40 font-bold text-white text-[10px] md:text-xs w-fit">
            <div className="flex items-center gap-1">
              <span className="hidden md:block">
                <ViewsSvg />
              </span>
              <span className="md:hidden">
                <ViewsSvg width="14" height="14" />
              </span>
              <p>5M</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="hidden md:block">
                <BagSvg />
              </span>
              <span className="md:hidden">
                <BagSvg width="14" height="14" />
              </span>
              <p>5K</p>
            </div>
          </div>
        )}
        <div className="absolute bottom-2 lg:bottom-3 ltr:right-2 rtl:left-2 ltr:lg:right-3 rtl:lg:left-3">
          <ReelWatchSvg width={"21"} height={"20"} />
        </div>
      </div>
    </div>
  );
};

export default ReelCard;
