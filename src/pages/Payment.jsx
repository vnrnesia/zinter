import PhoneIcon from "@/assets/PhoneIcon.png";
import payment from "@/assets/PaymentImg/payment.png";
import plane2 from "@/assets/PaymentImg/plane2.png";
import Brands from "@/components/shared/Brands.jsx";
import WhoWeAre from "@/components/shared/WhoWeAre.jsx";
import CtaCard from "@/components/shared/CtaCard.jsx";
import HowWorks from "@/components/ui/HowWorks.jsx";
import Form from "@/components/ui/Form.jsx";
import { Link } from "react-router-dom";
import CallButton from "@/components/shared/CallButton.jsx"

export default function Payment() {
  return (
    <>
      <section className="pt-10 lg:pt-40 pb-40 bg-gradient-to-r from-[#006FDC] to-[#11B4EC] border-b-4 border-b-[#676767]">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 space-y-4 md:space-y-6 text-white text-center lg:text-left">
            <div className="text-xl md:text-1xl font-inter font-medium leading-tight mx-auto lg:mx-0 uppercase">
              <div className="flex justify-center items-center"></div>
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
              <CallButton />
            </div>
          </div>
          <img src={payment} alt="Payment Image" />
        </div>
      </section>
      <Brands />
      <HowWorks />
      <div className="block lg:hidden">
        <Form />
      </div>
      <div className="container mx-auto px-4 lg:px-8"></div>
      <div>
        <CtaCard />
      </div>
      <div>
        <WhoWeAre />
      </div>
    </>
  );
}
