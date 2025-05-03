import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileToolbar from "@/components/layout/MobileToolbar";
import Home from "@/pages/Home";
import ChinaDelivery from "@/pages/ChinaDelivery";
import EuropeDelivery from "@/pages/EuropeDelivery";
import Payment from "@/pages/Payment";
import Warehouse from "@/pages/Warehouse";
import Contact from "@/pages/Contact";
import Features from "@/pages/Features";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/china-delivery" element={<ChinaDelivery />} />
        <Route path="/europe-delivery" element={<EuropeDelivery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/warehouse" element={<Warehouse />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
      </Routes>

      <Footer />
      <MobileToolbar />
    </Router>
  );
}

export default App;
