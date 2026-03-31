import { useEffect } from "react";
import type { ServiceItem } from "@/data/commercialLendingData";
import ServiceDetailCTASection from "@/components/services/ServiceDetailCTASection";
import ServiceDetailFeaturesSection from "@/components/services/ServiceDetailFeaturesSection";
import ServiceDetailHeroSection from "@/components/services/ServiceDetailHeroSection";
import ServiceDetailWhyChooseSection from "@/components/services/ServiceDetailWhyChooseSection";
import CommercialDetailWhatWeOfferSection from "@/components/services/CommercialDetailWhatWeOfferSection";
import ServiceDetailBenefitsSection from "./services/ServiceDetailBenefitsSection";
interface CommercialLendingSubServiceDetailPageProps {
  service: ServiceItem;
}

const CommercialLendingSubServiceDetailPage = ({
  service,
}: CommercialLendingSubServiceDetailPageProps) => {
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
          <ServiceDetailWhyChooseSection whyTitle={service.whyTitle} whyContent={service.whyContent} />
        ) : null}

        {service.benefitItems && service.benefitItems.length > 0 ? (
          <ServiceDetailBenefitsSection
            title={service.benefitsTitle}
            subtitle={service.benefitSubtitle}
            benefitItems={service.benefitItems}
            image={service.benefitsImage}
           
          />
        ) : null}

        {service.features && service.features.length > 0 ? (
          <CommercialDetailWhatWeOfferSection service={service} />
        ) : null}

        {service.ctaTitle || service.ctaDescription ? (
          <ServiceDetailCTASection ctaTitle={service.ctaTitle} ctaDescription={service.ctaDescription} />
        ) : null}
      </main>
    </div>
  );
};

export default CommercialLendingSubServiceDetailPage;

