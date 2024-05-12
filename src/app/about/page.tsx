import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About",
}

export default function About(): JSX.Element {
  return (
    <>
    
      <h1 className="text-3xl text-center font-bold underline">{About.name}</h1>
    
    
    </>
  );
}
