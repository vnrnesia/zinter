import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import worldicon from "@/assets/worldicon.png";

export default function Form() {
  const phoneInputRef = useRef(null);
  const itiRef = useRef(null);
  const [countryName, setCountryName] = useState("Неизвестно");
  const [contactMethod, setContactMethod] = useState("телефона");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cooldownUntil, setCooldownUntil] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const sendToTelegram = async (message) => {
    const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
        }),
      });

      if (response.ok) return true;
      console.error("Ошибка от Telegram API:", await response.json());
      return false;
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cooldownUntil && new Date() < cooldownUntil) {
      const remainingSeconds = Math.ceil((cooldownUntil - new Date()) / 1000);
      setErrorMessage(
        `Пожалуйста, подождите ${remainingSeconds} секунд перед повторной отправкой.`
      );
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const entries = {};
    formData.forEach((value, key) => (entries[key] = value));

    let phoneNumber = entries.phone;
    if (itiRef.current && ["телефона", "Whatsapp"].includes(contactMethod)) {
      phoneNumber = itiRef.current.getNumber(); // alan koduyla birlikte numara
    }

    const message = `
<b>Новая заявка:</b>

🌍 Страна: ${countryName}
📞 Способ связи: ${contactMethod}
${entries.service ? "🛠️ Услуга: " + entries.service + "\n" : ""}
${phoneNumber ? `☎️ Телефон: ${phoneNumber}\n` : ""}
${entries.email ? "📧 E-mail: " + entries.email + "\n" : ""}
${entries.telegram ? "💬 Telegram: " + entries.telegram + "\n" : ""}
✅ Cookie согласие: ${entries.consent ? "Да" : "Нет"}
`;

    const success = await sendToTelegram(message);
    setIsSubmitting(false);

    if (success) {
      setIsSuccess(true);
      setCooldownUntil(new Date(new Date().getTime() + 60000));
      e.target.reset();
      setContactMethod("телефона");
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      setErrorMessage("Произошла ошибка. Попробуйте ещё раз.");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && phoneInputRef.current) {
      const loadIntlTelInput = async () => {
        const utilsScript = document.createElement("script");
        utilsScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js";
        utilsScript.onload = () => {
          const iti = window.intlTelInput(phoneInputRef.current, {
            initialCountry: "auto",
            geoIpLookup: (cb) => {
              fetch("https://ipapi.co/json")
                .then((res) => res.json())
                .then((data) => {
                  cb(data.country_code);
                  setCountryName(data.country_name);
                })
                .catch(() => {
                  cb("RU");
                  setCountryName("Россия");
                });
            },
            separateDialCode: true,
            preferredCountries: ["ru", "tr", "de", "cn"],
          });
          itiRef.current = iti;
        };
        document.body.appendChild(utilsScript);
      };
      loadIntlTelInput();
    }
  }, [contactMethod]);

  return (
    <div
      className="relative bg-white p-6 md:p-8 rounded-xl shadow-2xl mx-auto"
      style={{ maxWidth: "480px" }}
    >
      <img
        src={worldicon}
        alt=""
        className="hidden md:block md:absolute md:top-[-50px] md:right-[-60px]"
      />
      <h2 className="text-2xl md:text-3xl text-gray-800 mb-6 text-center">
        Получите <span className="text-[#FFC23E]">бесплатную</span> консультацию
      </h2>

      {/* ✅ Услуг alanı geri eklendi */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-gray-500 mb-2"
        >
          Услуг
        </label>
        <div className="relative group mb-3">
          <select
            id="service"
            name="service"
            className="appearance-none w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11B4EC] focus:border-[#11B4EC] bg-white text-gray-800"
            required
          >
            <option value="">Выберите услугу</option>
            <option>Поиск Поставщика</option>
            <option>Доставка из Китая</option>
            <option>Доставка из Европы</option>
            <option>Оплата товара</option>
            <option>Таможенное Оформление</option>
            <option>Услуги Склад</option>
          </select>
          <FaChevronDown className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 pointer-events-none transition-transform duration-300 group-focus-within:rotate-180" />
        </div>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* İletişim yöntemi */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Каким способом с вами связаться?
          </label>
          <div className="relative group mb-3">
            <select
              name="contactMethod"
              value={contactMethod}
              onChange={(e) => setContactMethod(e.target.value)}
              className="appearance-none w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11B4EC] focus:border-[#11B4EC] bg-white text-gray-800"
              required
            >
              <option value="Telegram">Telegram</option>
              <option value="Whatsapp">Whatsapp</option>
              <option value="E-mail">E-mail</option>
              <option value="телефона">телефона</option>
            </select>
            <FaChevronDown className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 pointer-events-none transition-transform duration-300 group-focus-within:rotate-180" />
          </div>
        </div>

        {["телефона", "Whatsapp"].includes(contactMethod) && (
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              {contactMethod === "Whatsapp"
                ? "Whatsapp номер"
                : "Номер Телефона"}
            </label>
            <input
              type="tel"
              name="phone"
              ref={phoneInputRef}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11B4EC] focus:border-[#11B4EC]"
              style={{ paddingLeft: "52px" }}
              required
            />
          </div>
        )}

        {contactMethod === "E-mail" && (
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11B4EC] focus:border-[#11B4EC]"
              required
            />
          </div>
        )}

        {contactMethod === "Telegram" && (
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Telegram
            </label>
            <input
              type="text"
              name="telegram"
              placeholder="@username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11B4EC] focus:border-[#11B4EC]"
              required
            />
          </div>
        )}

        {/* Cookie onayı */}
        <div className="flex items-start gap-3 pt-2">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="h-4 w-4 text-[#11B4EC] border-gray-300 rounded"
            required
          />
          <label
            htmlFor="consent"
            className="text-xs text-[#8C8C8C] leading-tight"
          >
            Вы соглашаетесь на обработку файлов cookie и ваших персональных
            данных при использовании нашего сайта.
          </label>
        </div>

        {/* Gönder butonu */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#006FDC] to-[#11B4EC] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center"
          disabled={isSubmitting || isSuccess}
        >
          {isSubmitting ? (
            "Отправка..."
          ) : isSuccess ? (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            "Подайте Заявку"
          )}
        </button>

        {errorMessage && (
          <p className="text-red-500 text-sm mt-2 text-center">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
