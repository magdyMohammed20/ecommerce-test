import { useState } from "react";
import { useTranslations } from "next-intl";

import ReviewReel from "./ReviewReel";
import SuccessMenu from "./SuccessMenu";
import UploadContainer from "./UploadContainer";
import ReelDataContainer from "./ReelDataContainer";

import { ProductClose } from "../../../../../../../../public/assets/svg/checkoutSvg";
import CategoryPicker from "./CategoryPicker";

interface Props {
  onClose: () => void;
}

const UploadReel = ({ onClose }: Props) => {
  const t = useTranslations();
  const [success, setSuccess] = useState<boolean>(false);
  const [confirmReel, setConfirmReel] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<string>("");
  const [showCategory, setShowCategory] = useState<boolean>(false);
  const [selectedVideoName, setSelectedVideoName] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleVideoChange = (video: string, name: string) => {
    setSelectedVideo(video);
    setSelectedVideoName(name);
  };

  const handleConfirmChange = () => {
    setConfirmReel((prevState) => !prevState);
  };

  const handleSuccessChange = () => {
    setSuccess((prevState) => !prevState);
  };

  const handleCategoryChange = () => {
    setShowCategory((prevState) => !prevState);
  };

  const handleCategoryAdd = (name: string) => {
    const updatedDate = [...selectedCategories];

    if (updatedDate.includes(name)) {
      const filteredData = updatedDate.filter((item) => item !== name);
      setSelectedCategories(filteredData);
    } else {
      updatedDate.push(name);
      setSelectedCategories(updatedDate);
    }
  };

  return success ? (
    <SuccessMenu onClose={onClose} />
  ) : showCategory ? (
    <CategoryPicker
      onClose={handleCategoryChange}
      selectedCategories={selectedCategories}
      onChange={handleCategoryAdd}
    />
  ) : (
    <div className="text-primary fixed top-0 left-0 w-full min-h-screen bg-black/60 flex justify-center items-center z-40">
      <div
        className={`bg-cloud bottom-0 md:top-0 md:my-auto fixed max-h-[92%] rounded-t-2xl md:rounded-[20px] py-6 px-4 md:p-8 w-full flex flex-col gap-6 overflow-scroll hide-scrollbar
      ${
        confirmReel
          ? "md:max-w-fit md:max-h-[886px]"
          : "max-w-[660px] md:max-h-[808px]"
      }
      `}>
        <div className="flex items-center justify-between pb-6 border-b border-b-silver/50">
          <p className="text-20">{t("New video clip")}</p>
          <div onClick={onClose} className="cursor-pointer">
            <ProductClose />
          </div>
        </div>

        {!selectedVideo ? (
          <UploadContainer onChange={handleVideoChange} />
        ) : confirmReel ? (
          <ReelDataContainer
            selectedReel={selectedVideo}
            onSave={handleSuccessChange}
            openCategory={handleCategoryChange}
            selectedCategories={selectedCategories}
          />
        ) : (
          <ReviewReel
            selectedReel={selectedVideo}
            reelName={selectedVideoName}
            onSave={handleConfirmChange}
            onClose={() => handleVideoChange("", "")}
          />
        )}
      </div>
    </div>
  );
};

export default UploadReel;
