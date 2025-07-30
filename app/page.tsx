import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurTeamPage from "./team/page";
import ClientFeedback from "./client-feedback/page";
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
        <ClientFeedback />
        <div className="h-[1px] w-full bg-[#ffffff]"/>
        <Footer />
      </main>
    </div>
  );

}
