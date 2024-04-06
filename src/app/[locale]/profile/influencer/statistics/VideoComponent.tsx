import { ViewsSvg } from "../../../../../../public/assets/svg/landingPageSvgs";
import { VideosSVG } from "../../../../../../public/assets/svg/influencerStatistics";

interface Props {
  src: string;
  diffSizes?: boolean;
  ExtraIcon?: React.FC;
}

const VideoComponent: React.FC<Props> = ({ src, diffSizes, ExtraIcon }) => {
  return (
    <div
      className={`relative overflow-hidden  ${
        !diffSizes
          ? "min-h-[180px] md:min-h-[252px] lg:min-h-[222px] xl:min-h-[290px]"
          : "min-h-[287px] md:min-h-[360px] lg:min-h-[458px] xl:min-h-[493px] "
      }`}>
      <video
        src={src}
        autoPlay
        loop
        muted
        className="object-cover absolute inset-0 w-full h-full rounded-[8px] z-40"></video>

      <div className="bg-black/20   flex p-2 lg:p-3 flex-col justify-between  w-full h-full min-h-[180px] md:min-h-[252px] lg:min-h-[222px] xl:min-h-[290px] relative rounded-2xl">
        <div className="z-50 rounded-full 2xl py-[2px] pl-[2px] pr-[4px] md:py-[4px] md:px-[8px] xl:px-[12px] xl:py-[8px] justify-center  flex items-center  text-white text-xs w-fit bg-primary/40 ">
          <div className="flex items-center gap-[2px] z-20">
            <ViewsSvg />
            <p className="text-[12px] font-[600] mt-[4px]">5M</p>
          </div>

          {ExtraIcon && <ExtraIcon />}
        </div>
        <div className="z-50 flex flex-col gap-2 text-white">
          <div className=" mr-auto">
            <VideosSVG />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
