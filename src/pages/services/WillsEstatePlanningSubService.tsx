import { Navigate, useParams } from "react-router-dom";
import { willsEstatePlanningServices } from "@/data/willsEstatePlanningData";
import WillsEstatePlanningSubServiceDetailPage from "@/components/WillsEstatePlanningSubServiceDetailPage";

const WillsEstatePlanningSubService = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = willsEstatePlanningServices.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/wills-estate-planning" replace />;

  return <WillsEstatePlanningSubServiceDetailPage service={service} />;
};

export default WillsEstatePlanningSubService;

