"use client"
import { useRouter } from 'next/navigation';

export default function LegalServicesPage() {
    
  const router = useRouter();
  return (
    <main className="px-[24px] py-[40px] max-w-[768px] mx-auto text-[#333333]">
      <div
        onClick={() => router.push('/')}
        className="cursor-pointer text-[14px] text-[#624524] hover:underline mb-[24px]"
      >
        &lt; Back
      </div>

      <h1 className="text-[32px] text-[#624524] font-bold leading-[1.2] mb-[24px]">Legal Consultation Services</h1>

      <p className="mb-[32px] text-[16px] leading-[1.6]">
        Law Firm is one of the leading legal offices that offer exceptional advisory services for both individuals and companies.
        Our mission is to provide comprehensive and specialized legal support to meet our clients' needs and offer the best
        legal solutions in various cases and legal fields, we provide our legal consultations services as a follow:
      </p>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">General Legal Consultations</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>At Law Firm, we provide comprehensive legal consultations</strong> covering all legal aspects that our clients may encounter
          in their daily lives or business activities. Our goal is to offer accurate legal advice based on a deep understanding
          of local and international laws.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Corporate Legal Consultations</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We at the Law Firm understand the importance of legal consultations for companies</strong> in building and enhancing their businesses.
        </p>
        <ul className="list-disc list-inside ml-[32px] mt-[8px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <li>Establishing and registering companies.</li>
          <li>All kinds of contracts and agreements.</li>
          <li>Commercial disputes.</li>
          <li>Compliance with local and international laws and regulations.</li>
        </ul>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[18px] text-[#624524] mb-[8px]">Individual Legal Consultations</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Law Firm offers customized advisory services for individuals, including:</strong>
        </p>
        <ul className="list-disc list-inside ml-[32px] mt-[8px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <li>Family issues such as divorce, alimony, and custody.</li>
          <li>Real estate matters like buying, selling, and renting properties.</li>
          <li>Employment issues such as hiring and wrongful termination.</li>
          <li>Criminal cases and defending personal rights.</li>
        </ul>
      </section>

      <footer className="mt-[40px] text-[#624524] text-[14px] leading-[1.5]">
        At Law Firm, we aim to provide the best legal services to ensure your rights and offer effective legal solutions. Contact us
        today to receive professional and comprehensive legal consultation.
      </footer>
    </main>
  );
}
