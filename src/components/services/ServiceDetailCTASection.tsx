import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

interface ServiceDetailCTASectionProps {
  ctaTitle: string;
  ctaDescription: string;
}

const ServiceDetailCTASection = ({
  ctaTitle,
  ctaDescription,
}: ServiceDetailCTASectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-phoenix-orange-dark text-primary-foreground relative overflow-hidden">
      <div className="absolute top-1/2 left-10 -translate-y-1/2 text-primary-foreground/5 text-[120px] font-bold">
        £
      </div>
      <div className="absolute top-1/2 right-10 -translate-y-1/2 text-primary-foreground/5 text-[80px] font-bold">
        £
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{ctaTitle}</h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
          {ctaDescription}
        </p>
        <NavLink
          to="/contact"
          className="inline-flex items-center gap-2 bg-background text-primary font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Speak to our Advisers <ArrowRight size={18} />
        </NavLink>
      </div>
    </section>
  );
};

export default ServiceDetailCTASection;

