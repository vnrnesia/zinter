import PhoneIcon from "@/assets/PhoneIcon.png";
import payment from "@/assets/PaymentImg/payment.png";
import plane2 from "@/assets/PaymentImg/plane2.png";
import Brands from "@/components/shared/Brands.jsx";
import WhoWeAre from "@/components/shared/WhoWeAre.jsx";
import CtaCard from "@/components/shared/CtaCard.jsx";
import HowWorks from "@/components/ui/HowWorks.jsx";


export default function Payment() {
  return (
    <>
      <section className="pt-10 lg:pt-40 pb-40 bg-gradient-to-r from-[#006FDC] to-[#11B4EC] border-b-4 border-b-[#676767]">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2 space-y-4 md:space-y-6 text-white text-center lg:text-left">
            <div className="text-xl md:text-1xl font-inter font-medium leading-tight mx-auto lg:mx-0 uppercase">
              <div className="flex items-start gap-3">
                <img
                  src={plane2}
                  alt="Plane"
                  className="w-auto h-12 object-contain"
                />
                <div className="min-h-12 flex items-center">
                  <p className="text-2xl md:text-xl leading-tight">
                    Мультимодальные перевозки
                    <br />
                    сборных грузов
                    
                    <span className="text-[#FFC23E]"> по всему миру</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="text-4xl md:text-5xl font-bold leading-tight mx-auto lg:mx-0">
              Факторинг и оплата
              <span className="text-[#FFC23E]"> санкционных товаров</span>
            </div>

            <p className="text-lg md:text-xl opacity-90 px-4 lg:px-0">
              Произведем оплату в любую точку мира по вашему поручению.
              Выполняем расширенные функции международного платежного агента.
              Оплачиваем товары клиентов со своих международных представительств
              в СНГ , ЕС и Китае.
            </p>

            <div className="pt-2 flex justify-center lg:justify-start">
              <button className="relative flex items-center bg-white hover:bg-gray-100 text-gray-900 pl-6 pr-10 py-3 rounded-lg font-medium transition-colors shadow-md overflow-visible">
                Связаться с менеджером
                <img
                  src={PhoneIcon}
                  alt="Phone Icon"
                  className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 transition-transform group-hover:scale-110"
                />
              </button>
            </div>
          </div>
          <img src={payment} alt="Payment Image" />
        </div>
      </section>
      <Brands />
      <HowWorks />
      <CtaCard />
      <WhoWeAre />
    </>
  );
}
