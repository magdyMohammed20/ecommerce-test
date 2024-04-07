import { useLocale, useTranslations } from "next-intl";
import {
  ProductArrowLeft,
  ProductClose,
} from "../../../../../../public/assets/svg/checkoutSvg";
import Image from "next/image";
import { UploadImgIcon } from "../../../../../../public/assets/svg/profile";

interface Props {
  onClose: () => void;
  toggleEditNameModal: () => void;
  toggleEditIntroModal: () => void;
  toggleInterestsModal: () => void;
  toggleUserNameModal: () => void;
}

const tags = [
  {
    id: 1,
    name: "shoes",
  },
  {
    id: 2,
    name: "men fashions",
  },
  {
    id: 3,
    name: "accessories",
  },
];

const EditUserModal = ({
  onClose,
  toggleEditNameModal,
  toggleEditIntroModal,
  toggleInterestsModal,
  toggleUserNameModal,
}: Props) => {
  const t = useTranslations();

  return (
    <div className="text-primary fixed top-0 left-0 w-full min-h-screen bg-black/60 flex justify-center items-center z-[999]">
      <div className="bg-cloud bottom-0 md:top-0 md:my-auto fixed h-[68%] md:h-[83%]  rounded-t-2xl md:rounded-[20px] p-5 md:p-8 w-full md:max-w-[660px] flex flex-col gap-6 overflow-scroll hide-scrollbar">
        <div className="flex items-center justify-between pb-6 border-b border-b-silver/50">
          <p className="text-20">{t("edit profile")}</p>
          <div className="cursor-pointer" onClick={onClose}>
            <ProductClose />
          </div>
        </div>

        <div className="  bg-cloud  rounded-xl flex flex-col gap-4">
          <div className="pb-[29px]  border-b-cloud flex justify-center">
            <div className="relative rounded-full border border-white w-[109px] h-[109px] md:w-[170px] md:h-[170px]">
              <Image
                src="/assets/images/hero/icon-1.png"
                alt="pro"
                width={170}
                height={170}
                className="w-full h-full  rounded-full"
              />
              <label
                htmlFor="profile-image"
                className="cursor-pointer bg-primary rounded-full p-3 absolute left-0 right-0 mx-auto w-fit -bottom-5">
                <input
                  type="file"
                  id="profile-image"
                  className="w-full h-full hidden"
                />
                <UploadImgIcon />
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-asphalt  text-sm">
            <div
              className="bg-white p-[12px] rounded-lg flex justify-between items-center cursor-pointer"
              onClick={() => toggleEditNameModal()}>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-16">{t("name")}</p>
                <p className="font-[400]">Ghaith Marwan 🍉 غيث مروان</p>
              </div>

              <div>
                <ProductArrowLeft
                  classNames={`${
                    useLocale() == "en" ? "transform rotate-180" : ""
                  }`}
                />
              </div>
            </div>

            <div
              className="bg-white p-[12px] rounded-lg flex justify-between items-center cursor-pointer"
              onClick={() => toggleUserNameModal()}>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-16">{t("user_name")}</p>
                <p className="font-[400]"> ghaith_marwan@</p>
              </div>

              <div>
                <ProductArrowLeft
                  classNames={`${
                    useLocale() == "en" ? "transform rotate-180" : ""
                  }`}
                />
              </div>
            </div>

            <div
              className="bg-white p-[12px] rounded-lg flex justify-between items-center cursor-pointer"
              onClick={() => toggleEditIntroModal()}>
              <div className="flex flex-col gap-2">
                <div className="font-bold text-16">{t("diff_note")}</div>
                <div className="font-[400]">
                  <p>{t("merchant_2")}</p>
                  <p>{t("merchant_3")}</p>
                </div>
              </div>

              <p>
                <ProductArrowLeft
                  classNames={`${
                    useLocale() == "en" ? "transform rotate-180" : ""
                  }`}
                />
              </p>
            </div>

            <div
              className="bg-white p-[12px] rounded-lg flex justify-between items-center cursor-pointer"
              onClick={() => toggleInterestsModal()}>
              <div className="flex flex-col gap-2">
                <div className="font-bold text-16">{t("interests")}</div>
                <div className="flex gap-2">
                  {tags.map((tag) => (
                    <div
                      className="bg-cloud py-1 px-2 rounded-full text-asphalt"
                      key={tag.id}>
                      {t(tag.name)}
                    </div>
                  ))}
                </div>
              </div>

              <p>
                <ProductArrowLeft
                  classNames={`${
                    useLocale() == "en" ? "transform rotate-180" : ""
                  }`}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
