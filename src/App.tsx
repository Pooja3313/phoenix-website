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
import NotFound from "./pages/NotFound";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ComplaintsProcedure from "./pages/ComplaintsProcedure";
import FairTreatment from "./pages/FairTreatment";
import NetworkSelfEmployedAdviser from "./pages/NetworkSelfEmployedAdviser";
import NetworkIntroducer from "./pages/NetworkIntroducer";
import NetworkAppointedRepresentative from "./pages/NetworkAppointedRepresentative";


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
            <Route path="/careers" element={<Careers />} />
            <Route path="/refer-a-friend" element={<ReferAFriend />} />

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
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
