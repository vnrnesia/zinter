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
import CallButton from "@/components/shared/CallButton.jsx";
import zintercircle from "@/assets/zintercircle.png";
import europecircle from "@/assets/europecircle.png";
import { motion } from "framer-motion";
import CallButtonDelivery from "@/components/shared/CallButtonDelivery.jsx";

export default function ChinaDelivery() {
  return (
    <>
      <section className="py-32 bg-gradient-to-r from-[#006FDC] to-[#11B4EC] border-b-4 border-b-[#676767]">
          <img src={europecircle} alt="" className="w-20 h-20 absolute top-20 right-0 m-4 z-10" />
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 space-y-6 text-white text-center lg:text-left">
            <div className="text-xl font-inter font-medium leading-tight mx-auto lg:mx-0 uppercase">
              <div className="flex justify-center items-center"></div>
            </div>
          

            <div className="hidden lg:flex items-center gap-4"></div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Доставка из <span className="text-[#FFC23E]">Европы </span>
            </h1>

            <p className="text-lg md:text-xl opacity-90">
              Надежные мультимодальные перевозки, оптимизация сроков и затрат,
              полный контроль на каждом этапе доставки.
            </p>

          <CallButtonDelivery />
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src={containereu}
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

      <section className=" bg-white">
        <div className="w-full max-w-full px-4 mx-auto">
          <Services />
        </div>
      </section>

      <section className="py-16 w-full">
        <CtaCard title="Организуем доставку из Европы — быстро и надёжно" />
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <HowWorks />
          <div className="block lg:hidden">
            <Form />
          </div>
        </div>
      </section>

      <section className="pt-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <ServiceGrid />
        </div>
      </section>

      <section className="pt-16">
        <div className="w-full max-w-full px-4 mx-auto">
          <Delivery />
        </div>
      </section>

      <section className="py-16">
        <div className="w-full max-w-full  mx-auto">
          <CtaContact />
        </div>
      </section>

      <section className="py-16">
        <div className="w-full max-w-full px-4 mx-auto">
          <DeliveryBox />
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8">
        <div className="max-w-full px-4 mx-auto">
          <ImportExport />
          <WhoWeAre />
        </div>
      </section>
    </>
  );
}
