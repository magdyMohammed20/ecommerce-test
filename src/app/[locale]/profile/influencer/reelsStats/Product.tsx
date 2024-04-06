import { useTranslations } from "next-intl";
import { DownSVG, UpSVG } from "../../../../../../public/assets/svg/influencer";
interface Props {
  product: {
    src: string;
    title: string;
    category: string;
    description: string;
  };
}
const Product: React.FC<Props> = ({
  product: { src, title, category, description },
}) => {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-[8px] md:gap-[16px]">
      <div className="flex gap-[16px]">
        <div className="relative w-[54px] h-[54px] xl:w-[53px] xl:h-[53px]">
          <img
            src={src}
            width={53}
            height={53}
            alt={title}
            className="w-full h-full xl:rounded-[4px]"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="text-primary text-[10px] md:text-[12px] font-[700] bg-cloud rounded-full xl:text-[12px] inline-block max-w-max py-[2px] px-[8px]">
            {category}
          </div>
          <div className="text-[12px] md:text-[14px] ">{description}</div>
        </div>
      </div>

      <div className="p-[16px] md:p-[12px] xl:p-[12px] bg-cloud rounded-[8px]">
        <div className="flex justify-between items-center py-[8px]">
          <span className="text-[14px] text-asphalt">
            {t("Number of visits to the product page")}
          </span>

          <div className="flex flex-col items-center  mt-1">
            <span className="text-[14px] md:text-[16px] lg:text-[16px] font-[700] ">
              10M
            </span>

            <span
              className="
                 text-green-600
                 flex gap-[4px] md:gap-1 items-center">
              <UpSVG />
              <span className="text-[10px] ">26%</span>
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-t-silver py-[8px]">
          <span className="text-[14px] text-asphalt">
            {t("Number of visits to the product page")}
          </span>

          <div className="flex flex-col items-center  mt-1">
            <span className="text-[14px] md:text-[16px] lg:text-[16px] font-[700] ">
              10M
            </span>

            <span
              className="
                 text-red-600
                 flex gap-[4px] md:gap-1 items-center">
              <DownSVG />
              <span className="text-[10px] ">26%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
