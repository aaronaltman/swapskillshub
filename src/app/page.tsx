import Image from "next/image";
import HomeHero from "./(marketing)/_components/home-hero";

export default function Home() {
  return (
    <main className="">
      <HomeHero />
      <div className="flex justify-center items-center">
        <Image
          src="/hero.png"
          alt="hero"
          width={600}
          height={600}
          priority={true}
          className="shadow-xl rounded-lg mx-auto w-full object-cover"
        />
      </div>
    </main>
  );
}
