import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { ServiceItem } from "@/data/mortgageData";
import FaqSection from "@/components/FaqSection";
import ServiceDetailHeroSection from "@/components/services/ServiceDetailHeroSection";
import ServiceDetailWhyChooseSection from "@/components/services/ServiceDetailWhyChooseSection";
import ServiceDetailBenefitsSection from "@/components/services/ServiceDetailBenefitsSection";
import MortgageDetailCTASection from "./services/MortgageDetailCTASection";
import MortgageDetailWhatWeOfferSection from "./services/MortgageDetaillWhatWeOfferSection";
import StampDutyCalculatorSection from "./StampDutyCalculatorSection";

interface MortgageSubServiceDetailPageProps {
  service: ServiceItem;
}

const MortgageSubServiceDetailPage = ({
  service,
}: MortgageSubServiceDetailPageProps) => {
  const navigate = useNavigate();

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
          />
        ) : null}


        {service.stampDutyCalculator?.boxTitle &&
        service.stampDutyCalculator?.boxDescription ? (
          <StampDutyCalculatorSection
            heading={service.stampDutyCalculator.heading}
            description={service.stampDutyCalculator.description}
            boxTitle={service.stampDutyCalculator.boxTitle}
            boxDescription={service.stampDutyCalculator.boxDescription}
            buttonText={service.stampDutyCalculator.buttonText}
            onCalculate={() => navigate("/mortgage/mortgagecalculator/stamp-duty")}
          />
        ) : null}
        
        {service.features && service.features.length > 0 ? (
          <MortgageDetailWhatWeOfferSection service={service} />
        ) : null}

        {service.benefitItems && service.benefitItems.length > 0 ? (
          <ServiceDetailBenefitsSection
            title={service.benefitsTitle}
            subtitle={service.benefitSubtitle}
            benefitItems={service.benefitItems}
            image={service.benefitsImage}
           
          />
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
