import { StepSuccessState } from "../general-step/StepSuccessState";

export const Step2Check = () => {
  return (
    <div className="flex justify-between items-center gap-4 max-w-[432px]  h-fit py-4 px-6">
      <StepSuccessState />
      <div className="flex flex-col gap-1">
        <p className="small-grey-letters">Алхам 2</p>
        <p className="leading-[23.87px] text-xl font-normal">
          Захиалга баталгаажуулах
        </p>
        <p className="leading-[19.9px] text-base font-normal text-[#0468C8]">
          Оруулсан
        </p>
      </div>
    </div>
  );
};
