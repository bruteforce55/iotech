"use client"
import { useRouter } from 'next/navigation';

export default function ForeignInvestigationServicesPage() {
    
  const router = useRouter();
  return (
    <main className="px-[24px] py-[40px] max-w-[768px] mx-auto text-[#333333]">
      <div
        onClick={() => router.push('/')}
        className="cursor-pointer text-[14px] text-[#624524] hover:underline mb-[24px]"
      >
        &lt; Back
      </div>

      <h1 className="text-[32px] text-[#624524] font-bold leading-[1.2] mb-[24px]">Foreign Investigation Services</h1>

      <p className="mb-[32px] text-[16px] leading-[1.6]">
        Our firm specializes in professional foreign investigation services designed to assist individuals and companies in gathering accurate and reliable information internationally. 
        We are committed to providing thorough investigative support tailored to your specific needs across various countries and jurisdictions.
      </p>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Corporate Investigations</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We offer extensive corporate investigation services</strong> to help companies mitigate risks, verify backgrounds, and uncover fraud or misconduct in foreign markets.
        </p>
        <ul className="list-disc list-inside ml-[32px] mt-[8px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <li>Due diligence on foreign partners and suppliers.</li>
          <li>Investigations of corporate fraud and financial irregularities.</li>
          <li>Intellectual property rights enforcement abroad.</li>
          <li>Compliance and regulatory investigations across jurisdictions.</li>
        </ul>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Individual Investigations</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Our individual foreign investigation services</strong> are designed to support personal legal matters and private inquiries worldwide.
        </p>
        <ul className="list-disc list-inside ml-[32px] mt-[8px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <li>Background checks on foreign nationals.</li>
          <li>Locating individuals across borders.</li>
          <li>Investigations related to international family law cases.</li>
          <li>Gathering evidence for cross-border disputes or claims.</li>
        </ul>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Specialized Services</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We also provide specialized foreign investigation services</strong> including:
        </p>
        <ul className="list-disc list-inside ml-[32px] mt-[8px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <li>Asset tracing and recovery internationally.</li>
          <li>International fraud investigations.</li>
          <li>Due diligence for mergers and acquisitions abroad.</li>
          <li>Assistance with international law enforcement and legal cooperation.</li>
        </ul>
      </section>

      <footer className="mt-[40px] text-[#624524] text-[14px] leading-[1.5]">
        Our foreign investigation services aim to provide you with accurate intelligence and actionable insights to protect your interests worldwide. 
        Contact us today for expert investigative support tailored to your global needs.
      </footer>
    </main>
  );
}
