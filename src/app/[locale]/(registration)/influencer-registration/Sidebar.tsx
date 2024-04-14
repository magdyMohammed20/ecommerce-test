"use client";

import ContentSlider from "./ContentSlider";

const SideBar = () => {
  return (
    <div
      className=" w-full h-screen lg:max-w-[288px] xl:max-w-[498px] lg:px-8 lg:py-[100px] xl:px-[100px] xl:py-[70px] hidden lg:flex flex-col "
      style={{
        background:
          "linear-gradient(93deg, rgba(155, 243, 129, 0.12) 1.64%, rgba(90, 70, 250, 0.12) 99.68%), #FFF",
      }}>
      <ContentSlider />
    </div>
  );
};

export default SideBar;
