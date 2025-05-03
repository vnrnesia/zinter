import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import bigzworld from "@/assets/bigzworld.png";
import Comments from "@/components/ui/Comments.jsx";
import icon1 from "@/assets/WhoWeAreImg/icon1.png";
import icon2 from "@/assets/WhoWeAreImg/icon2.png";
import icon3 from "@/assets/WhoWeAreImg/icon3.png";
import icon4 from "@/assets/WhoWeAreImg/icon4.png";

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
    { number: "12", description: "Лет успешной работы", icon: icon1 },
    { number: "9", description: "Собственных складов по всему миру", icon: icon2 },
    { number: "35", description: "Рейсов еженедельно", icon: icon3 },
    { number: "80", description: "Постоянных клиентов", icon: icon4 },
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
              <a
                href="https://t.me/kanaladiniz"
                target="_blank"
                className="inline-flex items-center justify-center md:justify-start gap-2 px-6 py-3 
                  bg-gradient-to-r from-[#006FDC] to-[#11B4EC] 
                  text-white rounded-lg hover:shadow-md transition-all 
                  max-w-max mx-auto md:mx-0 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.51.26l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"></path>
                </svg>
                <span className="group-hover:translate-x-1 transition-transform">
                  Telegram Канал
                </span>
              </a>
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
          <Comments />
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
                <div className="relative inline-block mb-4">
                  <p className="text-6xl font-semibold text-gray-800">
                    <Counter targetNumber={item.number} start={isInView} />
                  </p>
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-9 h-9 absolute -top-2 -right-4"
                  />
                </div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
