import { CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Feature {
  title: string;
  description: string;
}

interface ServiceFeaturesGridProps {
  title: string;
  features: Feature[];
}

const ServiceFeaturesGrid = ({ title, features }: ServiceFeaturesGridProps) => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-phoenix-gray">
      <div className="container max-w-6xl mx-auto px-4">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-script text-3xl md:text-4xl text-foreground ">
            Our {title} Solutions
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-card rounded-xl p-6 pt-8 border border-border shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                visible
                  ? "animate-fade-in-up opacity-100"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-xl" />

              {/* Number badge */}
              <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-md">
                {index + 1}
              </div>

              <div className="flex items-start gap-3 mb-3 mt-2">
                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  {feature.title}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed pl-8">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeaturesGrid;
