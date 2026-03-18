import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

interface MortgageDetailCTASectionProps {
  ctaTitle: string;
  ctaDescription: string;
}

const MortgageDetailCTASection = ({ ctaTitle, ctaDescription }: MortgageDetailCTASectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-r from-accent to-phoenix-green text-accent-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{ctaTitle}</h2>
        <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
          {ctaDescription}
        </p>
        <NavLink
          to="/contact"
          className="inline-flex items-center gap-2 bg-background text-accent font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Speak to our Advisers <ArrowRight size={18} />
        </NavLink>
      </div>
    </section>
  );
};

export default MortgageDetailCTASection;
