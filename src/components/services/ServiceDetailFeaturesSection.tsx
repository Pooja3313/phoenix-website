import { CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface FeatureItem {
  title: string;
  description: string;
}

interface ServiceDetailFeaturesSectionProps {
  title: string;
  features: FeatureItem[];
}

const ServiceDetailFeaturesSection = ({
  title,
  features,
}: ServiceDetailFeaturesSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-14" delay={0.1}>
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our{" "}
            <span className="font-handwritten text-4xl md:text-5xl text-primary hand-underline1">
              {title}
            </span>{" "}
            Solutions
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.12}>
            <div
              className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl overflow-hidden cursor-pointer hover:border-primary/30 h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {index + 1}
              </div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <CheckCircle
                  size={24}
                  className="text-accent group-hover:text-accent-foreground transition-colors"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailFeaturesSection;

