import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import featureicon1 from "@/assets/FeaturesHowWorksImg/featureicon1.png";
import featureicon2 from "@/assets/FeaturesHowWorksImg/featureicon2.png";
import featureicon3 from "@/assets/FeaturesHowWorksImg/featureicon3.png";

export default function HowWorks() {
  const steps = [
    {
      title: "Заявка",
      text: [
        " Вы предоставляете параметры Вашего товара и выбираете интересующие услуги.",
      ],
      img: featureicon1,
    },
    {
      title: "Коммерческое предложение",
      text: [
        "Рассчитываем ваш заказ и предоставляем оптимальное коммерческое предложение.",
      ],
      img: featureicon2,
    },
    {
      title: "Договор",
      text: [
        "Подписываем договор и принимаем товар на ответственное храниние.",
      ],
      img: featureicon3,
    },
  ];

  const [visibleCount, setVisibleCount] = useState(0);
  const controls = useAnimation();
  const lineRef = useRef(null);

  useEffect(() => {
    if (visibleCount > 0 && lineRef.current) {
      controls.start({
        height: `${(visibleCount / (steps.length - 1)) * 100}%`,
        transition: { duration: 0.6 },
      });
    }
  }, [visibleCount, controls]);

  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 flex flex-col justify-center self-center my-auto">
          <span className="w-fit text-blue-600 font-medium border border-blue-600 px-3 py-1 rounded-full text-sm inline-block mb-4">
            шаг за шагом
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Как это работает?
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Мы помогаем вам проводить международные платежи безопасно и
            эффективно, используя наши представительства в СНГ, ЕС и Китае.
          </p>
        </div>

        <div className="md:w-1/2 relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 overflow-hidden rounded-full">
            <motion.div
              ref={lineRef}
              initial={{ height: 0 }}
              animate={controls}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-400 to-blue-600"
            />
          </div>

          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                onViewportEnter={() =>
                  setVisibleCount((prev) => Math.max(prev, index))
                }
                className="flex items-start gap-6"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white shadow-lg ring-2 ring-white flex items-center justify-center">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  {step.text.map((t, idx) => (
                    <p
                      key={idx}
                      className="text-gray-600 text-base leading-relaxed mb-2"
                    >
                      {t}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
