"use client"
import { useRouter } from 'next/navigation';

export default function Vision2030Page() {
    
  const router = useRouter();
  return (
    <main className="px-[24px] py-[40px] max-w-[768px] mx-auto text-[#333333]">
      <div
        onClick={() => router.push('/')}
        className="cursor-pointer text-[14px] text-[#624524] hover:underline mb-[24px]"
      >
        &lt; Back
      </div>

      <h1 className="text-[32px] text-[#624524] font-bold leading-[1.2] mb-[24px]">Vision 2030</h1>

      <p className="mb-[32px] text-[16px] leading-[1.6]">
        Vision 2030 is a strategic roadmap designed to transform and diversify the economy, improve quality of life, and promote sustainable development. It focuses on innovation, infrastructure, human capital, and governance to build a prosperous future.
      </p>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Economic Diversification</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Reducing reliance on traditional sectors</strong> by encouraging growth in new industries such as technology, renewable energy, and tourism to build a resilient economy.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Human Capital Development</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Investing in education and skills training</strong> to empower citizens, improve workforce capabilities, and foster innovation.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Sustainable Infrastructure</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Building modern, efficient infrastructure</strong> that supports economic activities while preserving environmental resources.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Governance and Transparency</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Enhancing institutional frameworks</strong> to promote accountability, efficient public services, and citizen engagement.
        </p>
      </section>

      <footer className="mt-[40px] text-[#624524] text-[14px] leading-[1.5]">
        Vision 2030 represents a commitment to progress and prosperity. Join us in realizing this vision for a sustainable and dynamic future.
      </footer>
    </main>
  );
}
