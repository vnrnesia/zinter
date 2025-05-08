import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ZinterLogo from "@/assets/ZinterLogo.png";

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  return (
    <>
      <header className=" h-20 flex items-center shadow-sm bg-white sticky top-0 z-50 border-b-4 border-b-[#FFC23E]">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" aria-label="Homepage">
            <img
              src={ZinterLogo}
              alt="Page Logo"
              className="h-auto max-h-12 w-auto max-w-[240px] sm:max-h-16"
              loading="lazy"
            />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
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
                  to="/contact"
                  className="text-gray-700 hover:text-[#006FDC] font-medium"
                >
                  Контакт
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
              <svg
                className="w-16 h-12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#gradient)"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
                    <stop offset="0%" stopColor="#006FDC" />
                    <stop offset="100%" stopColor="#11B4EC" />
                  </linearGradient>
                </defs>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
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
            className=" md:hidden fixed inset-0 bg-white z-40 pt-20 px-4"
          >
            <ul className="space-y-4 space-x-2 text-start ">
              <li>
                <Link
                  to="/payment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 px-2 text-gray-800 border-b "
                >
                  Оплата
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setSubMenuOpen((prev) => !prev)}
                  className="flex justify-start items-start w-full py-4 text-gray-800  border-b"
                >
                  Доставка
                  <svg
                    className={`w-4 h-4 ml-2 transform transition-transform text-gray-800 ${
                      subMenuOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {subMenuOpen && (
                  <ul className="text-center">
                    <li>
                      <Link
                        to="/china-delivery"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-gray-800 text-start"
                      >
                        Доставка из Китая
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/europe-delivery"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-gray-800 text-start"
                      >
                        Доставка из Европы
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 text-gray-800 border-b"
                >
                  Оформление
                </Link>
              </li>
              <li>
                <Link
                  to="/warehouse"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 text-gray-800 border-b"
                >
                  Склад
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 text-gray-800 border-b"
                >
                  Контакт
                </Link>
              </li>
            </ul>
            <div className="container py-4 justify-center">
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
