import ProductSlider from "@/components/ProductSlider/ProductSlider";
import Product from "./Product";
import BestProducts from "./BestProducts";
import RealisticExperience from "./RealisticExperience";
import ProductDetails from "./ProductDetails";
import ProductInfo from "./ProductInfo";
import Reviews from "./Reviews";

const page = () => {
  return (
    <div className="py-0 lg:py-[60px] flex flex-col gap-6 md:gap-[32px] lg:gap-[60px]">
      <div className="global-slider-padding">
        <Product />
      </div>
      <RealisticExperience />
      <div className="lg:hidden block">
        <ProductInfo />
      </div>
      <ProductDetails />
      <Reviews />
      <ProductSlider title="product-1" />
      <BestProducts />
      <ProductSlider title="product-2" />
    </div>
  );
};

export default page;
