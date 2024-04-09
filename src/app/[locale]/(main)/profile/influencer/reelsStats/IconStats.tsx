interface Props {
  Icon: JSX.Element;
  num: string;
}

const IconStats: React.FC<Props> = ({ Icon, num }) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-[8px] xl:gap-[16px]">
        <div className="bg-cloud w-[40px] h-[40px] md:w-[60px] md:h-[60px] p-[12px] flex justify-center items-center rounded-full">
          {Icon}
        </div>
        <span className="text-[12px] md:text-[16px] font-[700]">{num}</span>
      </div>
    </div>
  );
};

export default IconStats;
