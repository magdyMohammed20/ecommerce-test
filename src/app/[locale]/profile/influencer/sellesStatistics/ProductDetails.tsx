"use client";
import HashComponent from "@/components/HashComponent/HashComponent";
import StarRate from "@/components/StarRate/StarRate";
import { useTranslations } from "next-intl";

interface Props {
  currentProduct: {
    id: number;
    imageUrl: string;
    title: number;
    category: string;
    name: string;
    rate: number;
    visits: { number: string; percentage: string };
    buy: { number: string; percentage: string };
  };
}
const ProductDetails: React.FC<Props> = ({ currentProduct }) => {
  const t = useTranslations();

  const {
    name,
    visits: { number, percentage },
    buy: { number: buyNum, percentage: buyPercentage },
  } = currentProduct;
  return (
    <div className="bg-white overflow-hidden rounded-xl p-[16px] sm:p-[24px] flex flex-col gap-[16px] md:gap-[24px]">
      <div className="grid grid-cols-1 gap-[16px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[4px] md:gap-[8px]">
            <HashComponent text={t("flat shoes")} />
            <div className="text-asphalt text-[14px] md:text-[16px]">
              {t(name)}
            </div>
            <StarRate rate={5} starSize={18} />
          </div>
          <div>
            <button className="bg-primary text-white py-[8px] px-[12px] md:py-[16px] md:px-[24px] rounded-full focus:ring-4 focus:ring-gray-500 transition-all ease-linear text-[14px] md:text-[16px] font-[700]">
              {t("product details")}
            </button>
          </div>
        </div>

        <div className="p-[16px] md:p-[16px] xl:p-[12px]  bg-cloud rounded-[8px]  grid grid-cols-1 xl:gap-[8px]">
          <div className="flex justify-between items-center py-[8px]">
            <span className="text-[14px] md:text-[16px] text-asphalt">
              {t("Number of visits to the product page")}
            </span>

            <div className="flex flex-col items-center  mt-1 gap-[4px]">
              <span className="text-[14px] md:text-[16px] lg:text-[16px] font-[700] ">
                {number}
              </span>

              <span
                className="
                 text-green-600
                 flex gap-[4px] md:gap-1 items-center">
                <span className="text-[10px] md:text-[12px] xl:text-[12px] ">
                  {percentage}
                </span>
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center border-t border-t-silver pt-[8px]">
            <span className="text-[14px] text-asphalt">
              {t("Number of purchases")}
            </span>

            <div className="flex flex-col items-center  mt-1 gap-[4px]">
              <span className="text-[14px] md:text-[16px] lg:text-[16px] font-[700] ">
                {buyNum}
              </span>

              <span
                className="
                 text-red-600
                 flex gap-[4px] md:gap-1 items-center">
                <span className="text-[10px] md:text-[12px] xl:text-[12px] ">
                  {buyPercentage}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
