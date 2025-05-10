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
      className="py-[100px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        

        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="w-full">
          <Comments />
          </div>
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
