import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--phoenix-gold)/0.2),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to <span className="font-handwritten text-4xl md:text-5xl">Secure</span> Your Future?
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
          Get in touch today for a free, no-obligation consultation with one of our expert financial advisors.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="border-2 border-transparent bg-primary-foreground text-primary font-semibold text-lg px-8 py-6 shadow-xl transition-colors duration-300 hover:bg-phoenix-green-light hover:border-phoenix-green hover:text-phoenix-green group"
          >
            Book Free Consultation
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button
            size="lg"
            className="border-2 border-transparent bg-primary-foreground text-primary font-semibold text-lg px-8 py-6 shadow-xl transition-colors duration-300 hover:bg-phoenix-green-light hover:border-phoenix-green hover:text-phoenix-green"
          >
            <Phone className="mr-2" size={20} />
            Call Us Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
