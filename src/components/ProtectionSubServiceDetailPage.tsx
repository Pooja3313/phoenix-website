import { useEffect } from "react";
import type { ServiceItem } from "@/data/protectionData";
import FaqSection from "@/components/FaqSection";
import ServiceDetailCTASection from "@/components/services/ServiceDetailCTASection";
import ServiceDetailFeaturesSection from "@/components/services/ServiceDetailFeaturesSection";
import ServiceDetailHeroSection from "@/components/services/ServiceDetailHeroSection";
import ServiceDetailWhyChooseSection from "@/components/services/ServiceDetailWhyChooseSection";

interface ProtectionSubServiceDetailPageProps {
  service: ServiceItem;
}

const ProtectionSubServiceDetailPage = ({ service }: ProtectionSubServiceDetailPageProps) => {
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
          <ServiceDetailWhyChooseSection whyTitle={service.whyTitle} whyContent={service.whyContent} whyChooseImage={service.whyChooseImage}  />
        ) : null}


        {service.features && service.features.length > 0 ? (
          <ServiceDetailFeaturesSection title={service.title} features={service.features} />
        ) : null}

        {service.faqs && service.faqs.length > 0 ? <FaqSection faqs={service.faqs} /> : null}

        {service.ctaTitle || service.ctaDescription ? (
          <ServiceDetailCTASection ctaTitle={service.ctaTitle} ctaDescription={service.ctaDescription} />
        ) : null}
      </main>
    </div>
  );
};

export default ProtectionSubServiceDetailPage;

/*
OLD INLINE SECTIONS (moved into reusable components)

- Hero                -> src/components/services/ServiceDetailHeroSection.tsx
- Why Choose          -> src/components/services/ServiceDetailWhyChooseSection.tsx
- Features / Offer    -> src/components/services/ServiceDetailFeaturesSection.tsx
- CTA                 -> src/components/services/ServiceDetailCTASection.tsx
*/
