import DeliveryCard from "./DeliveryCard";
import boxicon1 from "@/assets/DeliveryBoxImg/boxicon1.png";
import boxicon2 from "@/assets/DeliveryBoxImg/boxicon2.png";
import boxicon3 from "@/assets/DeliveryBoxImg/boxicon3.png";
import boxicon4 from "@/assets/DeliveryBoxImg/boxicon4.png";

export default function Delivery() {
  const deliveryOptions = [
    {
      id: "0.1",
      title: "Коробка",
      description: "Упаковываем ваш товар в картонные коробки",
      imgMobile: boxicon1,
      imgDesktop: boxicon1,
    },
    {
      id: "0.2",
      title: "Ящик",
      description: "Упаковываем хрупкие грузы в фанерные ящики",

      imgMobile: boxicon2,
      imgDesktop: boxicon2,
    },
    {
      id: "0.3",
      title: "Паллет",
      description: "Размещаем коробки на паллетоместо",

      imgMobile: boxicon3,
      imgDesktop: boxicon3,
    },
    {
      id: "0.4",
      title: "Контейнер",
      description: "Транспортируем груз в металлическом контейнере",

      imgMobile: boxicon4,
      imgDesktop: boxicon4,
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center py-12 md:py-16">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center md:text-left mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Форматы упаковки
          </h2>
          <p className="text-[#2F2F2F] md:w-1/3">
            Подбор оптимального маршрута и транспортировки для снижения затрат и
            соблюдения сроков
          </p>
        </div>

        <div className="space-y-6">
          {deliveryOptions.map((option, index) => (
            <DeliveryCard
              key={index}
              id={option.id}
              title={option.title}
              description={option.description}
              imgMobile={option.imgMobile}
              imgDesktop={option.imgDesktop}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
