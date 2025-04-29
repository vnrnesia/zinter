import Header from "./components/Header";
import Main from "./components/Main";
import Brands from "./components/Brands";
import Cards from "./components/Cards";
import CtaCard from "./components/CtaCard";
import CtaCardInside from "./components/CtaCardInside";
import StepSection from "./components/StepSection";
import Delivery from "./components/Delivery";
import CtaContact from "./components/CtaContact";
import ImportExport from "./components/ImportExport";
import WhoWeAre from "./components/WhoWeAre";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="w-full">
        <Header />
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

      {/* Tam genişlikli StepSection */}
      <div className="w-full">
        <StepSection />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <Delivery />
        <CtaContact />
        <ImportExport />
        <WhoWeAre />
      </div>
      <Footer />
    </div>
  );
}

export default App;
