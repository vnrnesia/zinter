import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Brands from "../shared/Brands";

import avatar1 from "@/assets/Avatar/avatar1.png";
import avatar2 from "@/assets/Avatar/avatar2.png";
import avatar3 from "@/assets/Avatar/avatar3.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "С Zinter Logistics управление грузоперевозками стало намного проще и безопаснее. Мы экономим время и уверены в каждой доставке.",
    name: "Артем Волков",
    position: "финансовый директор, ООО «ТрансСервис»",
    image: avatar1,
  },
  {
    text: "Международные перевозки через Zinter Logistics — это удобно и надёжно. Рекомендую всем компаниям, которым важна скорость и прозрачность поставок.",
    name: "Алексей Морозов",
    position: "руководитель отдела закупок, ЗАО «КаргоТрейд»",
    image: avatar2,
  },
  {
    text: "Zinter Logistics помогает нам оптимизировать цепочку поставок и наладить расчёты с партнёрами по всему миру. Это действительно надёжный партнёр в сфере логистики.",
    name: "Ольга Смирнова",
    position: "генеральный директор, ООО «ГлобалТранспорт»",
    image: avatar3,
  },
];

const icons = [
  { src: "/Comment/brand1.png", width: "w-[80%] md:w-[69%]" },
  { src: "/Comment/brand2.png", width: "w-[90%] md:w-[90%]" },
  { src: "/Comment/brand3.png", width: "w-[80%] md:w-[60%]" },
  { src: "/Comment/brand4.png", width: "w-[105%] md:w-[90%]" },
  { src: "/Comment/brand5.png", width: "w-[75%] md:w-[50%]" },
  { src: "/Comment/brand6.png", width: "w-[75%] md:w-[50%]" },
];

const Comments = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const testimonialRef = useRef(null);
  const brandsRef = useRef(null);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !testimonialRef.current ||
      !brandsRef.current
    )
      return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        testimonialRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      const logos = brandsRef.current.querySelectorAll("img");
      gsap.fromTo(
        logos,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: brandsRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const variants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 60 : -60,
      y: dir > 0 ? -60 : 60,
    }),
    center: { opacity: 1, x: 0, y: 0 },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -60 : 60,
      y: dir > 0 ? 60 : -60,
    }),
  };

  return (
    <section className=" md:py-24 pb-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between">
        {/* Left Content */}
        <div className="max-w-lg">
          <div className="inline-flex px-4 py-2 text-[14px] text-[#006FDC] font-medium border border-[#006FDC] rounded-full">
            Отзывы клиентов{" "}
          </div>
          <h2 className="pt-4 text-3xl md:text-3xl font-semibold text-gray-900 mb-6 leading-tight">
            Опыт клиентов, который говорит сам за себя
          </h2>
          <div className="pt-4 grid grid-cols-3 divide-x divide-gray-200 text-center">
            <div>
              <p className="text-lg md:text-4xl font-semibold text-neutral-900">
                38+
              </p>
              <p className="text-[14px] md:text-base text-gray-500 mt-1">
                Стран в которые мы <br /> осуществляем переводы
              </p>
            </div>
            <div className="px-4">
              <p className="text-lg md:text-4xl font-semibold text-neutral-900">
                95%
              </p>
              <p className="text-sm md:text-base text-gray-500 mt-1">
                Платежей проходят День <br /> в день
              </p>
            </div>
            <div>
              <p className="text-lg md:text-4xl font-semibold text-neutral-900">
                500+
              </p>
              <p className="text-sm md:text-base text-gray-500 mt-1">
                Клиенты регулярно платят через <br /> нас
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Card */}
        <div
          ref={testimonialRef}
          className="relative bg-gray-100 rounded-2xl w-full md:w-1/2 mt-10 md:mt-0 min-h-[280px] overflow-hidden"
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 right-0 bottom-0 p-8 h-[500px]"
            >
              <p className="text-gray-800 text-lg mb-6 italic">
                "{testimonials[index].text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonials[index].name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[index].position}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 transition"
              title="Next"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  transform="rotate(-45 12 12)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="absolute bottom-4 right-[60px] flex gap-2">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 transition"
              title="Previous"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 12H5M12 19l-7-7 7-7"
                  transform="rotate(320 12 12)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-300 mt-14 pb-6" />

      {/* Brand Logos */}
      <div
        ref={brandsRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            className="brand-item group rounded-xl p-4 flex items-center justify-center h-20  hover:shadow-md transition"
          >
            <img
              src={icon.src}
              alt={`Company logo ${index + 1}`}
              className={`object-contain group-hover:grayscale-0 group-hover:scale-105 transition duration-300 ease-in-out ${icon.width}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;
