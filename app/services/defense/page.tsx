"use client"
import { useRouter } from 'next/navigation';

export default function DefenseServicesPage() {
    
  const router = useRouter();
  return (
    <main className="px-[24px] py-[40px] max-w-[768px] mx-auto text-[#333333]">
      <div
        onClick={() => router.push('/')}
        className="cursor-pointer text-[14px] text-[#624524] hover:underline mb-[24px]"
      >
        &lt; Back
      </div>

      <h1 className="text-[32px] text-[#624524] font-bold leading-[1.2] mb-[24px]">Defense in All Cases</h1>

      <p className="mb-[32px] text-[16px] leading-[1.6]">
        Our firm provides expert legal defense services across a wide range of cases, ensuring your rights are protected and your interests vigorously represented in every situation.
      </p>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Criminal Defense</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We defend clients accused of criminal offenses</strong> with dedication and deep knowledge of criminal law to secure the best possible outcomes.
        </p>
        <ul className="list-disc list-inside ml-[32px] mt-[8px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <li>Felonies and misdemeanors</li>
          <li>Drug-related offenses</li>
          <li>Theft and fraud cases</li>
          <li>Assault and violent crime defense</li>
        </ul>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Civil Defense</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Our legal team represents clients in civil disputes</strong> to protect their rights and interests in cases such as contracts, property, and personal injury.
        </p>
        <ul className="list-disc list-inside ml-[32px] mt-[8px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <li>Contract disputes</li>
          <li>Property and real estate defense</li>
          <li>Personal injury defense</li>
          <li>Employment-related defenses</li>
        </ul>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Family Law Defense</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We provide defense services in family law matters</strong> including custody disputes, alimony disagreements, and protection orders.
        </p>
      </section>

      <footer className="mt-[40px] text-[#624524] text-[14px] leading-[1.5]">
        No matter the case, our dedicated legal defense team is committed to protecting your rights and achieving the best results. Contact us today for trusted defense representation.
      </footer>
    </main>
  );
}
