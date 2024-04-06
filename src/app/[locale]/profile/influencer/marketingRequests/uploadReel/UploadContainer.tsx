import { useTranslations } from "next-intl";
import { useDropzone } from "react-dropzone";

import { ReelUploadIcon } from "../../../../../../../public/assets/svg/marketingRequests";

interface Props {
  onChange: (video: string, name: string) => void;
}

const UploadContainer = ({ onChange }: Props) => {
  const t = useTranslations();
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: any) => {
      onChange(URL.createObjectURL(acceptedFiles[0]), acceptedFiles[0].path);
    },
  });

  return (
    <>
      <label
        {...getRootProps()}
        className="p-8 flex flex-col items-center justify-center gap-6 rounded-12 border border-dashed border-asphalt bg-white w-full h-full min-h-[325px] cursor-pointer"
      >
        <ReelUploadIcon />

        <div className="text-asphalt text-center">
          <p>
            <span className="font-bold">{t("Press here")}</span>{" "}
            {t("To add the video")}
          </p>
          <p>{t("Or by drag and drop")}.</p>
        </div>
      </label>

      <input {...getInputProps()} type="file" className="hidden" />
    </>
  );
};

export default UploadContainer;
