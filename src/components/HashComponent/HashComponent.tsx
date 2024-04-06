import React from "react";

interface Props {
  text: string;
}
const HashComponent: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <span className="bg-cloud px-[8px] py-[2px] rounded-full font-[700] text-[12px]">
        {text}
      </span>
    </div>
  );
};

export default HashComponent;
