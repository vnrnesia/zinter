import { useState } from "react";
import { motion } from "framer-motion";
import World1 from "@/assets/world1.png";

export default function CtaCard() {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    if (!phone.trim()) return;

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "ctacard",
          phone,
        }),
      });

      if (res.ok) {
        setSent(true);
        setPhone("");
        setTimeout(() => setSent(false), 4000);
      } else {
        alert("Ошибка при отправке. Повторите позже.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Ошибка соединения. Повторите позже.");
    }
  };

  return (
    <section className="flex justify-center items-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-r from-[#006FDC] to-[#11B4EC] rounded-3xl shadow-2xl overflow-hidden w-full max-w-[1250px] min-h-[350px] px-8 py-10"
      >
        <img
          src={World1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
        />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-5 py-5">
              Профессиональная логистика для ваших товаров из Азии!
            </h2>
            <p className="text-lg opacity-80 mb-5">
              Оптимальные маршруты, выгодные тарифы и полный спектр
              логистических услуг.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-start md:items-center"
          >
            <p className="text-white text-lg font-medium mb-3">
              Оставьте контакт для связи!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-white rounded-full overflow-hidden shadow-md"
            >
              <input
                type="text"
                placeholder="+7 917 889 94 57"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="px-4 py-2 outline-none text-gray-700"
              />
              <button
                onClick={handleSubmit}
                className="bg-yellow-400 hover:bg-yellow-500 p-3 flex items-center justify-center"
              >
                {sent ? (
                  <span role="img" aria-label="success" className="text-white text-xl">✅</span>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                )}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
