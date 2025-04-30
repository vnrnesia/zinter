import { motion, useInView } from "framer-motion";
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

  const [currentStep, setCurrentStep] = useState(-1);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "0px 0px -20% 0px" });

  useEffect(() => {
    if (inView && currentStep < steps.length - 1) {
      const timer = setTimeout(() => setCurrentStep((prev) => prev + 1), 500);
      return () => clearTimeout(timer);
    }
  }, [inView, currentStep]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Этапы Сотруничества
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            4 простых шага для одобрения вашей заявки
          </p>
        </div>

        <div className="relative">
          {/* Masaüstü çizgisi */}
          <div className="hidden md:flex absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-0">
            <div className="flex-1 flex items-center px-10">
              {[...Array(steps.length - 1)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-1 bg-gray-200 relative mx-4 overflow-hidden rounded-full"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: currentStep > i ? "100%" : "0%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute h-full bg-gradient-to-r from-[#006FDC] to-[#11B4EC]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobil çizgi */}
          <div className="md:hidden absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 z-0 w-2">
            <div className="h-full bg-gray-200 mx-auto w-[2px] relative overflow-hidden">
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: `${(currentStep / (steps.length - 1)) * 100}%`,
                }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 w-full bg-gradient-to-b from-[#006FDC] to-[#11B4EC]"
              />
            </div>
          </div>

          {/* Adımlar */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: currentStep >= index ? 1 : 0.3,
                  y: currentStep >= index ? 0 : 30,
                }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 mb-4 flex items-center justify-center rounded-full border-2 text-lg font-semibold transition-all duration-300 ${
                      currentStep >= index
                        ? "bg-gradient-to-r from-[#006FDC] to-[#11B4EC] text-white border-transparent shadow-md"
                        : "border-[#006FDC] text-[#006FDC] bg-white"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div
                    className="bg-white px-6 py-8 rounded-xl shadow-sm text-center max-w-xs mx-auto"
                    style={{ height: 220 }}
                  >
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
