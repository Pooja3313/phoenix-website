'use client';

import React from "react";
import { ArrowRight, Calculator } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface StampDutyCalculatorProps {
  heading?: string;
  description?: string;
  boxTitle?: string;
  boxDescription?: string;
  buttonText?: string;
  onCalculate?: () => void;
}

const StampDutyCalculatorSection: React.FC<StampDutyCalculatorProps> = ({
  heading,
  description,
  boxTitle,
  boxDescription,
  buttonText = "Calculate Now",
  onCalculate = () => {},
}) => {
  if (!boxTitle || !boxDescription) {
    return null;
  }

  const sectionHeading = heading || "Calculate Your Stamp Duty Instantly";
  const headingParts = sectionHeading.split(/(Stamp Duty)/i);

  return (
    <section className="bg-gradient-to-br from-primary/5 via-phoenix-green-light/20 to-background py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-2 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center justify-items-center lg:justify-items-stretch">
          <AnimatedSection
            className="lg:col-span-7 relative w-full max-w-3xl md:max-w-5xl lg:max-w-none text-center lg:text-left"
            animation="animate-fade-left"
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 text-primary/10 text-[110px] sm:text-[130px] font-bold pointer-events-none select-none">
              %
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight relative z-10">
              {headingParts.map((part, index) =>
                /stamp duty/i.test(part) ? (
                  <span
                    key={`${part}-${index}`}
                    className="font-handwritten text-primary hand-underline1"
                  >
                    {part}
                  </span>
                ) : (
                  <span key={`${part}-${index}`}>{part}</span>
                ),
              )}
            </h2>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {description}
            </p>
          </AnimatedSection>

          <AnimatedSection
            className="lg:col-span-5 w-full flex justify-center lg:justify-end"
            animation="animate-fade-right"
            delay={0.2}
          >
            <div className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-lg w-full max-w-md md:max-w-xl lg:max-w-none min-h-[320px] md:min-h-[360px] flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">
                  {boxTitle}
                </h3>
              </div>

              <p className="text-muted-foreground text-md 2xl:text-lg leading-relaxed">
                {boxDescription}
              </p>

              <button
                onClick={onCalculate}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-accent hover:bg-phoenix-orange-dark text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {buttonText}
                <ArrowRight size={18} />
              </button>

             
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default StampDutyCalculatorSection;