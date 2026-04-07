import AnimatedSection from "@/components/AnimatedSection";
import type { Consideration } from "@/data/protectionData1";

interface WhichOptionSectionProps {
  considerations: Consideration[];
}

const WhichOptionSection = ({ considerations }: WhichOptionSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14" animation="animate-fade-in-up">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Key Considerations
          </p>
          <h2 className="font-script text-3xl md:text-4xl text-foreground">
            Which Option Best Meets Your Needs?
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {considerations.map((item, index) => (
            <AnimatedSection
              key={index}
              animation="animate-fade-in-up"
              delay={(index + 1) * 0.1}
            >
              <div className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <span className="text-primary font-bold text-sm">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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

export default WhichOptionSection;
