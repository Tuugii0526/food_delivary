import { poppins } from "@/app/fonts/fonts"

export const DiscountPercent=({discountPercent}:{discountPercent:number})=>{
    return (
        <div className="absolute z-10 top-4 right-4 px-4 py-1 bg-[#18BA51] rounded-2xl border border-white text-white">
          <p className={`${poppins.className } text-lg leading-7`}>{discountPercent}%</p>
        </div>
    )
}