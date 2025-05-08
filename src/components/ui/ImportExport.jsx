import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import cater from "@/assets/ImportExportImg/cater.png";
import electric from "@/assets/ImportExportImg/electric.png";
import intel from "@/assets/ImportExportImg/intel.png";
import mori from "@/assets/ImportExportImg/mori.png";
import siemens from "@/assets/ImportExportImg/siemens.png";

export default function ImportExport() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const imageList = isMobile
    ? [electric, intel, siemens]
    : [cater, electric, intel, mori, siemens];

  const allCategories = [
    "Стройматериалы",
    "Оборудование",
    "Спецтехника",
    "Бытовая техника",
    "Электроника",
    "Мебель",
    "Сантехника",
    "Удобрения",
    "Текстиль",
    "Товары для дома",
    "Химия",
    "Автозапчасти",
  ];

  const CategoryBox = ({ label, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-2 border-[#006FDC] h-[50px] font-medium px-2 sm:px-4 flex items-center justify-center rounded-lg bg-white shadow-sm text-center text-sm sm:text-base"
    >
      {label}
    </motion.div>
  );

  return (
    <section>
      <div className="container h-full px-4 lg:px-8 pt-10 space-y-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center lg:text-left w-full lg:w-1/2 space-y-6"
        >
          <span className="border-2 border-[#006FDC] text-[#006FDC] px-4 py-1 rounded-full text-sm font-semibold">
            Tовары
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#343434] mt-4">
            Мы импортируем
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
       
        </motion.div>
      </div>
      <div className="container h-full px-4 lg:px-8 pt-10 space-y-10">
       
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 w-full">
            {allCategories.map((label, index) => (
              <CategoryBox key={index} label={label} index={index} />
            ))}
          </div>
       
        <ul className="flex pt-10 sm:flex-nowrap gap-8 sm:gap-6 sm:overflow-x-auto sm:snap-x sm:snap-mandatory sm:items-center sm:justify-between">
            {imageList.map((src, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-center flex-shrink-0 snap-start w-28  sm:w-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={src}
                  alt={`brand-${index}`}
                  className={`mx-auto  ${
                    src === intel || src === siemens
                      ? "w-18 sm:w-24 md:w-28 lg:w-32"
                      : "w-230 sm:w-28 md:w-32 lg:w-36"
                  }`}
                />
              </motion.li>
            ))}
          </ul>
      </div>
    
    </section>
  );
}
