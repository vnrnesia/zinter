import React, { useEffect, useRef } from "react";
import ivan from "@/assets/ivan.png";
import icon1 from "@/assets/LeftPanel/icon1.png";
import icon2 from "@/assets/LeftPanel/icon2.png";
import icon3 from "@/assets/LeftPanel/icon3.png";
import icon4 from "@/assets/LeftPanel/icon4.png";
import { Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Socialicon1 from "@/assets/LeftPanel/icon1.png";
import Socialicon2 from "@/assets/LeftPanel/icon2.png";
import Socialicon3 from "@/assets/LeftPanel/icon3.png";
import Socialicon4 from "@/assets/LeftPanel/icon4.png";

import contactIcon1 from "@/assets/Contactimage/icon1.png";
import contactIcon2 from "@/assets/Contactimage/icon2.png";
import contactIcon3 from "@/assets/Contactimage/icon3.png";
import contactIcon4 from "@/assets/Contactimage/icon4.png";
import contactIcon5 from "@/assets/Contactimage/icon5.png";

const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const services = [
  { id: 1, label: "Международные грузоперевозки" },
  { id: 2, label: "Таможенное оформление" },
];

const contactBenefits = [
  { icon: contactIcon1, text: "Быстрая и безопасная доставка по всему миру" },
  { icon: contactIcon2, text: "Прозрачные тарифы без скрытых комиссий" },
  {
    icon: contactIcon3,
    text: "Оптимальные маршруты и выгодные условия сотрудничества",
  },
  { icon: contactIcon4, text: "Полный контроль на каждом этапе перевозки" },
  { icon: contactIcon5, text: " Профессиональная поддержка 24/7" },
];

const socialIcons = [Socialicon1, Socialicon2, Socialicon3, Socialicon4];

gsap.registerPlugin(ScrollTrigger);

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
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 pt-4 md:pt-0 gap-8 justify-center items-center ">
        <div className="mx-auto ">
          <h1 className="text-center justify-center text-white font-bold text-2xl">
            ZinterLogistics — ваш надёжный партнёр в международной логистике с
            присутствием в РФ, ОАЭ и Китае
          </h1>
          <div className="mx-auto justify-center flex ">
            <img src="/public/logo.png" alt="Logo" />
          </div>
        </div>

        {/* Right Card */}
        <div
          ref={rightCardRef}
          className="text-white p-8 flex flex-col justify-between lg:rounded-l-none rounded-xl lg:text-start"
        >
          <div>
            <h3 className="text-xl font-semibold text-white leading-snug pb-5">
              Мы соединяем мир: логистика без границ
            </h3>
            <ul className="mt-6 space-y-4 text-gray-50">
              {contactBenefits.map(({ icon, text }, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <img
                    className="w-6 h-6 filter invert brightness-0"
                    src={icon}
                    alt=""
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="py-7">
            <h3 className="font-bold pb-2 text-white">
              Подписывайтесь на наш Telegram-канал
            </h3>
            <p className="text-gray-50">t.me/zinterlogistics</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaCard;
