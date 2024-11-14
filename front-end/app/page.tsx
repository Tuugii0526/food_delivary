import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
export default async function Home() {
  let data;
  let error;
  try {
    const res = await fetch(`${process.env.DATABASE_URL}`);
    data = await res.json();
  } catch (error) {
    error = `${error}`;
    console.log("error :", error);
  }
  return (
    <>
      
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
        <div>{data?.success}</div>
        {error && <p className="text-red-600">{error}</p>}
        </AlertDescription>
      </Alert>
    </>
  );
}
