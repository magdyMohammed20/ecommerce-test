import React from "react";

interface Props {
  percentage: number;
  range: string;
}

const VerticalProgressBar: React.FC<Props> = ({ percentage, range }) => {
  return (
    <div className="grid grid-cols-1 gap-y-[12px] justify-items-center">
      <span className="font-[400] text-[12px] text-asphalt">%{percentage}</span>
      <div
        className="flex flex-col flex-nowrap justify-end w-[10px] h-[171px] lg:h-[200px] xl:h-[210px]  bg-[#D9DCE1] rounded-full overflow-hidden "
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}>
        <div
          className="rounded-full overflow-hidden bg-black"
          style={{ height: `${percentage}%` }}></div>
      </div>
      <span className="text-[10px]  text-asphalt">{range}</span>
    </div>
  );
};

export default VerticalProgressBar;
