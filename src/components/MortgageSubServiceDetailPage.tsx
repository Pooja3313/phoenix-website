import { useEffect } from "react";
import type { ServiceItem } from "@/data/mortgageData";
import FaqSection from "@/components/FaqSection";
// import ServiceDetailFeaturesSection from "@/components/services/ServiceDetailFeaturesSection";
import ServiceDetailHeroSection from "@/components/services/ServiceDetailHeroSection";
import ServiceDetailWhyChooseSection from "@/components/services/ServiceDetailWhyChooseSection";
import ServiceDetailBenefitsSection from "@/components/services/ServiceDetailBenefitsSection";

// import MortgageWhatWeOfferSection from "@/components/services/MortgageWhatWeOfferSection";
import MortgageDetailCTASection from "./services/MortgageDetailCTASection";
import MortgageDetailWhatWeOfferSection from "./services/MortgageDetaillWhatWeOfferSection";

interface MortgageSubServiceDetailPageProps {
  service: ServiceItem;
}

const MortgageSubServiceDetailPage = ({
  service,
}: MortgageSubServiceDetailPageProps) => {
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
            whyChooseImage={service.whyChooseImage}
          />
        ) : null}
        <ServiceDetailBenefitsSection
          title={service.benefitsTitle}
          subtitle={service.heroDescription}
          benefitItems={service.benefitItems}
          image={service.benefitsImage}
          slug={service.slug} 
        />

        {/* <ServiceDetailFeaturesSection title={service.title} features={service.features} /> */}

        {service.features && service.features.length > 0 ? (
          <MortgageDetailWhatWeOfferSection service={service} />
        ) : null}

        {service.faqs && service.faqs.length > 0 ? (
          <FaqSection faqs={service.faqs} />
        ) : null}

        {service.ctaTitle || service.ctaDescription ? (
          <MortgageDetailCTASection
            ctaTitle={service.ctaTitle}
            ctaDescription={service.ctaDescription}
          />
        ) : null}
      </main>
    </div>
  );
};

export default MortgageSubServiceDetailPage;
