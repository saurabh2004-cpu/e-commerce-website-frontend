import { BlockSpotLight1 } from "../components/BlockSpotlight1";
import ProductsCards from "../components/ProductsCards";
import CategoryCards from "../components/CategoryCards";
import Banners from "../components/Banners";
import HotCategories from "../components/HotCategories";
import Popup from "../components/PopUp";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* <HeaderTop />
      <HeaderCenter />
      <HeaderBottom /> */}
      <BlockSpotLight1 />
      <ProductsCards />
      <Banners />
      <ProductsCards />
      <CategoryCards />
      <HotCategories />
      <Popup />


    </>
  );
}
