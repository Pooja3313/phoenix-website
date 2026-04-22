import { ArrowRight, Sparkles, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const WHATSAPP_ADVISOR_URL =
  "https://wa.me/918488891091?text=Hi%20Phoenix%20Finserv%20team%2C%20I%20would%20like%20to%20speak%20with%20an%20adviser%20about%20financial%20planning.";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <img
        src="/images/website_images/business-talks-conference-table.webp"
        alt="Business meeting"
        loading="eager"
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/75" />

      {/* Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--phoenix-green)/0.10),transparent_60%)]" />

      {/* Static Pound Symbols (animation removed) */}
      <div className="absolute top-20 right-20 text-white/10 text-[140px] md:text-[160px] lg:text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">
        £
      </div>

      <div className="absolute bottom-16 left-12 text-white/10 text-[110px] md:text-[140px] font-bold animate-pound-rotate select-none pointer-events-none">
        £
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        <div className="max-w-3xl xl:max-w-4xl">
          <AnimatedSection delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles size={14} className="text-white" />
              <span className="text-white text-sm font-medium">
                Phoenix Finserv - Helping Secure Dreams
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Best Solution to{" "}
              <span className="hand-underline1 text-[#ffd700] font-handwritten">
                Manage
              </span>{" "}
              Your Finance &{" "}
              <span className="font-handwritten text-primary pen-underline2">
                Accounting
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <p className="text-lg text-white/90 mb-10 max-w-xl leading-relaxed">
              From protection and mortgages to pensions and estate planning ? we
              provide expert financial advice to secure your future and your
              family's dreams.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <div className="flex flex-wrap gap-4">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-phoenix-green text-primary-foreground font-semibold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Get a Free Quote
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </NavLink>

              <NavLink
                to={WHATSAPP_ADVISOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-black font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm group"
                aria-label="Chat on WhatsApp with adviser"
              >
                <Phone size={20} className="group-hover:text-black" />
                Talk to Advisor
              </NavLink>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full block">
          <path
            d="M0 80L60 70C120 60 240 40 360 35C480 30 600 45 720 50C840 55 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
