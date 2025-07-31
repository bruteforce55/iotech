"use client"
import { useRouter } from 'next/navigation';

export default function BanksAndFinancialInstitutionsPage() {
    
  const router = useRouter();
  return (
    <main className="px-[24px] py-[40px] max-w-[768px] mx-auto text-[#333333]">
      <div
        onClick={() => router.push('/')}
        className="cursor-pointer text-[14px] text-[#624524] hover:underline mb-[24px]"
      >
        &lt; Back
      </div>

      <h1 className="text-[32px] text-[#624524] font-bold leading-[1.2] mb-[24px]">Banks and Financial Institutions Services</h1>

      <p className="mb-[32px] text-[16px] leading-[1.6]">
        We provide specialized legal and advisory services tailored to banks and financial institutions, helping you navigate complex regulations, manage risks, and support your business growth.
      </p>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Regulatory Compliance</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Our experts assist financial institutions in maintaining full compliance</strong> with local and international banking laws, anti-money laundering (AML) regulations, and financial reporting standards.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Risk Management and Litigation</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We provide risk assessment and defense strategies</strong> for disputes involving financial products, loan defaults, fraud, and other banking-related litigation.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Corporate Transactions and Advisory</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Our team supports banks and financial institutions</strong> in mergers, acquisitions, restructurings, and contract negotiations to facilitate smooth and compliant transactions.
        </p>
      </section>

      <footer className="mt-[40px] text-[#624524] text-[14px] leading-[1.5]">
        Partner with us for expert guidance and tailored legal solutions designed specifically for the banking and financial sector. Contact us today to learn more.
      </footer>
    </main>
  );
}
