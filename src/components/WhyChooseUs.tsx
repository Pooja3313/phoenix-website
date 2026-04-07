import { Handshake, GraduationCap, ShieldCheck, BookOpen, CalendarCheck, ClipboardList } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const features = [
  { icon: Handshake, title: "Our Personal Touch", color: "primary" },
  { icon: GraduationCap, title: "Unlimited Expert Advice", color: "accent" },
  { icon: ShieldCheck, title: "Tax Efficiency Reviews", color: "primary" },
  { icon: BookOpen, title: "Simple Bookkeeping Software", color: "accent" },
  { icon: CalendarCheck, title: "Never Miss a Deadline", color: "primary" },
  { icon: ClipboardList, title: "No Hidden Extras", color: "accent" },
];

const WhyChooseUs = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const positions = [
    { top: "8%", left: "50%" },
    { top: "28%", left: "85%" },
    { top: "68%", left: "85%" },
    { top: "88%", left: "50%" },
    { top: "68%", left: "15%" },
    { top: "28%", left: "15%" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-x-hidden overflow-y-visible">
      <div className="absolute top-20 right-4 text-primary/[0.03] text-[100px] font-bold animate-pound-rotate select-none pointer-events-none sm:right-20 sm:text-[140px] lg:text-[180px]">
        {"\u00A3"}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-3">
            Why Choose Our Services?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            We help over{" "}
            <span className="font-handwritten text-4xl md:text-5xl text-primary hand-underline1">1,000</span>{" "}
            businesses in the UK
          </h2>
        </div>

        <div className="w-full px-0 sm:px-1 lg:pl-1 lg:pr-14">
          <div
            className="relative mx-auto w-full max-w-2xl
              h-[440px] min-h-[440px]
              sm:h-[480px] sm:min-h-[480px]
              md:h-[520px] md:min-h-[520px]
              lg:h-[580px] lg:min-h-[580px]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <AnimatedSection className="block">
                <div
                  className="shrink-0 rounded-full border-2 border-dashed border-border/40 aspect-square
                  w-[min(72vw,260px)] max-w-[260px]
                  sm:w-[min(78vw,300px)] sm:max-w-[300px]
                  md:w-[min(82vw,360px)] md:max-w-[360px]
                  lg:w-[420px] lg:max-w-[420px]"
                />
              </AnimatedSection>
            </div>

            <div className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
              <AnimatedSection>
                <div
                  className="flex size-[7.25rem] shrink-0 items-center justify-center overflow-hidden rounded-full border-[3px] border-border bg-card shadow-2xl
                  sm:size-32 sm:border-4
                  md:size-40
                  lg:size-52"
                >
                  <div className="flex w-full flex-col items-center justify-center px-2 text-center sm:px-3">
                    <span className="text-lg font-bold leading-tight text-primary sm:text-xl md:text-2xl">Phoenix</span>
                    <span className="mt-0.5 block text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
                      Finserv
                    </span>
                    <span className="mt-1 block max-w-[9rem] font-handwritten text-xs leading-snug text-primary sm:mt-1.5 sm:text-sm md:text-base">
                      Helping secure dreams
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {features.map((feature, index) => {
              const pos = positions[index];
              const isHovered = hoveredIdx === index;
              const isPrimary = feature.color === "primary";

              return (
                <div
                  key={feature.title}
                  className="absolute z-20"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => setHoveredIdx(index)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <AnimatedSection delay={index * 0.15 + 0.3}>
                    <div className="flex cursor-pointer flex-col items-center group">
                      <div
                        className={`flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 shadow-lg transition-all duration-500
                          sm:size-12 md:size-14 lg:size-16
                          ${
                            isHovered
                              ? isPrimary
                                ? "scale-110 bg-primary shadow-primary/30 sm:scale-125"
                                : "scale-110 bg-accent shadow-accent/30 sm:scale-125"
                              : isPrimary
                                ? "border-primary/20 bg-primary/10"
                                : "border-accent/20 bg-accent/10"
                          }`}
                      >
                        <feature.icon
                          className={`size-[18px] shrink-0 transition-all duration-300 sm:size-5 md:size-[22px] lg:size-[26px] ${
                            isHovered
                              ? "scale-110 text-primary-foreground"
                              : isPrimary
                                ? "text-primary"
                                : "text-accent"
                          }`}
                          strokeWidth={2}
                        />
                      </div>
                      <span
                        className={`mt-1.5 max-w-[4.5rem] text-center text-[9px] font-semibold leading-tight transition-colors duration-300
                          sm:mt-2 sm:max-w-[5.5rem] sm:text-[10px]
                          md:mt-2.5 md:max-w-[6.5rem] md:text-xs
                          lg:mt-3 lg:max-w-[120px] lg:text-xs
                          ${isHovered ? "text-primary" : "text-foreground"}`}
                      >
                        {feature.title}
                      </span>
                    </div>
                  </AnimatedSection>
                </div>
              );
            })}

            <svg
              className="pointer-events-none absolute inset-0 z-10 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {positions.map((pos, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={parseFloat(pos.left)}
                  y2={parseFloat(pos.top)}
                  stroke="hsl(var(--border))"
                  strokeWidth="0.3"
                  strokeDasharray="2,2"
                  opacity="0.5"
                />
              ))}
            </svg>
          </div>

          <AnimatedSection delay={1.2} className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-phoenix-orange-dark hover:shadow-xl sm:px-8 sm:py-4"
            >
              Get a Quote
            </NavLink>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
