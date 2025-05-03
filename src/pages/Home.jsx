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
      <Main />

      <Brands />

      <div className="container">
        <Cards />
        <CtaCard />
        <CtaCardInside />
        <StepSection />
        <Delivery />
      </div>

      <CtaContact />

      <div className="container">
        <ImportExport />
      </div>

      <div className="container pb-20">
        <WhoWeAre />
      </div>
    </div>
  );
}
