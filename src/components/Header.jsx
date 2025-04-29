import { useState } from "react";
import ZinterLogo from "../assets/ZinterLogo.png";
import Telegram from "../assets/Telegram/telegram.png";
import Whatsapp from "../assets/whatsapp.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <header className="h-20 flex items-center shadow-sm bg-white sticky top-0 z-50 border-b-4 border-b-[#FFC23E]">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" aria-label="Homepage" className="inline-block">
            <img src={ZinterLogo} alt="Page Logo" className="h-[70%] w-[40%] md:h-auto md:w-auto lg:w-[40%]" loading="lazy" />
          </a>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a href="#" className="text-gray-700 hover:text-[#006FDC] transition-colors font-medium">Оплата</a>
              </li>

              <li className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Доставка
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Доставка из Китая</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Доставка из Европы</a>
                </div>
              </li>

              <li>
                <a href="#" className="text-gray-700 hover:text-[#006FDC] transition-colors font-medium">Оформление</a>
              </li>

              <li>
                <a href="#" className="text-gray-700 hover:text-[#006FDC] transition-colors font-medium">Склад</a>
              </li>

              <li>
                <a href="#" className="text-gray-700 hover:text-[#006FDC] transition-colors font-medium">Контакт</a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-1 md:gap-4">
            <a href="https://wa.me/79178899457" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-100 rounded-lg transition-colors">
              <span className="sr-only">WhatsApp ile iletişim</span>
              <img src={Whatsapp} alt="WhatsApp" className="h-[80%] w-[80%] md:w-auto md:h-auto" />
            </a>


            <a href="https://t.me/zinterlogistics" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-100 rounded-lg transition-colors">
              <span className="sr-only">Telegram ile iletişim</span>
              <img src={Telegram} alt="Telegram" className="h-[80%] w-[80%] md:w-auto md:h-auto" />
            </a>


            <a href="tel:+79178899457" className="hidden lg:block items-center gap-2 bg-gradient-to-r from-[#006FDC] to-[#11B4EC] hover:bg-gradient-to-br px-4 py-2 rounded-lg font-medium text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#11B4EC] focus:ring-opacity-50 shadow-md hover:shadow-lg">
              +7 (917) 889-94-57
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg"
            >
              <span className="sr-only">Menüyü Aç/Kapat</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`md:hidden fixed inset-0 bg-white z-40 pt-20 px-4 transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="space-y-4 container">
          <li>
            <a href="#" className="block py-4 text-gray-700 border-b border-gray-200">Оплата</a>
          </li>
          <li>
            <button
              onClick={() => setSubMenuOpen(!subMenuOpen)}
              className="flex items-center justify-between w-full py-4 text-gray-700 border-b border-gray-200"
            >
              Доставка
              <svg
                className={`w-4 h-4 transform transition-transform ${subMenuOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
              >
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {subMenuOpen && (
              <ul className="pl-4">
                <li><a href="#" className="block py-2 text-gray-600">Доставка из Китая</a></li>
                <li><a href="#" className="block py-2 text-gray-600">Доставка из Европы</a></li>
              </ul>
            )}
          </li>

          <li>
            <a href="#" className="block py-4 text-gray-700 border-b border-gray-200">Оформление</a>
          </li>
          <li>
            <a href="#" className="block py-4 text-gray-700 border-b border-gray-200">Склад</a>
          </li>
          <li>
            <a href="#" className="block py-4 text-gray-700 border-b border-gray-200">Контакт</a>
          </li>
          <li>
            <a href="tel:+79178899457" className="block py-4 text-gray-700 border-gray-200">
              +7 (917) 889-94-57
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
