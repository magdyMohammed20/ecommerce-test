import { useTranslations } from "next-intl";

interface Props {
  onSave: () => void;
  onClose: () => void;
  className?: string;
}

const AcceptRejectBtns = ({ onSave, onClose, className }: Props) => {
  const t = useTranslations();

  return (
    <>
      <button onClick={onSave} className={`btn-primary ${className}`}>
        {t("Accept")}
      </button>
      <button onClick={onClose} className={`btn-secondary ${className}`}>
        {t("Reject")}
      </button>
    </>
  );
};

export default AcceptRejectBtns;
