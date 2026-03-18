import { Shield } from "lucide-react";

interface ServiceDetailWhyChooseSectionProps {
  whyTitle: string;
  whyContent: string[];
}

const ServiceDetailWhyChooseSection = ({
  whyTitle,
  whyContent,
}: ServiceDetailWhyChooseSectionProps) => {
  const words = whyTitle.split(" ");
  const slugWord = words.pop() || "";
  const prefix = words.join(" ");

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              <span className="font-handwritten text-4xl md:text-5xl text-primary pen-underline">
                {whyTitle}
              </span>
            </h2>
            {whyContent.map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-dashed border-border flex flex-col items-center justify-center gap-4 overflow-hidden group">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Shield size={40} className="text-primary/40" />
              </div>
              <p className="text-muted-foreground/50 text-sm font-medium">
                Image Coming Soon
              </p>
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary/20 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-accent/20 rounded-br-2xl" />
            </div>
            <div
              className="absolute -bottom-4 -right-4 px-4 py-2 bg-accent text-accent-foreground rounded-xl text-sm font-bold shadow-lg animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              Expert Advice
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailWhyChooseSection;

