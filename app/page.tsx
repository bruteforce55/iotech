'use client';
import { useState } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurTeamPage from "./team/page";
import ClientFeedback from "./client-feedback/page";
import Footer from "@/components/Footer";
import BookingForm from '@/components/BookingForm'; 

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/image.svg')" }}
    >
      {/* Pass the open function to Header */}
      <Header onBookClick={() => setShowForm(true)} />
      <main>
        {showForm && <BookingForm onClose={() => setShowForm(false)} />}
        <Hero />
        <OurTeamPage />
        <ClientFeedback />
        <div className="h-[1px] w-full bg-[#ffffff]" />
        <Footer />
      </main>

      {/* Render the form modal conditionally */}

    </div>
  );
}
