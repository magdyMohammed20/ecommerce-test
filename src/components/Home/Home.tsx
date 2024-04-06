import React from "react";
import Hero from "./Hero";
import FlashDeals from "./FlashDeals";
import Reels from "./Reels";
import Brands from "./Brands";
import Banner from "./Banner";
import ShopCategories from "./ShopCategories";
import ProductSlider from "../ProductSlider/ProductSlider";
import SamValleyInfluencers from "./SamValleyInfluencers";

const Home = () => {
  return (
    <div className="bg-cloud">
      <Hero />
      <FlashDeals />
      <Reels />
      <ProductSlider title="header-3" />
      <SamValleyInfluencers />
      <Banner />
      <ShopCategories />
      <ProductSlider title="header-6" />
      <Brands />
    </div>
  );
};

export default Home;
