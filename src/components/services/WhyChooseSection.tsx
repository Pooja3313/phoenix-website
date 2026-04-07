// import { Shield } from "lucide-react";
// import { useScrollReveal } from "@/hooks/useScrollReveal";

// interface WhyChooseSectionProps {
//   title: string;
//   content: string[];
// }

// const WhyChooseSection = ({ title, content }: WhyChooseSectionProps) => {
//   const { ref, visible } = useScrollReveal();

//   return (
//     <section ref={ref} className="py-16 md:py-24 bg-background">
//       <div className="container max-w-6xl mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left: Text */}
//           <div
//             className={`transition-all duration-700 ${
//               visible ? "animate-slide-in-left opacity-100" : "opacity-0 -translate-x-10"
//             }`}
//           >
//             <h2 className="font-script text-3xl md:text-4xl text-foreground mb-8 leading-snug">
//               {title}
//             </h2>
//             {content.map((para, i) => (
//               <p
//                 key={i}
//                 className="text-muted-foreground leading-relaxed mb-4 last:mb-0"
//               >
//                 {para}
//               </p>
//             ))}
//           </div>

//           {/* Right: Decorative placeholder */}
//           <div
//             className={`transition-all duration-700 delay-200 ${
//               visible ? "animate-slide-in-right opacity-100" : "opacity-0 translate-x-10"
//             }`}
//           >
//             <div className="relative">
//               <div className="bg-accent rounded-2xl p-8 aspect-[4/3] flex flex-col items-center justify-center border border-border relative overflow-hidden">
//                 <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
//                   <Shield className="w-8 h-8 text-primary" />
//                 </div>
//                 <p className="text-muted-foreground text-sm font-medium">
//                   Image Coming Soon
//                 </p>

//                 {/* Corner accents */}
//                 <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary/20 rounded-tl-2xl" />
//                 <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-secondary/30 rounded-br-2xl" />
//               </div>

//               {/* Floating badge */}
//               <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse-dot">
//                 Expert Advice
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseSection;
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



// import { ShieldCheck, Heart } from "lucide-react";
// import { useScrollReveal } from "@/hooks/useScrollReveal";
// import type { ReactNode } from "react";

// interface WhyChooseSectionProps {
//   title: ReactNode;
//   content: string[];
//   imageSrc?: string;
//   imageAlt?: string;
//   rightSlot?: ReactNode;
// }

// const WhyChooseSection = ({
//   title,
//   content,
//   imageSrc = "/placeholder.svg",
//   imageAlt = "Illustration",
//   rightSlot,
// }: WhyChooseSectionProps) => {
//   const { ref, visible } = useScrollReveal();
//   const descriptions = content;

//   return (
//     <section ref={ref} className="py-16 md:py-24 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
//           {/* LEFT: text (same as Protection screenshot) */}
//           <div
//             className={`transition-all duration-700 ${
//               visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
//             }`}
//           >
//             <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
//               {title}
//             </h2>
//             {descriptions.map((p, i) => (
//               <p
//                 key={i}
//                 className="text-muted-foreground font-body leading-relaxed mb-4 text-base md:text-lg"
//               >
//                 {p}
//               </p>
//             ))}
//           </div>

//           {/* RIGHT: either custom slot or default Protection-style card */}
//           <div
//             className={`transition-all duration-700 delay-200 ${
//               visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
//             }`}
//           >
//             {rightSlot ? (
//               rightSlot
//             ) : (
//               <div className="relative">
//                 <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-dashed border-border flex flex-col items-center justify-center gap-4">
//                   <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
//                     <ShieldCheck size={40} className="text-primary/40" />
//                   </div>
//                   <p className="text-muted-foreground/50 text-sm">Image Coming Soon</p>
//                 </div>
//                 <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
//                   <Heart size={32} className="text-accent" />
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseSection;