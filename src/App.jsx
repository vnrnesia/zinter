import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Header from "@/components/layout/Header.jsx";
import Footer from "@/components/layout/Footer.jsx";
import ToolbarMobile from "@/components/layout/ToolbarMobile.jsx";
import ScrollToTop from "@/components/ScrollToTop.jsx";
import PageTransition from "@/components/PageTransition.jsx";
import PageLoader from "@/components/PageLoader.jsx";

import Home from "@/pages/Home.jsx";
const ChinaDelivery = lazy(() => import("@/pages/ChinaDelivery.jsx"));
const EuropeDelivery = lazy(() => import("@/pages/EuropeDelivery.jsx"));
const Payment = lazy(() => import("@/pages/Payment.jsx"));
const Warehouse = lazy(() => import("@/pages/Warehouse.jsx"));
const Contact = lazy(() => import("@/pages/Contact.jsx"));
const Features = lazy(() => import("@/pages/Features.jsx"));

function App() {
  return (
    <Router>
      <PageTransition>
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
      </PageTransition>
    </Router>
  );
}

export default App;
