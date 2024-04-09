import { useTranslations } from "next-intl";
import React, { useRef } from "react";
import HoverVideoPlayer from "react-hover-video-player";

import { ReelCloseIcon } from "../../../../../../../../public/assets/svg/marketingRequests";

interface Props {
  reelName: string;
  onSave: () => void;
  onClose: () => void;
  selectedReel: string;
}

const ReviewReel = ({ selectedReel, reelName, onClose, onSave }: Props) => {
  const t = useTranslations();
  const videoRef = useRef<any>(null);

  const handleClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };
  return (
    <div className="flex flex-col gap-6">
      {/* <div className="relative w-full max-w-[314px] mx-auto rounded-12 overflow-hidden">
        <video className="w-full z-20">
          <source src={selectedReel} type="video/mp4" />
        </video>

        <div className="absolute inset-0 p-4 w-full h-full bg-black/20">
          <div className="flex items-center justify-between">
            <p className="text-silver text-xs">{reelName}</p>
            <span className="cursor-pointer" onClick={onClose}>
              <ReelCloseIcon />
            </span>
          </div>
        </div>
      </div> */}

      <div
        onClick={handleClick}
        className="relative w-full max-w-[314px] mx-auto rounded-12 overflow-hidden">
        <HoverVideoPlayer
          videoSrc={selectedReel}
          videoRef={videoRef}
          videoStyle={{
            borderRadius: 12,
          }}
          pausedOverlay={
            <div className="absolute inset-0 p-4 w-full h-full bg-black/20 rounded-12">
              <div className="flex items-center justify-between">
                <p className="text-silver text-xs">{reelName}</p>
                <span className="cursor-pointer" onClick={onClose}>
                  <ReelCloseIcon />
                </span>
              </div>
            </div>
          }
        />
      </div>

      <div className="pt-6 border-t border-silver/50">
        <button onClick={onSave} className="btn-primary">
          {t("Continue")}
        </button>
      </div>
    </div>
  );
};

export default ReviewReel;
