
import Main from "@/components/home/Main";
import Brands from "@/components/shared/Brands";
import Cards from "@/components/ui/Cards";
import CtaCard from "@/components/shared/CtaCard";
import CtaCardInside from "@/components/ui/CtaCardInside";
import StepSection from "@/components/ui/StepSection";
import Delivery from "@/components/ui/Delivery";
import CtaContact from "@/components/shared/CtaContact";
import ImportExport from "@/components/ui/ImportExport";
import WhoWeAre from "@/components/shared/WhoWeAre";

export default function Home() {
  return (
    <div>
      <div className="w-full">
        <Main />
        <Brands />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <Cards />
        <section className="flex flex-col items-center justify-center gap-8 py-12">
          <div className="w-full flex justify-center">
            <CtaCard />
          </div>
          <div className="w-full flex justify-center">
            <CtaCardInside />
          </div>
        </section>
      </div>

      <div className="w-full">
        <StepSection />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <Delivery />
      </div>

      <div className="w-full">
        <CtaContact />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <ImportExport />
        <WhoWeAre />
      </div>
    </div>
  );
}
