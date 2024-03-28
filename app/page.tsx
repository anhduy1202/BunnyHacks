import BodyHero from "./components/BodyHero";
import EggSeparator from "./components/Animations/EggAnimation";
import Hero from "./components/Hero";
import Prizes from "./components/Prizes";
import Vote from "./components/Vote";
import FAQs from "./components/FAQs";
import Social from "./components/Social";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden font-poppins flex min-h-screen flex-col">
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
        <Vote />
        <FAQs />
        <Social />
        <Footer />
      </section>
    </main>
  );
}
