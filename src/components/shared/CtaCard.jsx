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
  { id: 1, label: "Оплата инвойсов" },
  { id: 2, label: "Возврат валютной выручки" },
];

const contactBenefits = [
  { icon: contactIcon1, text: "Безопасные платежи через надёжных партнёров" },
  { icon: contactIcon2, text: "Быстрые переводы" },
  { icon: contactIcon3, text: "Честные комиссии" },
  { icon: contactIcon4, text: "Выгодные курсы обмена" },
  { icon: contactIcon5, text: "Удобство и простота использования" },
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

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section
      ref={sectionRef}
      className="m max-w- mx-auto  min-h-[550px] bg-gradient-to-r from-[#006FDC] to-[#11B4EC] my-16 px-4 flex items-center"
    >
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 pt-4 md:pt-0 gap-8 justify-center items-center ">
        {/* Left Card */}
        <div
          ref={leftCardRef}
          className="rounded-xl border-4 h-[500px] w-auto 3xl:min-w-[900px] border-gray-400 bg-gray-50 flex flex-col items-center justify-center p-8 text-center lg:rounded-r-none"
        >
          <p className="text-gray-700 font-medium text-md text-center mb-2">
            Финансовые консалтинг и услуги международных переводов для B2B
          </p>
          <div className="w-[220px] h-[220px] rounded-full overflow-hidden ">
            <img
              src={ivan}
              alt="Profile"
              className="w-full h-full object-cover  object-center"
            />
          </div>

          <h3 className="text-xl font-semibold">Ivan Marochkin</h3>
          <p className="text-sm text-gray-500 mb-2">CEO</p>

          <div className="flex justify-center gap-3 ">
            <img src={icon1} alt="X" className="w-4 h-4" />
            <img src={icon2} alt="LinkedIn" className="w-4 h-4" />
            <img src={icon3} alt="Facebook" className="w-4 h-4" />
            <img src={icon4} alt="Instagram" className="w-4 h-4" />
          </div>

          <a
            href="https://t.me/bankbooker"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-16 text-blue-600 text-sm flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.47 14.81l-.39 4.23c.56 0 .8-.24 1.09-.52l2.62-2.46 5.45 3.98c1 .55 1.72.26 1.97-.92l3.58-16.74h.01c.32-1.49-.54-2.08-1.5-1.76L1.44 9.67c-1.47.54-1.46 1.32-.25 1.67l4.62 1.44 10.73-6.77c.51-.31.98-.14.6.2L9.47 14.81z" />
            </svg>
            t.me/bankbooker
          </a>
        </div>

        {/* Right Card */}
        <div
          ref={rightCardRef}
          className="text-white p-8 flex flex-col justify-between lg:rounded-l-none rounded-xl lg:text-start"
        >
           <div>
            <h3 className="text-2xl font-extrabold text-white leading-snug pb-10">
              Эффективные международные платежи и бизнес-решения под ключ
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
            <p className="text-gray-50">t.me/bankbooker</p>
          </div>

          <div className="flex lg:block justify-center lg:items-start ">
            <button
              className="bg-white text-black font-medium px-[105px] md:px-6 py-1 rounded-md w-fit whitespace-nowrap"
              onClick={() => {
                const scrollAmount = window.innerWidth <= 768 ? 7700 : 4350;
                window.scrollTo({
                  top: scrollAmount,
                  behavior: "smooth",
                });
              }}
            >
              Связаться с нами
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaCard;
