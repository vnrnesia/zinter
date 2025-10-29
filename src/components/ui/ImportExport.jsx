export default function ImportExport() {
  const iconItems = [
    { label: "Стройматериалы", src: "/IconGrid/1.png", size: "w-10 h-10" },
    { label: "Оборудование", src: "/IconGrid/2.png", size: "w-9 h-9" },
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
      {/* Üst başlık */}
      <div className="mx-auto max-w-[90%] 2xl:max-w-7xl">
        <span className="inline-block border-2 border-[#006FDC] text-[#006FDC] px-4 py-1 rounded-full text-sm font-semibold">
          Tовары и бренды
        </span>
      </div>

      {/* İçerik alanı */}
      <div className="w-full max-w-[90%] 2xl:max-w-7xl mx-auto pt-6 pb-12 bg-gray-50 flex flex-col md:flex-row gap-10">
        {/* Sol taraf */}
        <div className="flex-1">
          <h2 className="text-3xl md:pt-10 font-bold mb-6 text-gray-800">
            Мы импортируем
          </h2>
          <p className="text-gray-600 md:pt-5 mb-10">
            Мы занимаемся импортом высококачественных товаров из разных стран
            мира. Наша компания обеспечивает поставку строительных материалов,
            электроники, мебели и другой продукции, соответствующей
            международным стандартам качества. Мы создаём надёжные партнёрские
            отношения и предлагаем гибкие условия сотрудничества
          </p>

          {/* Markalar */}
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
            <div className="w-full h-32 flex items-center justify-center text-gray-500 rounded-lg">
              <img
                src="/Comment/brand1.png"
                alt="Logo"
                className="w-[100%] md:w-[60%]"
              />
            </div>
            <div className="w-full h-32 flex items-center justify-center text-gray-500 rounded-lg">
              <img
                src="/Comment/brand3.png"
                alt="Logo"
                className="w-[100%] md:w-[60%]"
              />
            </div>
            <div className="w-full h-32 flex items-center justify-center text-gray-500 rounded-lg">
              <img
                src="/Comment/brand2.png"
                alt="Logo"
                className="w-[100%] md:w-[60%]"
              />
            </div>
          </div>
        </div>

        {/* Sağ taraf — İkon grid */}
        <div className="flex-1 grid grid-cols-3 gap-6">
          {iconItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center md:flex-row md:justify-start p-4 rounded-xl transition"
            >
              {/* İkon alanı */}
              <div className="w-20 h-20 flex items-center justify-center bg-gray-200 rounded-full mr-0 md:mr-3 shrink-0">
                <img
                  src={item.src}
                  alt={item.label}
                  className={`${item.size} object-contain`}
                />
              </div>

              <span className="text-sm pt-4 md:pt-0 text-gray-800 font-medium leading-tight text-center md:text-left">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
