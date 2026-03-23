import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

interface ServiceDetailHeroSectionProps {
  heroSubtitle: string;
  title: string;
  heroDescription: string;
  /** Override handwritten title colour (default: green accent to match category badges) */
  titleClassName?: string;
}

const DEFAULT_TITLE_CLASS =
  "font-handwritten text-5xl md:text-6xl lg:text-7xl text-accent highlighter-mark";

const ServiceDetailHeroSection = ({
  heroSubtitle,
  title,
  heroDescription,
  titleClassName = DEFAULT_TITLE_CLASS,
}: ServiceDetailHeroSectionProps) => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-phoenix-green-light/30 to-background overflow-hidden">
      <div className="absolute top-10 right-10 text-primary/[0.04] text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">
        {"\u00A3"}
      </div>
      <div
        className="absolute top-20 left-[10%] w-3 h-3 rounded-full bg-accent/20 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-20 right-[20%] w-4 h-4 rounded-full bg-primary/15 animate-bounce"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-[5%] w-2 h-2 rounded-full bg-phoenix-gold/30 animate-bounce"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-accent text-xs font-semibold uppercase tracking-widest mb-4">
          {heroSubtitle}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl">
          <span className={titleClassName}>{title}</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          {heroDescription}
        </p>
        <NavLink
          to="/contact"
          className="inline-flex items-center gap-2 mt-8 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Get Your Free Quote <ArrowRight size={18} />
        </NavLink>
      </div>
    </section>
  );
};

export default ServiceDetailHeroSection;

