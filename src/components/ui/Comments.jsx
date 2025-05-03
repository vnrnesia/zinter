import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useMediaQuery } from "react-responsive";

export default function Comments() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

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

  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Отзывы наших клиентов
        </h2>

        {isMobile ? (
          <Swiper
            spaceBetween={16}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="w-full px-2"
          >
            {comments.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white p-6 rounded-2xl shadow-lg w-full min-h-[250px]">
                  <p className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-400 py-2">{item.company}</p>
                  <p className="text-gray-700 leading-relaxed">
                    "{item.comment}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {comments.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg min-h-[250px]"
              >
                <p className="text-lg font-semibold text-gray-900">
                  {item.name}
                </p>
                <p className="text-sm text-gray-400 py-2">{item.company}</p>
                <p className="text-gray-700 leading-relaxed">
                  "{item.comment}"
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
