import Brands from "@/components/shared/Brands.jsx";
import WhoWeAre from "@/components/shared/WhoWeAre.jsx";
import CtaCard from "@/components/shared/CtaCard.jsx";
import plane2 from "@/assets/PaymentImg/plane2.png";
import PhoneIcon from "@/assets/PhoneIcon.png";
import warehouse from "@/assets/warehouse.png";
import CtaContact from "@/components/shared/CtaContact.jsx";
import WarehouseService from "@/components/ui/WarehouseService.jsx";
import WarehouseHowWorks from "@/components/ui/WarehouseHowWorks.jsx";

export default function Warehouse() {
  return (
    <>
      <section className="pt-20 pb-40 bg-gradient-to-r from-[#006FDC] to-[#11B4EC] border-b-4 border-b-[#676767]">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 space-y-6 text-white text-center lg:text-left">
            <div className="text-xl font-inter font-medium leading-tight mx-auto lg:mx-0 uppercase">
              <div className="flex justify-center items-center">
                
               
              </div>
            </div>

           

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Услуги <span className="text-[#FFC23E]">склада</span>
            </h1>

            <p className="text-lg md:text-xl opacity-90">
              Надежные мультимодальные перевозки, оптимизация сроков и затрат,
              полный контроль на каждом этапе доставки.
            </p>

            <div className="pt-2 flex justify-center lg:justify-start">
              <button className="relative flex items-center bg-white hover:bg-gray-100 text-gray-900 pl-6 pr-10 py-3 rounded-lg font-medium transition-colors shadow-md">
                Связаться с менеджером
                <img
                  src={PhoneIcon}
                  alt="Phone Icon"
                  className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 transition-transform group-hover:scale-110"
                />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src={warehouse}
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

      <section className="bg-white">
        <div className="w-full max-w-full px-4 mx-auto">
          <WarehouseService />
        </div>
      </section>

      <section className="py-16">
        <div className="w-full max-w-full px-4 mx-auto">
          <CtaCard />
        </div>
      </section>

      <section className="py-16">
        <div className="w-full max-w-full px-4 mx-auto">
          <WarehouseHowWorks />
        </div>
      </section>

      <section className="py-16">
        <div className="w-full max-w-full px-4 mx-auto">
          <CtaContact />
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
