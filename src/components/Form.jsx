import { useEffect, useRef, useState } from "react";

export default function Form() {
  const phoneInputRef = useRef(null);
  const [itiInstance, setItiInstance] = useState(null);
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.intlTelInput && phoneInputRef.current) {
      const iti = window.intlTelInput(phoneInputRef.current, {
        initialCountry: "auto",
        geoIpLookup: function (callback) {
          fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) => {
              callback(data.country_code);
              setCountryName(data.country_name);
            })
            .catch(() => callback("RU"));
        },
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        preferredCountries: ["ru", "tr", "de", "cn"],
        separateDialCode: true,
      });
      setItiInstance(iti);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const fullPhone = itiInstance ? itiInstance.getNumber() : phoneInputRef.current?.value;

    const now = new Date();
    const dateTime = now.toLocaleString("ru-RU", {
      timeZone: "Europe/Moscow",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const message = `
📩 Новая заявка
👤 ФИО: ${name}
📧 Email: ${email}
📞 Телефон: ${fullPhone}
🌍 Страна: ${countryName}
📅 Дата и Время: ${dateTime}
🛠 Услуга: ${service}
    `;

    const TELEGRAM_BOT_TOKEN = "8114179100:AAF6ZXhJRfDbBa1RE-Lb04fR25kwoRpzQX8";
    const TELEGRAM_CHAT_ID = "1270065195";

    try {
      const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }),
      });

      if (!res.ok) throw new Error("Telegram'a gönderilemedi");

      alert("Başarıyla gönderildi!");
    } catch (err) {
      console.error("Gönderim hatası:", err);
      alert("Gönderim sırasında hata oluştu.");
    }
  };

  return (
    <div className="relative bg-white p-6 md:p-8 rounded-xl shadow-2xl mx-auto" style={{ maxWidth: "480px" }}>
      <h2 className="text-2xl md:text-3xl text-gray-800 mb-6 text-center">
        Получите <span className="text-[#FFC23E]">бесплатную</span> консультацию
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-1">ФИО</label>
          <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-1">Електронная Почта</label>
          <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-500 mb-1">Номер Телефона</label>
          <input type="tel" id="phone" ref={phoneInputRef} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-500 mb-1">Услуг</label>
          <select id="service" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required>
            <option value="">Выберите услугу</option>
            <option>Услуг 1</option>
            <option>Услуг 2</option>
            <option>Услуг 3</option>
            <option>Услуг 4</option>
          </select>
        </div>

        <div className="flex items-start gap-3 pt-2">
          <input type="checkbox" id="consent" name="consent" required className="h-4 w-4 text-[#11B4EC]" />
          <label htmlFor="consent" className="text-xs text-[#8C8C8C] leading-tight block">
            Вы соглашаетесь на обработку файлов cookie и ваших персональных данных при использовании нашего сайта.
          </label>
        </div>

        <button type="submit" className="w-full bg-gradient-to-r from-[#006FDC] to-[#11B4EC] text-white py-3 px-4 rounded-lg font-medium">
          Подайте Заявку
        </button>
      </form>
    </div>
  );
}
