// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { useScrollReveal } from "@/hooks/useScrollReveal";
// import type { FAQ } from "@/data/protectionData1";

// interface ServiceFAQsProps {
//   faqs: FAQ[];
// }

// const ServiceFAQs = ({ faqs }: ServiceFAQsProps) => {
//   const { ref, visible } = useScrollReveal();

//   return (
//     <section ref={ref} className="py-16 md:py-24 bg-accent/50">
//       <div className="container max-w-3xl mx-auto px-4">
//         <div
//           className={`text-center mb-12 transition-all duration-700 ${
//             visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
//           }`}
//         >
//           <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
//             FAQs
//           </p>
//           <h2 className="font-script text-3xl md:text-4xl text-foreground">
//             Frequently Asked Questions
//           </h2>
//         </div>

//         <div
//           className={`transition-all duration-700 delay-200 ${
//             visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
//           }`}
//         >
//           <Accordion type="single" collapsible className="space-y-3">
//             {faqs.map((faq, index) => (
//               <AccordionItem
//                 key={index}
//                 value={`faq-${index}`}
//                 className="bg-card rounded-xl border border-border px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
//               >
//                 <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary hover:no-underline py-5">
//                   {faq.question}
//                 </AccordionTrigger>
//                 <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
//                   {faq.answer}
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceFAQs;


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";
import type { FAQ } from "@/data/protectionData1";

interface ServiceFAQsProps {
  faqs: FAQ[];
}

const ServiceFAQs = ({ faqs }: ServiceFAQsProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection className="text-center mb-12" animation="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked{" "}
            <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">
              Questions
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="animate-fade-in-up" delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border rounded-xl overflow-hidden"
              >

                {/* Question */}
                <AccordionTrigger
                  className="px-6 py-4 text-left font-medium text-foreground hover:bg-primary/5 transition-colors no-underline hover:no-underline"
                >
                  {faq.question}
                </AccordionTrigger>

                {/* Answer */}
                <AccordionContent className="px-6 pb-4 text-muted-foreground text-sm leading-relaxed animate-fade-in">
                  {faq.answer}
                </AccordionContent>

              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default ServiceFAQs;