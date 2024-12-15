import { CheckCategories } from "@/components/home/check-categories/CheckCategories";
import { FoodsContainer } from "@/components/home/foods/FoodsContainer";
import { Hero } from "@/components/home/hero/Hero";
import { FoodsContainerSkeleton } from "@/components/skeleton/FoodsContainerSkeleton";
import { SearchParamsType } from "@/lib/types";
import { Suspense } from "react";
export default async function Home({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) {
  const { query } = await searchParams;
  const finalQuery = query || "";
  return (
    <>
      <Hero />
      <CheckCategories />
      <Suspense fallback={<FoodsContainerSkeleton />}>
        <FoodsContainer query={finalQuery} />
      </Suspense>
    </>
  );
}
