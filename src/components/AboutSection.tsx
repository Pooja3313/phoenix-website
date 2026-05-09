import { ArrowRight, Award, Users, Globe } from "lucide-react";
import { NavLink } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";   

const badges = [
  { icon: Award, label: "Living Wage Employer" },
  { icon: Users, label: "Disability Confident" },
  { icon: Globe, label: "Climate Positive Website" },
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/5 animate-pound-morph pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-accent/5 animate-pound-morph pointer-events-none" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 right-10 text-primary/[0.03] text-[180px] font-bold animate-pound-rotate select-none pointer-events-none"> £</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Content */}
          <div className="flex-1">
            <AnimatedSection delay={0.1}>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Who are Phoenix Finserv?
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Comprehensive{" "}
                <span className="font-handwritten text-4xl md:text-5xl lg:text-6xl text-primary pen-underline2">
                  Enterprise
                </span>
                <br />
                Services and Support
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl text-base">
                Phoenix Finserv is a financial services firm with a difference ? standing out from the crowd
                of other advisory services. We develop and build lasting bonds with clients, implementing
                strong financial structures and plans to help them save time and money.
              </p>

              <AnimatedSection delay={0.25}>
                <h3 className="text-lg font-bold text-foreground mb-2 uppercase tracking-wide">Our Beginnings</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl text-sm">
                  Manish Shah formed Phoenix Accountancy Service Ltd in 2013 along with Mayuri Patel, after
                  realising that it is not just the size and scale of a business that determines the level of
                  service delivered to clients but more the ability to meet and manage clients' requirements
                  and expectations.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <NavLink
                  to="/about"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-base group hover:gap-3 transition-all duration-300"
                >
                  Explore more
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </NavLink>
              </AnimatedSection>

              {/* Accreditation Badges */}
              <AnimatedSection delay={0.55}>
                <div className="flex flex-wrap items-center gap-6 mt-10">
                  {badges.map((badge) => (
                    <div
                      key={badge.label}
                      className="group flex items-center gap-3 px-5 py-3 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-500 cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <badge.icon size={20} className="text-primary group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <span className="text-xs font-semibold text-foreground">{badge.label}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </AnimatedSection>
          </div>

          {/* Right Image Side */}
          <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-8 lg:px-0 mt-10 lg:mt-0">
            <AnimatedSection delay={0.35} animation="animate-fade-scale">
              <div className="relative">
                {/* Decorative frame elements */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-3xl hidden sm:block" />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/20 rounded-3xl hidden sm:block" />

                {/* Dots pattern */}
                <div className="absolute -top-8 -right-8 grid grid-cols-5 gap-2 hidden sm:grid">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-primary/15" />
                  ))}
                </div>

                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-muted aspect-[4/3]">
                  <img
                    src="/images/website_images/young-pregnant-woman-work.webp"
                    alt="Phoenix Finserv Team"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Stat Card */}
                <div className="absolute -bottom-4 left-2 sm:-bottom-6 sm:-left-6 bg-card rounded-2xl shadow-xl border border-border p-3 sm:p-5">
                  <AnimatedSection delay={0.7}>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent flex items-center justify-center">
                        <Users size={20} className="text-accent-foreground" />
                      </div>
                      <div>
                        <p className="text-xl sm:text-2xl font-bold text-primary">2013</p>
                        <p className="text-xs text-muted-foreground">Est. Year</p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                {/* Floating Accent Card */}
                <div
                  className="absolute -top-4 right-2 sm:-top-6 sm:-right-6 bg-primary rounded-2xl shadow-xl p-3 sm:p-4"
                  style={{ animationDelay: "1.1s" }}
                >
                  <p className="text-primary-foreground font-bold text-base sm:text-lg">15+</p>
                  <p className="text-primary-foreground/70 text-[10px] sm:text-xs">Years of Trust</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;