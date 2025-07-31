"use client"
import { useRouter } from 'next/navigation';

export default function ContractsServicesPage() {
    
  const router = useRouter();
  return (
    <main className="px-[24px] py-[40px] max-w-[768px] mx-auto text-[#333333]">
      <div
        onClick={() => router.push('/')}
        className="cursor-pointer text-[14px] text-[#624524] hover:underline mb-[24px]"
      >
        &lt; Back
      </div>

      <h1 className="text-[32px] text-[#624524] font-bold leading-[1.2] mb-[24px]">Contracts</h1>

      <p className="mb-[32px] text-[16px] leading-[1.6]">
        Our firm offers professional contracts services to help individuals and businesses draft, review, and negotiate agreements that protect their rights and interests.
        We provide tailored contract solutions across a wide range of industries and legal matters.
      </p>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Contract Drafting</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We create clear, precise, and enforceable contracts</strong> that meet your specific needs, ensuring all legal requirements and contingencies are addressed.
        </p>
        <ul className="list-disc list-inside ml-[32px] mt-[8px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <li>Commercial agreements</li>
          <li>Employment contracts</li>
          <li>Service and consultancy contracts</li>
          <li>Lease and rental agreements</li>
        </ul>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Contract Review & Negotiation</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We carefully analyze contracts and provide expert advice</strong> on potential risks and improvements to ensure your agreements are fair and balanced.
        </p>
        <ul className="list-disc list-inside ml-[32px] mt-[8px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <li>Risk assessment and compliance checks</li>
          <li>Negotiation support to protect your interests</li>
          <li>Amendments and addendums drafting</li>
          <li>Contract renewal and termination advice</li>
        </ul>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Specialized Contract Services</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Our expertise also extends to complex and specialized contracts</strong> such as:
        </p>
        <ul className="list-disc list-inside ml-[32px] mt-[8px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <li>International trade agreements</li>
          <li>Joint venture and partnership contracts</li>
          <li>Non-disclosure and confidentiality agreements</li>
          <li>Licensing and intellectual property contracts</li>
        </ul>
      </section>

      <footer className="mt-[40px] text-[#624524] text-[14px] leading-[1.5]">
        Trust our contracts services to help you create secure, compliant, and effective agreements that support your business and personal goals. Contact us today for professional contract assistance.
      </footer>
    </main>
  );
}
