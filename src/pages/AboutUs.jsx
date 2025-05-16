import Brands from "@/components/shared/Brands.jsx";
import WhoWeAre from "@/components/shared/WhoWeAre.jsx";
import CtaCard from "@/components/shared/CtaCard.jsx";
import HowWorks from "@/components/ui/HowWorks.jsx";
import plane2 from "@/assets/PaymentImg/plane2.png";
import PhoneIcon from "@/assets/PhoneIcon.png";
import containereu from "@/assets/containereu.png";
import Services from "@/components/ui/Services.jsx";
import Delivery from "@/components/ui/Delivery.jsx";
import CtaContact from "@/components/shared/CtaContact.jsx";
import DeliveryBox from "@/components/ui/DeliveryBox.jsx";
import ServiceGrid from "@/components/ui/ServiceGrid.jsx";
import ImportExport from "@/components/ui/ImportExport.jsx";
import Form from "@/components/ui/Form.jsx";
import { Link } from "react-router-dom";
import bigzworld from "@/assets/bigzworld.png";
import SearchCards from "@/components/ui/SearchCards.jsx";
import SearchHowWorks from "@/components/ui/SearchHowWorks.jsx";
import wholeworld from "@/assets/wholeworld.png";
import AboutUsServiceGrid from "@/components/ui/AboutUsServiceGrid.jsx";
import CallButton from "@/components/shared/CallButton.jsx"

export default function AboutUs() {
  return (
    <>
      <section className="pt-20 pb-5 lg:py-44 bg-gradient-to-r from-[#006FDC] to-[#11B4EC] border-b-4 border-b-[#676767]">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center ">
          <div className="w-full lg:w-1/2 space-y-6 text-white text-center lg:text-left">
            <div className="text-xl font-inter font-medium leading-tight mx-auto lg:mx-0 uppercase">
              <div className="flex justify-center items-center"></div>
            </div>

            <div className="hidden lg:flex items-center gap-4"></div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Контрактное производство в{" "}
              <span className="text-[#FFC23E]">Китае и ЕС. </span>
            </h1>

            <p className="text-lg md:text-xl opacity-90">
              Подбираем надежного производителя, сопровождаем контрактное
              производство и оплачиваем поставки. Логистика, складские услуги и
              доставка – все в одном решении.
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

      <section className="bg-white">
        <div className="w-full max-w-full px-4 mx-auto">
          <Brands />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="w-full max-w-full px-4 mx-auto">
          <SearchCards />
        </div>
      </section>

      <section className="pt-16 w-full">
        <CtaCard />
      </section>

      <section>
        <div className="hidden lg:block min-h-screen  items-center justify-center text-center pt-16 px-4">
          <div className="w-fit text-blue-600 font-medium border border-blue-600 px-3 py-1 rounded-full text-sm inline-block mb-4">
            Найдем лучшее решение
          </div>
          <h2 className="text-4xl font-bold mb-10">
            Найдите места для покупки,
            <br /> продажи или аренды контейнеров
          </h2>
          <img className=" mx-auto w-[80%] h-[80%]" src={wholeworld} alt="" />
        </div>
      </section>

      <section className="py-16">
        <div className="w-full max-w-full  mx-auto">
          <AboutUsServiceGrid />
        </div>
      </section>

      <section className="pb-16">
        <div className="w-full max-w-full  mx-auto">
          <CtaContact />
        </div>
      </section>

      <section className="pb-16">
        <div className="w-full max-w-full  mx-auto">
          <ImportExport />
        </div>
      </section>

      <section className="pt-16 w-full">
        <CtaCard />
      </section>

      <section className="container mx-auto px-4 lg:px-8">
        <div className="max-w-full px-4 mx-auto">
          <WhoWeAre />
        </div>
      </section>
    </>
  );
}
