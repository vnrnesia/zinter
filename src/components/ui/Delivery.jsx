import DeliveryCard from "./DeliveryCard";
import bus from "@/assets/DeliveryImg/bus.png";
import plane from "@/assets/DeliveryImg/plane.png";
import ship from "@/assets/DeliveryImg/ship.png";
import train from "@/assets/DeliveryImg/train.png";

export default function Delivery() {
  const deliveryOptions = [
    {
      id: "0.1",
      title: "Авиадоставка",
      description: "В услугу входит загрузка, авиаперелет, таможня и доставка товара на склад",
      price: "от 10$ за кг, 5-7 Дней Срок Доставки",
      imgMobile: train,
      imgDesktop: plane,
    },
    {
      id: "0.2",
      title: "Автодоставка",
      description: "Формируем сборные грузы клиентов и выпускаем машины ежедневно",
      price: "от 6$ за кг, 5-20 Дней Срок Доставки",
      imgMobile: bus,
      imgDesktop: bus,
    },
    {
      id: "0.3",
      title: "ЖД доставка",
      description: "Способ транспортировки снижает стоимость на перевозку любого груза",
      price: "от 7$ за кг, от 14 дней Срок Доставки",
      imgMobile: train,
      imgDesktop: train,
    },
    {
      id: "0.4",
      title: "Морская доставка",
      description: "Отправляем в стальном контейнере. Вероятность повреждений минимальна",
      price: "от 5$ за кг, от 28 дней Срок Доставки",
      imgMobile: ship,
      imgDesktop: ship,
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center py-12 md:py-16">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Виды доставки</h2>
          <p className="text-[#2F2F2F] md:w-1/3">
            Подберем оптимальный маршрут и вид транспортировки для оптимизации стоимости и сроков
          </p>
        </div>

        <div className="space-y-6">
          {deliveryOptions.map((option, index) => (
            <DeliveryCard
              key={index}
              id={option.id}
              title={option.title}
              description={option.description}
              price={option.price}
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
