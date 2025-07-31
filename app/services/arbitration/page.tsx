"use client"
import { useRouter } from 'next/navigation';

export default function ArbitrationServicesPage() {
    
  const router = useRouter();
  return (
    <main className="px-[24px] py-[40px] max-w-[768px] mx-auto text-[#333333]">
      <div
        onClick={() => router.push('/')}
        className="cursor-pointer text-[14px] text-[#624524] hover:underline mb-[24px]"
      >
        &lt; Back
      </div>

      <h1 className="text-[32px] text-[#624524] font-bold leading-[1.2] mb-[24px]">Arbitration Services</h1>

      <p className="mb-[32px] text-[16px] leading-[1.6]">
        Our firm offers expert arbitration services to help parties resolve disputes efficiently, confidentially, and fairly outside of traditional court proceedings.
      </p>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Arbitration Advisory</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We provide guidance on arbitration agreements</strong> and help structure arbitration clauses that protect your interests and facilitate smooth dispute resolution.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Representation in Arbitration Proceedings</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Our experienced arbitrators and legal team</strong> represent clients during arbitration hearings, advocating for favorable outcomes.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Enforcement and Challenges</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We assist in enforcing arbitration awards</strong> and handle any challenges or disputes arising from the arbitration process.
        </p>
      </section>

      <footer className="mt-[40px] text-[#624524] text-[14px] leading-[1.5]">
        Choose our arbitration services for effective, confidential dispute resolution that saves time and resources. Contact us today to learn how we can assist you.
      </footer>
    </main>
  );
}
