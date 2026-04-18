import {
  ShieldCheck,
  Users,
  Home,
  Briefcase,
  FileCheck,
  Heart,
  Shield,
  ArrowRight,
  ChevronRight,
  HeartHandshake,
  BriefcaseBusiness,
  User,
  Wallet,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  personalProtectionServices,
  businessProtectionServices,
  homeInsuranceServices,
} from "@/data/protectionData";
import AnimatedSection from "@/components/AnimatedSection";

const tabs = [
  {
    name: "Personal Protection",
    services: personalProtectionServices,
    color: "primary",
  },
  {
    name: "Business Protection",
    services: businessProtectionServices,
    color: "accent",
  },
  { name: "Home Insurance", services: homeInsuranceServices, color: "primary" },
];

const iconMap: Record<string, React.ElementType> = {
  "life-cover": HeartHandshake,
  "critical-illness": ShieldCheck,
  "income-protection": Wallet,
  "keyman-cover": User,
  "shareholder-protection": Users,
  "relevant-life-cover": FileCheck,
  "business-loan-protection": BriefcaseBusiness,
  "buildings-and-contents": Home,
};

const Protection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen">
      <main>
        {/* ==================== HERO SECTION ==================== */}
        <section className="relative py-20 md:py-28 overflow-hidden min-h-[600px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/images/protection/protection-main.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.12),transparent_70%)]" />

          <div className="absolute top-10 right-10 text-white/10 text-[160px] md:text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">
            £
          </div>

          <div className="absolute bottom-10 left-10 w-4 h-4 rounded-full bg-white/30" />

          <div className="relative z-10 px-4 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        <div className="max-w-3xl xl:max-w-4xl">
            <AnimatedSection delay={0.15}>
              <p className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
                Our Services
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Protection{" "}
                <span className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-[#ffd700] highlighter-mark">
                  Planning
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                Safeguard your tomorrow with protection plans designed to provide peace of mind, security and strength through life's uncertainties.
              </p>

              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Your Free Quote <ArrowRight size={18} />
              </NavLink>
            </AnimatedSection>
          </div>
          </div>
        </section>

        {/* ==================== WHY CHOOSE SECTION ==================== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection delay={0.3} animation="animate-fade-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose Phoenix Finserv for your{" "}
                  <span className="font-handwritten text-4xl md:text-5xl text-primary pen-underline">
                    Protection Plan?
                  </span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At Phoenix Finserv, we specialise in helping people understand the financial risks they face and protect themselves and their families from the financial impacts of illness, injury and death. We also help our customers buy and protect their homes and business premises and to manage their accumulated wealth.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Illness or injury can occur at any time and the problems that follow can be as unexpected as the illness or the injury itself. We will help you work out what measures you can put in place to protect yourself and the people who rely on you most from the financial consequences that might follow. Having the right cover in place offers great peace of mind in an uncertain world.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2} animation="animate-fade-scale">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-xl">
                    <img
                      src="/images/protection/life-cover2.jpg"
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

        {/* ==================== WHAT WE OFFER SECTION ==================== */}
        <section className="py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-10" delay={0.1}>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                What We Offer
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Comprehensive{" "}
                <span className="font-handwritten text-4xl md:text-5xl text-primary hand-underline1">
                  Protection
                </span>{" "}
                Solutions
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl lg:max-w-3xl mx-auto">
                Protection planning is about creating a financial safety net that ensures you, your family, or your business are supported in the face of life's uncertainties.
              </p>
            </AnimatedSection>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {tabs.map((tab, i) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(i)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === i
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-card border border-border text-foreground hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Cards */}
            <div
              className= "grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto "
              key={activeTab}
            >
              {tabs[activeTab].services.map((item, index) => {
                const Icon = iconMap[item.slug] || Shield;
                return (
                  <AnimatedSection key={item.slug} delay={index * 0.1} animation="animate-fade-scale">
                    <NavLink
                      to={`/protection/${item.slug}`}
                      className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl overflow-hidden hover:border-primary/30 block h-full"
                    >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== CTA SECTION ==================== */}
        <section className="py-20 bg-gradient-to-r from-primary to-phoenix-orange-dark text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection delay={0.2} animation="animate-fade-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Looking for a Protection Plan?
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
                Our advisers are experienced in financing and have access to a wide range of protection planning options. Contact us today to discuss your protection requirements and secure the ideal solution.
              </p>
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 bg-background text-primary font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
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

export default Protection;