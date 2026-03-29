import { useEffect } from "react";
import type { WillsServiceItem } from "@/data/willsEstatePlanningData";
import ServiceDetailHeroSection from "@/components/services/ServiceDetailHeroSection";
import ServiceDetailWhyChooseSection from "@/components/services/ServiceDetailWhyChooseSection";
import ServiceDetailFeaturesSection from "@/components/services/ServiceDetailFeaturesSection";
import ServiceDetailCTASection from "@/components/services/ServiceDetailCTASection";
import CommercialDetailWhatWeOfferSection from "./services/CommercialDetailWhatWeOfferSection";

interface WillsEstatePlanningSubServiceDetailPageProps {
  service: WillsServiceItem;
}

const WillsEstatePlanningSubServiceDetailPage = ({
  service,
}: WillsEstatePlanningSubServiceDetailPageProps) => {
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
          <ServiceDetailWhyChooseSection whyTitle={service.whyTitle} whyContent={service.whyContent} whyChooseImage={service.whyChooseImage} />
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

export default WillsEstatePlanningSubServiceDetailPage;

