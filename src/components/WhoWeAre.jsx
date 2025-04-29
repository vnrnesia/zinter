import bigzworld from "../assets/bigzworld.png";
export default function WhoWeAre() {
  const stats = [
    { number: "12", description: "Лет успешной работы" },
    { number: "9", description: "Собственных складов по всему миру" },
    { number: "35", description: "Рейсов еженедельно" },
    { number: "80", description: "Постоянных клиентов" },
  ];

  return (
    <section className="py-[120px]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-20">
          <div className="lg:w-1/2 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Кто Мы?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Это международный промышленный ВЭД консалтинг. Команда
              специалистов с хорошо организованной системой международных
              отношений и налаженными механизмами поставок в РФ и страны СНГ.
            </p>
            <div className="relative w-full max-w-xs mx-auto md:mx-0">
              <select className="block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500">
                <option>Наши офисы:</option>
                <option>Москва</option>
                <option>Стамбул</option>
                <option>Алматы</option>
                <option>Ташкент</option>
              </select>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img
              src={bigzworld}
              alt="Кто мы"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center md:text-left text-gray-800 mb-12">
            Почему нас выбирают?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center h-full"
              >
                <p className="relative text-6xl font-semibold mb-4 text-gray-800 inline-block">
                  {item.number}
                  <img
                    src={item.icon}
                    alt=""
                    className="absolute -top-1 -right-3 w-auto transform translate-x-1/4 -translate-y-1/4"
                  />
                </p>
                <p className="text-shadow-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
