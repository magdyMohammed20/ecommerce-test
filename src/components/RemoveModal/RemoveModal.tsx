import { useTranslations } from "next-intl";

interface Props {
  title: string;
  onSave: () => void;
  onClose: () => void;
  cardNumber?: string;
  listName?: string;
}

const RemoveModal = ({
  title,
  cardNumber,
  onSave,
  onClose,
  listName,
}: Props) => {
  const t = useTranslations();

  return (
    <div className="fixed bg-black/60 top-0 left-0 w-full min-h-screen flex items-center justify-center z-50">
      <div className="bg-white w-full md:max-w-[600px] px-[21px] py-6 md:p-8 h-fit flex flex-col gap-6 md:rounded-[20px] bottom-0 md:top-0 md:my-auto fixed rounded-t-2xl">
        <div className="flex flex-col gap-2 items-center text-center">
          <p className="text-2xl font-bold">
            {title === "Review"
              ? t("Are you sure to delete the comment?")
              : t("Remove") + " " + t(title)}
          </p>
          {title === "Review" ? (
            <p>{t("Once a comment is deleted, it cannot be restored again")}</p>
          ) : (
            <p>
              {t("Are you sure you want to delete this")} {t(title)} {listName}
              {cardNumber && (
                <span dir="ltr">
                  <br />
                  {cardNumber}
                </span>
              )}
              {t("?")}
            </p>
          )}
        </div>

        <div className="flex items-center w-full gap-2">
          <button className="btn-primary" onClick={onSave}>
            {t("Yes")}
          </button>
          <button
            className="btn-primary !bg-cloud !text-asphalt"
            onClick={onClose}
          >
            {t("Cancel")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveModal;
