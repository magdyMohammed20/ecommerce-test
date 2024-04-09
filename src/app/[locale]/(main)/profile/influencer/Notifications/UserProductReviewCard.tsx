import Image from "next/image";
import React from "react";

interface Props {
  text: string;
  name: string;
  img: string;
  className?: string;
}
const UserProductReviewCard: React.FC<Props> = ({
  text,
  name,
  img,
  className,
}) => {
  return (
    <div
      className={`bg-white p-[8px] rounded-[12px] flex flex-col gap-[12px] ${className}`}>
      <span className="text-[12px] text-asphalt">{text}</span>

      <div className="flex items-center gap-[4px]">
        <div className="w-full max-w-[26px] h-[26px] rounded-full overflow-hidden">
          <Image
            alt={name}
            src={img}
            width={52}
            height={52}
            className="w-full h-full "
          />
        </div>
        <span className="text-[12px] font-[700]">{name}</span>
      </div>
    </div>
  );
};

export default UserProductReviewCard;
