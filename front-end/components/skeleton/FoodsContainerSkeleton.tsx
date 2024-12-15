export const FoodsContainerSkeleton = () => {
  return (
    <div className="container flex flex-col gap-20 mb-20 ">
      <div className="flex flex-col justify-around">
        <div className="w-full py-4 px-1 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="skeleton w-[200px] h-[30px] animate-pulse  bg-slate-200 rounded-md"></div>
          </div>
        </div>
        <div className="w-full h-fit grid grid-cols-4  gap-6 overflow-hidden ">
          <div className="w-full h-[200px] bg-slate-200 animage-pulse  rounded-xl"></div>
          <div className="w-full bg-slate-200 animage-pulse h-[200px] rounded-xl"></div>
          <div className="w-full bg-slate-200 animage-pulse h-[200px] rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};
