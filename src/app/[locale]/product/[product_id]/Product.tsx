import ImagesGallery from "@/components/ImagesGallery/ImagesGallery";
import ProductInfo from "./ProductInfo";

const Product = () => {
  return (
    <div className="bg-white p-4 lg:p-8 lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-14 lg:rounded-xl w-full">
      <div className="flex items-center gap-2 ltr:lg:pr-8 ltr:xl:pr-14 ltr:lg:border-r rtl:lg:pl-8 rtl:xl:pl-14 rtl:lg:border-l border-cloud w-full">
        <ImagesGallery />
      </div>

      <div className="hidden lg:block w-full">
        <ProductInfo />
      </div>
    </div>
  );
};

export default Product;
