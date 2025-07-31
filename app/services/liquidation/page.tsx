"use client"
import { useRouter } from 'next/navigation';

export default function CompaniesLiquidationPage() {
    
  const router = useRouter();
  return (
    <main className="px-[24px] py-[40px] max-w-[768px] mx-auto text-[#333333]">
      <div
        onClick={() => router.push('/')}
        className="cursor-pointer text-[14px] text-[#624524] hover:underline mb-[24px]"
      >
        &lt; Back
      </div>

      <h1 className="text-[32px] text-[#624524] font-bold leading-[1.2] mb-[24px]">Companies Liquidation Services</h1>

      <p className="mb-[32px] text-[16px] leading-[1.6]">
        We offer professional companies liquidation services to guide businesses through the process of winding up their affairs efficiently and in compliance with legal requirements.
        Our experienced team provides support tailored to your specific liquidation needs.
      </p>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Voluntary Liquidation</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We assist companies choosing to liquidate voluntarily</strong> by advising on the process, preparing documentation, and ensuring all creditor and shareholder obligations are met.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Compulsory Liquidation</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Our team supports companies facing compulsory liquidation</strong> through court processes, helping to protect stakeholders’ rights and manage the distribution of assets.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Asset Realization and Debt Settlement</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We manage the realization of company assets</strong> and the fair settlement of debts with creditors during the liquidation process to ensure transparency and compliance.
        </p>
      </section>

      <footer className="mt-[40px] text-[#624524] text-[14px] leading-[1.5]">
        Rely on our expertise to handle your company’s liquidation with professionalism and care. Contact us today for comprehensive liquidation services.
      </footer>
    </main>
  );
}
