import { comfortaa, poppins } from "@/app/fonts/fonts";
import Image from "next/image";

export const Hero = () => {
  return (
    <div
      className="w-full h-[788px] bg-[#18BA51]"
      style={{
        backgroundImage: "url(/vegetables.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container flex items-center justify-between w-full h-full">
        <div className="flex flex-col justify-between text-white w-[30%] max-w-[384px] h-[28%] max-h-[224px] ">
              <p className={ ` ${poppins.className} text-[49.5px] `}>Pinecone Food Delivery</p>
              <hr className="bg-white"/>
              <p className={`${comfortaa.className} text-[22px] leading-[26.4px]`}>You are welcome</p>
        </div>
        <div className="relative w-[46%] h-[55%] max-h-[438px] max-w-[588px]">
          <Image src={"/heroFood.png"} alt="nice food" fill />
        </div>
      </div>
    </div>
  );
};
