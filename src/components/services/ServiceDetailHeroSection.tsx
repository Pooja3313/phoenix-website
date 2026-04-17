import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

interface ServiceDetailHeroSectionProps {
  heroSubtitle: string;
  title: string;
  heroDescription: string;
  heroImage?: string;
  titleClassName?: string;
}

const DEFAULT_TITLE_CLASS =
  "font-handwritten text-5xl md:text-6xl lg:text-7xl text-[#ffd700] highlighter-mark";

const ServiceDetailHeroSection = ({
  heroSubtitle,
  title,
  heroDescription,
  heroImage,
  titleClassName = DEFAULT_TITLE_CLASS,
}: ServiceDetailHeroSectionProps) => {
  return (
     <section className="relative py-20 md:py-28 overflow-hidden min-h-[600px] flex items-center">
          {/* Full Cover Background Image */}
          {/* ?? FULL COVER BACKGROUND IMAGE - Ye line sabse important hai */}
      {heroImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105" // scale-105 thoda zoom out feel deta hai
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      )}

          {/* Dark Overlay - Ensures text is readable */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/70" />

          {/* Subtle Accent Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.12),transparent_70%)]" />

          {/* Floating £ Symbol */}
          <div className="absolute top-10 right-10 text-white/10 text-[160px] md:text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">
            Â£
          </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <AnimatedSection delay={0.5}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-white text-xs font-semibold uppercase tracking-widest mb-4">
            {heroSubtitle}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl">
            <span className={titleClassName}>{title}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            {heroDescription}
          </p>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Your Free Quote <ArrowRight size={18} />
          </NavLink>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServiceDetailHeroSection;



