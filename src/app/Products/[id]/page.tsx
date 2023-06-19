import { products } from "@/ultils/mock"
import Image from "next/image";

const getProductsDetail = (id: number | string) => {
  return products.filter((product) => product.id == id)
};


export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);
  return (
    <div className="mt-8">
      {/* <div className="text-center space-y-3">
        <h3 className="text-3xl text-gray-800 font-bold capitalize">{params.id}</h3>
      </div> */}
      <div className='flex flex-wrap md:flex-row justify-center md:justify-evenly mt-8 md:mt-16 p-4 md:p-0'>
        {
          result.length > 0 ? result.map((products) => (
            <div key={products.id} className="flex justify-between gap-6">
              <div><Image src={products.image} alt={products.name} />
              </div>
              <div>
                Product Details
                <p>Name {products.name}</p>
                <p>Price {products.price}</p>
                <p>Category {products.category}</p>
              </div>
            </div>
          )) : <p>No Products Found</p>
        }
      </div>
    </div>
  )
};