import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header.jsx";
import Footer from "@/components/layout/Footer.jsx";
import MobileToolbar from "@/components/layout/MobileToolbar.jsx";
import Home from "@/pages/Home.jsx";
import ChinaDelivery from "@/pages/ChinaDelivery.jsx";
import EuropeDelivery from "@/pages/EuropeDelivery.jsx";
import Payment from "@/pages/Payment.jsx";
import Warehouse from "@/pages/Warehouse.jsx";
import Contact from "@/pages/Contact.jsx";
import Features from "@/pages/Features.jsx";
import ScrollToTop from "@/components/ScrollToTop.jsx";

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
