import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Header from "@/components/layout/Header.jsx";
import Footer from "@/components/layout/Footer.jsx";
import ToolbarMobile from "@/components/layout/ToolbarMobile.jsx";
import ScrollToTop from "@/components/ScrollToTop.jsx";


import Home from "@/pages/Home.jsx";

const ChinaDelivery = lazy(() => import("@/pages/ChinaDelivery.jsx"));
const EuropeDelivery = lazy(() => import("@/pages/EuropeDelivery.jsx"));
const Payment = lazy(() => import("@/pages/Payment.jsx"));
const Warehouse = lazy(() => import("@/pages/Warehouse.jsx"));
const Contact = lazy(() => import("@/pages/Contact.jsx"));
const Features = lazy(() => import("@/pages/Features.jsx"));


function PageLoader() {
  return (
    <div className="w-full h-[50vh] flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/china-delivery" element={<ChinaDelivery />} />
          <Route path="/europe-delivery" element={<EuropeDelivery />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </Suspense>

      <Footer />
      <ToolbarMobile />
    </Router>
  );
}

export default App;
