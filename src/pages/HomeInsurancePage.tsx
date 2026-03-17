import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { homeInsuranceServices } from "@/data/protectionData1";
import { ArrowRight, Shield, Home, CheckCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HomeInsurancePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = homeInsuranceServices.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) return <Navigate to="/404" replace />;

  return (
    <main className="min-h-screen bg-background">
      {/* Hero - Unique layout with split design */}
      <HeroSection service={service} />
      <InfoCardsSection service={service} />
      <FeaturesSection service={service} />
      <ConsiderationsSection service={service} />
      <FAQSection service={service} />
      <CTASection service={service} />
    </main>
  );
};

function HeroSection({ service }: { service: (typeof homeInsuranceServices)[0] }) {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-phoenix-green-light py-20 md:py-28"
    >
      {/* Decorative house shapes */}
      <div className="absolute top-10 right-10 opacity-10">
        <Home className="w-32 h-32 text-secondary-foreground" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-5">
        <Home className="w-48 h-48 text-secondary-foreground" />
      </div>

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${
              visible ? "animate-slide-in-left opacity-100" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="inline-block mb-4 px-5 py-1.5 rounded-full bg-secondary-foreground/10 text-secondary-foreground text-sm font-medium tracking-wide">
              {service.heroSubtitle}
            </span>
            <h1 className="font-script text-4xl md:text-5xl text-secondary-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-secondary-foreground/80 text-lg leading-relaxed mb-8">
              {service.heroDescription}
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg group"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "animate-slide-in-right opacity-100" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Shield className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Comprehensive Cover</h3>
                  <p className="text-muted-foreground text-sm">Buildings & Contents</p>
                </div>
              </div>
              <div className="space-y-3">
                {["Fire & Storm Damage", "Theft Protection", "Accidental Damage", "Flood Cover"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCardsSection({ service }: { service: (typeof homeInsuranceServices)[0] }) {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-script text-3xl md:text-4xl text-foreground mb-4">
            {service.whyTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {service.whyContent.map((para, i) => (
            <div
              key={i}
              className={`bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-phoenix-green-light flex items-center justify-center mb-4">
                <span className="text-secondary font-bold">{i + 1}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">{para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection({ service }: { service: (typeof homeInsuranceServices)[0] }) {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-phoenix-green-light">
      <div className="container max-w-6xl mx-auto px-4">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">
            Coverage Options
          </p>
          <h2 className="font-script text-3xl md:text-4xl text-foreground">
            What's Included
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-500 hover:-translate-y-1 ${
                visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Home className="w-4 h-4 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm pl-11">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsiderationsSection({ service }: { service: (typeof homeInsuranceServices)[0] }) {
  const { ref, visible } = useScrollReveal();
  if (!service.considerations?.length) return null;

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">
            Things to Consider
          </p>
          <h2 className="font-script text-3xl md:text-4xl text-foreground">
            Before You Buy
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {service.considerations.map((item, index) => (
            <div
              key={index}
              className={`flex gap-4 items-start bg-card rounded-xl p-5 border border-border hover:border-secondary/30 transition-all duration-500 ${
                visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <HelpCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
              <div>
                <h4 className="font-heading font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection({ service }: { service: (typeof homeInsuranceServices)[0] }) {
  const { ref, visible } = useScrollReveal();
  if (!service.faqs?.length) return null;

  return (
    <section ref={ref} className="py-16 md:py-24 bg-phoenix-green-light/50">
      <div className="container max-w-3xl mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-script text-3xl md:text-4xl text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {service.faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-card rounded-xl border border-border px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-secondary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CTASection({ service }: { service: (typeof homeInsuranceServices)[0] }) {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-r from-secondary to-phoenix-green py-16 md:py-20"
    >
      <div
        className={`container max-w-3xl mx-auto text-center px-4 relative z-10 transition-all duration-700 ${
          visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-heading text-3xl md:text-4xl text-secondary-foreground font-bold mb-4">
          {service.ctaTitle}
        </h2>
        <p className="text-secondary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          {service.ctaDescription}
        </p>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg group"
        >
          Speak to our Advisers
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}

export default HomeInsurancePage;
