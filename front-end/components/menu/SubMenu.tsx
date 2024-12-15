"use client";

import { useEffect } from "react";
import { useBeAwareContext } from "../context/ContextProvider";
import { FoodCategories } from "./FoodCategories";
import { FoodsMenu } from "./FoodsMenu";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const SubMenu = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const { categoryResponse } = useBeAwareContext();
  useEffect(() => {
    if (categoryResponse?.categories?.length > 0) {
      const params = new URLSearchParams(searchParams);
      params.set("categoryQuery", categoryResponse?.categories[0]._id);
      replace(`${pathname}?${params.toString()}`);
    }
  }, []);
  return (
    <div className="container flex flex-col">
      <FoodCategories categories={categoryResponse.categories} />
      <FoodsMenu />
    </div>
  );
};
