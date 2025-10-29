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
import wholeworld from "@/assets/wholeworld.png";

export default function Home() {
  return (
    <div className="pt-10 lg:pt-20 overflow-x-hidden">
      <Main />
      <div className="container">
        <Cards />
      </div>
      <div>
        <CtaCard />
      </div>
      <div className=" bg-gray-100">
        <StepSection />
      </div>
      <div className="pt-10">
        <ImportExport />
      </div>
      <div className="md:pt-10 md:px-10">
        <Delivery />
      </div>
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
      <div className="pb-10 pt-16">
        <DeliveryBox />
      </div>{" "}
      <div className="py-5 md:py-24">
        <GetStarted />
      </div>
      <div className="container ">
        <WhoWeAre />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
