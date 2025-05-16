import { useState } from "react";
import { motion } from "framer-motion";
import World1 from "@/assets/world1.png";
import international from "@/assets/international.png";

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
      <section className="w-full flex justify-center items-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-[#006FDC] to-[#11B4EC] shadow-2xl overflow-hidden w-full max-w-[1250px] px-8 py-10 rounded-3xl min-h-[400px] sm:min-h-[400px]"
        >
          <img
            src={World1}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
          />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
                Оптимальные маршруты, выгодные тарифы и полный спектр логистических услуг.
              </p>

              <div className="flex flex-row items-center gap-4 py-2">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-col w-full max-w-md mx-auto items-start md:items-center"
                >
                  <p className="text-white text-lg font-medium mb-3">
                    Оставьте контакт для связи!
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center bg-white rounded-full overflow-hidden shadow-md w-full"
                  >
                    <input
                      type="text"
                      placeholder="+7 917 889 94 57"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="px-4 py-2 outline-none text-gray-700 w-full"
                    />
                    <button
                      onClick={handleSubmit}
                      className="bg-yellow-400 hover:bg-yellow-500 p-3 flex items-center justify-center"
                    >
                      {sent ? (
                        <span
                          role="img"
                          aria-label="success"
                          className="text-white text-xl"
                        >
                          ✅
                        </span>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      )}
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            <div className="flex justify-center items-center">
              <img
                src={international}
                alt="International"
                className="max-w-[80%] max-h-[90%]"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </section>
  );
}
