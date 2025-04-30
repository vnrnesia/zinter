import { useEffect, useRef } from "react";

export default function Form() {
  const phoneInputRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.intlTelInput && phoneInputRef.current) {
      window.intlTelInput(phoneInputRef.current, {
        initialCountry: "auto",
        geoIpLookup: function (callback) {
          fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback("ru"));
        },
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        preferredCountries: ["ru", "tr", "de", "cn"],
        separateDialCode: true,
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = phoneInputRef.current?.value;
    const service = document.getElementById("service").value;

    const TELEGRAM_BOT_TOKEN = "8114179100:AAF6ZXhJRfDbBa1RE-Lb04fR25kwoRpzQX8";
    const TELEGRAM_CHAT_ID = "1270065195";

    const message = `
📩 Новая заявка
👤 ФИО: ${name}
📧 Email: ${email}
📞 Телефон: ${phone}
🛠 Услуга: ${service}
`;

    try {
      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
          }),
        }
      );

      if (!telegramResponse.ok) {
        throw new Error("Ошибка при отправке в Telegram");
      }

      alert("Заявка успешно отправлена!");
      document.getElementById("contactForm").reset();
    } catch (err) {
      console.error("Telegram Hatası:", err);
      alert("Ошибка при отправке. Попробуйте еще раз.");
    }
  };

  return (
    <div
      className="relative bg-white p-6 md:p-8 rounded-xl shadow-2xl mx-auto"
      style={{ maxWidth: "480px" }}
    >
      <img
        src="/assets/img/whyus/Group 1171281079.png"
        alt=""
        className="hidden md:block md:absolute md:top-[-50px] md:right-[-60px]"
      />
      <h2 className="text-2xl md:text-3xl text-gray-800 mb-6 text-center">
        Получите <span className="text-[#FFC23E]">бесплатную</span> консультацию
      </h2>

      <form className="space-y-4" id="contactForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-1">
            ФИО
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11B4EC] focus:border-[#11B4EC]"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-1">
            Електронная Почта
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11B4EC] focus:border-[#11B4EC]"
            required
          />
        </div>

        <div className="relative w-full">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-500 mb-1 w-full">
            Номер Телефона
          </label>
          <input
            type="tel"
            id="phone"
            ref={phoneInputRef}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11B4EC] focus:border-[#11B4EC]"
            required
          />
          <p id="phoneError" className="mt-1 text-sm text-red-600 hidden">
            Geçersiz телефон numarası
          </p>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-500 mb-1">
            Услуг
          </label>
          <select
            id="service"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11B4EC] focus:border-[#11B4EC]"
            required
          >
            <option value="">Выберите услугу</option>
            <option>Услуг 1</option>
            <option>Услуг 2</option>
            <option>Услуг 3</option>
            <option>Услуг 4</option>
          </select>
        </div>

        <div className="flex items-start gap-3 pt-2">
          <div className="flex items-start mt-0.5">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              className="focus:ring-[#11B4EC] h-4 w-4 text-[#11B4EC] border-gray-300 rounded mt-0.5"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="consent" className="text-xs text-[#8C8C8C] leading-tight block">
              Вы соглашаетесь на обработку файлов cookie и ваших персональных
              данных при использовании нашего сайта.
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#006FDC] to-[#11B4EC] hover:from-[#005bbc] hover:to-[#0e9fd4] text-white py-3 px-4 rounded-lg font-medium transition-all shadow-md"
        >
          Подайте Заявку
        </button>
      </form>
    </div>
  );
}
