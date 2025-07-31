"use client"
import { useRouter } from 'next/navigation';

export default function CommercialAgenciesPage() {
    
  const router = useRouter();
  return (
    <main className="px-[24px] py-[40px] max-w-[768px] mx-auto text-[#333333]">
      <div
        onClick={() => router.push('/')}
        className="cursor-pointer text-[14px] text-[#624524] hover:underline mb-[24px]"
      >
        &lt; Back
      </div>

      <h1 className="text-[32px] text-[#624524] font-bold leading-[1.2] mb-[24px]">Commercial Agencies Services</h1>

      <p className="mb-[32px] text-[16px] leading-[1.6]">
        We provide specialized services for commercial agencies, supporting the establishment, management, and legal compliance of agency operations to ensure your business thrives in competitive markets.
      </p>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Agency Formation and Registration</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We assist in setting up commercial agencies</strong> by handling the legal requirements, registrations, and licensing necessary for smooth operations.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Contract Drafting and Negotiation</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Our legal experts draft and negotiate agency agreements</strong> to protect your interests and establish clear terms between principals and agents.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Regulatory Compliance and Dispute Resolution</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We guide commercial agencies</strong> in maintaining compliance with applicable laws and resolving disputes efficiently through negotiation or litigation.
        </p>
      </section>

      <footer className="mt-[40px] text-[#624524] text-[14px] leading-[1.5]">
        Trust us to support your commercial agency’s success with expert legal and advisory services. Contact us today to learn more.
      </footer>
    </main>
  );
}
