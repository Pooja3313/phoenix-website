import {
  Briefcase,
  Building2,
  ChevronRight,
  Coins,
  FileText,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import type { ServiceItem } from "@/data/commercialLendingData";
import { commercialLendingServices } from "@/data/commercialLendingData";

const iconMap: Record<string, React.ElementType> = {
  "bridging-loan": Coins,
  "business-finance": Briefcase,
  "property-development-finance": Building2,
  "asset-finance": Landmark,
  "buy-to-let-finance": ShieldCheck,
  "commercial-mortgage": FileText,
};

interface CommercialDetailWhatWeOfferSectionProps {
  /**
   * If provided (detail page), show cards for this service (slug-based).
   * If omitted (main page), show the full commercial lending services list.
   */
  service?: ServiceItem;
}

const CommercialDetailWhatWeOfferSection = ({ service }: CommercialDetailWhatWeOfferSectionProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const items = service
    ? service.features.map((f) => ({
        key: f.title,
        title: f.title,
        description: f.description,
        to: undefined as string | undefined,
        Icon: Briefcase,
      }))
    : commercialLendingServices.map((s) => ({
        key: s.slug,
        title: s.title,
        description: s.heroDescription,
        to: `/commercial-lending/${s.slug}`,
        Icon: iconMap[s.slug] || Briefcase,
      }));

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
            <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">
              {service ? service.title : "Commercial"}
            </span>{" "}
            Solutions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {service?.heroDescription ??
              "Commercial financing is suitable for a wide range of individuals and organisations, whether SMEs, property developers, non-profit organisations or large corporations."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => {
            const isLink = !!item.to;
            const Card = (
              <div
                className={`group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl hover:border-primary/30 overflow-hidden block ${
                  visible ? "animate-float-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <item.Icon
                    size={26}
                    className="text-primary group-hover:text-primary-foreground transition-colors"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                {isLink ? (
                  <div className="flex items-center gap-1 mt-4 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More <ChevronRight size={16} />
                  </div>
                ) : null}
              </div>
            );

            return isLink ? (
              <NavLink key={item.key} to={item.to} className="block cursor-pointer">
                {Card}
              </NavLink>
            ) : (
              <div key={item.key}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommercialDetailWhatWeOfferSection;

