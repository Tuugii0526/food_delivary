import { ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export const ShoppingBagDialog = () => {
  return (
    <Sheet>
      <SheetTrigger className="user-nav">
        <div className="flex gap-4  ">
          <ShoppingBag />
          <p className="font-bold text-sm leading-5">Сагс</p>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-center">Таны сагс</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
