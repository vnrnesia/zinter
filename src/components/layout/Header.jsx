import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ZinterLogo from "@/assets/ZinterLogo.png";
import gridicon2 from "@/assets/ServiceGridImg/gridicon2.png";
import gridicon3 from "@/assets/ServiceGridImg/gridicon3.png";

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="w-full h-20 flex items-center shadow-sm bg-white fixed top-0 left-0 z-50 border-b-4 border-b-[#FFC23E]">
        <div className="mx-auto md:px-4 flex items-center justify-between w-full">
          {/* Sol: Hamburger | Sağ: Logo (mobil için) */}
          <div
            className="ppr-1 flex flex-row-reverse gap-4 md:gap-0 items-center justify-start w-fit md:w-auto md:space-x-4 order-1 md:order-0
"
          >
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className=" md:order-2 flex-shrink-0 w-14 h-14  flex md:hidden justify-center items-center text-[#006FDC]"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-14 h-14"
                  fill="none"
                  viewBox="0 0 24 24"
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
                  className="w-14 h-14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            <Link to="/" aria-label="Homepage" className="flex-shrink  md:ml-0">
              <img
                src={ZinterLogo}
                alt="Page Logo"
                className="order-1 md:order-2 h-auto max-h-12 mt-2 md:max-h-10 w-auto"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Menü ortada */}
          <nav className="hidden md:flex flex-grow justify-center order-0 md:order-1">
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
             
                <li>
                    <Link
                    to="/china-delivery"
                    className="block px-4 py-2 text-gray-700 hover:text-[#006FDC]"
                  >
                    Доставка из Китая
                  </Link>
                </li>
                <li>
                   <Link
                    to="/europe-delivery"
                    className="block px-4 py-2 text-gray-700 hover:text-[#006FDC]"
                  >
                    Доставка из Европы
                  </Link>
                </li>
            
             
             
            </ul>
          </nav>

          {/* Telefon numarası (masaüstü) */}
          <div className="hidden lg:flex items-center gap-4 order-2">
            <a
              href="tel:+79178899457"
              className="bg-gradient-to-r from-[#006FDC] to-[#11B4EC] hover:bg-gradient-to-br px-4 py-2 rounded-lg text-white font-medium shadow-md hover:shadow-lg"
            >
              +7 (917) 889-94-57
            </a>
          </div>
        </div>
      </header>

      {/* Mobil Menü Paneli */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="menu-panel"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-0 left-0 h-full w-full md:w-1/5 bg-white z-40 pt-20 px-4 overflow-y-auto shadow-lg"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
                hidden: {
                  transition: { staggerChildren: 0.03, staggerDirection: -1 },
                },
              }}
              className="space-y-4 text-start"
            >
              {[
                { to: "/search-provider", label: "Поиск Поставщика" },
                { to: "/china-delivery", label: "Доставка из Китая" },
                { to: "/europe-delivery", label: "Доставка из Европы" },
                { to: "/payment", label: "Оплата товара" },
                { to: "/features", label: "Таможенное Оформление" },
                { to: "/warehouse", label: "Услуги Склад" },
                { to: "/about", label: "О Компании" },
              ].map(({ to, label }) => (
                <motion.li
                  key={to}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    to={to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 text-gray-800 border-b"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <div className="w-full flex justify-center items-center py-6">
              <a
                href="tel:+79178899457"
                className="bg-gradient-to-r from-[#006FDC] to-[#11B4EC] hover:bg-gradient-to-br px-24 py-2 rounded-lg text-white font-medium shadow-md hover:shadow-lg text-center"
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
