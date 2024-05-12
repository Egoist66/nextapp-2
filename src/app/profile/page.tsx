import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Profile",
}

export default function Profile(): JSX.Element {
  return (
    <>
    
      <h1 className="text-3xl text-center font-bold underline">{Profile.name}</h1>
    
    
    </>
  );
}
