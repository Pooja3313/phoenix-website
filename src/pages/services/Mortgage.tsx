import {
  Home,
  Building,
  Key,
  RefreshCw,
  ArrowRight,
  Calculator,
  ChevronRight,
  Search,
  Heart,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { mortgageServices } from "@/data/mortgageData";
import AnimatedSection from "@/components/AnimatedSection";

const iconMap: Record<string, React.ElementType> = {
  "buy-to-let-mortgage": Key,
  "first-time-buyer-mortgage": Home,
  "residential-mortgage": Building,
  remortgage: RefreshCw,
};

const Mortgage = () => {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden min-h-[600px] flex items-center">
          {/* Full Cover Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/mortgage/mortgage2.jpg')`,
            }}
          />

          {/* Dark Overlay - Ensures text is readable */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/70" />

          {/* Subtle Accent Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.12),transparent_70%)]" />

          {/* Floating � Symbol */}
          <div className="absolute top-10 right-10 text-white/10 text-[160px] md:text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">
            £
          </div>

              <div className="relative z-10 px-4 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        <div className="max-w-3xl xl:max-w-4xl">
            <AnimatedSection delay={0.5}>
              <p className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
                Our Services
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-[#ffd700] highlighter-mark">
                  Mortgage
                </span>{" "}
                Solutions
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                Shape a future of stability and comfort with trusted mortgage
                guidance designed to turn aspirations into lasting reality.
              </p>
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Book a Free Discovery Call <ArrowRight size={18} />
              </NavLink>
            </AnimatedSection>
          </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection delay={0.4} animation="animate-fade-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose Phoenix Finserv for your{" "}
                  <span className="font-handwritten text-4xl md:text-5xl text-primary pen-underline">
                    Mortgage?
                  </span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With so many options available, finding the right mortgage can
                  feel overwhelming. At Phoenix Finserv, we provide clear and
                  tailored mortgage advice to help you understand your choices
                  and make informed decisions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our advisers come from diverse backgrounds and are well-placed
                  to support clients from a range of communities, including
                  those with overseas ties. We take the time to explain the
                  process, highlight potential risks, and guide you through each
                  stage.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We focus on building long-term relationships with our clients
                  and work hard to recommend mortgage products that are suitable
                  for your individual needs and circumstances.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3} animation="animate-fade-scale">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-xl">
                    <img
                      src="/images/mortgage/mortgage-main.jpg"
                      alt="Family reviewing important documents together"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Heart size={32} className="text-accent" />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Mortgage Calculator */}
        <section className="py-16 bg-gradient-to-br from-phoenix-gray-light/40 to-background">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-10" delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Find Your Best{" "}
                <span className="font-handwritten text-4xl md:text-5xl text-primary hand-underline1">
                  Mortgage Deal
                </span>{" "}
                in Seconds
              </h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                Our intelligent tools do the hard work for you â analysing
                real-time data from trusted lenders to reveal tailored deals
                that match your goals.
              </p>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <AnimatedSection delay={0.15}>
                <NavLink
                  to="/mortgage/best-buy"
                  className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:border-accent/30 group block h-full"
                >
                  <Search
                    size={40}
                    className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="font-bold text-lg mb-2">
                    Best Buy Calculator
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Compare mortgage rates with top lenders and find the
                    mortgage deal that?s right for you.
                  </p>
                  <div className="flex items-center justify-center gap-1 mt-4 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Try Now <ChevronRight size={16} />
                  </div>
                </NavLink>
              </AnimatedSection>
              <AnimatedSection delay={0.25} animation="animate-fade-rotate">
                <NavLink
                  to="/mortgage/calculator"
                  className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:border-primary/30 group block h-full"
                >
                  <Calculator
                    size={40}
                    className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="font-bold text-lg mb-2">
                    Mortgage rates and repayments
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Compare mortgage deals and find out what your interest rate
                    and monthly repayments could be.
                  </p>
                  <div className="flex items-center justify-center gap-1 mt-4 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Try Now <ChevronRight size={16} />
                  </div>
                </NavLink>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-14" delay={0.4}>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                What We Offer
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our{" "}
                <span className="font-handwritten text-4xl md:text-5xl text-primary hand-underline1">
                  Mortgage
                </span>{" "}
                Services
              </h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {mortgageServices.map((item, index) => {
                const Icon = iconMap[item.slug] || Home;
                return (
                  <AnimatedSection
                    key={item.slug}
                    delay={index * 0.18}
                    animation="animate-fade-scale"
                  >
                    <NavLink
                      to={`/mortgage/${item.slug}`}
                      className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl overflow-hidden hover:border-accent/30 block h-full"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon
                          size={26}
                          className="text-accent group-hover:text-accent-foreground transition-colors"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {item.heroDescription}
                      </p>
                      <div className="flex items-center gap-1 mt-4 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn More <ChevronRight size={16} />
                      </div>
                    </NavLink>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-accent to-phoenix-green text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Looking for a Mortgage?
              </h2>
              <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
                Our advisers are experienced in financing and have access to a
                wide range of mortgage options. Contact us today to discuss your
                mortgage requirements and secure the ideal financing solution.
              </p>
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 bg-background text-accent font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Speak to our Advisers <ArrowRight size={18} />
              </NavLink>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Mortgage;
