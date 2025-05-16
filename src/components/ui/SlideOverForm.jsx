import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Form from "./Form";

export default function SlideOverForm({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "50%", opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 right-[50%] h-full w-full md:right-[25%] md:w-[50%] bg-gradient-to-r from-[#006FDC] to-[#11B4EC] shadow-2xl z-50"
        >
          <div className="relative w-full h-full flex items-center justify-center px-6 py-12">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-16 h-16" />
            </button>

            <div className="w-full max-w-md">
             
              <Form />
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
