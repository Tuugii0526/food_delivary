import { StepSuccessState } from "../general-step/StepSuccessState";
import { StepWaitingState } from "../general-step/StepWaitingState";

export const Step1Check = ({ inserted }: { inserted: boolean }) => {
  return (
    <div className="flex justify-between items-center gap-4 max-w-[432px]  h-fit py-4 px-6">
      {inserted ? <StepSuccessState /> : <StepWaitingState />}
      <div className="flex flex-col gap-1">
        <p className="small-grey-letters">Алхам 1</p>
        <p className="leading-[23.87px] text-xl font-normal">
          Хаягийн мэдээлэл оруулах
        </p>
        <p
          className={`leading-[19.9px] text-base font-normal ${
            inserted ? "text-[#0468C8]" : "text-[#18BA51]"
          }`}
        >
          {inserted ? "Оруулсан" : "Хүлээгдэж байна"}
        </p>
      </div>
    </div>
  );
};
