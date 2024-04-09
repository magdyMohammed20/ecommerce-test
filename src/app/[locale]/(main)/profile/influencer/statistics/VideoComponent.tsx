import { ViewsSvg } from "../../../../../../../public/assets/svg/landingPageSvgs";
import { VideosSVG } from "../../../../../../../public/assets/svg/influencerStatistics";
import UserActionBtn from "../myFilesAndVideos/UserActionBtn";
import { AddressEditIcon } from "../../../../../../../public/assets/svg/checkoutSvg";
import { MerchantEye } from "../../../../../../../public/assets/svg/searchMenu";
import { OnPoint } from "../../../../../../../public/assets/svg/influencer";
import { useTranslations } from "next-intl";

interface Props {
  src: string;
  diffSizes?: boolean;
  ExtraIcon?: React.FC;
  newDemensions?: string;
  hasActions?: boolean;
  openModal?: () => void;
  openCatModal?: () => void;
  isFullWidth?: boolean;
  isPending?: boolean;
}

const VideoComponent: React.FC<Props> = ({
  src,
  diffSizes,
  ExtraIcon,
  newDemensions,
  hasActions,
  openModal,
  isFullWidth,
  openCatModal,
  isPending,
}) => {
  const t = useTranslations();
  return (
    <div
      className={`relative overflow-hidden group ${
        isFullWidth ? "w-full" : ""
      }  ${
        newDemensions
          ? newDemensions
          : !diffSizes
          ? "min-h-[180px] md:min-h-[252px] lg:min-h-[222px] xl:min-h-[290px]"
          : "min-h-[287px] md:min-h-[360px] lg:min-h-[458px] xl:min-h-[493px]"
      }`}>
      <video
        src={src}
        autoPlay
        loop
        muted
        className={`object-cover absolute inset-0 w-full h-full rounded-[8px] z-40`}></video>

      {hasActions && !isPending && (
        <div className="absolute bottom-2 w-full left-1/2 transform -translate-x-1/2 z-50 flex justify-center  translate-y-[125%] group-hover:translate-y-0  transition-all ease-in-out duration-100">
          <div className="flex gap-2 ">
            <UserActionBtn
              openModal={openModal}
              className="p-3"
              bgColor="bg-[#01010c66]"
              Icon={
                <AddressEditIcon
                  className="w-4 h-4 md:w-6 md:h-6 "
                  isWhite={true}
                />
              }
            />
            <UserActionBtn
              openModal={openCatModal}
              className="p-3"
              bgColor="bg-[#01010c66]"
              Icon={
                <MerchantEye className="w-4 h-4 md:w-6 md:h-6 " color="#FFF" />
              }
            />
          </div>
        </div>
      )}

      {isPending && (
        <div className="absolute rounded-[8px] bg-[#01010C66] bottom-2 w-full h-full left-0 top-0 z-50 flex justify-center transition-all ease-in-out duration-100">
          <div className="flex items-center justify-center">
            <div className="flex text-white justify-center items-center font-bold text-[14px] bg-[#01010C66] rounded-full gap-1 z-50 py-2 px-3">
              <OnPoint />
              {t("under_review")}
            </div>
          </div>
        </div>
      )}
      {!isPending && (
        <div className="bg-black/20   flex p-2 lg:p-3 flex-col justify-between  w-full h-full min-h-[180px] md:min-h-[252px] lg:min-h-[222px] xl:min-h-[290px] relative rounded-2xl">
          <div
            className={`${
              isFullWidth ? "opacity-0" : ""
            } z-50 rounded-full 2xl py-[2px] pl-[2px] pr-[4px] md:py-[4px] md:px-[8px] xl:px-[12px] xl:py-[8px] justify-center  flex items-center  text-white text-xs w-fit bg-primary/40 gap-1`}>
            <div className="flex items-center gap-[2px] z-20">
              <ViewsSvg />
              <p className="text-[12px] font-[600] mt-[4px]">5M</p>
            </div>

            {ExtraIcon && <ExtraIcon />}
          </div>
          <div
            className={`z-50 flex flex-col gap-2 text-white  ${
              hasActions
                ? " group-hover:-translate-x-full transform transition-all ease-in duration-200"
                : ""
            } `}>
            <div className=" mr-auto">
              <VideosSVG />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
