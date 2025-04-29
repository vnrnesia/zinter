import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import bigzworld from "../assets/bigzworld.png";

// Sayaç bileşeni
const Counter = ({ targetNumber, duration = 1500, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const end = parseInt(targetNumber);
    if (isNaN(end)) return;

    const stepTime = Math.max(Math.floor(duration / end), 15);

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetNumber, duration, start]);

  return <span className="transition-all duration-200">{count}</span>;
};

export default function WhoWeAre() {
  const stats = [
    { number: "12", description: "Лет успешной работы" },
    { number: "9", description: "Собственных складов по всему миру" },
    { number: "35", description: "Рейсов еженедельно" },
    { number: "80", description: "Постоянных клиентов" },
  ];

  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  return (
    <motion.section
      className="py-[120px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-20">
          <motion.div
            className="lg:w-1/2 flex flex-col justify-center text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Кто Мы?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Это международный промышленный ВЭД консалтинг. Команда
              специалистов с хорошо организованной системой международных
              отношений и налаженными механизмами поставок в РФ и страны СНГ.
            </p>
            <motion.div
              className="relative w-full max-w-xs mx-auto md:mx-0"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <select className="block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500">
                <option>Наши офисы:</option>
                <option>Москва</option>
                <option>Стамбул</option>
                <option>Алматы</option>
                <option>Ташкент</option>
              </select>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={bigzworld}
              alt="Кто мы"
              className="w-full h-auto rounded-lg object-cover md:block"
            />
          </motion.div>
        </div>

        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center md:text-left text-gray-800 mb-12">
            Почему нас выбирают?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center h-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-6xl font-semibold mb-4 text-gray-800">
                  <Counter targetNumber={item.number} start={isInView} />
                </p>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
