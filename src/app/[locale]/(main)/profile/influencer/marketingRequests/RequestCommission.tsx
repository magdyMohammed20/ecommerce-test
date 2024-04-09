import { useTranslations } from "next-intl";

import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Motivation",
    number: "500",
    desc: "SAR",
    image: "/assets/images/influencer/money.png",
  },
  {
    id: 2,
    name: "Commission",
    number: "5%",
    desc: "early promotion",
    image: "/assets/images/profile/smile.png",
  },
];

const RequestCommission = () => {
  const t = useTranslations();

  return (
    <div className="grid grid-cols-2 gap-2">
      {data.map((item) => (
        <div
          key={item.id}
          className="p-4 flex flex-col md:flex-row md:items-center gap-4 rounded-12 bg-white"
        >
          <div className="rounded-full w-12 h-12 flex items-start bg-cloud">
            <Image
              alt="coin"
              src={item.image}
              width={36}
              height={36}
              className="w-9 h-9 m-auto"
            />
          </div>
          <div className="flex flex-col gap-1 text-asphalt">
            <p className="text-xs md:text-sm opacity-70">{t(item.name)}:</p>
            <p className="font-bold">
              {item.number} {t(item.desc)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestCommission;
