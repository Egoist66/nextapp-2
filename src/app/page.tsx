import { getData } from "@/service/getData";


export const revalidate = 60;
export const dynamic = 'force-dynamic'

export default async function Home() {
  const [shoes, n]: any = await getData();



  const shoesProducts =
    shoes && Array.isArray(shoes) ? (
      shoes?.map((shoe: any, i: number) => (
        <div key={shoe.id}>
          {i + 1}. {shoe.name}
        </div>
      ))
    ) : (
      <div>No shoes</div>
    );

  return (
    <>
      <h1 className="text-3xl text-center font-bold underline">{Home.name}</h1>

      {shoesProducts}
    </>
  );
}
