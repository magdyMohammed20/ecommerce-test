import React from "react";

interface Props {
  percentage: number;
  city: string;
}

const HorizontalProgressBar: React.FC<Props> = ({ percentage, city }) => {
  const getWidthStyle = (percentage: number) => {
    return {
      width: `${percentage}%`,
    };
  };

  return (
    <div className="grid  self-stretch  grid-cols-1 gap-[4px]">
      <span className="font-[400] text-[10px] md:text-[14px] text-asphalt">
        {city}
      </span>
      <div className="flex items-center gap-[12px]">
        <div
          className="flex flex-col flex-nowrap justify-end w-full h-[8px] bg-[#D9DCE1] rounded-full overflow-hidden "
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}>
          <div
            style={getWidthStyle(percentage)}
            className={`rounded-full overflow-hidden bg-black  h-full`}></div>
        </div>
        <span className="text-[12px] md:text-[14px]  text-[#455560]">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default HorizontalProgressBar;
