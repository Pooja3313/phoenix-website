import { useState, useEffect, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    text: "Phoenix Finserv transformed our financial planning. Their expertise in commercial lending helped us secure the perfect funding for our expansion. Truly outstanding service!",
    avatar: "SJ",
  },
  {
    name: "James Mitchell",
    role: "First-Time Buyer",
    text: "The mortgage advice I received was incredible. They walked me through every step and found me a deal I never thought possible. Highly recommend their services.",
    avatar: "JM",
  },
  {
    name: "Emma Thompson",
    role: "Retiree",
    text: "Their pension advisory service gave me complete peace of mind. Professional, caring, and always available to answer my questions. Thank you, Phoenix Finserv!",
    avatar: "ET",
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto Slide Logic
  const startAuto = useCallback(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return interval;
  }, []);

  useEffect(() => {
    const interval = startAuto();
    return () => clearInterval(interval);
  }, [startAuto]);

  // Navigation Functions
  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <AnimatedSection delay={0.1} animation="fade-up">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Our{" "}
              <span className="font-handwritten text-4xl md:text-5xl text-primary hand-underline1">
                Clients
              </span>{" "}
              Say
            </h2>
          </div>
        </AnimatedSection>

        {/* Testimonial Card */}
        <AnimatedSection delay={0.3} animation="fade-up">
          <div className="relative bg-card rounded-3xl p-10 md:p-14 border border-border shadow-lg max-w-3xl mx-auto">
            
            {/* Large Quote Icon */}
            <div className="absolute -top-6 left-8 md:left-12">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Quote size={28} className="text-primary-foreground" />
              </div>
            </div>

            {/* Left Arrow */}
            <button
              onClick={goToPrev}
              className="absolute -left-5 md:-left-7 top-1/2 -translate-y-1/2 z-20 
                         w-12 h-12 flex items-center justify-center 
                         bg-white border border-border rounded-full shadow-lg 
                         hover:bg-primary hover:text-white hover:border-primary 
                         transition-all duration-300"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="absolute -right-5 md:-right-7 top-1/2 -translate-y-1/2 z-20 
                         w-12 h-12 flex items-center justify-center 
                         bg-white border border-border rounded-full shadow-lg 
                         hover:bg-primary hover:text-white hover:border-primary 
                         transition-all duration-300"
            >
              <ChevronRight size={28} />
            </button>

            {/* Testimonial Content */}
            <div className="overflow-hidden pt-8">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((t, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-6">
                    <p className="text-lg md:text-2xl leading-relaxed italic text-foreground mb-10 font-handwritten">
                      "{t.text}"
                    </p>

                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-2xl">
                        {t.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-lg">{t.name}</p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-primary w-10"
                      : "bg-border hover:bg-muted-foreground w-3"
                  }`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialSection;