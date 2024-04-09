import AllProductsType from "@/components/AllProductsType/AllProductsType";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import InfluencerCard from "@/components/InfluencerCard/InfluencerCard";
import ProductCard from "@/components/ProductCard/ProductCard";
import ReelCard from "@/components/ReelCard/ReelCard";
import React from "react";

interface Props {
  searchType: string;
}

const products = [
  {
    id: 1,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 2,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 3,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 4,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 5,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 6,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },

  {
    id: 7,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 8,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
  {
    id: 9,
    name: "This text is an example that can be replaced..",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
    ],
  },
];

const influencers = [
  {
    id: 1,
    name: "Ghaith Marwan",
    image: [
      "/assets/images/landingPage/influence-1.png",
      "/assets/images/landingPage/influence-2.png",
      "/assets/images/landingPage/influence-3.png",
    ],
    logo: "/assets/images/hero/icon-1.png",
  },
  {
    id: 2,
    name: "Ghaith Marwan",
    image: [
      "/assets/images/landingPage/influence-1.png",
      "/assets/images/landingPage/influence-2.png",
      "/assets/images/landingPage/influence-3.png",
    ],
    logo: "/assets/images/hero/icon-1.png",
  },
  {
    id: 3,
    name: "Ghaith Marwan",
    image: [
      "/assets/images/landingPage/influence-1.png",
      "/assets/images/landingPage/influence-2.png",
      "/assets/images/landingPage/influence-3.png",
    ],
    logo: "/assets/images/hero/icon-1.png",
  },
  {
    id: 4,
    name: "Ghaith Marwan",
    image: [
      "/assets/images/landingPage/influence-1.png",
      "/assets/images/landingPage/influence-2.png",
      "/assets/images/landingPage/influence-3.png",
    ],
    logo: "/assets/images/hero/icon-1.png",
  },
  {
    id: 5,
    name: "Ghaith Marwan",
    image: [
      "/assets/images/landingPage/influence-1.png",
      "/assets/images/landingPage/influence-2.png",
      "/assets/images/landingPage/influence-3.png",
    ],
    logo: "/assets/images/hero/icon-1.png",
  },
  {
    id: 6,
    name: "Ghaith Marwan",
    image: [
      "/assets/images/landingPage/influence-1.png",
      "/assets/images/landingPage/influence-2.png",
      "/assets/images/landingPage/influence-3.png",
    ],
    logo: "/assets/images/hero/icon-1.png",
  },

  {
    id: 7,
    name: "Ghaith Marwan",
    image: [
      "/assets/images/landingPage/influence-1.png",
      "/assets/images/landingPage/influence-2.png",
      "/assets/images/landingPage/influence-3.png",
    ],
    logo: "/assets/images/hero/icon-1.png",
  },
  {
    id: 8,
    name: "Ghaith Marwan",
    image: [
      "/assets/images/landingPage/influence-1.png",
      "/assets/images/landingPage/influence-2.png",
      "/assets/images/landingPage/influence-3.png",
    ],
    logo: "/assets/images/hero/icon-1.png",
  },
  {
    id: 9,
    name: "Ghaith Marwan",
    image: [
      "/assets/images/landingPage/influence-1.png",
      "/assets/images/landingPage/influence-2.png",
      "/assets/images/landingPage/influence-3.png",
    ],
    logo: "/assets/images/hero/icon-1.png",
  },
];

const reels = [
  {
    id: 1,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 2,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 3,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 4,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 5,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 6,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 7,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 8,
    video: "/assets/videos/video1.mp4",
  },
  {
    id: 9,
    video: "/assets/videos/video1.mp4",
  },
];

const categories = [
  {
    id: 1,
    name: "sport shoes",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-2.png",
    ],
  },
  {
    id: 2,
    name: "sport shoes",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-2.png",
    ],
  },
  {
    id: 3,
    name: "sport shoes",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-2.png",
    ],
  },
  {
    id: 4,
    name: "sport shoes",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-2.png",
    ],
  },
  {
    id: 5,
    name: "sport shoes",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-2.png",
    ],
  },
  {
    id: 6,
    name: "sport shoes",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-2.png",
    ],
  },

  {
    id: 7,
    name: "sport shoes",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-2.png",
    ],
  },
  {
    id: 8,
    name: "sport shoes",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-2.png",
    ],
  },
  {
    id: 9,
    name: "sport shoes",
    image: [
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-3.png",
      "/assets/images/landingPage/product-4.png",
      "/assets/images/landingPage/product-5.png",
      "/assets/images/landingPage/product-2.png",
      "/assets/images/landingPage/product-2.png",
    ],
  },
];

const Items = ({ searchType }: Props) => {
  if (searchType === "all") {
    return <AllProductsType />;
  } else
    return (
      <>
        {searchType === "products" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {searchType === "reels" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
            {reels.map((reel) => (
              <ReelCard key={reel.id} reel={reel} />
            ))}
          </div>
        )}

        {searchType === "categories" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        )}

        {searchType === "influencers" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
            {influencers.map((influencer) => (
              <InfluencerCard key={influencer.id} influencer={influencer} />
            ))}
          </div>
        )}
      </>
    );
};

export default Items;
