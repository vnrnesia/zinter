import { useEffect, useRef, useState } from "react";
import worldicon from "@/assets/worldicon.png";

export default function Form() {
  const phoneInputRef = useRef(null);
  const itiRef = useRef(null);
  const [countryName, setCountryName] = useState("Неизвестно");
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && phoneInputRef.current) {
      const loadIntlTelInput = async () => {
        const utilsScript = document.createElement("script");
        utilsScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js";
        utilsScript.onload = () => {
          const iti = window.intlTelInput(phoneInputRef.current, {
            initialCountry: "auto",
            geoIpLookup: (callback) => {
              fetch("https://ipapi.co/json")
                .then((res) => res.json())
                .then((data) => {
                  callback(data.country_code);
                  setCountryName(data.country_name);
                })
                .catch(() => {
                  callback("RU");
                  setCountryName("Россия");
                });
            },
            utilsScript:
              "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
            preferredCountries: ["ru", "tr", "de", "cn"],
            separateDialCode: true,
          });
          itiRef.current = iti;
        };
        document.body.appendChild(utilsScript);
      };

      loadIntlTelInput();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;

    const phone =
      itiRef.current?.getNumber(window.intlTelInputUtils.numberFormat.E164) ||
      phoneInputRef.current?.value;

    const dateTime = new Date().toLocaleString("ru-RU", {
      timeZone: "Europe/Moscow",
      dateStyle: "medium",
      timeStyle: "short",
    });

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          countryName,
          service,
          dateTime,
        }),
      });

      if (!response.ok) throw new Error("Sunucu hatası");

      setStatus("success");
      setTimeout(() => setStatus(null), 4000);
      e.target.reset();
    } catch (err) {
      console.error("Hata:", err);
      setStatus("error");
      setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <div className="relative bg-white p-6 md:p-8 rounded-xl shadow-2xl mx-auto" style={{ maxWidth: "480px" }}>
      <img
        src={worldicon}
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

       
        <div className="relative w-full overflow-hidden max-w-full">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-500 mb-1">
            Номер Телефона
          </label>
          <input
            type="tel"
            id="phone"
            ref={phoneInputRef}
            className="w-full max-w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11B4EC] focus:border-[#11B4EC]"
            style={{
              paddingLeft: "52px",
              boxSizing: "border-box",
            }}
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
              Вы соглашаетесь на обработку файлов cookie и ваших персональных данных при использовании нашего сайта.
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#006FDC] to-[#11B4EC] hover:from-[#005bbc] hover:to-[#0e9fd4] text-white py-3 px-4 rounded-lg font-medium transition-all shadow-md"
        >
          Подайте Заявку
        </button>

        {status === "success" && (
          <div className="flex justify-center mt-4">
            <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full animate-scale-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        )}

        {status === "error" && (
          <p className="mt-4 text-red-600 text-sm text-center">
            Произошла ошибка при отправке. Пожалуйста, попробуйте снова.
          </p>
        )}
      </form>
    </div>
  );
}
