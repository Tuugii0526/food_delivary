export default async function Home() {
 const res= await fetch(`${process.env.DATABASE_URL}exp`)
 const data= await res.json()
  return (
      <div>{data.success}</div>  
  );
}
