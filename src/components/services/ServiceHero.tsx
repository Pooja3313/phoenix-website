import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ServiceHeroProps {
  subtitle: string;
  title: string;
  description: string;
}

const ServiceHero = ({ subtitle, title, description }: ServiceHeroProps) => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-phoenix-orange-glow py-20 md:py-28 lg:py-32"
    >
      {/* Floating � symbols */}
      <span className="absolute top-12 left-10 text-8xl font-bold text-primary-foreground/10 animate-float-drift select-none pointer-events-none">
        £
      </span>
      <span className="absolute bottom-16 right-12 text-9xl font-bold text-primary-foreground/[0.06] animate-float-drift-reverse select-none pointer-events-none">
        £
      </span>
      <span className="absolute top-1/2 right-1/4 text-7xl font-bold text-primary-foreground/[0.05] animate-float-drift select-none pointer-events-none delay-300">
        £
      </span>

      {/* Accent dots */}
      <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-secondary animate-pulse-dot" />
      <div className="absolute bottom-24 left-1/4 w-2 h-2 rounded-full bg-phoenix-orange-light animate-pulse-dot delay-200" />
      <div className="absolute top-1/3 left-16 w-2.5 h-2.5 rounded-full bg-secondary/60 animate-pulse-dot delay-400" />

      <div className="container relative z-10 max-w-4xl mx-auto text-center px-4">
        <div
          className={`transition-all duration-700 ${
            visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block mb-4 px-5 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground text-sm font-medium tracking-wide backdrop-blur-sm border border-primary-foreground/10">
            {subtitle}
          </span>
        </div>

        <h1
          className={`font-script text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 transition-all duration-700 delay-100 ${
            visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          {title}
        </h1>

        <p
          className={`text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${
            visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          {description}
        </p>

        <div
          className={`transition-all duration-700 delay-300 ${
            visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
