"use client";
import Fuetr from "@/components/marketing/Fuetr";
import Hero from "@/components/marketing/Hero";
import SidePicStuff from "@/components/marketing/SidePicStuff";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const user = useUser();
  if (user.isSignedIn) {
    router.push("/welcom");
  }
  return (
    <main>
      <Hero />
      <Fuetr />
      <SidePicStuff />
    </main>
  );
}
