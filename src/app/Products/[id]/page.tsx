import Quantity from "@/components/Quantity";
import { Button } from "@/components/ui/button";
import { products } from "@/ultils/productMockData";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import IdPage from "./idPage";


export default function Page({ params }: { params: { id: string } }) {
  return (
   <>
   <IdPage params={params}/>
   </>
  );
}
