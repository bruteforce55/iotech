"use client"
import { useRouter } from 'next/navigation';

export default function IntellectualPropertyServicesPage() {
    
  const router = useRouter();
  return (
    <main className="px-[24px] py-[40px] max-w-[768px] mx-auto text-[#333333]">
      <div
        onClick={() => router.push('/')}
        className="cursor-pointer text-[14px] text-[#624524] hover:underline mb-[24px]"
      >
        &lt; Back
      </div>

      <h1 className="text-[32px] text-[#624524] font-bold leading-[1.2] mb-[24px]">Intellectual Property Services</h1>

      <p className="mb-[32px] text-[16px] leading-[1.6]">
        We offer comprehensive intellectual property services to help individuals and businesses protect, manage, and enforce their IP rights including patents, trademarks, copyrights, and trade secrets.
      </p>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Patent Services</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We assist with patent application, prosecution, and enforcement</strong> to protect your inventions and innovations.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Trademark Services</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>Our team helps register, monitor, and defend trademarks</strong> to safeguard your brand identity.
        </p>
      </section>

      <section className="mb-[32px]">
        <h2 className="font-semibold text-[#624524] text-[18px] mb-[8px]">Copyright and Trade Secrets</h2>
        <p className="ml-[16px] border-l-[4px] border-[#cccccc] pl-[16px] text-[#4a4a4a] text-[16px] leading-[1.6]">
          <strong>We provide counsel on copyright protection and trade secret management</strong> to preserve your creative works and confidential information.
        </p>
      </section>

      <footer className="mt-[40px] text-[#624524] text-[14px] leading-[1.5]">
        Protect your intellectual property with our expert services. Contact us today to secure your innovations and creative assets.
      </footer>
    </main>
  );
}
