import { poppins } from "@/app/fonts/fonts";
import PineconeIcon from "../icons/PineconeIcon";
import { FacebookIcon } from "../icons/FacebookIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { Copyright } from "lucide-react";
import { XIconNotLucide } from "../icons/TwitterIcon";
const contracts = [
  {
    id: 1,
    title: "Нүүр",
  },
  {
    id: 2,
    title: "Холбоо барих",
  },
  {
    id: 3,
    title: "Хоолны цэс",
  },
  {
    id: 4,
    title: "Үйлчилгээний нөхцөл",
  },
  {
    id: 5,
    title: "Хүргэлтийн бүс",
  },
  {
    id: 6,
    title: "Нууцлалын бодлого",
  },
];
export default function Footer() {
  return (
    <div className="w-full h-fit py-32 bg-[#18BA51] ">
      <div className="container *:text-white flex flex-col   gap-10 *:w-full">
        <div className="flex gap-2 justify-center">
          <PineconeIcon fill="white" />
          <p className={`${poppins.className} text-xl leading-[30px]`}>
            Food delivery
          </p>
        </div>
        <div className="flex justify-between">
          {contracts.map((contract) => (
            <p
              key={contract.id}
              className="font-semibold text-base leading-[19px]"
            >
              {contract.title}
            </p>
          ))}
        </div>
        <div className="flex justify-center gap-[18px]">
          <FacebookIcon />
          <InstagramIcon />
          <XIconNotLucide />
        </div>
        <hr className="bg-white" />
        <div className="flex flex-col items-center gap-2">
          <p className="flex items-center gap-2 font-normal text-base leading-[19px] ">
            <Copyright />
            2024 Pinecone Foods LLC
          </p>
          <p className="font-normal text-base leading-[19px] ">
            Зохиогчийн эрх хуулиар хамгаалагдсан
          </p>
        </div>
      </div>
    </div>
  );
}
