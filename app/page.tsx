import Image from "next/image";
import Navbar from "@/components/sections/navbar/default";
import Hero from "@/components/sections/hero/default";
import FAQ from "@/components/sections/faq/default";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FAQ />
    </div>
  );
}
