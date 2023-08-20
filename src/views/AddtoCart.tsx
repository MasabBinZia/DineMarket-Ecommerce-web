import { ShoppingBag } from "lucide-react";

const AddtoCart = () => {
  return (
    <div className="flex flex-col justify-center py-20 lg:px-20 items-center">
      <ShoppingBag className="h-48 w-48" />
      <p className="text-2xl font-bold mt-2 ">Your Shopping Cart is Empty</p>
    </div>
  );
};

export default AddtoCart;
