import { motion } from "framer-motion";
import icon1 from "@/assets/ContactServicesImg/icon1.png";
import icon2 from "@/assets/ContactServicesImg/icon2.png";
import icon3 from "@/assets/ContactServicesImg/icon3.png";

const topServices = [
  {
    title: "Отдел продаж",
    icon: icon1,
    description: "Поговорите с нашей дружелюбной командой.",
    footer: (
      <a
        href="https://t.me/zinterlogistic"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold underline text-gray-900"
      >
        t.me/zinterlogistic
      </a>
    ),
  },
  {
    title: "Позвоните нам",
    icon: icon2,
    description: "Пн–Пт с 8:00 до 17:00.",
    footer: (
      <p className="text-sm font-semibold text-gray-900">
        +1 (555) 000-0000
      </p>
    ),
  },
  {
    title: "Чат с поддержкой",
    icon: icon3,
    description: "Мы всегда готовы помочь.",
    footer: (
      <a
        href="mailto:support@zinterlogistic.com"
        className="text-sm font-semibold underline text-gray-900"
      >
        support@zinterlogistic.com
      </a>
    ),
  },
];

export default function ContactServices() {
  return (
    <section className="py-20 bg-white w-full">
      <div className="w-full max-w-[1300px] px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="w-fit text-blue-600 font-medium border border-blue-600 px-3 py-1 rounded-full text-sm inline-block mb-4">
            Консультация
          </div>
          <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами!</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку, и наши специалисты помогут вам с логистикой,
            таможенным оформлением и поиском надёжных поставщиков.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {topServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-center text-center md:items-start md:text-left justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div>
                <div className="w-12 h-12 mb-4 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden mx-auto md:mx-0">
                  <img
                    src={service.icon}
                    alt={`Icon ${index + 1}`}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              </div>
              <div>{service.footer}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
