"use client"
import { useRouter } from 'next/navigation';

export default function EstablishingCompaniesPage() {
    
  const router = useRouter();
  return (
    <main className="px-[24px] py-[40px] max-w-[768px] mx-auto text-[#333333]">
      <div
        onClick={() => router.push('/')}
        className="cursor-pointer text-[14px] text-[#624524] hover:underline mb-[24px]"
      >
        &lt; Back
      </div>

      <h1 className="text-[32px] text-[#624524] font-bold leading-[1.2] mb-[24px]">Establishing Companies in National and Foreign Countries</h1>

      <p className="mb-[32px] text-[16px] leading-[1.6]">
        We provide comprehensive legal and advisory services to assist businesses in establishing companies both within the country and abroad. Our team guides you through all the necessary procedures to ensure a smooth and compliant company formation process.
      </p>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">National Company Formation</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We assist entrepreneurs and businesses</strong> in registering companies locally, handling documentation, licensing, and compliance with national regulations.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Foreign Company Establishment</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Our experts guide businesses</strong> through the complexities of establishing companies in foreign jurisdictions, including navigating local laws, obtaining necessary permits, and ensuring compliance with international standards.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Ongoing Support and Advisory</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We offer ongoing advisory services</strong> to help your company maintain compliance and optimize operations in both national and international markets.
        </p>
      </section>

      <footer className="mt-[40px] text-[#624524] text-[14px] leading-[1.5]">
        Let us help you successfully establish and grow your company at home and abroad. Contact us today for expert company formation services.
      </footer>
    </main>
  );
}
