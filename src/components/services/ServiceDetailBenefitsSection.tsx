// components/services/ServiceDetailBenefitsSection.tsx
import React from "react";
import * as LucideIcons from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

interface ServiceDetailBenefitsSectionProps {
  title?: string;
  subtitle?: string;
  benefitItems: BenefitItem[];
  image?: string;
  layout?: "default" | "split";
  ctaText?: string;
  highlightClassName?: string;
}

// Title Split Logic
function splitTitle(title: string): { prefix: string; highlight: string } {
  if (!title) return { prefix: "", highlight: "" };

  if (title.startsWith("What are Benefits of")) {
    return {
      prefix: "What are Benefits of ",
      highlight: title.replace("What are Benefits of ", ""),
    };
  }

  const ofIndex = title.indexOf(" of ");
  if (ofIndex !== -1) {
    return {
      prefix: title.slice(0, ofIndex + 4),
      highlight: title.slice(ofIndex + 4),
    };
  }

  return { prefix: "", highlight: title };
}

const HIGHLIGHT_DEFAULT =
  "font-handwritten text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-primary hand-underline1";

const ServiceDetailBenefitsSection: React.FC<
  ServiceDetailBenefitsSectionProps
> = ({
  title = "",
  subtitle,
  benefitItems,
  image,
  layout = "default",
  ctaText = "Contact Us",
  highlightClassName = HIGHLIGHT_DEFAULT,
}) => {
  const { prefix, highlight } = splitTitle(title);

  const getIconComponent = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon || LucideIcons.Shield;
  };

  // ==================== SPLIT LAYOUT (Recommended for Life Cover, Critical Illness, etc.) ====================
  if (layout === "split") {
    return (
      <section className="bg-gradient-to-br from-primary/5 via-phoenix-green-light/20 to-background py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-8xl">
          {/* Title Section */}
          <AnimatedSection animation="animate-fade-scale">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-foreground leading-tight">
                {prefix && <span className="block md:inline">{prefix}</span>}
                <span className={highlightClassName}>{highlight}</span>
              </h2>
              {subtitle && (
                <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
                  {subtitle}
                </p>
              )}
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Benefits - Visible on lg+ only in left position */}
            <AnimatedSection
              className="lg:col-span-4 space-y-8 md:space-y-10 order-2 lg:order-1"
              animation="animate-fade-left"
            >
              {benefitItems.slice(0, Math.ceil(benefitItems.length / 2)).map((item, index) => {
                const IconComponent = getIconComponent(item.icon);
                return (
                  <div key={index} className="flex gap-4 sm:gap-5 group">
                    <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2.5 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-[15px] sm:text-[15.5px] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </AnimatedSection>

            {/* ==================== CENTER IMAGE ==================== */}
            <AnimatedSection
              className="lg:col-span-4 flex justify-center py-6 md:py-8 lg:py-0 order-1 lg:order-2"
              animation="animate-fade-rotate"
            >
              <div className="relative">
                <div
                  className="w-72 sm:w-80 md:w-[420px] lg:w-80 
                             h-[340px] sm:h-[380px] md:h-[360px] lg:h-[420px]
                             bg-gradient-to-br from-primary to-primary/90 
                             rounded-[2.5rem] sm:rounded-[3rem] md:rounded-[3.25rem] lg:rounded-[4rem] 
                             flex items-center justify-center overflow-hidden shadow-2xl mx-auto"
                >
                  <img
                    src={image || "/images/protection/life-cover-family.jpg"}
                    alt="Benefits Illustration"
                    className="w-[290px] sm:w-[290px] md:w-[400px] lg:w-[310px]  xl:w-[610px]
                               h-[290px] sm:h-[310px] md:h-[330px] lg:h-[418px] 
                               rounded-3xl object-cover shadow-xl" 
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl rotate-12 hidden sm:block" />
                <div className="absolute -bottom-8 -left-8 w-14 h-14 sm:w-16 sm:h-16 bg-white/30 backdrop-blur-sm rounded-2xl -rotate-12 hidden sm:block" />
              </div>
            </AnimatedSection>

            {/* Right Benefits */}
            <AnimatedSection
              className="lg:col-span-4 space-y-8 md:space-y-10 order-3 lg:order-3"
              animation="animate-fade-right"
            >
              {benefitItems.slice(Math.ceil(benefitItems.length / 2)).map((item, index) => {
                const IconComponent = getIconComponent(item.icon);
                return (
                  <div key={index} className="flex gap-4 sm:gap-5 group">
                    <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2.5 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-[15px] sm:text-[15.5px] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </AnimatedSection>
          </div>

          {/* CTA Button */}
          <AnimatedSection delay={0.25} animation="animate-fade-scale">
            <div className="flex justify-center mt-12 md:mt-16">
              <a
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 sm:px-10 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 group text-base sm:text-lg"
              >
                {ctaText}
                <LucideIcons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  // ==================== DEFAULT LAYOUT (Fallback) ====================
  return (
    <section className="bg-gradient-to-br from-primary/5 via-phoenix-green-light/20 to-background py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <AnimatedSection animation="animate-fade-scale">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              {prefix && <span className="block md:inline">{prefix}</span>}
              <span className={highlightClassName}>{highlight}</span>
            </h2>
            {subtitle && (
              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Benefits List - Left Side */}
          <AnimatedSection
            className="space-y-10 md:space-y-12 order-2 lg:order-1"
            animation="animate-fade-left"
          >
            {benefitItems.map((item, index) => {
              const IconComponent = getIconComponent(item.icon);
              return (
                <div key={index} className="flex gap-5 sm:gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-[15px] sm:text-[15.8px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </AnimatedSection>

          {/* Image - Right Side */}
          <AnimatedSection
            className="relative flex justify-center pt-4 lg:mt-8 md:pt-8 order-1 lg:order-2"
            animation="animate-fade-right"
          >
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              <img
                src={
                  image ||
                  "https://images.unsplash.com/photo-1556155092-490a1ba16284"
                }
                alt="Benefits"
                className="w-full rounded-3xl shadow-2xl object-cover 
                           h-auto aspect-[4/3] sm:aspect-[5/4] md:aspect-[16/10] 
                           lg:aspect-[16/9] xl:aspect-[16/9] min-h-[280px] 
                           sm:min-h-[340px] md:min-h-[400px] 
                           lg:min-h-[380px] xl:min-h-[360px]"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailBenefitsSection;