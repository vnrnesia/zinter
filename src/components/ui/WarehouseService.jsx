import { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceItems = [
  {
    title: "Ответственное хранение",
    content: "Поговорите с нашей дружелюбной командой: t.me/zinterlogistics",
  },
  {
    title: "Фасовка/сортировка/переупаковка",
    content: "Надежные мультимодальные перевозки, оптимизация сроков и затрат",
  },
  {
    title: "Переупаковка товара",
    content: "Подбираем товар, проверяем производителя и контролируем качество",
  },
  {
    title: "Паллетирование",
    content: "Грузоперевозки из Европы с таможенным оформлением",
  },
  {
    title: "Маркировка",
    content: "Профессиональное сопровождение таможни",
  },
  {
    title: "Стикеровка",
    content: "Хранение и обработка ваших товаров",
  },
  {
    title: "Доставка получателю",
    content: "Найдем надежных поставщиков по вашим критериям",
  },
  {
    title: "Кросс-докинг",
    content: "Проверка товара перед отправкой",
  },
];

function AccordionItem({ title, content, isOpen, onClick }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm transition-colors duration-300">
      <button
        onClick={onClick}
        className="w-full px-5 py-4 flex justify-between items-center text-left font-medium text-gray-900 hover:bg-gray-50 transition"
      >
        <span>{title}</span>
        <motion.svg
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div ref={contentRef} className="px-5 py-4 text-sm text-gray-700">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 bg-white w-full">
      <div className="w-full max-w-[1300px] px-4 mx-auto">
        <div className="flex flex-wrap -mx-2">
          {serviceItems.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 px-2 mb-4">
              <AccordionItem
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
