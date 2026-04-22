import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { BrandLinkedInIcon } from "@/components/icons/BrandSocialIcons";
import { PHOENIX_LINKEDIN_URL } from "@/constants/social";
import AnimatedSection from "./AnimatedSection";

const teamMembers = [
  {
    name: "Abhijit Jamdar",
    role: "Head of Payroll Department",
    avatar: "AJ",
    color: "bg-primary",
    quote: "I have been working with Phoenix for the last 7 years and still love working here. The culture is transparent and everyone, irrespective of their position, is given a chance to be heard. It is a young organisation with a contemporary, innovative approach that distinguishes it from other firms.",
  },
  {
    name: "Himani Paranjape",
    role: "Senior Accountant",
    avatar: "HP",
    color: "bg-accent",
    quote: "It feels like I have been here for several years even though I only joined Phoenix 1 year ago. The learning is great through practical experiences and well documented processes which provides clarity on how to do things. It provides a very conducive environment to learn, grow and prosper.",
  },
  {
    name: "Brijal Mandaliya",
    role: "Customer Support & Compliance",
    avatar: "BM",
    color: "bg-phoenix-gold",
    quote: "The experiences I have gained along the way are irreplaceable and invaluable. I find the culture open and transparent enough to encourage thinking out loud.",
  },
  {
    name: "Mayuri Patel",
    role: "Co-Founder & Director",
    avatar: "MP",
    color: "bg-primary",
    quote: "At Phoenix, we believe that every client deserves personalised attention and world-class financial advice.",
  },
];

const DedicatedTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCards = () => {
      const w = window.innerWidth;
      if (w < 768) setCardsPerView(1);
      else if (w < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const maxIndex = teamMembers.length - cardsPerView;

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const scrollTo = (dir: "left" | "right") => {
    if (dir === "right") {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    } else {
      setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }
  };

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 pt-8">
        
        {/* Heading */}
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Our Dedicated and Friendly Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              We may not be local, but we are only ever a{" "}
              <span className="font-handwritten text-4xl md:text-5xl text-primary hand-underline1">
                phone call
              </span>{" "}
              away
            </h2>
          </div>
        </AnimatedSection>

        <div className="relative max-w-6xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={() => scrollTo("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scrollTo("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex items-stretch transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {teamMembers.map((member, index) => (
                <AnimatedSection
                  key={member.name}
                  delay={0.2 + index * 0.12}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 flex"
                >
                  <div className="group relative bg-card rounded-3xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-primary/30 flex flex-col h-full w-full">
                    
                    {/* Top Color Bar */}
                    <div className={`h-2 ${member.color}`} />

                    <div className="relative px-6 pt-6 pb-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-14 h-14 rounded-full ${member.color} flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          {member.avatar}
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-muted-foreground text-sm">{member.role}</p>
                        </div>
                      </div>
                    </div>

                    <div className="px-6 pb-6 flex-grow">
                      <div className="relative">
                        <Quote size={20} className="text-primary/20 mb-2" />
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-6">
                          {member.quote}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 flex items-center gap-2 mt-auto">
                      <NavLink
                        to={PHOENIX_LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Phoenix on LinkedIn"
                        className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 icon-hover-bounce"
                      >
                        <BrandLinkedInIcon size={14} aria-hidden />
                      </NavLink>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DedicatedTeam;