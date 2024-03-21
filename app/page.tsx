import BodyHero from "./components/BodyHero";
import EggSeparator from "./components/EggAnimation";
import Hero from "./components/Hero";
import Prizes from "./components/Prizes";

export default function Home() {
  return (
    <main className="font-poppins flex min-h-screen flex-col">
      <Hero />
      <section
        id="eggSection"
        className="flex flex-col justify-center items-center bg-gradient-to-b from-main_pink to-main_purple"
      >
        <BodyHero />
        <EggSeparator />
        <div id="prizeSection" className="">
          <Prizes />
        </div>
      </section>
    </main>
  );
}
