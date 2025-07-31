"use client"
import { useRouter } from 'next/navigation';

export default function NotarizationServicesPage() {
    
  const router = useRouter();
  return (
    <main className="px-[24px] py-[40px] max-w-[768px] mx-auto text-[#333333]">
      <div
        onClick={() => router.push('/')}
        className="cursor-pointer text-[14px] text-[#624524] hover:underline mb-[24px]"
      >
        &lt; Back
      </div>

      <h1 className="text-[32px] text-[#624524] font-bold leading-[1.2] mb-[24px]">Notarization</h1>

      <p className="mb-[32px] text-[16px] leading-[1.6]">
        Our firm provides reliable notarization services to individuals and businesses, ensuring that your important documents are properly authenticated and legally recognized. 
        We offer convenient and professional support for all your notarization needs.
      </p>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Document Notarization</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We notarize a wide range of documents</strong> including affidavits, powers of attorney, contracts, deeds, and other legal papers requiring official verification.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Mobile Notary Services</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>For your convenience, we offer mobile notary services</strong> where our certified notaries travel to your location to notarize documents securely and efficiently.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">International Notarization</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We assist with notarizations required for international documents</strong> including apostilles and certifications to meet foreign legal requirements.
        </p>
      </section>

      <footer className="mt-[40px] text-[#624524] text-[14px] leading-[1.5]">
        Count on our notarization services to provide fast, trustworthy, and legally compliant document authentication. Contact us today to schedule your notarization appointment.
      </footer>
    </main>
  );
}
