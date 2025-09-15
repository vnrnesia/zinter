import Brands from "@/components/shared/Brands.jsx";
import WhoWeAre from "@/components/shared/WhoWeAre.jsx";
import CtaCard from "@/components/shared/CtaCard.jsx";
import plane2 from "@/assets/PaymentImg/plane2.png";
import PhoneIcon from "@/assets/PhoneIcon.png";
import features from "@/assets/features.png";
import ContactSlideForm from "@/components/shared/ContactSlideForm.jsx";
import FeaturesService from "@/components/ui/FeaturesService.jsx";
import FeaturesHowWorks from "@/components/ui/FeaturesHowWorks.jsx";
import Form from "@/components/ui/Form.jsx";
import { Link } from "react-router-dom";
import CallButton from "@/components/shared/CallButton.jsx";
import GetStarted from "../components/shared/GetStarted";

export default function Features() {
  return (
    <>
      <section className="pt-28 pb-5 lg:pt-32 lg:pb-32 bg-gradient-to-r from-[#006FDC] to-[#11B4EC] border-b-4 border-b-[#676767]">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10 max-w-[90%] 2xl:max-w-7xl">
          <div className="w-full lg:w-1/2 space-y-6 text-white text-center lg:text-left">
            <div className="text-xl font-inter font-medium leading-tight mx-auto lg:mx-0 uppercase">
              <div className="flex justify-center items-center"></div>
            </div>

            <div className="hidden lg:flex items-center gap-4"></div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Tаможенное <span className="text-[#FFC23E]">оформление</span>
            </h1>

            <p className="text-lg md:text-xl opacity-90">
              Полное сопровождение таможенного оформления: декларирование,
              сертификация и юридическая поддержка для беспрепятственного
              импорта и экспорта.
            </p>

            <div className="pt-2 flex justify-center lg:justify-start">
              <CallButton />
            </div>
          </div>

          <div className="w-[70%] md:w-auto">
            <img
              src={features}
              alt="Container"
              className="ml-6 w-[80%] h-auto object-contain"
            />
          </div>
        </div>
      </section>

     

      <section className="bg-white">
        <div className="w-full max-w-full px-4 mx-auto">
          <FeaturesService />
        </div>
      </section>

     

      <section className="lg:py-16">
        <div className="w-full max-w-full px-4 mx-auto">
          <FeaturesHowWorks />
        </div>
      </section>

      <section className="py-16">
        <div className="w-full max-w-full mx-auto">
          <GetStarted/>
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
