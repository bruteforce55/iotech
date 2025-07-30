'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO & Founder',
    image: '/team.png',
    contacts: ['phone', 'whatsapp', 'mail'],
  },
  {
    name: 'Jane Smith',
    position: 'Marketing Lead',
    image: '/team.png',
    contacts: ['phone', 'mail'],
  },
  {
    name: 'Sam Wilson',
    position: 'Product Manager',
    image: '/team.png',
    contacts: ['whatsapp', 'mail'],
  },
  {
    name: 'Alex Rivera',
    position: 'Tech Lead',
    image: '/team.png',
    contacts: ['phone', 'whatsapp', 'mail'],
  },
  {
    name: 'Sam Wilson',
    position: 'CEO & Founder',
    image: '/team.png',
    contacts: ['phone', 'whatsapp', 'mail'],
  },
  {
    name: 'Steve Rogers',
    position: 'Marketing Lead',
    image: '/team.png',
    contacts: ['phone', 'mail'],
  },
  {
    name: 'Victor Rivera',
    position: 'Product Manager',
    image: '/team.png',
    contacts: ['whatsapp', 'mail'],
  },
  {
    name: 'Reed Richards',
    position: 'Tech Lead',
    image: '/team.png',
    contacts: ['phone', 'whatsapp', 'mail'],
  },
];

const iconMap = {
  phone: <Phone className="w-[16px] h-[16px]" />,
  mail: <Mail className="w-[16px] h-[16px]" />,
  whatsapp: <MessageCircle className="w-[16px] h-[16px]" />,
};

export default function OurTeamPage() {
  const slidesPerGroup = 3;

  // 👇 Memoize a padded team list to ensure full groups
  const paddedTeamMembers = useMemo(() => {
    const total = teamMembers.length;
    const remainder = total % slidesPerGroup;
    const paddingNeeded = remainder === 0 ? 0 : slidesPerGroup - remainder;
    return [...teamMembers, ...Array(paddingNeeded).fill(null)];
  }, [slidesPerGroup]);

  return (
    <div id="our-team" className="max-w-7xl mx-[auto] px-[12px] py-[50px]" style={{backgroundColor: "white"}}>
      <h2 className="text-center text-3xl font-bold text-[#3a1d0f] mb-[12px]">Our Team</h2>
      <p className="text-center text-gray-[600px] max-w-xl mx-[auto] mb-[36px]" style={{color: "black"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry...
      </p>

      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={18}
        loop={false}
        className="max-w-[1250px] px-[40px]"
      >
        {paddedTeamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            {member ? (
              <div className="bg-white rounded shadow-md p-[12px] text-center w-full h-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={250}
                  height={250}
                  className="rounded"
                />
                <h3 className="mt-[12px] font-semibold text-lg text-[#3a1d0f]">{member.name}</h3>
                <p className="text-[12px] text-gray-500 mb-[6px] uppercase tracking-wide" style={{color: "black"}}>
                  {member.position}
                </p>
                <div className="flex justify-center gap-[16px]">
                  {member.contacts.map((type, i) => (
                    <span
                      key={i}
                      className="p-[6px] rounded-full hover:bg-gray-100 cursor-pointer"
                      style={{ color: "black"}}
                    >
                      {iconMap[type]}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              // 👇 Blank placeholder to maintain layout
              <div className="w-full h-[300px] bg-transparent" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
