import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function StepsSection() {
  const steps = [
    {
      title: "Аналих вашей заявки",
      description:
        "Мы тщательно изучаем вашу заявку для предоставления наилучшего решения.",
    },
    {
      title: "Предоставляем КП и подробный расчет",
      description:
        "Готовим для вас индивидуальное коммерческое предложение с детальным расчетом стоимости.",
    },
    {
      title: "Подписываем договор и производим оплату",
      description:
        "Оформляем официальные документы и согласовываем удобный способ оплаты.",
    },
    {
      title: "Осуществляем доставку на ваш склад",
      description:
        "Организуем надежную транспортировку товара с соблюдением всех сроков и условий.",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(0);
  const controls = useAnimation();
  const mobileLineRef = useRef(null);

  useEffect(() => {
    if (visibleCount > 0 && mobileLineRef.current) {
      controls.start({
        height: `${(visibleCount / (steps.length - 1)) * 100}%`,
        transition: { duration: 0.5 },
      });
    }
  }, [visibleCount, controls]);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Этапы Сотруничества
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            4 простых шага для одобрения вашей заявки
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:flex absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-0">
            <div className="flex-1 flex items-center px-10">
              {[...Array(steps.length - 1)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-1 bg-gray-200 relative mx-4 overflow-hidden rounded-full"
                >
                  <div className="absolute h-full w-full bg-gradient-to-r from-[#006FDC] to-[#11B4EC]" />
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 z-0 w-2">
            <div className="h-full bg-gray-200 mx-auto w-[2px] relative overflow-hidden">
              <motion.div
                ref={mobileLineRef}
                initial={{ height: 0 }}
                animate={controls}
                className="absolute top-0 w-full bg-gradient-to-b from-[#006FDC] to-[#11B4EC]"
              />
            </div>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 z-10 px-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                onViewportEnter={() => setVisibleCount((prev) => Math.max(prev, index))}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-[#006FDC] to-[#11B4EC] text-white shadow-md text-lg font-semibold">
                    {index + 1}
                  </div>
                  <div className="bg-white px-6 py-8 rounded-xl shadow-sm text-center max-w-xs mx-auto" style={{ height: 220 }}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
