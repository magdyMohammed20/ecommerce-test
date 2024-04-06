import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import {
  Timer,
  TimerBg,
  TimerBgSm,
} from "../../../../../../public/assets/svg/marketingRequests";

interface Props {
  title?: string;
}

const TimerContainer = ({ title }: Props) => {
  const t = useTranslations();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const target = new Date("6/01/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sm:rounded-12 bg-silver lg:bg-silver/70 w-full max-w-[512px] lg:max-w-full xl:max-w-[512px] flex items-center text-16">
      <div className="relative">
        <span className="hidden sm:block">
          <TimerBg />
        </span>
        <span className="sm:hidden">
          <TimerBgSm />
        </span>
        <div className="absolute inset-0 my-auto mx-2 flex items-center gap-2 ">
          <Timer />
          <p className="text-white font-bold">
            {title ? t(title) : t("Acceptance period")}
          </p>
        </div>
      </div>

      <div className="w-full max-w-[190px] mx-auto flex items-center justify-between font-bold px-2">
        <div>
          <p>{minutes}</p>
          <p className="text-[10px] md:text-xs text-asphalt">{t("minutes")}</p>
        </div>
        <p>:</p>
        <div>
          <p>{hours}</p>
          <p className="text-[10px] md:text-xs text-asphalt">{t("hours")}</p>
        </div>
        <p>:</p>
        <div>
          <p>{days}</p>
          <p className="text-[10px] md:text-xs text-asphalt">{t("day")}</p>
        </div>
      </div>
    </div>
  );
};

export default TimerContainer;
