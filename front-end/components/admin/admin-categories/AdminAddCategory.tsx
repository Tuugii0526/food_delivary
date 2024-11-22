import {
  Dialog,
  DialogClose,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
export function AdminAddCategory({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Dialog>
      <DialogTrigger className="user-nav" asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md flex justify-center">
        <form className="flex flex-col p-8 gap-12 rounded-2xl w-[448px] ">
          <DialogHeader>
            <DialogTitle className="font-bold text-[24px] text-center">
              Create New Category
            </DialogTitle>
          </DialogHeader>
          <label htmlFor="category" className="flex flex-col gap-1 relative">
            <p>Category Name</p>
            <input
              type="text"
              id="category"
              placeholder="Insert category"
              className="login-input"
            />
          </label>
          <fieldset className="flex justify-end gap-4">
            <DialogClose asChild>
              <button className="py-[10px] px-2 rounded-sm font-bold text-base leading-5 text-[#3F4145] align-middle">
                Clear
              </button>
            </DialogClose>
            <button className="px-4 py-[10px] bg-[#393939] text-white font-bold rounded-sm">
              Continue
            </button>
          </fieldset>
        </form>
      </DialogContent>
    </Dialog>
  );
}
