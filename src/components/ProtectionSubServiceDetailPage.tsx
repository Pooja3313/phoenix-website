import { useEffect } from "react";
import type { ServiceItem } from "@/data/protectionData";
import FaqSection from "@/components/FaqSection";
import ServiceDetailCTASection from "@/components/services/ServiceDetailCTASection";
import ServiceDetailFeaturesSection from "@/components/services/ServiceDetailFeaturesSection";
import ServiceDetailHeroSection from "@/components/services/ServiceDetailHeroSection";
import ServiceDetailWhyChooseSection from "@/components/services/ServiceDetailWhyChooseSection";
import ServiceDetailBenefitsSection from "@/components/services/ServiceDetailBenefitsSection";
import ServiceDetailHowWorkSection from "./services/ServiceDetailHowWorkSection";

interface ProtectionSubServiceDetailPageProps {
  service: ServiceItem;
}

const ProtectionSubServiceDetailPage = ({
  service,
}: ProtectionSubServiceDetailPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service.slug]);

  return (
    <div className="min-h-screen">
      <main>
        <ServiceDetailHeroSection
          heroSubtitle={service.heroSubtitle}
          title={service.title}
          heroDescription={service.heroDescription}
          heroImage={service.heroImage}
        />

        {service.whyContent && service.whyContent.length > 0 ? (
          <ServiceDetailWhyChooseSection
            whyTitle={service.whyTitle}
            whyContent={service.whyContent}
            // whyChooseImage={service.whyChooseImage}
          />
        ) : null}

        {/* How It Works Section - Only show if data exists */}
        {service.howItWorksContent && service.howItWorksContent.length > 0 ? (
          <ServiceDetailHowWorkSection
            whyTitle={service.howItWorksTitle || "How does it Work?"}
            whyContent={service.howItWorksContent}
          />
        ) : null}

       {service.benefitItems?.length > 0 && (
  <ServiceDetailBenefitsSection
    title={service.benefitsTitle}
    subtitle={service.benefitSubtitle || ""}
    benefitItems={service.benefitItems}
    image={service.benefitsImage}
    
    // Sirf Personal Protection ke 3 services mein special split layout
    layout={
      service.category === "Personal Protection" && 
      ["life-cover", "critical-illness", "income-protection"].includes(service.slug)
        ? "split"
        : "default"
    }
    
    ctaText="Contact Us"
  />
)}

        {service.features && service.features.length > 0 ? (
          <ServiceDetailFeaturesSection
            title={service.title}
            features={service.features}
          />
        ) : null}

        {service.faqs && service.faqs.length > 0 ? (
          <FaqSection faqs={service.faqs} />
        ) : null}

        {service.ctaTitle || service.ctaDescription ? (
          <ServiceDetailCTASection
            ctaTitle={service.ctaTitle}
            ctaDescription={service.ctaDescription}
          />
        ) : null}
      </main>
    </div>
  );
};

export default ProtectionSubServiceDetailPage;


