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
      </div>
      <div className="py-10 px-10 block lg:hidden bg-gradient-to-r from-[#006FDC] to-[#11B4EC]">
        <Form className="w-full max-w-xs mx-auto py-10" />
      </div>

      <div>
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
