// import { Shield } from "lucide-react";

// interface ServiceDetailWhyChooseSectionProps {
//   whyTitle: string;
//   whyContent: string[];
//   /** Override highlight span classes (default: primary orange text + green pen-underline image) */
//   highlightClassName?: string;
// }

// /** Split title after "for ÃÂÃÂ¢ÃÂÃÂÃÂÃÂ¦" so the full service name is highlighted (not only the last word). */
// function splitWhyTitle(whyTitle: string): { prefix: string; highlight: string } {
//   if (whyTitle.startsWith("Why Plan for ")) {
//     return {
//       prefix: "Why Plan for ",
//       highlight: whyTitle.slice("Why Plan for ".length),
//     };
//   }
//   if (whyTitle.startsWith("Why Arrange a ")) {
//     return {
//       prefix: "Why Arrange a ",
//       highlight: whyTitle.slice("Why Arrange a ".length),
//     };
//   }
//   const yourIdx = whyTitle.indexOf(" for your ");
//   if (yourIdx !== -1) {
//     return {
//       prefix: whyTitle.slice(0, yourIdx + " for your ".length),
//       highlight: whyTitle.slice(yourIdx + " for your ".length),
//     };
//   }
//   const forIdx = whyTitle.indexOf(" for ");
//   if (forIdx !== -1) {
//     return {
//       prefix: whyTitle.slice(0, forIdx + " for ".length),
//       highlight: whyTitle.slice(forIdx + " for ".length),
//     };
//   }
//   return { prefix: "", highlight: whyTitle };
// }

// const HIGHLIGHT_DEFAULT =
//   "font-handwritten text-4xl md:text-5xl text-primary pen-underline";

// const ServiceDetailWhyChooseSection = ({
//   whyTitle,
//   whyContent,
//   highlightClassName = HIGHLIGHT_DEFAULT,
// }: ServiceDetailWhyChooseSectionProps) => {
//   const { prefix, highlight } = splitWhyTitle(whyTitle);

//   return (
//     <section className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
//               {prefix ? <span>{prefix}</span> : null}
//               <span className={highlightClassName}>
//                 {highlight}
//               </span>
//             </h2>
//             {whyContent.map((para, i) => (
//               <p key={i} className="text-muted-foreground leading-relaxed mb-4">
//                 {para}
//               </p>
//             ))}
//           </div>
//           <div className="relative">
//             <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-dashed border-border flex flex-col items-center justify-center gap-4 overflow-hidden group">
//               <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
//                 <Shield size={40} className="text-primary/40" />
//               </div>
//               <p className="text-muted-foreground/50 text-sm font-medium">
//                 Image Coming Soon
//               </p>
//               <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary/20 rounded-tl-2xl" />
//               <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-accent/20 rounded-br-2xl" />
//             </div>
//             <div
//               className="absolute -bottom-4 -right-4 px-4 py-2 bg-accent text-accent-foreground rounded-xl text-sm font-bold shadow-lg animate-bounce"
//               style={{ animationDuration: "3s" }}
//             >
//               Expert Advice
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceDetailWhyChooseSection;

import { Shield } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface ServiceDetailWhyChooseSectionProps {
  whyTitle: string;
  whyContent: string[];
  whyChooseImage?: string;
  highlightClassName?: string;
}

function splitWhyTitle(whyTitle: string): { prefix: string; highlight: string } {
  if (whyTitle.startsWith("Why Choose ")) {
    return { prefix: "Why Choose ", highlight: whyTitle.slice("Why Choose ".length) };
  }
  if (whyTitle.startsWith("Why have ")) {
    return { prefix: "Why have ", highlight: whyTitle.slice("Why have ".length) };
  }
   if (whyTitle.startsWith("Why Consider")) {
    return { prefix: "Why Consider", highlight: whyTitle.slice("Why Consider".length) };
  }
   if (whyTitle.startsWith("Why")) {
    return { prefix: "Why", highlight: whyTitle.slice("Why".length) };
  }
   
  const yourIdx = whyTitle.indexOf(" to ");
  if (yourIdx !== -1) {
    return { 
      prefix: whyTitle.slice(0, yourIdx + " to ".length), 
      highlight: whyTitle.slice(yourIdx + " to ".length) 
    };
  }
  return { prefix: "", highlight: whyTitle };
}

const HIGHLIGHT_DEFAULT = "font-handwritten text-4xl md:text-5xl text-primary pen-underline2";

const ServiceDetailWhyChooseSection = ({
  whyTitle,
  whyContent,
  whyChooseImage,
  highlightClassName = HIGHLIGHT_DEFAULT,
}: ServiceDetailWhyChooseSectionProps) => {
  const { prefix, highlight } = splitWhyTitle(whyTitle);

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title - Centered on all screens */}
          <AnimatedSection animation="animate-fade-scale">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight text-center">
              {prefix && <span className="block md:inline">{prefix}</span>}
              <span className={highlightClassName}>{highlight}</span>
            </h2>
          </AnimatedSection>

          {/* Content Paragraphs */}
          <AnimatedSection delay={0.15}>
            <div className="space-y-6 text-muted-foreground text-[17px] leading-relaxed">
              {whyContent.map((para, i) => (
                <p
                  key={i}
                  className="xs:text-justify sm:text-justify md:text-justify lg:text-center"
                >
                  {para}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailWhyChooseSection;