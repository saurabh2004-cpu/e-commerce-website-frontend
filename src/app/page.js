import { BlockSpotLight1 } from "../components/BlockSpotlight1";
import ProductsCards from "../components/ProductsCards";
import CategoryCards from "../components/CategoryCards";
import Banners from "../components/Banners";
import { ToastProvider } from "@radix-ui/react-toast";

export default function Home() {
  return (
    <>
      <ToastProvider>
        <BlockSpotLight1 />
        <ProductsCards />
        <Banners />
        <ProductsCards title={'Best Sellers'} />
        <CategoryCards />
      </ToastProvider>


    </>
  );
}
