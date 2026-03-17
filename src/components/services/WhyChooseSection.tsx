import { Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface WhyChooseSectionProps {
  title: string;
  content: string[];
}

const WhyChooseSection = ({ title, content }: WhyChooseSectionProps) => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div
            className={`transition-all duration-700 ${
              visible ? "animate-slide-in-left opacity-100" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="font-script text-3xl md:text-4xl text-foreground mb-8 leading-snug">
              {title}
            </h2>
            {content.map((para, i) => (
              <p
                key={i}
                className="text-muted-foreground leading-relaxed mb-4 last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Right: Decorative placeholder */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "animate-slide-in-right opacity-100" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="bg-accent rounded-2xl p-8 aspect-[4/3] flex flex-col items-center justify-center border border-border relative overflow-hidden">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm font-medium">
                  Image Coming Soon
                </p>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary/20 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-secondary/30 rounded-br-2xl" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse-dot">
                Expert Advice
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
