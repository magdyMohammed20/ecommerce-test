import { CartSVG } from "../../../../../../../public/assets/svg/influencer";
import VideoComponent from "../statistics/VideoComponent";

interface Props {
  reels: Array<{ id: number; src: string }>;
}
const Reels: React.FC<Props> = ({ reels }) => {
  const CartIcon = () => (
    <div className="flex items-center gap-1 z-20">
      <CartSVG />
      <p className="text-[12px] font-[600] mt-[4px]">5M</p>
    </div>
  );
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-[8px] md:gap-[16px]">
      {reels.map((reel) => (
        <VideoComponent
          key={reel.id}
          src={reel.src}
          diffSizes={true}
          ExtraIcon={CartIcon}
        />
      ))}
    </div>
  );
};

export default Reels;
