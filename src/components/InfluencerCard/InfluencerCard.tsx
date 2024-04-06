import { useLocale } from "next-intl";

import Image from "next/image";

import {
  EyeSvg,
  FollowBtnSvg,
  InfluenceArrowSvg,
  InfluenceCartSvg,
  PersonsSvg,
  TrendSvg,
} from "../../../public/assets/svg/landingPageSvgs";

interface Influencer {
  influencer: {
    name: string;
    logo: string;
    image: string[];
  };
}

const InfluencerCard = ({ influencer }: Influencer) => {
  const locale = useLocale();

  return (
    <div className="bg-white p-3 lg:p-4 rounded-xl flex flex-col gap-3 lg:gap-4 w-full relative cursor-pointer">
      <div className="absolute top-0 rtl:left-4 ltr:right-4">
        <TrendSvg />
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        <div className="relative w-[54px] lg:w-[63px] h-[54px] lg:h-[63px] rounded-full">
          <Image
            src={influencer.logo}
            alt="logo"
            width={63}
            height={63}
            className="w-full h-full rounded-full object-cover"
            loading="lazy"
          />

          <div className="absolute rounded-full lg:p-[2px] flex items-center justify-center bg-primary border border-white rtl:right-8 ltr:left-8 rtl:lg:right-10 ltr:lg:left-10 bottom-[-2px] lg:bottom-[-4px]">
            <FollowBtnSvg />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div>
            <h1 className="text-primary text-sm lg:text-base font-bold leading-5">
              {influencer.name}
            </h1>
            <p className="text-asphalt text-[10px] lg:text-sm leading-5">
              @ghaith_marwan
            </p>
          </div>
          <div className="flex items-center gap-2 text-asphalt text-[10px] lg:text-sm leading-5">
            <div className="flex items-center gap-2">
              <PersonsSvg />
              <p>6.7M</p>
            </div>
            <div className="flex items-center gap-2">
              <EyeSvg />
              <p>100M</p>
            </div>
            <div className="flex items-center gap-2">
              <InfluenceCartSvg />
              <p>10K</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 rounded-b-2xl overflow-hidden">
        {influencer.image.map((image, index) => (
          <Image
            key={index}
            alt="influence"
            src={image}
            width={100.5}
            height={122}
            className="w-full h-full  max-h-[85px] lg:max-h-[122px] object-cover"
            loading="lazy"
          />
        ))}
        <div className="w-full h-full relative">
          <Image
            alt="influence"
            src={influencer.image[0]}
            width={100.5}
            height={122}
            className="w-full h-full  max-h-[85px] lg:max-h-[122px] object-cover"
            loading="lazy"
          />
          <div className="absolute rotate-180 bg-black/40 w-full h-full top-0 flex items-center justify-center backdrop-blur-[6px]">
            <InfluenceArrowSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerCard;
