import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
        <section className="p-10 max-w-4xl mx-auto bg-white bg-opacity-70 rounded-md text-gray-800">
          <h3 className="text-2xl font-semibold mb-4">More Content</h3>
          <p>
            This is where your additional page sections go. You can create other components here as needed.
          </p>
        </section>
      </main>
    </div>
  );

}
