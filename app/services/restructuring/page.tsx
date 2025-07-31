"use client"
import { useRouter } from 'next/navigation';

export default function CorporateRestructuringPage() {
    
  const router = useRouter();
  return (
    <main className="px-[24px] py-[40px] max-w-[768px] mx-auto text-[#333333]">
      <div
        onClick={() => router.push('/')}
        className="cursor-pointer text-[14px] text-[#624524] hover:underline mb-[24px]"
      >
        &lt; Back
      </div>

      <h1 className="text-[32px] text-[#624524] font-bold leading-[1.2] mb-[24px]">Corporate Restructuring and Reorganisation Services</h1>

      <p className="mb-[32px] text-[16px] leading-[1.6]">
        Our firm offers expert guidance and support in corporate restructuring and reorganisation to help businesses adapt, optimize operations, and improve financial performance in a dynamic market.
      </p>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Strategic Restructuring</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We assist companies in developing and implementing strategic restructuring plans</strong> to enhance efficiency, reduce costs, and align business objectives.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Financial and Operational Reorganisation</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Our team supports financial restructuring</strong> including debt refinancing, asset optimization, and operational changes to improve company stability and growth.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Legal Compliance and Documentation</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We ensure all restructuring and reorganisation processes comply with legal requirements</strong> and assist with drafting and reviewing necessary documentation.
        </p>
      </section>

      <footer className="mt-[40px] text-[#624524] text-[14px] leading-[1.5]">
        Let us help your business navigate complex restructuring challenges with expert advice and comprehensive support. Contact us today for tailored solutions.
      </footer>
    </main>
  );
}
