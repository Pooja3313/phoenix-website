import {
  ArrowRight,
  Compass,
  Sprout,
  Map,
  Gem,
  Users,
  AlertTriangle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`${visible ? "animate-float-up" : "opacity-0"} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

const journeySteps = [
  {
    num: "01",
    icon: Compass,
    title: "Your Voyage",
    description:
      "In Phoenix, we view your business as an expedition. Whether you are embarking on this expedition, standing at a crucial juncture, contemplating your path forward, or contemplating its conclusion, we are here to be your steadfast companions throughout the entire voyage.",
    color: "primary" as const,
  },
  {
    num: "02",
    icon: Sprout,
    title: "New Beginnings?",
    description:
      "Have you recently made the decision to embark on your entrepreneurial journey and find yourself feeling swamped with uncertainty about what steps to take next? Don't worry; we are here to provide assistance. From assisting with company registrations and self-employment formalities to offering expert guidance and unwavering support to help steer you in the right direction.",
    color: "accent" as const,
  },
  {
    num: "03",
    icon: Map,
    title: "On the Path Require Guidance?",
    description:
      "Our proficient team is committed to delivering top-notch services, encompassing everything from meticulous bookkeeping and efficient VAT handling to precise payroll management and adept handling of Corporation tax and self-assessment matters. You can rest assured that we have all your needs covered comprehensively.",
    color: "primary" as const,
  },
  {
    num: "04",
    icon: Gem,
    title: "Valuable Additions for Your Journey",
    description:
      "We at Phoenix believe in making your financial journey not just manageable but truly enriching. Our commitment goes beyond numbers; it's about adding value to your financial path. From navigating tax complexities to strategic financial planning, we've got your back at every turn.",
    color: "accent" as const,
  },
  {
    num: "05",
    icon: Users,
    title: "Companions Throughout Your Journey",
    description:
      "Our Partners and the Partner Hub are here to provide assistance beyond the realm of accounting. With expertise spanning various industries, our partners are readily available to support you when your needs extend beyond accounting alone.",
    color: "primary" as const,
  },
  {
    num: "06",
    icon: AlertTriangle,
    title: "Your Business Near in Failure?",
    description:
      "If you find yourself at the conclusion of your business journey, rest assured, we are here to assist you in concluding your affairs with ease. Whether you seek a final business valuation for potential sale or require guidance on liquidation and the winding-down process, we stand ready to support you.",
    color: "accent" as const,
  },
];

const OurJourney = () => {
  return (
    <div className="min-h-screen">
      <main>
       {/* _______________________________ RECENT CODE BG COLOR Hero__________________________________ */}
       
        {/* <section className="relative py-24 bg-gradient-to-br from-phoenix-gray-light via-background to-phoenix-green-light overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.06),transparent_50%)]" />
          <div className="absolute bottom-20 right-20 text-primary/5 text-[180px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <AnimatedSection>
              <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-4">Your Journey</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                The Phoenix <span className="font-handwritten text-5xl md:text-6xl text-primary pen-underline">Journey</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Your business is an <span className="font-handwritten text-xl text-primary highlighter-mark">expedition</span> — and we are your steadfast companions throughout the entire voyage.
              </p>
            </AnimatedSection>
          </div>
        </section> */}
        {/* Hero - Your Journey */}
        <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] xl:min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Image - Full Cover + Responsive Positioning */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat 
               bg-center           
               sm:bg-center 
               md:bg-[center_35%]   
               lg:bg-center         
               xl:bg-center"
            style={{
              backgroundImage: `url('/images/website_images/colleagues-discussing-plans-smartphone.jpg')`,
            }}
          />

          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/55 md:bg-black/50" />

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

          {/* Decorative Radial Gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.06),transparent_50%)]" />

          {/* Pound Symbol (�) - Decorative - Hidden on mobile */}
          <div className="absolute bottom-20 right-10 md:right-20 text-primary/10 text-[120px] md:text-[160px] lg:text-[180px] font-bold animate-pound-rotate select-none pointer-events-none hidden md:block">
            £
          </div>

          {/* Content with AnimatedSection */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-4">
                  YOUR JOURNEY
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
                  The Phoenix{" "}
                  <span className="font-handwritten text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl pen-underline">
                    Journey
                  </span>
                </h1>

                <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md px-2">
                  Your business is an{" "}
                  <span className="font-handwritten text-lg md:text-xl lg:text-2xl text-primary highlighter-mark">
                    expedition
                  </span>{" "}
                  ? and we are your steadfast companions throughout the entire
                  voyage.
                </p>
              </AnimatedSection>
            </div>
          </div>

          {/* Scroll Indicator - Hidden on small screens */}
          <div className="absolute  bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2 animate-bounce hidden md:flex">
            <span className="text-xs tracking-widest">SCROLL TO EXPLORE</span>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
          </div>
        </section>
        
        {/* Journey Steps */}
        <section className="py-20 bg-gradient-to-b from-background via-phoenix-green-light/10 to-phoenix-gray-light/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto relative">
              {/* Vertical connector line */}
              <div className="hidden md:block absolute left-[2.75rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-accent/20" />

              <div className="space-y-12">
                {journeySteps.map((step, i) => {
                  const isPrimary = step.color === "primary";
                  const Icon = step.icon;
                  return (
                    <AnimatedSection key={step.num} delay={i * 0.12}>
                      <div className="flex items-start gap-6 group">
                        {/* Step number circle */}
                        <div
                          className={`hidden md:flex w-[5.5rem] h-[5.5rem] rounded-2xl items-center justify-center font-bold text-2xl shrink-0 z-10 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${isPrimary ? "bg-primary text-primary-foreground group-hover:shadow-primary/30" : "bg-accent text-accent-foreground group-hover:shadow-accent/30"}`}
                        >
                          {step.num}
                        </div>

                        {/* Content card */}
                        <div
                          className={`flex-1 bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl relative overflow-hidden ${isPrimary ? "hover:border-primary/30" : "hover:border-accent/30"}`}
                        >
                          {/* Top accent line */}
                          <div
                            className={`absolute top-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${isPrimary ? "bg-primary" : "bg-accent"}`}
                          />

                          <div className="flex items-center gap-3 mb-4">
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${isPrimary ? "bg-primary/10 group-hover:bg-primary" : "bg-accent/10 group-hover:bg-accent"}`}
                            >
                              <Icon
                                size={20}
                                className={`transition-colors ${isPrimary ? "text-primary group-hover:text-primary-foreground" : "text-accent group-hover:text-accent-foreground"}`}
                              />
                            </div>
                            <div>
                              <span className="md:hidden font-handwritten text-lg text-primary font-bold mr-2">
                                {step.num}.
                              </span>
                              <h3
                                className={`text-xl font-bold text-foreground transition-colors inline ${isPrimary ? "group-hover:text-primary" : "group-hover:text-accent"}`}
                              >
                                {step.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary via-primary to-phoenix-orange-dark text-primary-foreground text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.15),transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your{" "}
                <span className="font-handwritten text-4xl">Journey</span> With
                Us?
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
                Join over 1,000 businesses who trust Phoenix Finserv with their
                financial future.
              </p>
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 bg-card text-foreground hover:bg-background font-semibold px-8 py-4 rounded-xl transition-all duration-300 group mt-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get in Touch{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </NavLink>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurJourney;
