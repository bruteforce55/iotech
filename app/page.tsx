import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurTeamPage from "./team/page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/image.svg')",
      }}
    >
      <Header />
      <main>
        <Hero />
        <OurTeamPage />
      </main>
    </div>
  );

}
