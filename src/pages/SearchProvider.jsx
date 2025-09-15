import Brands from "@/components/shared/Brands.jsx";
import WhoWeAre from "@/components/shared/WhoWeAre.jsx";
import CtaCard from "@/components/shared/CtaCard.jsx";
import HowWorks from "@/components/ui/HowWorks.jsx";
import plane2 from "@/assets/PaymentImg/plane2.png";
import PhoneIcon from "@/assets/PhoneIcon.png";
import containereu from "@/assets/containereu.png";
import Services from "@/components/ui/Services.jsx";
import Delivery from "@/components/ui/Delivery.jsx";
import ContactSlideForm from "@/components/shared/ContactSlideForm.jsx";
import DeliveryBox from "@/components/ui/DeliveryBox.jsx";
import ServiceGrid from "@/components/ui/ServiceGrid.jsx";
import ImportExport from "@/components/ui/ImportExport.jsx";
import Form from "@/components/ui/Form.jsx";
import { Link } from "react-router-dom";
import bigzworld from "@/assets/bigzworld.png";
import SearchCards from "@/components/ui/SearchCards.jsx";
import SearchHowWorks from "@/components/ui/SearchHowWorks.jsx";
import CallButton from "@/components/shared/CallButton.jsx";
import GetStarted from "../components/shared/GetStarted";
import Contact from "../components/ui/Contact";


export default function ChinaDelivery() {
  return (
    <>
      <section className="pt-20 pb-5 lg:py-44 bg-gradient-to-r from-[#006FDC] to-[#11B4EC] border-b-4 border-b-[#676767]">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10 max-w-[90%] 2xl:max-w-7xl">
          <div className="w-full lg:w-1/2 space-y-6 text-white text-center lg:text-left">
            <div className="text-xl font-inter font-medium leading-tight mx-auto lg:mx-0 uppercase">
              <div className="flex justify-center items-center"></div>
            </div>

            <div className="hidden lg:flex items-center gap-4"></div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              ПОИСК <span className="text-[#FFC23E]">ПОСТАВЩИКА</span>
            </h1>

            <p className="text-lg md:text-xl opacity-90">
              Выбираем оптимального производителя под ваш ТЗ и сопровождаем
              контрактное производство — от заказа на заводе до доставки на ваш
              склад в РФ.
            </p>

            <div className="pt-2 flex justify-center lg:justify-start">
            <CallButton />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src={bigzworld}
              alt="Container"
              className="w-[325px] sm:w-[300px] md:w-[500px] lg:w-[500px] h-auto object-contain mx-auto"
            />
          </div>
        </div>
      </section>

     

      <section >
        <div className="w-full max-w-full px-4 mx-auto">
          <SearchCards />
        </div>
      </section>

    

      <section className="pt-16 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SearchHowWorks />
        </div>
      </section>

        <section className="pb-16 pt-16">
        <div className="w-full max-w-full  mx-auto">
         <GetStarted />
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8">
        <div className="max-w-full px-4 mx-auto">
          <WhoWeAre />
        </div>
      </section>

      <Contact />
    </>
  );
}
