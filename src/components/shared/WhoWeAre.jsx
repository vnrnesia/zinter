import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Comments() {
  const [leftLimit, setLeftLimit] = useState(0);
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const comments = [
    {
      name: "Иван Петров",
      company: "Директор, ООО 'СтройГрупп'",
      comment:
        "Работаем с этой компанией уже 5 лет. Всегда надежная логистика и прозрачные условия.",
    },
    {
      name: "Елена Смирнова",
      company: "Коммерческий директор, ТД 'ТехноИмпорт'",
      comment:
        "Профессиональный подход к таможенному оформлению сэкономил нам тысячи долларов.",
    },
    {
      name: "Алексей Волков",
      company: "Менеджер по закупкам, ООО 'ЛогистикТрейд'",
      comment:
        "Гибкий подход и отличная коммуникация. Очень довольны сотрудничеством!",
    },
  ];

  useEffect(() => {
    const updateLimits = () => {
      const containerWidth = containerRef.current?.offsetWidth || 0;
      const trackWidth = trackRef.current?.scrollWidth || 0;
      const left = containerWidth - trackWidth;
      setLeftLimit(left < 0 ? left : 0);
    };

    updateLimits();
    window.addEventListener("resize", updateLimits);
    return () => window.removeEventListener("resize", updateLimits);
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      <div className="w-full max-w-7xl mx-auto px-4" ref={containerRef}>
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Отзывы наших клиентов
        </h2>
        <motion.div className="overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            ref={trackRef}
            className="py-4 flex gap-6"
            drag="x"
            dragConstraints={{ left: leftLimit, right: 0 }}
            dragElastic={0.1}
          >
            {comments.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white min-w-[90%] sm:min-w-[80%] md:min-w-[60%] lg:min-w-[33%] p-6 rounded-2xl shadow-lg flex-shrink-0"
              >
                <p className="text-lg font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-400 py-2">{item.company}</p>
                <p className="text-gray-700 leading-relaxed">"{item.comment}"</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
