"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { InfoIconSVG } from "../../../../../public/assets/svg/influencer";
import Link from "next/link";

interface Props {
  title: string;
}
const FileUploader: React.FC<Props> = ({ title }) => {
  const t = useTranslations();
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="p-4 bg-cloud rounded-12 flex items-center justify-between ">
        <div className="text-16">{t(title)}</div>
        <label
          htmlFor="profile-image"
          className="cursor-pointer bg-primary rounded-full p-4  text-white text-[16px] font-[700]">
          <input
            type="file"
            id="profile-image"
            className="w-full h-full hidden"
          />
          {t("upload file")}
        </label>
      </div>

      <div className="flex items-center gap-2">
        <InfoIconSVG className="w-[20px] h-[20px]" />
        <div className="text-asphalt font-[400] text-[14px]">
          {t("upload_extensions")}{" "}
          <Link href="/" className="text-[#5A46FA]">
            {t("Such as2")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
