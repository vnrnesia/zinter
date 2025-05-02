import { motion } from "framer-motion";

export default function DeliveryCard({ id, title, description, price, imgMobile, imgDesktop, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`group transition-all duration-300 bg-[#F3F3F3] hover:bg-[#088EE3] flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 sm:px-10 py-6 rounded-3xl gap-6 lg:gap-10 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:scale-[1.01]`}
    >
      <div className="sm:hidden flex justify-center">
        <img src={imgMobile} alt="Zinter Logistic" className="w-20" />
      </div>

      <span className="text-3xl sm:text-4xl text-center sm:text-left group-hover:text-[#F2F2F2]">
        {id}
      </span>

      <div className="flex-1 text-center sm:text-left space-y-1">
        <h3 className="text-[#343434] group-hover:text-[#F2F2F2] text-xl sm:text-2xl font-medium">
          {title}
        </h3>
        <p className="text-[#767676] group-hover:text-[#eaeaea] text-sm sm:text-base">
          {description}
        </p>
      </div>

      <div className="hidden sm:block w-[1px] h-[50px] bg-[#C9C9C9]" />

      <p className="text-[#535353] group-hover:text-[#eaeaea] text-center sm:text-left text-base sm:text-lg">
        {price}
      </p>

      <div className="hidden sm:block">
        <img src={imgDesktop} alt="Zinter Logistic" className="w-[100px]" />
      </div>
    </motion.div>
  );
}
