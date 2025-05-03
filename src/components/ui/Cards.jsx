import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import china from "@/assets/china.png";
import currency from "@/assets/currency.png";
import europe from "@/assets/europe.png";
import world from "@/assets/world.png";

const cardsData = [
  {
    img: world,
    title: "ПОИСК ПОСТАВЩИКА",
    description: "Подбираем товар, проверяем производителя и контролируем качество.",
  },
  {
    img: china,
    title: "ДОСТАВКА ИЗ КИТАИЯ",
    description: "надежные мультимодальные перевозки, оптимизация сроков и затрат",
    path: "/china-delivery"
  },
  {
    img: currency,
    title: "ОПЛАТА ТОВАРА",
    description: "Подбираем товар, проверяем производителя и контролируем качество.",
    path: "/payment"
  },
  {
    img: europe,
    title: "ДОСТАВКА ИЗ ЕВРОПА",
    description: "Комплексные логистические решения для бизнеса: регулярные и срочные грузоперевозки из Европы с таможенным оформлением",
    path: "/europe-delivery"
  }
];

export default function Cards() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <span className="px-4 py-2 text-[14px] text-[#006FDC] font-medium border border-[#006FDC] rounded-full">
          Надёжная логистика
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 my-4">
          Наши услуги
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Более 15 лет мы успешно организуем грузоперевозки из Китая и других азиатских стран, обеспечивая надежную, быструю и безопасную доставку товаров для наших клиентов.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {cardsData.map((card, index) => (
          <Link to={card.path} key={index} className="block h-full">
            <motion.div
              className="bg-[#fbfbfb] rounded-xl shadow-sm p-6 md:p-8 transition-all hover:shadow-lg h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center text-center h-full space-y-4">
                <img src={card.img} alt={card.title} className="h-10 w-10 object-contain" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{card.title}</h3>
                <p className="text-gray-600 mb-4 md:px-10">{card.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
