"use client";

import { useTranslations } from "next-intl";
import FileUploader from "./FileUploader";

const DocumentsForm = () => {
  const t = useTranslations();

  return (
    <div className="  flex flex-col ">
      <div className="grid grid-cols-1 gap-6  ">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className=" font-bold text-20">
              {t("Proof of identity and legal documents")}
            </h1>

            <div className="flex flex-col gap-8">
              <FileUploader title="Your national ID or residence permit" />
              <FileUploader title="Commercial registration certificate for the company/institution" />
              <FileUploader title="VAT registration certificate" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 pt-6">
          <div className="flex flex-col gap-6">
            <h1 className=" font-bold text-20">{t("Payment documents")}</h1>

            <div className="flex flex-col gap-8">
              <FileUploader title="Bank card" />
              <FileUploader title="Commercial bank account" />
              <FileUploader title="IBAN letter stamped by the bank" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsForm;
