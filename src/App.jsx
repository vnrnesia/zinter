import Header from "./components/Header";
import Main from "./components/Main"
import Brands from "./components/Brands";
import Cards from "./components/Cards";
import CtaCard from "./components/CtaCard";
import CtaCardInside from "./components/CtaCardInside.jsx";
import StepSection from "./components/StepSection.jsx"


function App() {
  return (
    <div>
      <Header />
      <Main />
      <Brands />
      <Cards />
      <section className="w-full flex flex-col items-center justify-center gap-8 py-12">
        <div className="w-full flex justify-center">
          <CtaCard />
        </div>
        <div className="w-full flex justify-center">
          <CtaCardInside />
        </div>
      </section>
      <StepSection />
    </div>
  )

  
}


export default App;

