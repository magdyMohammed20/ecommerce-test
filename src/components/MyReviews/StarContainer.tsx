import { useLocale } from "next-intl";

import Image from "next/image";

const StarContainer = ({ children, className }: { children: React.ReactNode; className?:string }) => {
  const locale = useLocale();

  return (
    <div
      className={`flex items-center gap-3 rounded-full p-1 w-full xl:w-fit ${
        locale === "ar" ? "order-gradient-ar" : "order-gradient"
      }`}
    >
      <div className="rounded-full p-1 star-bg">
        <Image
          src="/assets/images/profile/smile.png"
          alt="img"
          width={24}
          height={24}
          className={`${className ? className : "w-6 h-6"} mx-auto`}
        />
      </div>
      <p className="text-xs md:text-sm flex flex-col">{children}</p>
    </div>
  );
};

export default StarContainer;
