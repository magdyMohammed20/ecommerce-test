import { useTranslations } from "next-intl";
import Image from "next/image";
import UserActionBtn from "./UserActionBtn";
import { MerchantEye } from "../../../../../../../public/assets/svg/searchMenu";
import { AddressEditIcon } from "../../../../../../../public/assets/svg/checkoutSvg";
import EditUserModal from "./EditUserModal";
import { useState } from "react";
import EditNameModal from "./EditNameModal";
import IntroModal from "./IntroModal";
import InterestsModal from "./InterestsModal";
import EditUsernameModal from "./EditUsernameModal";

const UserInfoCard = () => {
  const t = useTranslations();
  const [toggleEditModal, setToggleEditModal] = useState(false);
  const [toggleEditName, setToggleEditName] = useState(false);
  const [toggleEditUserName, setToggleUserName] = useState(false);
  const [toggleIntro, setToggleIntro] = useState(false);
  const [toggleInerests, setToggleInerests] = useState(false);
  const toggleModal = () => {
    setToggleEditModal(!toggleEditModal);
  };

  const toggleEditNameModal = () => {
    toggleModal();
    setToggleEditName(!toggleEditName);
  };

  const toggleEditIntroModal = () => {
    toggleModal();
    setToggleIntro(!toggleIntro);
  };

  const toggleInterestsModal = () => {
    toggleModal();
    setToggleInerests(!toggleInerests);
  };

  const toggleUserNameModal = () => {
    toggleModal();
    setToggleUserName(!toggleEditUserName);
  };
  return (
    <div className="flex flex-col gap-4 w-full ">
      {toggleEditModal && (
        <EditUserModal
          onClose={toggleModal}
          toggleEditNameModal={toggleEditNameModal}
          toggleEditIntroModal={toggleEditIntroModal}
          toggleInterestsModal={toggleInterestsModal}
          toggleUserNameModal={toggleUserNameModal}
        />
      )}

      {toggleEditName && <EditNameModal onClose={toggleEditNameModal} />}
      {toggleIntro && <IntroModal onClose={toggleEditIntroModal} />}
      {toggleInerests && <InterestsModal onClose={toggleInterestsModal} />}
      {toggleEditUserName && (
        <EditUsernameModal onClose={toggleUserNameModal} />
      )}
      <div className="flex justify-between md:items-center w-full">
        <div className="flex flex-col md:flex-row items-start  gap-4">
          <Image
            src="/assets/images/hero/icon-1.png"
            alt="influ"
            width={54}
            height={54}
            className="w-[54px] h-[54px] rounded-full object-cover"
          />
          <div className="flex flex-col gap-2">
            <p dir="ltr" className="text-16 font-bold w-fit">
              Ghaith Marwan 🍉 غيث مروان
            </p>
            <p
              dir="ltr"
              className="bg-cloud px-2 py-[2px] rounded-full text-primary/70 text-[10px] md:text-xs font-bold w-fit">
              @ghaith_marwan
            </p>
          </div>
        </div>

        <div className="flex gap-2 self-start">
          <UserActionBtn
            openModal={toggleModal}
            Icon={<AddressEditIcon className="w-4 h-4 md:w-6 md:h-6" />}
          />
          <UserActionBtn
            Icon={
              <MerchantEye className="w-4 h-4 md:w-6 md:h-6" color="#455560" />
            }
          />
        </div>
      </div>

      <div className="text-asphalt text-sm">
        <p>{t("merchant_2")}</p>
        <p>{t("merchant_3")}</p>
      </div>
    </div>
  );
};

export default UserInfoCard;
