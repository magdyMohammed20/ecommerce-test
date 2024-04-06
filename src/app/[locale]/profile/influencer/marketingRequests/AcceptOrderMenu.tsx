import { useTranslations } from "next-intl";

import Image from "next/image";

interface Props {
  onSave: () => void;
}

const AcceptOrderMenu = ({ onSave }: Props) => {
  const t = useTranslations();
  return (
    <div className="fixed bg-black/60 top-0 left-0 w-full min-h-screen flex items-center justify-center z-50">
      <div className="bg-white w-full md:max-w-[600px] px-[21px] py-6 md:p-8 h-fit flex flex-col items-center gap-6 md:rounded-[20px] bottom-0 md:top-0 md:my-auto fixed rounded-t-2xl">
        <div className="flex flex-col gap-4 items-center text-center">
          <Image
            src="/assets/images/profile/accept-order.png"
            alt="img"
            width={116}
            height={116}
            className="w-[116px] h-[116px] mx-auto"
          />
          <p className="text-24 font-bold">{t("accept-1")}</p>
          <p className="text-sm">{t("accept-2")}</p>
        </div>

        <button className="btn-primary" onClick={onSave}>
          {t("Okay")}
        </button>
      </div>
    </div>
  );
};

export default AcceptOrderMenu;
