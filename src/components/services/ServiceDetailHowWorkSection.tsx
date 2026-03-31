import { Shield } from "lucide-react";

interface ServiceDetailWhyChooseSectionProps {
  whyTitle: string;
  whyContent: string[];
  whyChooseImage?: string;
  highlightClassName?: string;
}

// Dynamic function - extracts the "main word/phrase" from any title pattern
function splitWhyTitle(whyTitle: string): {
  prefix: string;
  highlight: string;
  suffix: string;
} {
  // List of common prefixes to remove (jo pehle aate hain)
  const prefixes = ["How does "];

  // List of common suffixes to remove (jo baad mein aate hain)
  const suffixes = ["?", " Work?", " work?"];

  let remaining = whyTitle;
  let prefix = "";

  // Check and remove prefix
  for (const p of prefixes) {
    if (remaining.startsWith(p)) {
      prefix = p;
      remaining = remaining.slice(p.length);
      break;
    }
  }

  // Check and remove suffix
  let suffix = "";
  for (const s of suffixes) {
    if (remaining.endsWith(s)) {
      suffix = s;
      remaining = remaining.slice(0, -s.length);
      break;
    }
  }

  // ?? Trim spaces from highlight (important correction!)
  remaining = remaining.trim();

  // Agar koi prefix nahi mila, toh pehla word prefix ho sakta hai?
  if (!prefix && !suffix) {
    const words = remaining.split(" ");
    if (words.length > 2) {
      return { prefix: "", highlight: whyTitle, suffix: "" };
    }
  }

  return {
    prefix: prefix,
    highlight: remaining,
    suffix: suffix,
  };
}

const HIGHLIGHT_DEFAULT =
  "font-handwritten text-4xl md:text-5xl text-primary pen-underline2";

const ServiceDetailHowWorkSection = ({
  whyTitle,
  whyContent,
  whyChooseImage,
  highlightClassName = HIGHLIGHT_DEFAULT,
}: ServiceDetailWhyChooseSectionProps) => {
  const { prefix, highlight, suffix } = splitWhyTitle(whyTitle);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title - Centered on all screens */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight text-center">
            {prefix && <span>{prefix}</span>}
            <span className={highlightClassName}>{highlight}</span>
            {suffix && <span>{suffix}</span>}
          </h2>

          {/* Content Paragraphs */}
          <div className="space-y-6 text-muted-foreground text-[17px] leading-relaxed">
            {whyContent.map((para, i) => (
              <p
                key={i}
                className="text-justify md:text-justify lg:text-center"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailHowWorkSection;
