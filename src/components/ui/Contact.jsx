import { PhoneIcon } from "@heroicons/react/24/solid";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className=" md:py-16 mb-24 text-center">
      <div className="inline-flex px-4 py-2 text-[14px] text-[#006FDC] font-medium border border-[#006FDC] rounded-full">
        Давайте сотрудничать{" "}
      </div>{" "}
      <h2 className="pt-4 text-4xl font-medium mb-12">Готовы работать с нами?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto ">
        {/* Telegram Card */}
        <div className="bg-gray-100 group rounded-2xl p-6 md:h-72 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 hover:text-white cursor-pointer">
          <p className="text-gray-500 group-hover:text-white mb-1 transition duration-300">
            Подписывайтесь на наш
          </p>
          <h3 className="text-xl font-medium mb-4 group-hover:text-white">
            Telegram-канал
          </h3>
          <a
            href="https://t.me/bankbooker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium transition duration-300 group-hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.47 14.81l-.39 4.23c.56 0 .8-.24 1.09-.52l2.62-2.46 5.45 3.98c1 .55 1.72.26 1.97-.92l3.58-16.74h.01c.32-1.49-.54-2.08-1.5-1.76L1.44 9.67c-1.47.54-1.46 1.32-.25 1.67l4.62 1.44 10.73-6.77c.51-.31.98-.14.6.2L9.47 14.81z" />
            </svg>
            t.me/zinterlogistics
          </a>
        </div>

        {/* Visit Office Card */}
        <div className="bg-gray-100 group rounded-2xl p-6 md:h-72 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 hover:text-white cursor-pointer">
          <p className="text-gray-500 mb-1 transition duration-300 group-hover:text-white">
            По всем вопросам пишите на почту
          </p>
          <h3 className="text-xl font-medium mb-4 group-hover:text-white">
            Мы ответим в ближайшее время:
          </h3>
          <div className="flex items-center gap-2 font-medium transition duration-300 group-hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 1 22 23"
              className="w-5 h-5"
            >
              <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v1.586a1 1 0 01-.293.707l-9 9a1 1 0 01-1.414 0l-9-9A1 1 0 012 5.586V4zm0 4.414l7.293 7.293a3 3 0 004.414 0L22 8.414V20a2 2 0 01-2 2H4a2 2 0 01-2-2V8.414z" />
            </svg>

            <p>info@zinterlogistics.com</p>
          </div>
        </div>

        {/* Get In Touch Card */}
        <div className="bg-gray-100 group rounded-2xl p-6 md:h-72 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 hover:text-white cursor-pointer">
          <p className="text-gray-500 mb-1 transition duration-300 group-hover:text-white">
            Бесплатная консультация
          </p>
          <h3 className="text-xl font-medium mb-4 group-hover:text-white">
            Свяжитесь с нами
          </h3>
          <div className="flex items-center space-x-2 font-medium transition duration-300 group-hover:text-white">
            <PhoneIcon className="w-5 h-5 transition group-hover:text-white" />
            +7 917 889-94-57
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
