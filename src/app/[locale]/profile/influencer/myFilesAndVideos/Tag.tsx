import { useTranslations } from "next-intl";
import React from "react";

interface BadgeProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  label,
  selected,
  onClick,
  className,
}) => {
  const t = useTranslations();
  return (
    <div
      className={`inline-block  rounded-full cursor-pointer gap-3  ${
        selected ? "bg-primary text-white" : "bg-cloud text-asphalt"
      } ${className ? className : "px-4 py-2 text-[14px]"}`}
      onClick={onClick}>
      {t(label)}
    </div>
  );
};

export default Badge;
