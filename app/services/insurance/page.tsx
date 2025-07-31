"use client"
import { useRouter } from 'next/navigation';

export default function InsuranceServicesPage() {
    
  const router = useRouter();
  return (
    <main className="px-[24px] py-[40px] max-w-[768px] mx-auto text-[#333333]">
      <div
        onClick={() => router.push('/')}
        className="cursor-pointer text-[14px] text-[#624524] hover:underline mb-[24px]"
      >
        &lt; Back
      </div>

      <h1 className="text-[32px] text-[#624524] font-bold leading-[1.2] mb-[24px]">Insurance Services</h1>

      <p className="mb-[32px] text-[16px] leading-[1.6]">
        Our firm provides comprehensive insurance services to individuals and businesses, helping you secure the right coverage for your needs and protect your assets against unforeseen risks.
      </p>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Personal Insurance</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We offer a range of personal insurance policies</strong> designed to safeguard your health, property, and financial future.
        </p>
        <ul className="list-disc list-inside ml-[32px] mt-[8px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <li>Health insurance</li>
          <li>Life insurance</li>
          <li>Auto insurance</li>
          <li>Homeowners and renters insurance</li>
        </ul>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Business Insurance</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Our business insurance services</strong> help companies manage risks and maintain continuity through tailored coverage options.
        </p>
        <ul className="list-disc list-inside ml-[32px] mt-[8px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <li>General liability insurance</li>
          <li>Professional liability insurance</li>
          <li>Property and casualty insurance</li>
          <li>Workers’ compensation</li>
        </ul>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Claims Assistance & Risk Management</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We provide expert claims support</strong> and risk management consulting to help you navigate complex insurance processes and minimize exposure.
        </p>
      </section>

      <footer className="mt-[40px] text-[#624524] text-[14px] leading-[1.5]">
        Let us help you find the best insurance solutions to protect what matters most. Contact us today for a personalized insurance consultation.
      </footer>
    </main>
  );
}
