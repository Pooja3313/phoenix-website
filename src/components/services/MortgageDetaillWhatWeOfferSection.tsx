import { CheckCircle, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ServiceItem } from "@/data/mortgageData";

interface MortgageDetailWhatWeOfferSectionProps {
  service: ServiceItem;
}

const MortgageDetailWhatWeOfferSection = ({ service }: MortgageDetailWhatWeOfferSectionProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
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
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {service.features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl overflow-hidden hover:border-accent/30 block ${
                visible ? "animate-float-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.12}s` }}
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
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {feature.description}
              </p>
              <div className="flex items-center gap-1 mt-4 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MortgageDetailWhatWeOfferSection;

