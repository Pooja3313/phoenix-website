import {
  Building2,
  Landmark,
  Briefcase,
  Truck,
  Home,
  HardHat,
  ArrowRight,
  ChevronRight,
  Heart,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { commercialLendingServices } from "@/data/commercialLendingData";

const iconMap: Record<string, React.ElementType> = {
  "bridging-loan": Landmark,
  "commercial-mortgage": Building2,
  "business-finance": Briefcase,
  "asset-finance": Truck,
  "buy-to-let-finance": Home,
  "property-development-finance": HardHat,
};

const CommercialLending = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero */}
        {/* <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-phoenix-gray-light/40 to-background overflow-hidden">
          <div className="absolute top-10 right-10 text-primary/[0.04] text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>
          <div className="container mx-auto px-4 relative z-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Commercial <span className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-accent highlighter-mark">Lending</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Drive your business forward with strategic lending designed to unlock opportunities, strengthen growth and build financial resilience.
            </p>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book a Free Discovery Call <ArrowRight size={18} />
            </NavLink>
          </div>
        </section> */}

        <section className="relative py-20 md:py-28 overflow-hidden min-h-[600px] flex items-center">
          {/* Full Cover Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/Commercial-Lending/Commercial-Lending2.jpg')`,
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

          <div className="container mx-auto px-4 relative z-10">
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Commercial{" "}
              <span className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-[#ffd700] highlighter-mark">
                Lending
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              Drive your business forward with strategic lending designed to
              unlock opportunities, strengthen growth and build financial
              resilience.
            </p>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book a Free Discovery Call <ArrowRight size={18} />
            </NavLink>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose Phoenix Finserv for{" "}
                  <span className="font-handwritten text-4xl md:text-5xl text-primary pen-underline">
                    Commercial Lending?
                  </span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Commercial financing can be used for the full spectrum of
                  needs, empowering businesses to get ahead in a competitive
                  marketplace. Our team of financial advisers helps clients
                  obtain the funding they require for an array of reasons:
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {[
                    "Expansion into new locations or markets",
                    "Acquiring new machinery and upgrading equipment",
                    "Managing cash flow during seasonal fluctuations",
                    "Renovating or expanding existing premises",
                    "Covering unexpected emergency expenses",
                    "Bridging and auction purchases",
                    "Property purchase â both owner occupied and investments",
                    "Property development finance",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ArrowRight
                        size={14}
                        className="text-primary mt-1 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right Side - Image (Full Cover & Responsive) */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-xl">
                  <img
                    src="/images/Commercial-Lending/Commercial-Lending1.jpg"
                    alt="Family reviewing important documents together"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Heart size={32} className="text-accent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings */}
        <section
          className="py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30"
          ref={ref}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                What We Offer
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our{" "}
                <span className="font-handwritten text-4xl md:text-5xl text-primary hand-underline1">
                  Commercial
                </span>{" "}
                Solutions
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Commercial financing is suitable for a wide range of individuals
                and organisations, whether SMEs, property developers, non-profit
                organisations or large corporations.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {commercialLendingServices.map((item, index) => {
                const Icon = iconMap[item.slug] || Briefcase;
                return (
                  <NavLink
                    key={item.slug}
                    to={`/commercial-lending/${item.slug}`}
                    className={`group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl overflow-hidden hover:border-primary/30 block ${
                      visible ? "animate-float-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon
                        size={26}
                        className="text-primary group-hover:text-primary-foreground transition-colors"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {item.heroDescription}
                    </p>
                    <div className="flex items-center gap-1 mt-4 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More <ChevronRight size={16} />
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-phoenix-orange-dark text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Looking for Commercial Lending Solutions?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              Our brokers are experienced in financing and have access to a wide
              range of options. Contact us today to discuss your requirements
              and secure the ideal financing solution.
            </p>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 bg-background text-primary font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Speak to our Advisers <ArrowRight size={18} />
            </NavLink>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CommercialLending;
