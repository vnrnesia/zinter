import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Comments() {
  const [leftLimit, setLeftLimit] = useState(-1200);
  const containerRef = useRef(null);

  const comments = [
    {
      name: "Иван Петров",
      company: "Директор, ООО 'СтройГрупп'",
      comment: "Работаем с этой компанией уже 5 лет. Всегда надежная логистика и прозрачные условия.",
    },
    {
      name: "Елена Смирнова",
      company: "Коммерческий директор, ТД 'ТехноИмпорт'",
      comment: "Профессиональный подход к таможенному оформлению сэкономил нам тысячи долларов.",
    },
    {
      name: "Алексей Волков",
      company: "Менеджер по закупкам, ООО 'ЛогистикТрейд'",
      comment: "Гибкий подход и отличная коммуникация. Очень довольны сотрудничеством!",
    },
  ];

  useEffect(() => {
    const updateLimits = () => {
      const screenWidth = window.innerWidth;
      let itemWidth = screenWidth < 640 ? 280 : screenWidth < 1024 ? 400 : 800;
      const totalWidth = comments.length * (itemWidth + 24); // +gap
      const visibleWidth = containerRef.current?.offsetWidth || screenWidth;
      const left = Math.min(0, visibleWidth - totalWidth);
      setLeftLimit(left);
    };

    updateLimits();
    window.addEventListener("resize", updateLimits);
    return () => window.removeEventListener("resize", updateLimits);
  }, [comments.length]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4" ref={containerRef}>
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Отзывы наших клиентов
        </h2>
        <motion.div className="overflow-hidden cursor-grab">
          <motion.div
            className="py-4 flex gap-6"
            drag="x"
            dragConstraints={{ left: leftLimit, right: 0 }}
            dragElastic={0.1}
          >
            {comments.map((item, idx) => (
              <motion.div
                key={idx}
                className="min-w-[280px] sm:min-w-[400px] lg:min-w-[800px] max-w-sm bg-white p-6 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)]"
              >
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-400 py-3">{item.company}</p>
                <p className="text-gray-700 mb-4 opacity-90">"{item.comment}"</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
