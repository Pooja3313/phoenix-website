import { Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface WhyChooseSectionProps {
  title: string;
  content: string[];
  imageSrc: string;
}

const WhyChooseSection = ({ title, content, imageSrc = "/placeholder.svg"  }: WhyChooseSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection animation="animate-slide-in-left">
            <h2 className="font-script text-3xl md:text-4xl text-foreground mb-8 leading-snug">
              {title}
            </h2>

            {content.map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={0.2} animation="animate-slide-in-right">
            <div className="relative flex justify-center">
              
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <img
                  src={imageSrc}
                  alt="Why Choose"
                  className="w-full h-full object-cover rounded-full border-4 border-phoenix-light-orange shadow-2xl"
                />

                {/* Floating circles */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>

                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              {/* Floating badge/icon */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent/20 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-accent" />
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
