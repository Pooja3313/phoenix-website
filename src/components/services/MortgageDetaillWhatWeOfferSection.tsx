import { CheckCircle, ChevronRight } from "lucide-react";
import type { ServiceItem } from "@/data/mortgageData";
import AnimatedSection from "@/components/AnimatedSection";

interface MortgageDetailWhatWeOfferSectionProps {
  service: ServiceItem;
}

const MortgageDetailWhatWeOfferSection = ({ service }: MortgageDetailWhatWeOfferSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-14" delay={0.2}>
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our{" "}
            <span className="font-handwritten text-4xl md:text-5xl text-primary hand-underline1">
              {service.title}
            </span>{" "}
            Services
          </h2>
           <p className="text-muted-foreground mt-4 max-w-2xl lg:max-w-3xl 2xl:max-w-4xl 2xl:text-md mx-auto">
            {service.offerDescription}
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {service.features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.2} animation="animate-fade-scale">
            <div
              className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl overflow-hidden hover:border-accent/30 block h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <CheckCircle
                  size={26}
                  className="text-accent group-hover:text-accent-foreground transition-colors"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm xl:text-base leading-relaxed line-clamp-3">
                {feature.description}
              </p>
              <div className="flex items-center gap-1 mt-4 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More <ChevronRight size={16} />
              </div>
            </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MortgageDetailWhatWeOfferSection;

