import { useParams, Navigate } from "react-router-dom";

import {  personalProtectionServices,
  businessProtectionServices,
  homeInsuranceServices,} from "../../data/protectionData"
import ServiceDetailPage from "@/components/ProtectionSubServiceDetailPage";

const ProtectionSubService = () => {
  const { slug } = useParams<{ slug: string }>();
   
  const allProtectionServices = [
    ...personalProtectionServices,
    ...businessProtectionServices,
    ...homeInsuranceServices,
  ];
  const service = allProtectionServices.find(s => s.slug === slug);
  
  if (!service) return <Navigate to="/protection" replace />;
  
  return <ServiceDetailPage service={service} />;
};

export default ProtectionSubService;
