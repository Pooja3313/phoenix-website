import { ArrowRight, Sparkles, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import AnimatedSection from "./AnimatedSection";

const WHATSAPP_ADVISOR_URL =
  "https://wa.me/918488891091?text=Hi%20Phoenix%20Finserv%20team%2C%20I%20would%20like%20to%20speak%20with%20an%20adviser%20about%20financial%20planning.";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Full Cover Background Image - Responsive on all devices */}
      <img
        src="/images/website_images/business-talks-conference-table.webp"
        alt="Business meeting"
        loading="eager"
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/75" />

      {/* Subtle Accent Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--phoenix-green)/0.10),transparent_60%)]" />

      {/* Animated Pound Symbols */}
      <motion.div 
        initial={{ opacity: 0, rotateY: 0 }}
        animate={{ 
          opacity: 0.1,
          rotateY: 360
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 text-white text-[180px] md:text-[220px] font-bold select-none pointer-events-none"
      >
        £
      </motion.div>
      <motion.div
        initial={{ opacity: 0, rotateY: 0 }}
        animate={{ 
          opacity: 0.1,
          rotateY: 360
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-16 left-12 text-white text-[110px] md:text-[140px] font-bold select-none pointer-events-none"
      >
         £
      </motion.div>

      {/* Floating Particles */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-white/30"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-white/20"
      />

      <div className="relative z-10 px-4 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        <div className="max-w-3xl xl:max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles size={14} className="text-white" />
            <span className="text-white text-sm font-medium">
              Phoenix Finserv - Helping Secure Dreams
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Best Solution to{" "}
            <span className="hand-underline1 text-[#ffd700] font-handwritten">
              Manage
            </span>{" "}
            Your Finance &{" "}
            <span className="font-handwritten text-primary pen-underline2">
              Accounting
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-white/90 mb-10 max-w-xl leading-relaxed"
          >
            From protection and mortgages to pensions and estate planning ? we
            provide expert financial advice to secure your future and your
            family's dreams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
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
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full block">
          <path
            d="M0 80L60 70C120 60 240 40 360 35C480 30 600 45 720 50C840 55 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H0Z"
            fill="hsl(var(--background))"
            stroke="none"
            strokeWidth="0"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
