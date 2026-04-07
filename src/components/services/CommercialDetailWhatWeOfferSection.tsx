import { Briefcase,Building2,ChevronRight,Hammer,Link2Off,Paintbrush,Calendar,RefreshCw, Rocket,Wrench,Layers,Handshake,CreditCard,Key,Repeat,Home,TrendingUp,Scale,Users,Shield,Edit3,Gift,Eye,SlidersHorizontal,Clock,Heart,} from "lucide-react";

import type { ServiceItem } from "@/data/commercialLendingData";
import AnimatedSection from "@/components/AnimatedSection";
import type { WillsServiceItem } from "@/data/willsEstatePlanningData";

type AnyServiceItem = ServiceItem | WillsServiceItem;

interface CommercialDetailWhatWeOfferSectionProps {
  service: AnyServiceItem;
}

const CommercialDetailWhatWeOfferSection = ({
  service,
}: CommercialDetailWhatWeOfferSectionProps) => {
  // Dynamic Feature Icons Map
  const featureIconMap: Record<string, React.ElementType> = {
    Hammer,
    Link2Off,
    Paintbrush,
    Building2,
    Calendar,
    RefreshCw,
    Rocket,
    Wrench,
    Layers,
    Handshake,
    CreditCard,
    Key,
    Repeat,
    Home,
    TrendingUp,
    Scale,
    Users,
    Shield,
    Edit3,
    Gift,
    Eye,
    SlidersHorizontal,
    Clock,
    Heart,
  };

  // Map features to cards with dynamic icons
  const items = service.features.map((f: any) => ({
    key: f.title,
    title: f.title,
    description: f.description,
    Icon: featureIconMap[f.icon] || Briefcase, // Dynamic Icon
  }));

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
              {service.title}
            </span>{" "}
            Solutions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {service.heroDescription}
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <AnimatedSection key={item.key} delay={index * 0.1}>
            <div
              className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl hover:border-primary/30 overflow-hidden block h-full"
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
            </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommercialDetailWhatWeOfferSection;
