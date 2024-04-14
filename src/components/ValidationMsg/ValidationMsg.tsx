import { useTranslations } from "next-intl";
import React from "react";

interface Props {
  icon: any;
  message: string;
}

const ValidationMsg: React.FC<Props> = ({ icon, message }) => {
  const t = useTranslations();
  return (
    <div className="flex items-center gap-2">
      {icon}
      <div
        className={` font-[400] text-[12px] lg:text-[14px] ${
          message == "expired_code" ? "text-[#FA285A]" : "text-[#02AA7C]"
        }`}>
        {t(message)}{" "}
      </div>
    </div>
  );
};

export default ValidationMsg;
