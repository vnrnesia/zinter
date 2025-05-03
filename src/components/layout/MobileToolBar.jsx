import { Home, Package, Phone, Menu, X, PhoneCall, FileText  } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const icons = {
  whatsapp: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", // Doğru ikon
  telegram: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
  gmail: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png",
  phone: "https://cdn-icons-png.flaticon.com/512/597/597177.png",
};

export default function MobileToolbar() {
  const [showMessageMenu, setShowMessageMenu] = useState(false);
  const messageRef = useRef(null);
  const [position, setPosition] = useState({ x: 0 });

  const toggleMessageMenu = () => {
    setShowMessageMenu((prev) => !prev);
  };

  useEffect(() => {
    if (messageRef.current) {
      const rect = messageRef.current.getBoundingClientRect();
      setPosition({ x: rect.left + rect.width / 6 });
    }
  }, [showMessageMenu]);

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t z-50 md:hidden">
      <ul className="flex justify-evenly items-center h-16 text-sm relative">
        <li>
          <Link to="/" className="flex flex-col items-center text-gray-600">
            <Home size={24} />
            <span>Главная</span>
          </Link>
        </li>
        <li>
          <Link to="/warehouse" className="flex flex-col items-center text-gray-600">
            <Package size={24} />
            <span>Меню</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="flex pl-6 flex-col items-center text-gray-600">
            <FileText size={24} />
            <span>Заявка</span>
          </Link>
        </li>
        <li ref={messageRef}>
          <button onClick={toggleMessageMenu} className="flex flex-col items-center text-gray-600">
            {showMessageMenu ? <X size={24} /> : <Menu size={24} />}
            <span>Сообщение</span>
          </button>
        </li>
        <li>
          <a href="tel:+79178899457" className="flex flex-col items-center text-gray-600">
            <PhoneCall size={24} />
            <span>Звонок</span>
          </a>
        </li>

        <AnimatePresence>
          {showMessageMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-[70px] transform -translate-x-1/2 bg-white border rounded-xl shadow-xl p-1 z-50 flex flex-col items-center gap-3"
              style={{ left: `${position.x}px` }}
            >
              <a href="https://wa.me/79178899457" target="_blank" rel="noreferrer">
                <img src={icons.whatsapp} alt="WhatsApp" className="w-12 h-12" />
              </a>
              <a href="https://t.me/yourtelegrambot" target="_blank" rel="noreferrer">
                <img src={icons.telegram} alt="Telegram" className="w-10 h-10" />
              </a>
              <a href="mailto:zinter@zinter.com">
                <img src={icons.gmail} alt="Gmail" className="w-9 h-9" />
              </a>
              <a href="tel:+79178899457">
                <img src={icons.phone} alt="Phone" className="w-9 h-9" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </ul>
    </nav>
  );
}
