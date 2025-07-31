"use client"
import { useRouter } from 'next/navigation';

export default function EstatesServicesPage() {
    
  const router = useRouter();
  return (
    <main className="px-[24px] py-[40px] max-w-[768px] mx-auto text-[#333333]">
      <div
        onClick={() => router.push('/')}
        className="cursor-pointer text-[14px] text-[#624524] hover:underline mb-[24px]"
      >
        &lt; Back
      </div>

      <h1 className="text-[32px] text-[#624524] font-bold leading-[1.2] mb-[24px]">Estates Services</h1>

      <p className="mb-[32px] text-[16px] leading-[1.6]">
        We offer comprehensive estate services to assist individuals and families with estate planning, administration, and management to ensure your assets are protected and transferred according to your wishes.
      </p>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Estate Planning</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Our experts help you develop tailored estate plans</strong> including wills, trusts, and powers of attorney to safeguard your assets and provide for your beneficiaries.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Estate Administration</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We guide executors and administrators</strong> through the legal process of managing and distributing estates in accordance with applicable laws and the deceased’s wishes.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Trust and Probate Services</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We assist with the creation and management of trusts</strong> and provide probate services to help settle estates efficiently and fairly.
        </p>
      </section>

      <footer className="mt-[40px] text-[#624524] text-[14px] leading-[1.5]">
        Protect your legacy and ensure peace of mind with our professional estate services. Contact us today to learn more.
      </footer>
    </main>
  );
}
