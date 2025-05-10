import PhoneIcon from "@/assets/PhoneIcon.png";
import Form from "@/components/ui/Form";
import Brands from "@/components/shared/Brands.jsx";
import ContactServices from "@/components/ui/ContactServices.jsx";
import CtaCard from "@/components/shared/CtaCard.jsx";
import ImportExport from "@/components/ui/ImportExport.jsx";
import WhoWeAre from "@/components/shared/WhoWeAre.jsx";
import CallButton from "@/components/shared/CallButton.jsx"

export default function Contact() {
  return (
    <>
      <section className="pt-10 pb-16 bg-gradient-to-r from-[#006FDC] to-[#11B4EC] border-b-4 border-b-[#676767]">
        <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 space-y-4 md:space-y-6 text-white text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mx-auto lg:mx-0">
              Логистика от профессионалов –
              <span className="text-[#FFC23E]"> быстро, выгодно, надежно </span>
            </h1>

            <p className="text-lg md:text-xl opacity-90 px-4 lg:px-0">
              Оптимизируем поставки, снижаем затраты и контролируем каждый этап
              логистики. Доставка без границ с гарантией качества!
            </p>

            <div className="py-10 flex justify-center lg:justify-start">
             <CallButton />
            </div>
          </div>
          <Form />
        </div>
      </section>
      <div className="w-full py-2">
        <Brands />
        <ContactServices />
        <CtaCard />
        <section className="container mx-auto px-4 lg:px-8">
          <div className="max-w-full px-4 mx-auto">
            <ImportExport />
            <WhoWeAre />
          </div>
        </section>
      </div>
    </>
  );
}
