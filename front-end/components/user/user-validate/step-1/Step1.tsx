// import { MapPin } from "lucide-react";
// import { StepSuccessState } from "../general-step/StepSuccessState";
import { Step } from "../Step";

export const Step1 = () => {
  return (
    <div className="flex w-[49%] h-full flex-col gap-4 shadow-xl rounded-2xl">
      <Step />
      <div className="flex flex-col gap-[40px] p-6 ">
        <fieldset className="flex flex-col gap-4">
          <p>Хаягаа оруулна уу </p>
          <label htmlFor="district">
            <select
              name="district"
              id="district"
              className="outline-none bg-[#F7F7F8] text-[#8B8E95] focus:bg-[#18BA51] focus:text-white px-3 py-4 rounded-md w-full"
            >
              <option value="">Дүүрэг сонгоно уу</option>
            </select>
          </label>
          <label htmlFor="neighborhoud">
            <select
              name="neighborhoud"
              id="neighborhoud"
              className="outline-none bg-[#F7F7F8] text-[#8B8E95] focus:bg-[#18BA51] focus:text-white px-3 py-4 rounded-md w-full"
            >
              <option value="">Хороо сонгоно уу</option>
            </select>
          </label>
          <label htmlFor="street">
            <select
              name="street"
              id="street"
              className="outline-none bg-[#F7F7F8] text-[#8B8E95] focus:bg-[#18BA51] focus:text-white px-3 py-4 rounded-md w-full"
            >
              <option value="">Байр гудамж сонгоно уу</option>
            </select>
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
              id="phone"
              className="w-full bg-[#F7F7F8] rounded-sm py-2 px-4"
              placeholder="Утасны дугаараа оруулна уу"
            />
          </label>
          <fieldset className="flex flex-col ">
            <p>Төлбөр төлөх</p>
            <div className="flex gap-[30%]">
              <label htmlFor="cache" className="flex gap-2">
                <input
                  type="checkbox"
                  name="pay"
                  id="cache"
                  className="text-[#8B8E95] font-normal leading-[19px]"
                />
                Бэлнээр
              </label>
              <label htmlFor="card" className="flex gap-2">
                <input
                  type="checkbox"
                  name="pay"
                  id="card"
                  className="text-[#8B8E95] font-normal leading-[19px]"
                />
                Картаар
              </label>
            </div>
          </fieldset>
        </fieldset>
      </div>
    </div>
  );
};
