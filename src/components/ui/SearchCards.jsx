import { useState } from "react";
import { motion } from "framer-motion";
import icon1 from "@/assets/SearchCardsImg/icon1.png";
import icon2 from "@/assets/SearchCardsImg/icon2.png";
import icon3 from "@/assets/SearchCardsImg/icon3.png";
import icon4 from "@/assets/SearchCardsImg/icon4.png";
import icon5 from "@/assets/SearchCardsImg/icon5.png";
import icon6 from "@/assets/SearchCardsImg/icon6.png";
import { Link } from 'react-router-dom'; 

const topServices = [
  {
    title: "Подбор товара и поиск поставщика",
    icon: icon1,
  },
  {
    title: "Утверждение производителя и контроль качества",
    icon: icon2,
  },
  {
    title: "Согласование и утверждение технического задания для производителя",
    icon: icon3,
  },
  {
    title: "Заключение контракта и размещение заказа",
    icon: icon4,
  },
  {
    title: "Организация производства и контроль производственного процесса",
    icon: icon5,
  },
  {
    title: "Оформление документации и сертификация в РФ",
    icon: icon6,
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
        <div className="text-center mb-12">
          <div className="w-fit text-blue-600 font-medium border border-blue-600 px-3 py-1 rounded-full text-sm inline-block mb-4">
            надёжная логистика
          </div>
          <h2 className="text-4xl font-bold mb-4">Что входит в услугу?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем комплексный логистический сервис, включая поиск и
            проверку поставщиков, выкуп и доставку товаров, а также полное
            таможенное оформление.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {topServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-center text-center md:items-start md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden mx-auto md:mx-0">
                <img
                  src={service.icon}
                  alt={`Icon ${index + 1}`}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <Link to="/contact" className="text-blue-600 font-inter text-sm">
                Узнать больше
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
