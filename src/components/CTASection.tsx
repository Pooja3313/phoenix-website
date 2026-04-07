import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--phoenix-gold)/0.2),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-right"
        style={{ animationDelay: "0.1s" }}>
          <AnimatedSection delay={0.1}>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 animate-fade-right" style={{ animationDelay: "0.1s" }}>
          Ready to <span className="font-handwritten text-4xl md:text-5xl">Secure</span> Your Future?
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg animate-fade-in-up"  style={{ animationDelay: "0.2s" }}>
          Get in touch today for a free, no-obligation consultation with one of our expert financial advisors.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-scale" style={{ animationDelay: "0.65s" }}>
          {/* Book Free Discovery Call - Navigates to Contact Page */}
          <Button
            asChild
            size="lg"
            className="border-2 border-transparent bg-primary-foreground text-primary font-semibold text-lg px-8 py-6 shadow-xl transition-colors duration-300 hover:bg-phoenix-green-light hover:border-phoenix-green hover:text-phoenix-green group"
          >
            <NavLink to="/contact">
              Book a Free Discovery Call
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </NavLink>
          </Button>

          {/* Call Us Now - Opens Phone Dialer */}
          <Button
            asChild
            size="lg"
            className="border-2 border-transparent bg-primary-foreground text-primary font-semibold text-lg px-8 py-6 shadow-xl transition-colors duration-300 hover:bg-phoenix-green-light hover:border-phoenix-green hover:text-phoenix-green"
          >
            <NavLink to="tel:+919876543210">   {/* ? Change this number to your actual number */}
              <Phone className="mr-2" size={20} />
              Call Us Now
            </NavLink>
          </Button>
        </div>
      </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;