import { useTranslations } from "next-intl";

import { ShareIconSvg } from "../../../../public/assets/svg/product";
import { SearchedFilter } from "../../../../public/assets/svg/searchMenu";
import {
  AllIcon,
  CategoryIcon,
  InfluencerIcon,
  ProductIcon,
  ReelsIcon,
} from "../../../../public/assets/svg/searchSvgs";

const types = [
  {
    id: 1,
    name: "All Results",
    value: "all",
    icon: {
      light: <AllIcon color="white" />,
      dark: <AllIcon color="#455560" />,
    },
  },
  {
    id: 2,
    name: "Products",
    value: "products",
    icon: {
      light: <ProductIcon color="white" />,
      dark: <ProductIcon color="#455560" />,
    },
  },
  {
    id: 3,
    name: "Influencers",
    value: "influencers",
    icon: {
      light: <InfluencerIcon color="white" />,
      dark: <InfluencerIcon color="#455560" />,
    },
  },
  {
    id: 4,
    name: "Reels",
    value: "reels",
    icon: {
      light: <ReelsIcon color="white" />,
      dark: <ReelsIcon color="#455560" />,
    },
  },
  {
    id: 5,
    name: "Categories",
    value: "categories",
    icon: {
      light: <CategoryIcon color="white" />,
      dark: <CategoryIcon color="#455560" />,
    },
  },
];

interface Props {
  onChange: (value: string) => void;
  searchType: string;
}

const TopBar = ({ onChange, searchType }: Props) => {
  const t = useTranslations();

  return (
    <div className="bg-white ">
      <div className="global-padding py-3 lg:py-6 flex justify-between text-primary overflow-scroll hide-scrollbar">
        <div className="flex items-center gap-3 md:gap-6 lg:gap-8">
          <div className="hidden lg:flex items-center gap-2 rtl:pl-8 ltr:pr-8 rtl:border-l ltr:border-r border-cloud">
            <SearchedFilter />
            <p className="font-bold">
              {t("Filter search results for “shoes”")}
            </p>
          </div>
          {types.map((type) => (
            <div
              key={type.id}
              className={`p-1 flex items-center cursor-pointer rounded-full ${
                searchType === type.value && "bg-cloud"
              }`}
              onClick={() => onChange(type.value)}
            >
              <div
                className={`p-2 rounded-full ${
                  searchType === type.value ? "bg-primary" : "bg-cloud"
                }`}
              >
                {searchType === type.value ? type.icon.light : type.icon.dark}
              </div>
              <p
                className={`mx-3 font-bold whitespace-nowrap ${
                  searchType !== type.value && "text-asphalt"
                }`}
              >
                {t(type.name)}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-cloud p-3 rounded-full cursor-pointer ltr:rotate-180 hidden xl:block">
          <ShareIconSvg color="#455560" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
