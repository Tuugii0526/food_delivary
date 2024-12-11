"use client";
import { districtSelectOptions } from "@/lib/data-all/mockData";
import { khorooSelectionOptions } from "@/lib/data-all/mockData";
import { Step1Check } from "./Step1Check";
import { ChangeEvent, useState } from "react";
export const Step1 = ({
  step1Validated,
  setByCach,
  setByCard,
}: {
  step1Validated: boolean;
  setByCach: (value: boolean) => void;
  setByCard: (value: boolean) => void;
}) => {
  const [district, setDistrict] = useState("");
  const [neighborhood, setNeighborhood] = useState("");

  return (
    <div className="flex w-[49%] h-full flex-col gap-4 shadow-xl rounded-2xl">
      <Step1Check inserted={step1Validated} />
      <div className="flex flex-col gap-[40px] p-6 ">
        <fieldset className="flex flex-col gap-4">
          <p>Хаягаа оруулна уу </p>
          <label
            htmlFor="district"
            className={`  px-3 py-4 rounded-md w-full ${
              district ? "bg-[#18BA51]" : "bg-[#F7F7F8] text-[#8B8E95 ]"
            }`}
          >
            <select
              name="district"
              id="district"
              className={`outline-none`}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setDistrict(e.target.value.trim());
              }}
            >
              <option value="">Дүүрэг сонгоно уу</option>
              {districtSelectOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          </label>
          <label
            htmlFor="neighborhood"
            className={`  px-3 py-4 rounded-md w-full ${
              neighborhood ? "bg-[#18BA51]" : "bg-[#F7F7F8] text-[#8B8E95 ]"
            }`}
          >
            <select
              name="neighborhood"
              id="neighborhoud"
              className={`outline-none`}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setNeighborhood(e.target.value.trim());
              }}
            >
              <option value="">Хороо сонгоно уу</option>
              {khorooSelectionOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="apartment">
            <p>Байраа бичнэ үү</p>
            <input
              type="text"
              name="apartment"
              id="apartment"
              className="outline-none bg-[#F7F7F8] text-[#8B8E95]  px-3 py-4 rounded-md w-full"
            />
          </label>
        </fieldset>
        <fieldset className="flex flex-col gap-8 ">
          <label htmlFor="addition">
            Нэмэлт мэдээлэл
            <textarea
              name="addition"
              id="addition"
              className="w-full bg-[#F7F7F8] rounded-sm py-2 px-4"
              rows={5}
              placeholder="Орц,давхар,орцны код"
            ></textarea>
          </label>
          <label htmlFor="phone">
            Утасны дугаар*
            <input
              type="text"
              name="phone"
              id="phone"
              className="w-full bg-[#F7F7F8] rounded-sm py-2 px-4"
              placeholder="Утасны дугаараа оруулна уу"
            />
          </label>
          <div className="flex flex-col ">
            <p>Төлбөр төлөх</p>
            <div className="flex gap-[30%]">
              <label htmlFor="cach" className="flex gap-2">
                <input
                  type="checkbox"
                  name="byCash"
                  id="cach"
                  className="text-[#8B8E95] font-normal leading-[19px]"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setByCach(e.target.checked);
                  }}
                />
                Бэлнээр
              </label>
              <label htmlFor="card" className="flex gap-2">
                <input
                  type="checkbox"
                  name="byCard"
                  id="card"
                  className="text-[#8B8E95] font-normal leading-[19px]"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setByCard(e.target.checked);
                  }}
                />
                Картаар
              </label>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};
