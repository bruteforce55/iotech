"use client"
import { useRouter } from 'next/navigation';

export default function ServicesForCompaniesAndInstitutionsPage() {
    
  const router = useRouter();
  return (
    <main className="px-[24px] py-[40px] max-w-[768px] mx-auto text-[#333333]">
      <div
        onClick={() => router.push('/')}
        className="cursor-pointer text-[14px] text-[#624524] hover:underline mb-[24px]"
      >
        &lt; Back
      </div>

      <h1 className="text-[32px] text-[#624524] font-bold leading-[1.2] mb-[24px]">Services for Companies and Institutions</h1>

      <p className="mb-[32px] text-[16px] leading-[1.6]">
        We offer a wide range of professional services designed to support companies and institutions in achieving their operational, legal, and strategic goals efficiently and compliantly.
      </p>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Legal Advisory</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Our legal experts provide tailored advice</strong> on corporate law, contracts, compliance, and dispute resolution to help your organization navigate complex legal landscapes.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Corporate Governance</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We assist in developing strong governance frameworks</strong> that promote transparency, accountability, and sustainable growth within your organization.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Risk Management and Compliance</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Our team supports your institution</strong> in identifying, assessing, and mitigating risks while ensuring compliance with relevant laws and industry standards.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Training and Capacity Building</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We provide customized training programs</strong> to enhance the skills and knowledge of your employees and management teams.
        </p>
      </section>

      <footer className="mt-[40px] text-[#624524] text-[14px] leading-[1.5]">
        Partner with us for comprehensive services that empower your company or institution to thrive in a competitive environment. Contact us today to learn more.
      </footer>
    </main>
  );
}
