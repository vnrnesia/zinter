import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ContactButton() {
  const [showScrollText, setShowScrollText] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);

  // Scroll event listener
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      // Scroll yukarı veya aşağı fark var mı kontrolü
      if (currentScrollY !== lastScrollY.current) {
        setShowScrollText(true);

        // Timeout varsa temizle
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

        // Scroll durunca 1 saniye sonra gizle
        scrollTimeoutRef.current = setTimeout(() => {
          setShowScrollText(false);
        }, 1000);

        lastScrollY.current = currentScrollY;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <div className="fixed bottom-20 right-5 z-50 flex flex-col items-end gap-2 md:hidden">
      {/* Scroll ile çıkan yazı */}
      <AnimatePresence>
        {showScrollText && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-full shadow-lg px-4 py-2 mb-3"
            style={{ transform: "translateY(-8px)" }}
          >
            <span className="text-gray-800 font-medium whitespace-nowrap">
              Обратитесь к нам
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* İkon aç/kapat butonu */}
      <motion.button
        onClick={() => setShowIcons((prev) => !prev)}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#f5d33bfd] to-[#ffbb00] rounded-full cursor-pointer shadow-lg"
        aria-label="Open contact options"
      >
        <MessageCircle className="text-white w-7 h-7" />
      </motion.button>

      {/* İkonlar */}
      <AnimatePresence>
        {showIcons && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.3, type: "spring", stiffness: 250 },
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 10,
              transition: { duration: 0.3, type: "spring", stiffness: 250 },
            }}
            className="absolute bottom-[70px] right-2 flex flex-col items-center gap-3"
          >
            {/* Whatsapp */}
            <a
              href="https://wa.me/79178899457"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12"
              aria-label="WhatsApp"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-full h-full object-contain"
              />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/yourtelegrambot"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12"
              aria-label="Telegram"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                alt="Telegram"
                className="w-full h-full object-contain"
              />
            </a>

            {/* Gmail */}
            <a
              href="mailto:zinter@zinter.com"
              className="w-12 h-12"
              aria-label="Email"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                alt="Email"
                className="w-full h-full object-contain"
              />
            </a>

            {/* Telefon */}
            <a href="tel:+79178899457" className="w-12 h-12" aria-label="Phone">
              <img
                src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
                alt="Phone"
                className="w-full h-full object-contain"
              />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
