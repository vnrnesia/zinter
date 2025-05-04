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
import Form from "@/components/ui/Form.jsx";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Main />

      <Brands />

      <div className="container">
        <Cards />
      </div>

      <CtaCard />

      <div className="container">
        <CtaCardInside />
        <StepSection />
        <div className="block lg:hidden">
        <Form/>
        </div>
     
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
