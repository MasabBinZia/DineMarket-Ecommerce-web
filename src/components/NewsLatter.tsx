import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newslatter = () => {
  return (
    <div className="relative text-center space-y-4 min-h-[40vh] md:h-[30vh] lg:min-h-[10rem] flex flex-col justify-center items-center text-gray-800">
      <h6 className="absolute text-6xl md:text-[9rem] font-bold text-gray-200 text-center mx-auto -z-50 ">
        Newsletter
      </h6>
      <h6 className="text-3xl md:text-4xl font-bold">
        Subscribe Our Newsletter
      </h6>
      <p className="max-w-[16rem] text-lg font-medium">
        Get the latest information and promo offers directly
      </p>
      <div className="flex gap-4 flex-wrap items-center justify-center ">
        <Input
          type="text"
          className="border border-gray-600 py-1 px-2 md:px-4 flex  w-80"
          placeholder="Input email address"
        />
        <Button className="bg-black">Get Started</Button>
      </div>
    </div>
  );
};

export default Newslatter;
