export default async function Home() {
 const res= await fetch(`https://food-delivary-1qji.onrender.com`)
 const data= await res.json()
  return (
      <div>{data.success}</div>  
  );
}
