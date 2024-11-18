import { CheckCategories } from "@/components/home/check-categories/CheckCategories";
import { FoodsContainer } from "@/components/home/foods/FoodsContainer";
import { Hero } from "@/components/home/hero/Hero";

export default async function Home() {
  let data;
  let error;
  try {
    const res = await fetch(`${process.env.DATABASE_URL}`);
    data = await res.json();
  } catch (error) {
    error = `${error}`;
    console.log("error :", error);
  }
  return (
    <>
      <Hero/>
      <CheckCategories/>
      <FoodsContainer/>
    </>
  );
}
