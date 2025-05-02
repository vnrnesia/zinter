import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegramPlane,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import ZinterLogo from "@/assets/ZinterLogo.png";

const footerLinks = [
  {
    title: "Компания",
    items: ["О нас", "Hakkımızda", "Контакт", "Партнёрство"],
  },
  {
    title: "Услуги",
    items: ["Оплата", "Доставка", "Оформление", "Склад"],
  },
];

const socialLinks = [
  {
    href: "https://t.me/yourtelegramusername",
    icon: faTelegramPlane,
    hoverColor: "hover:text-blue-500",
  },
  {
    href: "https://wa.me/901234567890",
    icon: faWhatsapp,
    hoverColor: "hover:text-green-500",
  },
  {
    href: "tel:+901234567890",
    icon: faPhone,
    hoverColor: "hover:text-gray-800",
  },
];

export default function Footer() {
  return (
    <footer className="footer bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="footer-section flex flex-col items-center md:items-start space-y-4">
            <img src={ZinterLogo} alt="Zinter Logistics Logo" />
            <p className="text-gray-600 text-sm">
              Больше 15 лет занимаемся перевозками грузов из Китая и других
              азиатских стран.
            </p>
            <p className="text-gray-800 font-medium">
              Качественный сервис, Надежные решения
            </p>
          </div>

          {footerLinks.map((section, index) => (
            <div
              key={index}
              className={`footer-section flex flex-col items-center md:items-start ${
                index === 0 ? "ml-0 md:ml-[80px]" : ""
              }`}
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="footer-link text-gray-600 hover:text-gray-900 transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-section flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold">Подпишись на нас!</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className={`text-gray-600 ${social.hoverColor} text-2xl`}
                  aria-label="Social Media"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              Наверх
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
          © 2025 Zinter Logistics. Все права сохранены.
        </div>
      </div>
    </footer>
  );
}
