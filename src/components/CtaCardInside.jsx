import { motion } from "framer-motion";
import international from "../assets/international.png";

export default function CtaCardInside() {
  return (
    <section className="py-12 md:py-20">
      <div className="ml-10 container flex flex-col lg:flex-row items-center gap-6 lg:gap-36">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 lg:pr-8 flex flex-col justify-center"
        >
          <div className="max-w-lg w-full text-center md:text-left mx-auto">
            <span className="inline-block px-4 py-2 text-[14px] text-[#006FDC] font-medium border border-[#006FDC] rounded-full mb-4">
              Глобальные поставки
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Международные поставки под ключ
            </h2>
            <p className="text-lg text-gray-600">
              Подбираем надежного производителя, сопровождаем контрактное
              производство и оплачиваем поставки. Логистика, складские услуги и
              доставка – все в одном решении.
            </p>
            <button
              className="mt-8 px-8 py-3 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
              style={{
                background: "linear-gradient(135deg, #006FDC 0%, #11B4EC 100%)",
              }}
            >
              Узнать больше
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center"
        >
          <div className="relative w-full max-w-lg">
            <img
              src={international}
              alt="Логистические услуги"
              className="w-full h-auto max-h-[400px] object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
