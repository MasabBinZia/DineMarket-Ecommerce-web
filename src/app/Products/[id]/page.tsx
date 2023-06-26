import Quantity from "@/components/Quantity";
import { Button } from "@/components/ui/button";
import { products } from "@/ultils/mock"
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

const getProductsDetail = (id: number | string) => {
  return products.filter((product) => product.id == id)
};

const sizes = ["xs", "sm", "md", "lg", "xl"];


export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);
  return (
    <div className='flex flex-wrap gap-y-10 py-6 px-40 mt-16'>
      {result.length > 0 ? result.map((products) => (
        <div key={products.id} className="flex justify-between gap-6">
          <div>
            <Image src={products.image} alt={products.name} className="w-96" />
          </div>
          <div>
            <h1 className="text-2xl">{products.name}</h1>
            <h2 className="text-base text-gray-400 font-semibold">{products.tagline}</h2>
            <div>
              <h3 className="text-xs mt-4 font-semibold ">SElECT SIZE</h3>
              <div className="flex gap-x-3">
                {sizes.map((item) => {
                  return (

                    <div className="w-6 h-6 mt-2 center duration-300 border rounded-full center hover:shadow-xl" >
                      <span className="text-[10px] uppercase font-semibold text-center text-gray-600">
                        {item}
                      </span>
                    </div>

                  )
                })
                }
              </div>
              <div className="flex gap-x-3 mt-6 items-center">
                <h3 className="text-[10px] font font-semibold">Quantity:</h3>
                <Quantity />
              </div>
              {/* Add to Cart */}
              <div className="mt-5 flex items-center gap-x-4">
                <Button className='bg-black'><ShoppingCart className='h-4 w-4 mr-2' />Add to Cart</Button>
                <h2 className="text-2xl font-bold">${products.price.toFixed(2)}</h2>
              </div>
            </div>
          </div>
        </div>
      )) : <p>No Products Found</p>
      }
    </div>
  )
};