import { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceItems = [
  {
    title: "Ответственное хранение",
    content:
      "ПОтветственное хранение — это комплекс услуг по безопасному хранению ваших товаров на складе с учётом всех норм и требований, включая контроль состояния, сохранность и своевременную выдачу.",
  },
  {
    title: "Фасовка, сортировка и переупаковка ",
    content: "комплекс операций по разделению, упорядочиванию и повторной упаковке товаров для удобства хранения, транспортировки и продажи.",
  },
  {
    title: "Переупаковка товара",
    content: "это процесс смены или обновления упаковки продукции для улучшения её внешнего вида, защиты при транспортировке или подготовки к продаже.",
  },
  {
    title: "Переупаковка товара",
    content: " это процесс смены или обновления упаковки продукции для улучшения её внешнего вида, защиты при транспортировке или подготовки к продаже.",
  },
  {
    title: "Маркировка",
    content: "это нанесение на товар специальных знаков, этикеток или штрих-кодов для идентификации, контроля и удобства учета в процессе хранения и продажи.",
  },
  {
    title: "Стикеровка",
    content: " это процесс нанесения наклеек или этикеток на товары для идентификации, маркировки и удобства учета на складе и при продаже.",
  },
  {
    title: "Доставка получателю",
    content: "то организация своевременной и надежной транспортировки товара от склада до конечного адресата с обеспечением сохранности и контролем процесса.",
  },
  {
    title: "Кросс-докинг",
    content: " это метод логистики, при котором товары быстро перенаправляются с приходящего транспорта на исходящий без длительного хранения на складе, что ускоряет доставку и снижает издержки.",
  },
];

function AccordionItem({ title, content, isOpen, onClick }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, content]);

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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
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
        <div className="text-center mb-12 md:mb-16">
          <span className="px-4 py-2 text-[14px] text-[#006FDC] font-medium border border-[#006FDC] rounded-full">
            Надёжная логистика
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 my-4">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Более 15 лет мы успешно организуем грузоперевозки из Китая и других
            азиатских стран, обеспечивая надежную, быструю и безопасную доставку
            товаров для наших клиентов.
          </p>
        </div>

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
