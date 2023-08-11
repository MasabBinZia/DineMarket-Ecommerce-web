import Hero from "@/views/Hero";
import Jewellery from "@/components/Jewellery";
import Newslatter from "@/components/NewsLatter";
import { ProductList } from "@/views/ProductList";
import Promotion from "@/components/Promotion";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <div className="py-0 ml-0 lg:py-12 lg:ml-20">
        <ScrollToTop/>
        <Hero />
        <Promotion />
        <ProductList />
        <Jewellery />
        <Newslatter />
      </div>
    </>
  );
}
