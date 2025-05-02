import Brands from "@/components/shared/Brands.jsx";
import WhoWeAre from "@/components/shared/WhoWeAre.jsx";
import CtaCard from "@/components/shared/CtaCard.jsx";
import HowWorks from "@/components/ui/HowWorks.jsx";
import plane2 from "@/assets/PaymentImg/plane2.png";
import PhoneIcon from "@/assets/PhoneIcon.png";
import containercn from "@/assets/containercn.png";
import Services from "@/components/ui/Services.jsx";
import Delivery from "@/components/ui/Delivery.jsx";
import CtaContact from "@/components/shared/CtaContact.jsx";
import DeliveryBox from "@/components/ui/DeliveryBox.jsx";
import ServiceGrid from "@/components/ui/ServiceGrid.jsx";
import ImportExport from "@/components/ui/ImportExport.jsx";

export default function ChinaDelivery() {
  return (
    <>
      <section className="py-16 bg-gradient-to-r from-[#006FDC] to-[#11B4EC] border-b-4 border-b-[#676767]">
        <div className="w-[70%] max-w-full px-4 mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 space-y-6 text-white text-center lg:text-left">
            <div className="flex items-start gap-3">
              <img
                src={plane2}
                alt="Plane"
                className="w-auto h-12 object-contain"
              />
              <p className="text-2xl font-medium uppercase leading-tight">
                Мультимодальные перевозки <br />
                <span className="text-[#FFC23E]">по всему миру</span>
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Доставка из <span className="text-[#FFC23E]">Китая</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Надежные мультимодальные перевозки, оптимизация сроков и затрат,
              полный контроль на каждом этапе доставки.
            </p>
            <div className="pt-2">
              <button className="relative flex items-center bg-white hover:bg-gray-100 text-gray-900 pl-6 pr-10 py-3 rounded-lg font-medium transition-colors shadow-md">
                Связаться с менеджером
                <img
                  src={PhoneIcon}
                  alt="Phone Icon"
                  className="absolute right-[-30px] top-1/2 transform -translate-y-1/2"
                />
              </button>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img
              src={containercn}
              alt="Container"
              className="w-full h-auto object-contain"
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
          <Services />
        </div>
      </section>
      <section className="py-16 ">
        <div className="w-full max-w-full px-4 mx-auto">
          <CtaCard />
        </div>
      </section>

      <section className="py-16 ">
        <div className="w-full max-w-full px-4 mx-auto">
          <HowWorks />
        </div>
      </section>

      <section className="py-16 bg-gray-50 ">
        <div className="w-full max-w-full px-4 mx-auto">
          <ServiceGrid />
        </div>
      </section>

      <section className="py-16 ">
        <div className="w-full max-w-full px-4 mx-auto">
          <Delivery />
        </div>
      </section>

      <section className="py-16 ">
        <div className="w-full max-w-full px-4 mx-auto">
          <CtaContact />
        </div>
      </section>

      <section className="py-16 ">
        <div className="w-full max-w-full px-4 mx-auto">
          <DeliveryBox />
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 ">
        <div className="max-w-full px-4 mx-auto">
          <ImportExport />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="w-full max-w-full px-4 mx-auto space-y-12">
          <WhoWeAre />
        </div>
      </section>
    </>
  );
}
