import { motion } from "framer-motion";

export default function StepsSection() {
  const steps = [
    { title: "Шаг 1", description: "Анализ вашей заявки" },
    { title: "Шаг 2", description: "Предоставляем КП и подробный расчет" },
    { title: "Шаг 3", description: "Подписываем договор и производим оплату" },
    { title: "Шаг 4", description: "Осуществляем доставку на ваш склад" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          Этапы Сотрудничества
        </h2>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center relative"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-700 mb-4">
                {index + 1}
              </div>
              <h3 className="font-bold text-lg text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
