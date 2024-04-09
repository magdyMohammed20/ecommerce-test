import { useTranslations } from "next-intl";

import {
  ProductIcon,
  ReelsIcon,
  ReviewsIcon,
} from "../../../../../public/assets/svg/searchSvgs";
import { SearchIconSvg } from "../../../../../public/assets/svg/headerSvgs";

const types = [
  {
    id: 1,
    name: "Products",
    value: "products",
    icon: {
      light: <ProductIcon color="white" />,
      dark: <ProductIcon color="#455560" />,
    },
  },
  {
    id: 2,
    name: "Reels",
    value: "reels",
    icon: {
      light: <ReelsIcon color="white" />,
      dark: <ReelsIcon color="#455560" />,
    },
  },
  {
    id: 3,
    name: "reviews",
    value: "reviews",
    icon: {
      light: <ReviewsIcon color="white" />,
      dark: <ReviewsIcon color="#455560" />,
    },
  },
];

interface Props {
  onChange: (value: string) => void;
  searchType: string;
}

const SearchContainer = ({ onChange, searchType }: Props) => {
  const t = useTranslations();

  return (
    <div className="w-full bg-white">
      <div className="global-padding">
        <div className="py-3 md:py-4 border-t border-cloud flex flex-col-reverse md:flex-row gap-3 md:items-center justify-between">
          <div className="flex items-center gap-6 lg:gap-8 capitalize overflow-x-scroll hide-scrollbar">
            {types.map((type) => (
              <div
                key={type.id}
                className={`p-1 flex justify-between md:justify-start items-center cursor-pointer rounded-full ${
                  searchType === type.value && "bg-cloud"
                }`}
                onClick={() => onChange(type.value)}>
                <div
                  className={`p-2 rounded-full ${
                    searchType === type.value ? "bg-primary" : "bg-cloud"
                  }`}>
                  {searchType === type.value ? type.icon.light : type.icon.dark}
                </div>
                <p
                  className={`mx-3 font-bold whitespace-nowrap ${
                    searchType !== type.value && "text-asphalt"
                  }`}>
                  {t(type.name)}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-2 rounded-full py-3 px-6 md:max-w-[322px] w-full relative bg-cloud">
            <div className="flex items-center gap-2 w-full">
              <SearchIconSvg />
              <input
                type="text"
                placeholder={t("what did you search for?")}
                className="bg-transparent border-0 focus:outline-none text-sm text-opacity-70 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
