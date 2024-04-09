import { useTranslations } from "next-intl";
import { ProductClose } from "../../../../../../../public/assets/svg/checkoutSvg";
import Image from "next/image";
import NotificationContainer from "./NotificationContainer";
import { LoveReact } from "../../../../../../../public/assets/svg/influencerNotifications";

interface Props {
  onClose: () => void;
}

const LikesModal = ({ onClose }: Props) => {
  const t = useTranslations();
  const ReactCard = () => {
    return (
      <NotificationContainer className="w-full" removeGap={true}>
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-[8px] flex-1">
            <div className="relative">
              <div className=" w-[32px] h-[32px] rounded-full overflow-hidden ">
                <Image
                  alt="User"
                  src={"/assets/images/product/product-1.png"}
                  width={32}
                  height={32}
                  className="w-full h-full"
                />

                <span className="absolute flex justify-center items-center  bottom-0 -left-0 bg-[#FA285A] w-[14px] h-[14px]  rounded-full border border-white z-[999]">
                  <LoveReact />
                </span>
              </div>
            </div>

            <span className="text-asphalt text-[14px] whitespace-nowrap">
              {" "}
              <span className="font-bold text-[14px]">{t("manar")}</span>{" "}
              {t("like post")}
            </span>
          </div>
          <div className="w-full max-w-[45px] h-[65px]  md:max-w-[31px] md:h-[45px] rounded-lg overflow-hidden">
            <Image
              alt="product"
              src="/assets/images/product/product-1.png"
              width={54}
              height={66}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </NotificationContainer>
    );
  };
  return (
    <div className="text-primary fixed top-0 left-0 w-full min-h-screen bg-black/90 flex justify-center items-center z-[999]">
      <div className="bg-cloud bottom-0 md:top-0 md:my-auto fixed  rounded-t-2xl max-h-[900px] md:rounded-[20px] p-5 md:p-8 w-full max-w-[660px] flex flex-col items-center text-center gap-6 overflow-scroll hide-scrollbar">
        <div className="flex items-center justify-between pb-6 border-b border-b-silver/50 w-full">
          <p className="text-20">{t("like_1")}</p>
          <div className="cursor-pointer" onClick={onClose}>
            <ProductClose />
          </div>
        </div>

        <Image
          src="/assets/images/landingPage/product-1.png"
          alt="product"
          width={260}
          height={300}
          className="w-1/3 h-full  group-hover:scale-110 duration-500 ease-in-out rounded-[12px]"
          loading="lazy"
        />
        <div className="flex flex-col gap-3 w-full">
          <ReactCard />
          <ReactCard />
          <ReactCard />
        </div>
      </div>
    </div>
  );
};

export default LikesModal;
