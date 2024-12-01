export const ValidationError = ({
  isError,
}: {
  isError: string[] | undefined;
}) => {
  console.log("is error", isError);
  if (isError) {
    return isError.map((e, i) => (
      <p key={i} className="text-red-600">
        {e}
      </p>
    ));
  }
  return null;
};
