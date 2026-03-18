import { useParams, Navigate } from "react-router-dom";
import MortgageSubServiceDetailPage from "@/components/MortgageSubServiceDetailPage";
import { mortgageServices } from "@/data/mortgageData";

const MortgageSubService = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = mortgageServices.find(s => s.slug === slug);
  
  if (!service) return <Navigate to="/mortgage" replace />;
  
  return <MortgageSubServiceDetailPage service={service} />;
};

export default MortgageSubService;
