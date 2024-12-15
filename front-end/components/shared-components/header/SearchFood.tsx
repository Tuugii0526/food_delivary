"use client";
import { PathChecker } from "@/lib/classes";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useState } from "react";
export const SearchFood = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [urlWithQuery, setUrlWithQuery] = useState("");
  const pathChecker = new PathChecker(pathname, ["/", "/menu"]);
  if (!pathChecker.checkIncludeUrl()) {
    return null;
  }
  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    setUrlWithQuery(`${pathname}?${params.toString()}`);
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLLabelElement>) => {
    if (event.key === "Enter") {
      replace(urlWithQuery);
    }
  };
  return (
    <label
      htmlFor="search"
      className="w-[40%] right-10 max-w-[260px] border-2 p-2  rounded-[8px] has-[:focus]:ring-2 has-[:focus]:ring-offset-2 has-[:focus]:w-[50%] transition-all relative"
      onKeyDown={handleKeyDown}
    >
      <input
        id="search"
        type="text"
        placeholder="Хайх"
        className="outline-none overflow-x-scroll w-full peer"
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleSearch(e.target.value);
        }}
      />
      <button
        onClick={() => {
          replace(urlWithQuery);
        }}
        className="peer-focus:text-green-900  peer-focus:scale-125"
      >
        <Search className="w-5 h-5  peer-focus:scale-150 " />
      </button>
    </label>
  );
};
