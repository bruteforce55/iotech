"use client"
import { useRouter } from 'next/navigation';

export default function InternalRegulationForCompaniesPage() {
    
  const router = useRouter();
  return (
    <main className="px-[24px] py-[40px] max-w-[768px] mx-auto text-[#333333]">
      <div
        onClick={() => router.push('/')}
        className="cursor-pointer text-[14px] text-[#624524] hover:underline mb-[24px]"
      >
        &lt; Back
      </div>

      <h1 className="text-[32px] text-[#624524] font-bold leading-[1.2] mb-[24px]">Internal Regulation for Companies</h1>

      <p className="mb-[32px] text-[16px] leading-[1.6]">
        We assist companies in developing and implementing effective internal regulations to ensure smooth operations, compliance with laws, and clear guidelines for governance and employee conduct.
      </p>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Policy Development</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We help draft tailored internal policies</strong> covering areas such as ethics, workplace behavior, compliance, data protection, and operational procedures.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Compliance and Enforcement</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Our team supports companies in enforcing regulations</strong> effectively and ensuring compliance with applicable laws and internal standards.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Training and Consultation</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We provide training and consultation services</strong> to educate management and employees on internal regulations and best practices.
        </p>
      </section>

      <footer className="mt-[40px] text-[#624524] text-[14px] leading-[1.5]">
        Let us help your company build a solid framework of internal regulations that promotes efficiency, integrity, and compliance. Contact us today for professional support.
      </footer>
    </main>
  );
}
