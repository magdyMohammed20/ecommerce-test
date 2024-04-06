import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

interface Props {
  items: {
    id: number;
    name: string;
    icon?: JSX.Element;
  }[];
  className: string;
  onChange: (name: string) => void;
  onClose?: () => void;
  isRounded?: boolean;
}

const Menu = ({ items, isRounded, onChange, onClose, className }: Props) => {
  const t = useTranslations();
  const menuRef = useRef<any>(null);
  const [openUpwards, setOpenUpwards] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>(items[0]?.name);

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current.contains(e.target)) {
        if (onClose) onClose();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      setOpenUpwards(rect.top > screenHeight / 2);
    }
  }, []);

  const handleItemChange = (value: string) => {
    setSelectedItem(value);
    onChange(value);
  };

  return (
    <div
      ref={menuRef}
      className={`absolute bg-white px-2 py-4 md:flex flex-col gap-1 w-full min-w-[261px] left-0 z-[999] shadow-xl rounded-xl
      ${openUpwards ? "bottom-14" : "top-14"} ${className} ${
        isRounded && "h-[200px] lg:h-[300px] overflow-y-scroll hide-scrollbar"
      }`}>
      {items?.map((item) => (
        <div
          key={item.id}
          onClick={() => handleItemChange(item?.name)}
          className={`flex items-center gap-4 px-2 py-3 rounded-lg w-full cursor-pointer hover:bg-cloud ${
            selectedItem === item?.name && "bg-cloud"
          }`}>
          <p>{item?.icon}</p>
          <p className={`${selectedItem === item?.name && "font-bold"}`}>
            {onClose ? item?.name : t(item?.name)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
