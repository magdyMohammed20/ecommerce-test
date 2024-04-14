"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import PersonalInforamtionForm from "./PersonalInfoForm";
import SocialMediaInfo from "./SocialMediaInfo";
import Documents from "./Documents";

const PersonalInfo = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const t = useTranslations();
  const handleNextStep = () => {
    setCurrentStep((prevStep) => (prevStep < 6 ? prevStep + 1 : prevStep));
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <div className="flex flex-col gap-4 md:gap-6 w-full">
      <div className="overflow-scroll hide-scrollbar p-6">
        <div className=" flex flex-col gap-4 md:gap-6">
          <div data-hs-stepper='{"mode": "non-linear"}'>
            <div className="bg-white p-4 flex flex-col gap-6 rounded-[12px]">
              <h1 className="text-[20px] font-bold">{t("personal_info")}</h1>
              <ul className="relative flex flex-row gap-x-2">
                {[1, 2, 3, 4, 5, 6].map((step, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                    {/*  Step : {step} , <br />
                    Current : {currentStep} */}
                    <div className="w-full h-[8px] rounded-full flex-1 bg-silver overflow-hidden">
                      <div
                        className={`h-full ${
                          currentStep - step == 0 && currentStep >= 1
                            ? "w-1/2 bg-primary"
                            : ""
                        }

                        ${
                          currentStep - step >= 2 || currentStep - step == 1
                            ? "w-full bg-primary"
                            : ""
                        }
         `}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 sm:mt-8">
              <div className="p-6 rounded-xl bg-white">
                {[1, 2, 3, 4, 5, 6].map((step) => (
                  <div
                    className="w-full"
                    key={step}
                    style={{
                      display: step === currentStep ? "block" : "none",
                    }}>
                    {step == 1 && <PersonalInforamtionForm />}
                    {step == 2 && <SocialMediaInfo />}
                    {step == 3 && <Documents />}
                    {/* {step == 2 && <MarketInfoForm />} */}
                    {/* {step == 3 && <MarketInfoForm2 />}
                    {step == 4 && <BillingInfoForm />}
                    {step == 5 && <DocumentsForm />} */}
                  </div>
                ))}

                <div className="mt-8 flex justify-between items-center gap-x-2">
                  {currentStep >= 3 && (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className={`p-4  flex items-center justify-center rounded-full w-full font-bold mt-2 "bg-primary text-white bg-primary`}>
                      {t("register")}
                    </button>
                  )}

                  {currentStep < 3 && (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className={`p-4 bg-primary flex items-center justify-center rounded-full w-full text-white font-bold mt-2 ${
                        currentStep === 3
                          ? "disabled:opacity-50 disabled:pointer-events-none"
                          : ""
                      }`}>
                      {t("next")}
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className={`p-4  flex items-center justify-center rounded-full w-full font-bold mt-2 ${
                      currentStep === 1
                        ? "disabled:opacity-50 disabled:pointer-events-none bg-silver text-primary"
                        : "bg-silver text-primary"
                    }`}>
                    {t("back")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
