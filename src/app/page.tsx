import { getData } from "@/service/getData";
import { writeFile } from "fs";

export default async function Home() {
  const [shoes, n]: any = await getData()

  return (
    <>
    
      <h1 className="text-3xl text-center font-bold underline">{Home.name}</h1>
    
      {shoes ? shoes.map((shoe: any, i: number) => <div>{i + 1}. {shoe.name}</div>) : <div>No shoes</div>}
    </>
  );
}
