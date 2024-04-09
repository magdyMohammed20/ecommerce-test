import { useTranslations } from "next-intl";

import Image from "next/image";

const ReadyVideo = () => {
  const t = useTranslations();
  return (
    <div className="p-3 flex items-center gap-2 rounded-xl bg-cloud">
      <div className="w-full max-w-[33px] h-[51px] rounded-[4px] overflow-hidden">
        <Image
          alt="product"
          src="/assets/images/product/product-1.png"
          width={54}
          height={66}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-asphalt text-[14px]">
          {t("This text is an example that can be replaced")}
        </p>
        <div>
          <span className="text-[12px] bg-white py-[4px] px-[8px] rounded-[40px] text-asphalt">
            {t("#sport style")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReadyVideo;
