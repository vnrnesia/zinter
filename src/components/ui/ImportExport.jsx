export default function ImportExport() {
  const iconItems = [
    { label: "Стройматериалы", src: "/IconGrid/1.png", size: "w-10 h-10" },
    { label: "Оборудование", src: "/IconGrid/2.png", size: "w-12 h-12" },
    { label: "Спецтехника", src: "/IconGrid/3.png", size: "w-9 h-9" },
    { label: "Бытовая техника", src: "/IconGrid/4.png", size: "w-10 h-10" },
    { label: "Электроника", src: "/IconGrid/5.png", size: "w-10 h-10" },
    { label: "Мебель", src: "/IconGrid/6.png", size: "w-10 h-10" },
    { label: "Сантехника", src: "/IconGrid/7.png", size: "w-10 h-10" },
    { label: "Удобрения", src: "/IconGrid/8.png", size: "w-9 h-9" },
    { label: "Текстиль", src: "/IconGrid/9.png", size: "w-9 h-9" },
  ];

  return (
    <div className="">
      <div className="mx-auto max-w-[90%] 2xl:max-w-7xl">
        <span className="inline-block border-2 border-[#006FDC] text-[#006FDC] px-4 py-1 rounded-full text-sm font-semibold">
          Tовары и бренды
        </span>
      </div>

      <div className="w-full max-w-[90%] 2xl:max-w-7xl mx-auto pb-12 bg-gray-50 flex flex-col md:flex-row gap-10">
        {/* Sol taraf */}
        <div className="flex-1">
          <h2 className="text-3xl pt-6 font-bold mb-6 text-gray-800">
            Мы импортируем
          </h2>
          <p className="hidden md:block text-gray-600 mb-10">
            Мы занимаемся импортом высококачественных товаров из разных стран
            мира. Наша компания обеспечивает поставку строительных материалов,
            электроники, мебели и другой продукции, соответствующей
            международным стандартам качества. Мы создаём надёжные партнёрские
            отношения и предлагаем гибкие условия сотрудничества
          </p>
          <p className="block md:hidden">
            Мы поставляем качественные строительные материалы, электронику и
            мебель из разных стран, предлагая надёжное партнёрство и гибкие
            условия сотрудничества.
          </p>

          {/* Markalar */}
          <div className="grid grid-cols-3 sm:grid-cols-3">
            <div className="w-full h-32 flex items-center justify-center text-gray-500 rounded-lg">
              <img src="/Comment/brand1.png" alt="Logo" className="w-[70%] md:w-[50%]" />
            </div>
            <div className="w-full h-32 flex items-center justify-center text-gray-500 rounded-lg">
              <img src="/Comment/brand3.png" alt="Logo" className="w-[70%] md:w-[50%]" />
            </div>
            <div className="w-full h-32 flex items-center justify-center text-gray-500 rounded-lg">
              <img src="/Comment/brand2.png" alt="Logo" className="w-[70%] md:w-[50%]" />
            </div>
          </div>
        </div>

        {/* Sağ taraf — İkon grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3">
          {iconItems.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center md:flex-row md:justify-start p-4 rounded-xl transition ${
                i === 8 ? "hidden md:flex" : ""
              }`}
            >
              <div className="w-[170px] h-24 flex flex-col items-center justify-center border-2 rounded-lg mr-0 md:mr-3 shrink-0">
                <img
                  src={item.src}
                  alt={item.label}
                  className={`${item.size} object-contain`}
                />
                <span className="text-sm md:pt-0 text-gray-800 font-bold leading-tight text-center md:text-left">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
