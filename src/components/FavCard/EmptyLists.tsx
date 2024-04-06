import { useTranslations } from "next-intl";

const EmptyLists = () => {
  const t = useTranslations();
  return (
    <div className="w-full bg-white min-h-screen flex flex-col items-center justify-center text-center gap-8 px-[7vw] rounded-xl">
      <div className="text-asphalt text-24">
        <p>{t("empty-1")}</p>
        <p>{t("empty-2")}</p>
      </div>
      <button className="btn-primary !w-fit !text-asphalt !bg-cloud">
        {t("Create a list")}
      </button>
    </div>
  );
};

export default EmptyLists;
