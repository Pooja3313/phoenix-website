import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { businessProtectionServices } from "@/data/protectionData1";
import ServiceHero from "@/components/services/ServiceHero";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ServiceFeaturesGrid from "@/components/services/ServiceFeaturesGrid";
import WhichOptionSection from "@/components/services/WhichOptionSection";
import ServiceFAQs from "@/components/services/ServicesFAQs";
import ServiceCTA from "@/components/services/ServiceCTA";

const BusinessProtectionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = businessProtectionServices.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) return <Navigate to="/404" replace />;

  return (
    <main className="min-h-screen bg-background">
      <ServiceHero
        subtitle={service.heroSubtitle}
        title={service.title}
        description={service.heroDescription}
      />
      <WhyChooseSection title={service.whyTitle} content={service.whyContent} />
      <ServiceFeaturesGrid title={service.title} features={service.features} />
      {service.considerations && service.considerations.length > 0 && (
        <WhichOptionSection considerations={service.considerations} />
      )}
      {service.faqs && service.faqs.length > 0 && (
        <ServiceFAQs faqs={service.faqs} />
      )}
      <ServiceCTA title={service.ctaTitle} description={service.ctaDescription} />
    </main>
  );
};

export default BusinessProtectionPage;
