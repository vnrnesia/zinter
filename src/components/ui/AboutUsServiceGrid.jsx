import { Link } from "react-router-dom"; // 🔗 Link ekleniyor
import gridicon1 from "@/assets/ServiceGridImg/gridicon1.png";
import gridicon2 from "@/assets/ServiceGridImg/gridicon2.png";
import gridicon3 from "@/assets/ServiceGridImg/gridicon3.png";
import gridicon4 from "@/assets/ServiceGridImg/gridicon4.png";
import gridicon5 from "@/assets/ServiceGridImg/gridicon5.png";
import gridicon6 from "@/assets/ServiceGridImg/gridicon6.png";

export default function ServiceGrid() {
  const services = [
    { title: "Поиск поставщика", img: gridicon1, link: "/search-provider" },
    { title: "Доставка из Китая", img: gridicon2, link: "/china-delivery" },
    { title: "Доставка из Европы", img: gridicon3, link: "/europe-delivery" },
    { title: "Таможенное оформление", img: gridicon5, link: "/feautures" },
    { title: "Оплата товара", img: gridicon4, link: "/payment" },
    { title: "Услуги склада", img: gridicon6, link: "/warehouse" },
  ];

  return (
    <section className="pb-12 bg-gray-50 text-center">
      <div className="container mx-auto px-4 bg-gray-50">
        <p className="w-fit text-blue-600 font-medium border border-blue-600 px-3 py-1 rounded-full text-sm inline-block mb-4">
          Чем Занимаемся?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Мы больше, чем доставка!</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Link
              to={service.link}
              key={idx}
              className="py-10 flex flex-row items-center justify-center gap-3 p-10 bg-white shadow-md rounded-xl transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <img src={service.img} alt={service.title} className="w-8 h-8 object-contain" />
              <p className="font-semibold text-gray-800 text-sm">{service.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
