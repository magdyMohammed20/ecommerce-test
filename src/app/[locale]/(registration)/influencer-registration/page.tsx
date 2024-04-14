import PersonalInfo from "./PersonalInfo";
import SideBar from "./Sidebar";

const page = (/* { searchParams }: { searchParams: { tab: string } } */) => {
  //const tab = searchParams.tab;

  return (
    <div className=" w-full lg:flex items-start lg:gap-4 h-full bg-cloud">
      <PersonalInfo />
      <SideBar />
    </div>
  );
};

export default page;
