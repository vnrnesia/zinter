import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <motion.div
        className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1,
        }}
      />
    </div>
  );
}
