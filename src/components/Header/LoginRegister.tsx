import { useState } from "react";
import { useTranslations } from "next-intl";

import { MuiOtpInput } from "mui-one-time-password-input";
import PhoneExtension from "../PhoneExtension/PhoneExtension";

import { LoginPerson } from "../../../public/assets/svg/headerSvgs";
import { ProductClose } from "../../../public/assets/svg/checkoutSvg";

import "./style.css";

interface Props {
  onClose: () => void;
}

const LoginRegister = ({ onClose }: Props) => {
  const t = useTranslations();
  const [otp, setOtp] = useState<string>("");
  const [showOtp, setShowOtp] = useState<boolean>(false);

  const handleShowOtp = () => {
    setShowOtp((prevState) => !prevState);
  };

  const handleChange = (newValue: string) => {
    setOtp(newValue);
  };

  return (
    <div className="fixed inset-0 bg-black/60 w-full min-h-screen z-50 flex items-center justify-center">
      <div className="bg-cloud bottom-0 md:top-0 md:my-auto fixed h-[92%] rounded-t-2xl max-h-[314px] md:rounded-[20px] p-5 md:p-8 w-full max-w-[660px] flex flex-col gap-6">
        <div className="flex items-start justify-between">
          {!showOtp ? (
            <div className="flex flex-col gap-2">
              <LoginPerson />
              <p className="text-20 font-bold">
                {t("Log in/Create a new account")}
              </p>
              <p className="text-sm text-asphalt">
                {t(
                  "Enter your phone number and enjoy a faster shopping experience"
                )}
                ..
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <p className="text-20 font-bold">{t("Confirm mobile number")}</p>
              <p className="text-sm text-asphalt">
                {t("Please enter the code sent to your phone number")} 568***
              </p>
            </div>
          )}
          <div className="cursor-pointer" onClick={onClose}>
            <ProductClose />
          </div>
        </div>

        {!showOtp ? (
          <div className="flex items-center gap-4">
            <PhoneExtension className="bg-white" />
            <div className="bg-white py-3 px-4 flex flex-col gap-1 rounded-lg w-full">
              <p className="capitalize text-asphalt text-[10px] md:text-[14px]">
                {t("Phone Number")}
              </p>
              <input
                type="text"
                className="bg-transparent focus:outline-none text-asphalt placeholder:font-normal font-bold w-full"
                placeholder="551222XXX"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <MuiOtpInput
              value={otp}
              onChange={handleChange}
              length={5}
              TextFieldsProps={{ placeholder: "x" }}
              className="!p-0"
            />

            <div className="flex items-center gap-3">
              <p className="text-asphalt text-sm">
                {t("Didn't receive the code? Ask to resend it within")}
              </p>
              <p className="text-sm font-bold">00:4</p>
            </div>
          </div>
        )}

        <button onClick={handleShowOtp} className="btn-primary">
          {t("Continue")}
        </button>
      </div>
    </div>
  );
};

export default LoginRegister;
