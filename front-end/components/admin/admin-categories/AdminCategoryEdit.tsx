import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  //   DropdownMenuLabel,
  //   DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PenLine, Trash2 } from "lucide-react";
export const AdminCategoryEdit = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="flex  py-2 px-4 gap-4">
          <PenLine />
          <p>Edit name</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex  py-2 px-4 gap-4 text-[#DF1F29]">
          <Trash2 />
          <p>Delete Category</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
