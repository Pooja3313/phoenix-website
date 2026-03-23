import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import YourJourney from "./pages/YourJourney";
import JoinOurNetwork from "./pages/JoinOurNetwork";
import Careers from "./pages/Careers";
import ReferAFriend from "./pages/ReferAFriend";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ComplaintsProcedure from "./pages/ComplaintsProcedure";
import FairTreatment from "./pages/FairTreatment";
import NetworkSelfEmployedAdviser from "./pages/NetworkSelfEmployedAdviser";
import NetworkIntroducer from "./pages/NetworkIntroducer";
import NetworkAppointedRepresentative from "./pages/NetworkAppointedRepresentative";
import Newsletter from "./pages/Newsletter";
import WillsEstatePlanning from "./pages/services/WillsEstatePlanning";
import WillsEstatePlanningSubService from "./pages/services/WillsEstatePlanningSubService";
import Pensions from "./pages/services/Pensions";
import CommercialLending from "./pages/services/CommercialLending";
import Mortgage from "./pages/services/Mortgage";
import Protection from "./pages/services/Protection";
import ProtectionSubService from "./pages/services/ProtectionSubService";
import MortgageCalculator from "./pages/services/MortgageCalculator";
import MortgageSubService from "./pages/services/MortgageSubService";
import CommercialLendingSubService from "./pages/services/CommercialLendingSubService";
import FinancialOmbudsman from "./pages/FinancialOmbudsman";
// import ProtectionServicePage from "./pages/ProtectionPage";
// import ProtectionSubServiceDetailPage from "./components/ProtectionSubServiceDetailPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/your-journey" element={<YourJourney />} />
            <Route path="/join-our-network" element={<JoinOurNetwork />} />
            <Route
              path="/network/appointed-representative"
              element={<NetworkAppointedRepresentative />}
            />
            <Route path="/network/introducer" element={<NetworkIntroducer />} />
            <Route
              path="/network/self-employed-adviser"
              element={<NetworkSelfEmployedAdviser />}
            />
            <Route path="/refer-a-friend" element={<ReferAFriend />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/newsletter" element={<Newsletter />} />

            <Route path="/contact" element={<Contact />} />

            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/complaints-procedure"
              element={<ComplaintsProcedure />}
            />
            <Route path="/fair-treatment" element={<FairTreatment />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/financial-ombudsman" element={<FinancialOmbudsman />} />
            <Route path="*" element={<NotFound />} />

            {/* Service main pages */}
            <Route path="/protection" element={<Protection />} />
            <Route path="/mortgage" element={<Mortgage />} />
            <Route path="/commercial-lending" element={<CommercialLending />} />
            <Route path="/pensions" element={<Pensions />} />
            <Route
              path="/wills-estate-planning"
              element={<WillsEstatePlanning />}
            />
            <Route path="/pensions/:slug" element={<Pensions />} />

            {/* Service sub-pages (slug routes; calculator before :slug for mortgage) */}
            {/* <Route path="/services/protection/:slug" element={<ProtectionSubService />} /> */}
            {/* <Route path="/protection/:slug" element={<ProtectionSubServiceDetailPage />} /> */}
            <Route
              path="/protection/:slug"
              element={<ProtectionSubService />}
            />

            <Route
              path="/mortgage/calculator"
              element={<MortgageCalculator />}
            />
            <Route path="/mortgage/:slug" element={<MortgageSubService />} />
            <Route
              path="/commercial-lending/:slug"
              element={<CommercialLendingSubService />}
            />
            <Route
              path="/wills-estate-planning/:slug"
              element={<WillsEstatePlanningSubService />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
