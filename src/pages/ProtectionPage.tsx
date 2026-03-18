import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { allProtectionServices } from "@/data/protectionData1";
import PersonalLayout from "./PersonalLayout";
import BusinessLayout from "./BusinessLayout";
import HomeInsuranceLayout from "./HomeInsuranceLayout";

const ProtectionServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = allProtectionServices.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) return <Navigate to="/404" replace />;

  if (service.category === "Personal Protection") {
    return <PersonalLayout service={service} />;
  }

  if (service.category === "Business Protection") {
    return <BusinessLayout service={service} />;
  }

  if (service.category === "Home Insurance") {
    return <HomeInsuranceLayout service={service} />;
  }

  return <Navigate to="/404" replace />;
};

export default ProtectionServicePage;

