// src/router/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Gallery from "../pages/Gallery";
import FinancialAid from "../pages/FinancialAid";
import Calendar from "../pages/Calendar";
import SalonServices from "../pages/SalonServices";
import SocialUpdates from "../pages/SocialUpdates";

import ProgramDetails from "../pages/programs/ProgramDetails";

import ApplicationForm from "../pages/Apply/ApplicationForm";
import RequestTour from "../pages/Apply/RequestTour";

import MainLayout from "../layouts/MainLayout";

export default function AppRouter() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/financial-aid" element={<FinancialAid />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/salon-services" element={<SalonServices />} />
          <Route path="/social-updates" element={<SocialUpdates />} />

          {/* Courses */}
          
          <Route path="/programs/:id" element={<ProgramDetails />} />

          {/* Application / Tour */}
          <Route path="/apply/application-form" element={<ApplicationForm />} />
          <Route path="/apply/request-tour" element={<RequestTour />} />
          <Route path="/request-tour" element={<RequestTour />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
