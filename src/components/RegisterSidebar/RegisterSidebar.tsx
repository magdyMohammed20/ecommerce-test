"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";

const data = [
  {
    image: "/assets/images/companyReg/flame.png",
    name: "Reach a wide audience",
    desc: "Provide your store with access to hundreds of thousands of potential buyers searching for your products",
  },
  {
    image: "/assets/images/companyReg/rocket.png",
    name: "Promote your products with ease",
    desc: "Now you can simply request a product promotion for one of your favorite influencers in our app effortlessly and with ease",
  },
  {
    image: "/assets/images/companyReg/bag.png",
    name: "Promote and increase sales",
    desc: "reg-1",
  },
];

const RegisterSidebar = () => {
  const t = useTranslations();
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <div className="py-[100px] px-[70px] flex flex-col gap-8 register-bg  min-h-screen w-full max-w-[498px]">
      <Image alt="icon" src={data[selectedTab].image} width={76} height={76} />

      <div className="flex flex-col gap-6">
        <p className="text-24 font-bold">{t(data[selectedTab].name)}:</p>
        <p className="text-18">{t(data[selectedTab].desc)}.</p>
      </div>

      <div className="w-full flex items-center gap-2 justify-center">
        {data.map((item, index) => (
          <p
            key={index}
            onClick={() => handleTabChange(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              selectedTab === index ? "bg-secondary" : "bg-silver"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RegisterSidebar;
