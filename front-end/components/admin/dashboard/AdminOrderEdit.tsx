"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { OrderProcessType } from "@/lib/types";
import {
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
export const AdminOrderEdit = ({
  children,
  process,
}: Readonly<{
  children: React.ReactNode;
  process: OrderProcessType;
}>) => {
  const [isPaid, setIsPaid] = useState(process.isPaid);
  const [deliveryState, setDeliveryState] = useState(process.deliveryStatus);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Pay state</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={isPaid} onValueChange={setIsPaid}>
            <DropdownMenuRadioItem value="PAID">Paid</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="NOT_PAID">
              Not Paid
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Delivery state</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={deliveryState}
            onValueChange={setDeliveryState}
          >
            <DropdownMenuRadioItem value="PROGRESS" className="list-disc">
              Progress
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="DELIVERED">
              Delivered
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="WAITING">
              Waiting
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="ACTIVE">Active</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
