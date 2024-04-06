import { useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";

interface Props {
  onClose: () => void;
  onSave: () => void;
}

const CompletedMenu = ({ onClose, onSave }: Props) => {
  const t = useTranslations();
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  return (
    <div className="fixed bg-black/60 top-0 left-0 w-full min-h-screen flex items-center justify-center z-50">
      <div className="bg-white w-full md:max-w-[600px] px-[21px] py-6 md:p-8 h-fit flex flex-col items-center gap-6 md:rounded-[20px] bottom-0 md:top-0 md:my-auto fixed rounded-t-2xl">
        {isCompleted ? (
          <>
            <Image
              src="/assets/images/profile/smile.png"
              alt="img"
              width={168}
              height={168}
              className="w-[168px] h-[168px] mx-auto"
            />

            <p className="text-24 font-bold">{t("earn-2")}</p>

            <button className="btn-primary" onClick={onSave}>
              {t("Okay")}
            </button>
          </>
        ) : (
          <>
            <Image
              src="/assets/images/profile/coin.png"
              alt="img"
              width={147}
              height={123}
              className="w-[147px] h-[123px] mx-auto"
            />

            <div className="flex items-center gap-4 flex-col text-center">
              <p className="text-24 font-bold">
                <span className="text-[#FA285A]">96 {t("points")}</span>{" "}
                {t("don't miss the chance to achieve them!")}
              </p>

              <p className="text-asphalt text-sm">{t("earn-1")}</p>
            </div>

            <div className="flex items-center w-full gap-2">
              <button
                className="btn-primary"
                onClick={() => setIsCompleted(true)}
              >
                {t("Follow up evaluation")}
              </button>
              <button
                className="btn-primary !bg-cloud !text-asphalt"
                onClick={onClose}
              >
                {t("Exit evaluation")}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CompletedMenu;
