import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ZinterLogo from "@/assets/ZinterLogo.png";
import gridicon2 from "@/assets/ServiceGridImg/gridicon2.png";
import gridicon3 from "@/assets/ServiceGridImg/gridicon3.png";

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="w-full h-20 flex items-center shadow-sm bg-white fixed bottom-0 left-0 top-0 z-50 border-b-4 border-b-[#FFC23E]">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" aria-label="Homepage">
            <img
              src={ZinterLogo}
              alt="Page Logo"
              className="h-auto max-h-8 w-auto max-w-[300px] sm:max-h-16"
              loading="lazy"
            />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  to="/search-provider"
                  className="text-gray-700 hover:text-[#006FDC] font-medium"
                >
                  Поставщика
                </Link>
              </li>
              <li>
                <Link
                  to="/payment"
                  className="text-gray-700 hover:text-[#006FDC] font-medium"
                >
                  Оплата
                </Link>
              </li>
              <li className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                  Доставка
                  <svg
                    className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <Link
                    to="/china-delivery"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Доставка из Китая
                  </Link>
                  <Link
                    to="/europe-delivery"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Доставка из Европы
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-gray-700 hover:text-[#006FDC] font-medium"
                >
                  Оформление
                </Link>
              </li>
              <li>
                <Link
                  to="/warehouse"
                  className="text-gray-700 hover:text-[#006FDC] font-medium"
                >
                  Склад
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-[#006FDC] font-medium"
                >
                  О нас
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-1 md:gap-4">
            <a
              href="tel:+79178899457"
              className="hidden lg:block bg-gradient-to-r from-[#006FDC] to-[#11B4EC] hover:bg-gradient-to-br px-4 py-2 rounded-lg text-white font-medium shadow-md hover:shadow-lg"
            >
              +7 (917) 889-94-57
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen((prev) => !prev);
                setSubMenuOpen(false);
              }}
              className="md:hidden p-2 rounded-lg"
            >
              {mobileMenuOpen ? (
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 pr-3 text-[#006FDC]"
                  fill="none"
                  viewBox="5 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
            
                <svg
                  className="w-24 h-20 mt-3"
                  viewBox="5 0 24 24"
                  fill="none"
                  stroke="url(#gradient)"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#006FDC" />
                      <stop offset="100%" stopColor="#11B4EC" />
                    </linearGradient>
                  </defs>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M4 6h16 M4 10h16 M4 14h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-4"
          >
            <ul className="space-y-4 space-x-2 text-start">
              <li>
                <Link
                  to="/search-provider"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-6 px-2 text-gray-800 border-b"
                >
                  Поиск Поставщика
                </Link>
              </li>
            
              <li>
                <ul className="text-center">
                  <li>
                    <Link
                      to="/china-delivery"
                       onClick={() => setMobileMenuOpen(false)}
                      className="flex pt-3 py-6 text-gray-800 text-start border-b"
                    >
                      Доставка из Китая
                      <img className="w-10 pl-2" src={gridicon2} alt="" />
                    </Link>
                  </li>
                  
                </ul>
                
              </li>
              <li>
                <Link
                  to="/europe-delivery"
                   onClick={() => setMobileMenuOpen(false)}
                  className="flex pt-3 py-6 text-gray-800 text-start border-b"
                >
                  Доставка из Европы
                  <img className="w-10 pl-2" src={gridicon3} alt="" />
                </Link>
              </li>
                <li>
                <Link
                  to="/payment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block pt-3 py-6 text-gray-800 border-b"
                >
                  Оплата товара
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block pt-3 py-6 text-gray-800 border-b"
                >
                  Тамоэнное Оформление
                </Link>
              </li>
              <li>
                <Link
                  to="/warehouse"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block pt-3 py-6 text-gray-800 border-b"
                >
                  Усилуги Склад
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block pt-3 py-6 text-gray-800 border-b"
                >
                  о Компании
                </Link>
              </li>
            </ul>
            <div className="w-full flex justify-center items-center py-4">
              <a
                href="tel:+79178899457"
                className="bg-gradient-to-r from-[#006FDC] to-[#11B4EC] hover:bg-gradient-to-br px-24 py-2 rounded-lg text-white font-medium shadow-md hover:shadow-lg whitespace-nowrap text-center"
              >
                +7 (917) 889-94-57
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
