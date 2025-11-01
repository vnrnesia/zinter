// src/components/Brands.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const icons = [
  {
    src: "/IconGrid/1.png",
    width: "w-[40%] md:w-[30%]",
    label: "Стройматериалы",
  },
  {
    src: "/IconGrid/2.png",
    width: "w-[40%] md:w-[30%]",
    label: "Оборудование",
  },
  { src: "/IconGrid/3.png", width: "w-[40%] md:w-[30%]", label: "Спецтехника" },
  {
    src: "/IconGrid/4.png",
    width: "w-[40%] md:w-[30%]",
    label: "Бытовая техника",
  },
  { src: "/IconGrid/5.png", width: "w-[40%] md:w-[30%]", label: "Электроника" },
  { src: "/IconGrid/6.png", width: "w-[40%] md:w-[35%]", label: "Мебель" },
  { src: "/IconGrid/7.png", width: "w-[40%] md:w-[20%]", label: "Сантехника" },
  { src: "/IconGrid/8.png", width: "w-[40%] md:w-[30%]", label: "Удобрения" },
  { src: "/IconGrid/9.png", width: "w-[40%] md:w-[30%]", label: "Текстиль" },
  { src: "/IconGrid/10.png", width: "w-[40%] md:w-[25%]", label: "Xимический" },
];

const Brands = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const leftHeader = container.querySelector(".left-header");
    const rightHeader = container.querySelector(".right-header");
    const brandItems = container.querySelectorAll(".brand-item");

    // Başlangıç animasyon konumları
    gsap.set(leftHeader, { opacity: 0, x: -100 });
    gsap.set(rightHeader, { opacity: 0, x: 100 });
    gsap.set(brandItems, { opacity: 0, y: 40 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    timeline
      .to(leftHeader, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out",
      })
      .to(
        rightHeader,
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(brandItems, {
        opacity: 1,
        y: 0,
        duration: 0.01,
        ease: "power3.out",
        stagger: 0.1,
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mx-auto pt-2 max-w-sm md:max-w-[90%] 2xl:max-w-7xl mb-24 md:mb-12 px-4 md:px-0"
    >
      <div className="flex justify-center items-center text-center mb-12">
     <div >
           <div className="px-4 py-2 inline-flex text-[14px] text-[#006FDC] font-bold border-2 border-[#006FDC] text-center items-center justify-center  rounded-full">
            Tовары и бренды
          </div>
           <h2 className="text-3xl pt-6 md:text-4xl font-bold text-gray-900 mb-4">
           Мы импортируем
          </h2>
     </div>
        <div className="right-header hidden md:block"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="brand-item group bg-white border border-gray-200 rounded-xl p-4 flex h-28 flex-col items-center justify-center shadow-sm hover:shadow-md transition"
          >
            <img
              src={icon.src}
              alt={`Company logo ${index + 1}`}
              className={`object-contain group-hover:grayscale-0 group-hover:scale-105 transition duration-300 ease-in-out ${icon.width}`}
            />
            <p className="mt-2 text-center text-base font-semibold text-gray-900">
              {icon.label}
            </p>
          </div>
        ))}
      </div>
      <BrandLogos />
    </div>
  );
};

const BrandLogos = () => {
  const icons = [
    { src: "/Comment/brand1.png", width: "w-[80%] md:w-[69%]" },
    { src: "/Comment/brand2.png", width: "w-[90%] md:w-[90%]" },
    { src: "/Comment/brand3.png", width: "w-[80%] md:w-[60%]" },
    { src: "/Comment/brand4.png", width: "w-[105%] md:w-[90%]" },
    { src: "/Comment/brand5.png", width: "w-[75%] md:w-[85%]" },
    { src: "/Comment/brand6.png", width: "w-[75%] md:w-[65%]" },
  ];

  return (
    <div className="mt-10">
      <div className="w-full border-t border-gray-300 mb-12" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="brand-item group rounded-xl p-4 flex items-center justify-center h-20 hover:shadow-md transition"
          >
            <img
              src={icon.src}
              alt={`Company logo ${index + 1}`}
              className={`object-contain group-hover:grayscale-0 group-hover:scale-105 transition duration-300 ease-in-out ${icon.width}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
