import PhoneIcon from "@/assets/PhoneIcon.png";
import Form from "@/components/ui/Form";
import CallButton from "@/components/shared/CallButton.jsx"

export default function Main() {
  return (
    <>
    <section className="py-16 bg-gradient-to-r from-[#006FDC] to-[#11B4EC] border-b-4 border-b-[#676767] gap-30">
      <div className="container mx-auto flex flex-col lg:flex-row  items-center gap-4">
        <div className="lg:w-1/2 space-y-4 md:space-y-6 text-white text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mx-auto lg:mx-0">
            ПОИСК И ИМПОРТ
            <br />
            ТОВАРОВ <span className="text-[#FFC23E]">ПОД КЛЮЧ</span>
          </h1>

          <p className="text-lg md:text-xl opacity-90 px-4 lg:px-0">
            "Глобальная логистическая сеть обеспечивает надежную доставку ваших
            товаров с гарантией своевременного прибытия.
          </p>

          <ul className="space-y-2 md:space-y-3 px-2 lg:px-0 inline-flex flex-col items-start">
            <li className="flex items-center justify-center lg:justify-start">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-[#FFC23E] mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-base md:text-lg">
                Подбираем поставщиков
              </span>
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-[#FFC23E] mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-base md:text-lg">Оплачиваем ваш товар</span>
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-[#FFC23E] mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-base md:text-lg">
                Доставляем грузы от 20 кг
              </span>
            </li>
          </ul>
          <div className="pt-2 flex justify-center lg:justify-start">
           <CallButton />
          </div>
        </div>
        <div className="w-[90%] sm:w-[80%] lg:w-auto lg:ml-auto lg:pr-16">
        <Form />
        </div>
        
      </div>
    </section>
    

    </>
    
  );
}
