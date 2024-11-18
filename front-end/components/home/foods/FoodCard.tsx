import { poppins } from "@/app/fonts/fonts"
import { Food } from "@/lib/types"

export const FoodCard=({food}:{food:Food})=>{
    const prices:JSX.Element[]=[]
    if(food.discountPercent)
    { 
        let discountPrice=Math.floor(((100-food.discountPercent)/100)*food.initialPrice)
        prices.push(<p key={1} className={`${poppins.className} text-[#18BA51]`}>
         {discountPrice}₮
        </p>
        )
        prices.push(<p key={2} className="line-through">{food.initialPrice}₮</p>)

    }
    else 
    {
        prices.push(
            <p key={food.id} className={`${poppins.className} text-[#18BA51]`}>
         {food.initialPrice}₮
        </p>
        )
    }
    return (
        <div className="h-[256px] flex flex-col w-[24%] flex-shrink-0 relative justify-between">
          <div className="w-full rounded-sm h-[70%] bg-slate-300">
          </div>
          <div className="h-fit w-full flex flex-col gap-0.5">
          <p className={`${poppins.className} `}>{food.foodName}</p>
          <div className="flex gap-4">
            {
              prices
            }
          </div>
          </div>
        </div>
    )
}