import { useTranslations } from "next-intl";
import { HeartIconSvg } from "../../../../../../../public/assets/svg/influencer";

const CommentArea = ({ isDiff }: { isDiff?: true }) => {
  const t = useTranslations();
  return (
    <div className="p-3 flex flex-col  gap-[8px] rounded-xl bg-cloud">
      <span className="text-[14px]  text-asphalt">
        {isDiff ? (
          <div>
            {t("commented_2")} <span className="font-bold">@SaraAhmed</span>
          </div>
        ) : (
          <>{t("fantastic")}</>
        )}
      </span>

      <div className="flex gap-[6px]">
        <button className=" flex gap-[4px] items-center rounded-full text-[12px] py-[2px] px-[8px]  bg-[#d9dce1b3]  justify-center">
          <HeartIconSvg color="#455560" />
          {t("reply")}
        </button>
        <button className=" flex gap-[4px] items-center rounded-full text-[12px] py-[2px] px-[8px]  bg-[#d9dce1b3]  justify-center">
          <HeartIconSvg color="#455560" />
          {t("like")}
        </button>
      </div>
    </div>
  );
};

export default CommentArea;
