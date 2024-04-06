import { useTranslations, useLocale } from "next-intl";

import Image from "next/image";

import HeroSlider from "./HeroSlider";

import { LineSvg } from "../../../public/assets/svg/heroSvg";

const Hero = () => {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <div className="relative min-h-[681px] text-white flex w-full">
      <video
        src={"/assets/videos/video1.mp4"}
        loop
        autoPlay
        muted
        className="object-cover absolute h-full w-full top-0 left-0 bottom-0 right-0"
      ></video>

      <div className="z-10 bg-black/85 flex flex-col lg:flex-row items-center text-center lg:text-start justify-between w-full gap-10 relative">
        <div className="global-slider-padding flex flex-col lg:flex-row items-center text-center lg:text-start justify-between gap-10">
          <div className="flex flex-col gap-6 lg:gap-[48px] mt-10 lg:mt-0">
            <div className="text-[28px] lg:text-[64px] font-extrabold leading-[50px] lg:leading-[70px]">
              <div className="flex flex-col lg:w-fit">
                <p>{t("hero-1")}</p>
                <LineSvg />
              </div>
              <p className="my-3">{t("hero-2")}</p>
              <p className="text-sm lg:text-[22px] font-normal">
                {t("hero-3")}
              </p>
            </div>

            <div className="flex items-center p-2 gap-2 mx-auto lg:mx-0 rounded-full border border-white/20 bg-white/20 max-w-[167px] h-[56px]">
              <div className="relative flex items-center">
                <div className="z-30 w-10 h-10 rounded-full border border-cloud">
                  <Image
                    src="/assets/images/hero/icon-1.png"
                    alt="follower"
                    width={40}
                    height={40}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="z-20 -mx-4 w-10 h-10 rounded-full border border-cloud">
                  <Image
                    src="/assets/images/hero/icon-2.png"
                    alt="follower"
                    width={40}
                    height={40}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="z-10 w-10 h-10 rounded-full border border-cloud">
                  <Image
                    src="/assets/images/hero/icon-3.png"
                    alt="follower"
                    width={40}
                    height={40}
                    className="w-full h-full rounded-full"
                  />
                </div>
              </div>
              <p className="font-bold">10k+</p>
            </div>
          </div>

          <div className="w-[500px] hidden lg:block" />
          <HeroSlider />
        </div>
      </div>
    </div>
  );
};

export default Hero;
