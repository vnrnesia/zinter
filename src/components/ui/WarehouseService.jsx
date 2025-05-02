import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const serviceItems = [
  {
    title: "Ответственное хранение",
    content: "content",
  },
  {
    title: "Фасовка/сортировка/переупаковка",
    content: "content",
  },
  {
    title: "Переупаковка товара",
    content: "content",
  },
  {
    title: "Паллетирование",
    content: "content",
  },
  {
    title: "Маркировка",
    content: "content",
  },
  {
    title: "Стикеровка",
    content: "content",
  },
  {
    title: "Доставка получателю",
    content: "content",
  },
  {
    title: "Кросс-докинг",
    content: "content",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white w-full">
      <div className="w-full max-w-[1300px] px-4 mx-auto">
        

        

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
