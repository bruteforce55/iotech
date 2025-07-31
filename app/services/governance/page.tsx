"use client"
import { useRouter } from 'next/navigation';

export default function CorporateGovernanceServicesPage() {
    
  const router = useRouter();
  return (
    <main className="px-[24px] py-[40px] max-w-[768px] mx-auto text-[#333333]">
      <div
        onClick={() => router.push('/')}
        className="cursor-pointer text-[14px] text-[#624524] hover:underline mb-[24px]"
      >
        &lt; Back
      </div>

      <h1 className="text-[32px] text-[#624524] font-bold leading-[1.2] mb-[24px]">Corporate Governance Services</h1>

      <p className="mb-[32px] text-[16px] leading-[1.6]">
        We provide comprehensive corporate governance services designed to help organizations establish effective structures, policies, and practices that promote accountability, transparency, and sustainable growth.
      </p>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Board Advisory and Support</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We assist boards of directors and executives</strong> in defining roles, responsibilities, and best practices to ensure effective decision-making and oversight.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Compliance and Risk Management</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Our team helps organizations implement compliance frameworks</strong> and risk management policies that meet regulatory requirements and mitigate potential issues.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Corporate Policies and Procedures</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We develop tailored corporate governance policies and procedures</strong> to promote ethical practices, transparency, and operational efficiency.
        </p>
      </section>

      <footer className="mt-[40px] text-[#624524] text-[14px] leading-[1.5]">
        Trust our expertise to strengthen your corporate governance framework and support your organization’s long-term success. Contact us today to learn more about our services.
      </footer>
    </main>
  );
}
