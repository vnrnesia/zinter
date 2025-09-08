import Main from "@/components/home/Main";

import Cards from "@/components/ui/Cards";
import CtaCard from "@/components/shared/CtaCard";

import StepSection from "@/components/ui/StepSection";
import Delivery from "@/components/ui/Delivery";

import ImportExport from "@/components/ui/ImportExport";
import WhoWeAre from "@/components/shared/WhoWeAre";
import Form from "@/components/ui/Form.jsx";
import DeliveryBox from "@/components/ui/DeliveryBox.jsx";
import GetStarted from "../components/shared/GetStarted";
import Contact from "../components/ui/Contact";
//test
export default function Home() {
  return (
    <div className="pt-10 lg:pt-20 overflow-x-hidden">
      <Main />

      <div className="container">
        <Cards />
      </div>
      <div className="container">
        <ImportExport />
      </div>

      <div className="container">
        <StepSection />
      </div>
      <div className="py-10 px-10 block lg:hidden bg-gradient-to-r from-[#006FDC] to-[#11B4EC]">
        <Form className="w-full max-w-xs mx-auto py-10" />
      </div>

      <div className="px-10">
        <Delivery />
      </div>

      <div className="py-24">
        <GetStarted />
      </div>

      <div className="py-20">
        <DeliveryBox />
      </div>

      <div className="container pb-20">
        <WhoWeAre />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
