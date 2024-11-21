export const RenewPass = () => {
  return (
    <form className="flex flex-col rounded-4  p-8 max-w-[448px] m-auto">
      <label
        htmlFor="renew-email"
        className="flex flex-col justify-center gap-2"
      >
        <p className="text-center">Имэйл</p>
        <input
          type="email"
          id="renew-email"
          className="login-input"
          placeholder="Имэйл хаягаа оруулна уу"
        />
      </label>
      <button className="login-button">Үргэлжлүүлэх</button>
    </form>
  );
};
