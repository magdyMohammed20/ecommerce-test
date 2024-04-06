import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import { CustomSwitch } from "@/utils/CustomSwitch";

import {
  AddFriends,
  DeleteList,
  PrivateMenu,
  RenameList,
  TasksIcon,
} from "../../../public/assets/svg/favorite";

const data = [
  {
    id: 1,
    name: "“Private” menu",
    icon: <PrivateMenu />,
    isSwitch: true,
    value: "menu"
  },
  {
    id: 2,
    name: "Add a friend",
    icon: <AddFriends />,
    isSwitch: false,
    value: "add"
  },
  {
    id: 5,
    name: "Edit list",
    icon: <TasksIcon />,
    isSwitch: false,
    value: "edit"
  },
  {
    id: 3,
    name: "Re-name",
    icon: <RenameList />,
    isSwitch: false,
    value: "rename"
  },
  {
    id: 4,
    name: "Delete list",
    icon: <DeleteList />,
    isSwitch: false,
    value: "delete"
  },
];

interface Props{
  onSelect: (value: string) => void;
}

const FavCardMenu = ({onSelect}: Props) => {
  const t = useTranslations();
  const menuRef = useRef<any>(null);
  const [openUpwards, setOpenUpwards] = useState<boolean>(false);

  useEffect(() => {
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      setOpenUpwards(rect.top > screenHeight / 2);
    }
  }, []);

  return (
    <div ref={menuRef} className={`bg-white w-[267px] rtl:left-0 ltr:right-0 p-4 flex flex-col gap-1 rounded-lg border border-cloud shadow-lg z-50 absolute mt-2
    ${openUpwards && "bottom-10"}`}>
      {data.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center py-3 px-2 rounded-lg text-asphalt hover:font-bold cursor-pointer hover:bg-cloud"
        >
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => onSelect(item.value)}>
            {item.icon}
            <p className={`${item.id === 4 && "text-[#FA285A]"}`}>
              {t(item.name)}
            </p>
          </div>
          {item.isSwitch && <CustomSwitch />}
        </div>
      ))}
    </div>
  );
};

export default FavCardMenu;
