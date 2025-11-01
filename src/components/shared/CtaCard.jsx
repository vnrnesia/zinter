import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import payment from "@/assets/PaymentImg/payment.png";

import contactIcon1 from "@/assets/Contactimage/icon1.png";
import contactIcon2 from "@/assets/Contactimage/icon2.png";
import contactIcon3 from "@/assets/Contactimage/icon3.png";
import contactIcon4 from "@/assets/Contactimage/icon4.png";
import contactIcon5 from "@/assets/Contactimage/icon5.png";
import CallButton from "@/components/shared/CallButtonCta.jsx";

gsap.registerPlugin(ScrollTrigger);

const contactBenefits = [
  { icon: contactIcon1, text: "Быстрая и безопасная доставка по всему миру" },
  { icon: contactIcon2, text: "Прозрачные тарифы без скрытых комиссий" },
  {
    icon: contactIcon3,
    text: "Оптимальные маршруты и выгодные условия сотрудничества",
  },
  { icon: contactIcon4, text: "Полный контроль на каждом этапе перевозки" },
  { icon: contactIcon5, text: "Профессиональная поддержка 24/7" },
];

const CtaCard = () => {
  const sectionRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftCardRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(rightCardRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-6 md:pt-0 max-w-full mx-auto min-h-[550px] bg-gradient-to-r from-[#006FDC] to-[#11B4EC] px-4 flex items-center"
    >
      {/* Grid: Sol ve sağ eşit alanlar */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center w-full">
        {/* Sol taraf */}
        <div
          ref={leftCardRef}
          className="flex flex-col items-center justify-center text-center mx-auto"
        >
        
          <img
            src={payment}
            alt="logo"
            className="w-[85%] md:w-[75%] max-w-[500px] md:mr-16 transition-transform duration-500 hover:scale-105 "
          />
        </div>

        {/* Sağ taraf */}
        <div
          ref={rightCardRef}
          className="text-white flex flex-col justify-center lg:text-start text-center lg:pl-10"
        >
          <h3 className="text-xl font-semibold text-white leading-snug pb-5">
            ZinterLogistics — ваш надёжный партнёр в международной логистике с
            присутствием в РФ, ОАЭ и Китае
          </h3>

          <ul className="mt-6 space-y-4 text-gray-50">
            {contactBenefits.map(({ icon, text }, idx) => (
              <li key={idx} className="flex items-center gap-3 justify-start">
                <img
                  className="w-6 h-6 filter invert brightness-0"
                  src={icon}
                  alt=""
                />
                <span className="text-start">{text}</span>
              </li>
            ))}
          </ul>

          <div className="pt-8 pb-10 md:pb-0 flex justify-center lg:justify-start">
            <CallButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaCard;
