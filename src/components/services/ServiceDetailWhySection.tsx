import { splitWhyTitle } from "./ServiceDetailWhyChooseSection";

const HIGHLIGHT_DEFAULT = "font-handwritten text-4xl md:text-5xl text-primary pen-underline";

interface ServiceDetailWhySectionProps {
  /** Dynamic Title - data.ts se aayega (e.g. "Why Remortgage?", "Why Choose Residential Mortgage?", "Why Buy to Let Mortgage?" etc.) */
  title: string;
  
  /** Content as array of paragraphs (highly flexible for all sub-services) */
  content: string[];
  
  /** Optional image specific to that sub-service */
  image?: string;
  
  /** Optional highlight class override */
  highlightClassName?: string;
}

const ServiceDetailWhySection = ({
  title,
  content,
  image,
  highlightClassName = HIGHLIGHT_DEFAULT,
}: ServiceDetailWhySectionProps) => {
  
  const { prefix, highlight } = splitWhyTitle(title);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Dynamic Title with same highlight + pen-underline style */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center md:text-left">
            {prefix && <span className="text-foreground">{prefix}</span>}
            <span className={highlightClassName}>{highlight}</span>
          </h2>

          {/* Dynamic Content - Multiple paragraphs (best for all sub-services) */}
          <div className="space-y-6 text-[17px] leading-relaxed text-muted-foreground">
            {content.map((paragraph, index) => (
              <p key={index} className="mb-0">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Optional Dynamic Image */}
          {image && (
            <div className="mt-14 rounded-3xl overflow-hidden shadow-2xl border border-border/50">
              <img
                src={image}
                alt={title.replace(/\?$/, "")}
                className="w-full object-cover aspect-[16/9]"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailWhySection;