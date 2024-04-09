import { useState } from "react";
import { CartSVG } from "../../../../../../../public/assets/svg/influencer";
import VideoComponent from "../statistics/VideoComponent";
import EditVideoModal from "./EditVideoModal";
import CatModal from "./CategoriesModal";

interface Props {
  reels: Array<{ id: number; src: string }>;
}
const Reels: React.FC<Props> = ({ reels }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openCatModal, setOpenCatModal] = useState(false);
  const toggleEditModal = () => {
    setOpenEditModal(!openEditModal);
  };

  const toggleCatModal = () => {
    setOpenCatModal(!openCatModal);
  };
  const CartIcon = () => (
    <div className="flex items-center gap-1 z-20">
      <CartSVG />
      <p className="text-[12px] font-[600] mt-[4px]">5M</p>
    </div>
  );
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
      {openEditModal && <EditVideoModal onClose={toggleEditModal} />}
      {openCatModal && <CatModal onClose={toggleCatModal} />}
      {reels.map((reel, index) => (
        <VideoComponent
          isPending={index == 0}
          newDemensions="min-h-[287px] md:min-h-[360px] lg:min-h-[458px] xl:min-h-[362px] "
          key={reel.id}
          src={reel.src}
          ExtraIcon={CartIcon}
          hasActions={true}
          openModal={toggleEditModal}
          openCatModal={toggleCatModal}
        />
      ))}
    </div>
  );
};

export default Reels;
