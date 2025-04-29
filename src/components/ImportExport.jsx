import cater from "../assets/ImportExportImg/cater.png";
import electric from "../assets/ImportExportImg/electric.png";
import intel from "../assets/ImportExportImg/intel.png";
import mori from "../assets/ImportExportImg/mori.png";
import siemens from "../assets/ImportExportImg/siemens.png";

export default function ImportExport() {
  const imageList = [cater, electric, intel, mori, siemens];

  const firstCategoryRow = [
    "Стройматериалы",
    "Оборудование",
    "Спецтехника",
    "Бытовая техника",
    "Электроника",
  ];

  const secondCategoryRow = [
    "Мебель",
    "Сантехника",
    "Удобрения",
    "Текстиль",
    "Товары для дома",
    "химия",
    "Автозапчасти",
  ];

  const CategoryBox = ({ label }) => (
    <div className="border-2 border-[#006FDC] h-[50px] font-medium px-2 sm:px-4 flex items-center justify-center rounded-lg bg-white shadow-sm text-center text-sm sm:text-base">
      {label}
    </div>
  );

  return (
    <section>
      <div className="container h-full px-4 pt-10 lg:px-8 py-20 space-y-10">
        <div className="text-center lg:text-left w-full lg:w-1/2 space-y-6">
          <span className="border-2 border-[#006FDC] text-[#006FDC] px-4 py-1 rounded-full text-sm font-semibold">
            Tовары
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#343434] mt-4">
            Мы импортируем
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <ul className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 sm:overflow-visible sm:justify-between sm:items-center">
            {imageList.map((src, index) => (
              <li
                key={index}
                className="flex items-center justify-center flex-shrink-0 snap-start w-36 sm:w-auto text-center"
              >
                <img src={src} alt={`brand-${index}`} className="mx-auto" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full py-2">
        <div className="container px-4 lg:px-8 mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 w-full">
            {firstCategoryRow.map((label, index) => (
              <CategoryBox key={index} label={label} />
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-7 gap-3 sm:gap-4 w-full mt-3 sm:mt-4">
            {secondCategoryRow.map((label, index) => (
              <CategoryBox key={index} label={label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
