import { useState, useEffect } from "react";
import { useMask } from "@react-input/mask";


import Socialicon1 from "@/assets/LeftPanel/icon1.png";
import Socialicon2 from "@/assets/LeftPanel/icon2.png";
import Socialicon3 from "@/assets/LeftPanel/icon3.png";
import Socialicon4 from "@/assets/LeftPanel/icon4.png";

import contactIcon1 from "@/assets/Contactimage/icon1.png";
import contactIcon2 from "@/assets/Contactimage/icon2.png";
import contactIcon3 from "@/assets/Contactimage/icon3.png";
import contactIcon4 from "@/assets/Contactimage/icon4.png";
import contactIcon5 from "@/assets/Contactimage/icon5.png";

const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const services = [
  { id: 1, label: "Оплата инвойсов" },
  { id: 2, label: "Возврат валютной выручки" },
];

const contactBenefits = [
  { icon: contactIcon1, text: "Безопасные платежи через надёжных партнёров" },
  { icon: contactIcon2, text: "Быстрые переводы" },
  { icon: contactIcon3, text: "Честные комиссии" },
  { icon: contactIcon4, text: "Выгодные курсы обмена" },
  { icon: contactIcon5, text: "Удобство и простота использования" },
];

const socialIcons = [Socialicon1, Socialicon2, Socialicon3, Socialicon4];

const Label = ({ children }) => (
  <label className="block text-sm font-medium text-gray-700">{children}</label>
);

const Input = ({ type = "text", placeholder, value, onChange, name }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    name={name}
    className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

const sendToTelegram = (formData, setSuccessMessage) => {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const message = `
    <b>New Contact Form Submission:</b>
    <b>Name:</b> ${formData.name || "Not provided"}
    <b>Contact Method:</b> ${formData.contactMethod || "Not provided"}
    <b>Phone:</b> ${formData.phone || "Not provided"}
    <b>Service:</b> ${formData.service || "Not selected"}
  `;
  const data = {
    chat_id: chatId,
    message_thread_id: 60,
    text: message,
    parse_mode: "HTML",
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Message sent to Telegram:", data);
      if (data.ok) {
        setSuccessMessage("Спасибо! Мы свяжемся с вами в ближайшее время.");
      } else {
        alert("Error submitting form. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error sending message:", error);
      alert("Error submitting form. Please try again.");
    });
};

export default function Contact() {
  const [selectedService, setSelectedService] = useState(null);
  const [contactMethod, setContactMethod] = useState("WhatsApp");
  const [formData, setFormData] = useState({
    name: "",
    phone: "", // masked value
    unmaskedPhone: "", // unmasked value for validation
  });
  const [successMessage, setSuccessMessage] = useState("");

  const phoneInputRef = useMask({
    value: formData.phone,
    onChange: (maskedValue, unmaskedValue) => {
      setFormData((prev) => ({ ...prev, phone: maskedValue, unmaskedPhone: unmaskedValue }));
    },
    mask: "+7 (___) ___-__-__",
    replacement: { _: /\d/ },
  });

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || formData.unmaskedPhone.length < 10) { // Assuming 10 digits for a complete phone number
      alert("Please fill in all required fields (Name and Phone).");
      return;
    }
    const serviceLabel =
      services.find((s) => s.id === selectedService)?.label || "";
    sendToTelegram(
      {
        name: formData.name,
        contactMethod,
        phone: formData.phone,
        service: serviceLabel,
      },
      setSuccessMessage
    );
    setFormData({ name: "", phone: "" });
    setSelectedService(null);
    setContactMethod("WhatsApp");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="md:px-0 flex justify-center items-center flex-col max-w-md md:max-w-[90%] xl:max-w-[80%] 2xl:max-w-7xl mx-auto">
        <div className="w-[330px] items-center md:w-[430px] order-1 space-y-6 rounded-lg -ml-4 md:ml-0 bg-gray-50 p-6">
          <h2 className="text-xl">Поможем провести валютный платеж</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label>
                ФИО <span className="text-red-500">*</span>
              </Label>
              <Input
                placeholder="Ваше имя"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Label>Как связаться</Label>
              <div className="relative">
                <select
                  value={contactMethod}
                  onChange={(e) => setContactMethod(e.target.value)}
                  className="w-full appearance-none border rounded-md p-2 mt-1 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>WhatsApp</option>
                  <option>Telegram</option>
                  <option>Email</option>
                  <option>Телефон</option>
                </select>
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  width={16}
                  height={16}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div>
              <Label>
                Номер телефона <span className="text-red-500">*</span>
              </Label>
              <input
                ref={phoneInputRef}
                name="phone"
                className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+7 (917) 889-94-57"
              />
            </div>

            <div>
              <Label>Выберите услугу</Label>
              <div className="flex flex-wrap gap-2 mt-1">
                {services.map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setSelectedService(id)}
                    className={`inline-block border rounded-lg px-3 py-2 text-sm transition ${
                      selectedService === id
                        ? "border-green-500 text-green-700 bg-green-100"
                        : "bg-white border-gray-300 text-gray-700"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {selectedService && (
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="text-sm text-red-500 underline mt-2"
                >
                  Очистить выбор
                </button>
              )}
            </div>

            {successMessage && (
              <div className="text-green-500 text-sm font-medium">
                {successMessage}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-l from-[#0273DE] to-[#10B0EB] text-white py-2 rounded-md hover:opacity-80 transition"
            >
              Продолжить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
