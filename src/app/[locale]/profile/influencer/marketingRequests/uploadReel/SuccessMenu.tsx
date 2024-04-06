import { useTranslations } from "next-intl";

import { SuccessSvg } from "../../../../../../../public/assets/svg/checkoutSvg";

interface Props {
  onClose: () => void;
}

const SuccessMenu = ({ onClose }: Props) => {
  const t = useTranslations();

  return (
    <div className="text-primary fixed top-0 left-0 w-full min-h-screen bg-black/60 flex justify-center items-center z-40">
      <div className="bg-cloud bottom-0 md:top-0 md:my-auto fixed h-[92%] rounded-t-2xl max-h-[450px] md:rounded-[20px] p-5 md:p-8 w-full max-w-[660px] flex flex-col items-center text-center gap-6 overflow-scroll hide-scrollbar">
        <SuccessSvg />

        <p className="text-24">
          {t(
            "The clip will be reviewed and you will be notified upon approval"
          )}
          ..
        </p>

        <button onClick={onClose} className="btn-primary">
          {t("Okay")}
        </button>
      </div>
    </div>
  );
};

export default SuccessMenu;
