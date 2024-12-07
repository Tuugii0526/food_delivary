"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deliveryStates, payStates } from "@/lib/data-all/mockData";
import { getToken } from "@/lib/utils";
import {
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";
import { useTransition } from "react";
import { toast } from "sonner";
export const AdminOrderEdit = ({
  children,
  pay,
  setPay,
  delivery,
  setDelivery,
  _id,
}: Readonly<{
  children: React.ReactNode;
  pay: string;
  setPay: (value: string) => void;
  delivery: string;
  setDelivery: (value: string) => void;
  _id: string;
}>) => {
  const [isPayPending, startPayTransition] = useTransition();
  const [isDeliveryPending, startDeliveryTransition] = useTransition();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="text-sm">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Pay state</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={pay}
            onValueChange={(value) => {
              startPayTransition(async () => {
                const res = await fetch(
                  `${process.env.NEXT_PUBLIC_DATABASE_URL}/order?id=${_id}&pay=${value}`,
                  {
                    method: "put",
                    headers: {
                      Authorization: `${getToken()}`,
                    },
                  }
                );
                if (res.ok) {
                  toast(
                    `You have successfully changed the pay state from ${pay} to ${value}`
                  );
                  setPay(value);
                  return;
                } else {
                  toast(
                    `Failed to change the pay state from ${pay} to ${value}`
                  );
                  return;
                }
              });
            }}
          >
            {payStates.map((p) => (
              <DropdownMenuRadioItem
                key={p.id}
                value={p.value}
                className={`hover:bg-green-300 rounded-sm py-1 px-1 ${
                  p.value == pay ? "bg-green-300" : ""
                }`}
              >
                {isPayPending ? "Loading" : p.name}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Delivery state</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={delivery}
            onValueChange={(value) => {
              startDeliveryTransition(async () => {
                const res = await fetch(
                  `${process.env.NEXT_PUBLIC_DATABASE_URL}/order?id=${_id}&delivery=${value}`,
                  {
                    method: "put",
                    headers: {
                      Authorization: `${getToken()}`,
                    },
                  }
                );
                if (res.ok) {
                  toast(
                    `You have successfully changed the delivery state from ${delivery} to ${value}`
                  );
                  setDelivery(value);
                  return;
                } else {
                  toast(
                    `Failed to change the pay state from ${delivery} to ${value}`
                  );
                  return;
                }
              });
            }}
          >
            {deliveryStates.map((d) => (
              <DropdownMenuRadioItem
                key={d.id}
                value={d.value}
                className={`hover:bg-green-300 rounded-sm py-1 px-1 ${
                  d.value == delivery ? "bg-green-300" : ""
                }`}
              >
                {isDeliveryPending ? "Loading" : d.name}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
