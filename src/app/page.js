import { BlockSpotLight1 } from "../components/BlockSpotlight1";
import ProductsCards from "../components/ProductsCards";
import CategoryCards from "../components/CategoryCards";
import Banners from "../components/Banners";

export default function Home() {
  return (
    <>
     
      <BlockSpotLight1 />
      <ProductsCards />
      <Banners />
      <ProductsCards title={'Best Sellers'}/>
      <CategoryCards />
     


    </>
  );
}
