import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ServiceCTAProps {
  title: string;
  description: string;
}

const ServiceCTA = ({ title, description }: ServiceCTAProps) => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-r from-primary to-phoenix-orange-glow py-16 md:py-20"
    >
      {/* Floating £ */}
      <span className="absolute top-8 left-[10%] text-8xl font-bold text-primary-foreground/[0.08] animate-float-drift select-none pointer-events-none">
        £
      </span>
      <span className="absolute bottom-6 right-[15%] text-7xl font-bold text-primary-foreground/[0.06] animate-float-drift-reverse select-none pointer-events-none">
        £
      </span>

      <div
        className={`container max-w-3xl mx-auto text-center px-4 relative z-10 transition-all duration-700 ${
          visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground font-bold mb-4">
          {title}
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
        <Button
          size="lg"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
        >
          Speak to our Advisers
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
};

export default ServiceCTA;
