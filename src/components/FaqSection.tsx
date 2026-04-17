import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  faqs: FaqItem[];
}

const FaqSection = ({ title = "Frequently Asked Questions", faqs }: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {title.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">
              {title.split(" ").slice(2).join(" ") || "Questions"}
            </span>
          </h2>
        </AnimatedSection>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AnimatedSection
              key={i}
              delay={0.05 + i * 0.3}
              
            >
              <div className="border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-foreground font-medium hover:bg-primary/5 transition-colors"
                >
                  {faq.question}
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-4 text-muted-foreground text-sm leading-relaxed animate-float-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

