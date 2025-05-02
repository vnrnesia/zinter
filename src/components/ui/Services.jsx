import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import serviceicon1 from "@/assets/serviceicon1.png";
import serviceicon2 from "@/assets/serviceicon2.png";
import tick from "@/assets/tick.png";

const topServices = [
  {
    title: "Поиск товара и подбор поставщика",
    points: [
      "Подбираем товар в заданной категории и предлагаем аналоги.",
      "Проводим анализ рынка и предлагаем выбрать оптимального поставщика.",
    ],
    icon: serviceicon1,
  },
  {
    title: "Доставка товара под ключ",
    points: [
      "Подбираем поставщиков, выкупаем товар.",
      "Производим таможенное оформление и доставляем до вашего склада.",
    ],
    icon: serviceicon2,
  },
  {
    title: "Таможенное оформление и сертификация",
    points: [
      "Помогаем с оформлением всей разрешительной документации.",
      "Производим таможенное оформление и помогаем с сертификацией товара на территории РФ.",
    ],
    icon: serviceicon2,
  },
];

const serviceItems = [
  {
    title: "Страхование груза",
    content: "content",
  },
  {
    title: "Оплата товара",
    content: "content",
  },
  {
    title: "Оптимизация стоимости",
    content: "content",
  },
  {
    title: "Складские услуги",
    content: "content",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#F8FAFC] w-full">
      <div className="w-full max-w-[1300px] px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="w-fit text-blue-600 font-medium border border-blue-600 px-3 py-1 rounded-full text-sm inline-block mb-4">
            надёжная логистика
          </div>
          <h2 className="text-4xl font-bold mb-4">Что входит в услугу?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем комплексный логистический сервис, включая поиск и проверку поставщиков, выкуп и доставку товаров, а также полное таможенное оформление.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {topServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img src={service.icon} alt={`Icon ${index + 1}`} className="w-6 h-6 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <img src={tick} alt="" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {serviceItems.map((item, index) => (
            <div key={index} className="w-full">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-800 font-medium flex justify-between items-center hover:bg-gray-50 transition"
              >
                {item.title}
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 text-sm text-gray-600 border border-t-0 border-gray-200 rounded-b-lg bg-gray-50 overflow-hidden"
                  >
                    {item.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
