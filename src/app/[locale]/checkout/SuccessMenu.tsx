import { useTranslations } from "next-intl";

import Link from "next/link";

import { SuccessSvg } from "../../../../public/assets/svg/checkoutSvg";

interface Props {
  onClose: () => void;
}

const SuccessMenu = ({ onClose }: Props) => {
  const t = useTranslations();

  return (
    <div className="text-primary fixed top-0 left-0 w-full min-h-screen bg-black/90 flex justify-center items-center z-40">
      <div className="bg-cloud bottom-0 md:top-0 md:my-auto fixed h-[92%] rounded-t-2xl max-h-[613px] md:rounded-[20px] p-5 md:p-8 w-full max-w-[660px] flex flex-col items-center text-center gap-6 overflow-scroll hide-scrollbar">
        <SuccessSvg />

        <div className="flex flex-col gap-2">
          <p className="text-28">
            {t("Your request has been received successfully")}
          </p>
          <p className="text-18 text-asphalt">
            {t("We are happy to have you use Sam Valley")}
          </p>
        </div>

        <p className="text-[10px] md:text-sm font-bold">{t("order-no")}</p>

        <div className="flex flex-col gap-4 w-full">
          <button onClick={onClose} className="p-4 w-full text-center bg-primary text-white font-bold capitalize rounded-full">
            {t("order tracking")}
          </button>
          <Link
            href="/"
            className="p-4 w-full text-center bg-silver/70 text-asphalt font-bold capitalize rounded-full"
          >
            {t("Home-web")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessMenu;
