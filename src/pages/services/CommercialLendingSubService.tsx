import { useParams, Navigate } from "react-router-dom";
import CommercialLendingSubServiceDetailPage from "@/components/CommercialLendingSubServiceDetailPage";
import { commercialLendingServices } from "@/data/commercialLendingData";

const CommercialLendingSubService = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = commercialLendingServices.find(s => s.slug === slug);
  
  if (!service) return <Navigate to="/commercial-lending" replace />;
  
  return <CommercialLendingSubServiceDetailPage service={service} />;
};

export default CommercialLendingSubService;
