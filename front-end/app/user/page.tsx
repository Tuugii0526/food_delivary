import { Step1 } from "@/components/user/user-validate/step-1/Step1";
import { Step2 } from "@/components/user/user-validate/step-2/Step2";

export default function Page() {
  return (
    <div className="w-fit h-[800px] flex  justify-between m-auto mb-10 ">
      <Step1 />
      <Step2 />
    </div>
  );
}
