import { products } from "@/ultils/mock"
import ProductCard from "@/components/ProductCard"
import { StaticImageData } from "next/image"

const getProductsByCategory =(category:string)=>{
 return products.filter((product)=>product.category === category)
};


export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductsByCategory(params.slug);
    return(
      <div className="mt-8">
      <div className="text-center space-y-3">
        <h3 className="text-3xl text-gray-800 font-bold capitalize">{params.slug}</h3>
      </div>
    <div className='flex flex-wrap md:flex-row justify-center md:justify-evenly mt-8 md:mt-16 p-4 md:p-0'>
      {
        result.length>0 ?  result.map((products) => (
          <ProductCard
            key={products.id}
            tittle={products.name}
            price={products.price}
            img={products.image} 
            category={products.category}
            id={products.id}
            />
        )):<p>No Products Found</p>
      }
  
  </div>
  </div>
  )};