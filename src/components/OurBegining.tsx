
import { useEffect, useRef, useState } from "react";
import { Building2, Users, TrendingUp, Lightbulb, Rocket, Globe } from "lucide-react";

const timeline = [
  { year: "2013", title: "Our Beginnings", description: "Manish Shah formed Phoenix Accountancy Service Ltd along with Mayuri Patel, after realising that it is not just the size and scale of a business that determines the level of service delivered to clients but more the ability to meet and manage clients' requirements and expectations.", icon: Building2 },
  { year: "2015", title: "Growing Through Referrals", description: "The accountancy company grew through recommendations and referrals for the world class service given by longstanding loyal staff at Phoenix.", icon: Users },
  { year: "2018", title: "Expanding Services", description: "Phoenix Accountancy focuses on offering hands-on and tailored financial support through proactive tax advice and accountancy services to businesses, individuals, contractors, and SMEs.", icon: TrendingUp },
  { year: "2020", title: "Digital Transformation", description: "Embracing innovative technology and digital solutions to serve our clients better, streamlining processes and improving communication.", icon: Lightbulb },
  { year: "2023", title: "Phoenix Finserv Launch", description: "Expanding into comprehensive financial services including protection, mortgages, pensions, and estate planning — helping secure our clients' dreams.", icon: Rocket },
  { year: "2026", title: "Today & Beyond", description: "Phoenix Accountancy is an accounting firm with a difference that stands out from the crowd. We develop and build a bond with clients by implementing strong business structures and plans to help them save time and money.", icon: Globe },
];

  const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${visible ? 'animate-float-up' : 'opacity-0'} ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
};

const OurBegining = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [activeTimeline, setActiveTimeline] = useState<number | null>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);



  return (
    <div className="min-h-screen">
 
      <main>
        {/* Hero */}
        {/* <section className="relative py-24 bg-gradient-to-br text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.1),transparent_60%)]" />
          <div className="absolute bottom-20 right-20 text-primary/5 text-[180px] font-bold animate-pound-rotate select-none pointer-events-none">£</div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-4">Our Story</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 ">
              The Phoenix <span className="font-handwritten text-5xl md:text-6xl text-primary pen-underline">Journey</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From humble beginnings to a trusted financial services firm — our story of growth, trust, and excellence.
            </p>
          </div>
        </section> */}


        <section className="relative py-20 md:py-28 overflow-hidden min-h-[600px] flex items-center">
          {/* Full Cover Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/website_images/about-us.jpg')`,
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
          <div className="container mx-auto px-4 relative z-10 text-center">
            <AnimatedSection>
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-4">Our Story</p>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 ">
              The Phoenix <span className="font-handwritten text-5xl md:text-7xl text-primary pen-underline">Journey</span>
            </h1>
            <p className="text-white/90 max-w-xl text-xl mx-auto">
              From humble beginnings to a trusted financial services firm — our story of growth, trust, and excellence.
            </p>
            </AnimatedSection>
          </div>
        </section>

        {/* About Block */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16 max-w-5xl mx-auto">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our <span className="text-primary highlighter-mark">Beginnings</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Manish Shah formed Phoenix Accountancy Service Ltd in 2013 along with Mayuri Patel, after realising that it is not just the size and scale of a business that determines the level of service delivered to clients but more the ability to meet and manage clients' requirements and expectations.</p>
                  <p>Phoenix Accountancy focuses on offering hands-on and tailored financial support through proactive tax advice and accountancy services to businesses, individuals, contractors, and SMEs.</p>
                  <p>The accountancy company has grown over the last decade through recommendations and referrals for the world class service given by longstanding loyal staff at Phoenix.</p>
                  <p>Manish had previously worked as a CFO for an IT company for 7 years and helped complete the successful sale of the business which he co-owned with other shareholders.</p>
                  <p>Phoenix Accountancy is an accounting firm with a difference that stands out from the crowd of other bookkeeping services. We develop and build a bond with clients by implementing strong business structures and plans to help them save time and money.</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-muted aspect-[4/5]">
                  <img src="/images/website_images/group-businesspeople-using-laptop-while-working-document.jpg" alt="Our Journey" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-phoenix-gray-dark/80 to-transparent flex items-end p-8">
                    <div>
                      <p className="text-primary-foreground font-bold text-2xl">Since 2013</p>
                      <p className="text-primary-foreground/70 text-sm">Building trust, one client at a time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        {/* <section className="py-20 bg-muted/30" ref={ref}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Milestones</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our <span className="font-handwritten text-4xl md:text-5xl text-primary">Timeline</span>
              </h2>
            </div>

            <div className="relative max-w-3xl mx-auto">
            
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 md:-translate-x-px" />

              <div className="space-y-12">
                {timeline.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <div
                      key={item.year}
                      className={`relative flex items-start ${visible ? 'animate-float-up' : 'opacity-0'}`}
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                    
                      <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-lg -translate-x-1/2 mt-1 z-10" />

                     
                      <div className={`ml-16 md:ml-0 md:w-[45%] ${isLeft ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
                        <span className="inline-block text-primary font-bold text-lg mb-1">{item.year}</span>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section> */}

          {/* Timeline - Redesigned */}
        <section className="py-20 bg-gradient-to-b from-phoenix-gray-light via-background to-phoenix-green-light/10">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Milestones</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our <span className="font-handwritten text-4xl md:text-5xl text-primary pen-underline">Timeline</span>
              </h2>
            </AnimatedSection>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-accent/20 md:-translate-x-px" />

              <div className="space-y-16">
                {timeline.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  const Icon = item.icon;
                  const isActive = activeTimeline === index;

                  return (
                    <AnimatedSection
                      key={item.year}
                      delay={index * 0.15}
                      className="relative flex items-start"
                    >
                      {/* Dot with icon */}
                      <div
                        className={`absolute left-8 md:left-1/2 -translate-x-1/2 z-10 cursor-pointer transition-all duration-500 ${isActive ? 'scale-125' : 'hover:scale-110'}`}
                        onMouseEnter={() => setActiveTimeline(index)}
                        onMouseLeave={() => setActiveTimeline(null)}
                      >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${isActive ? 'bg-primary shadow-primary/40' : 'bg-card border-2 border-primary'}`}>
                          <Icon size={18} className={`transition-colors duration-300 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`ml-20 md:ml-0 md:w-[44%] ${isLeft ? 'md:mr-auto md:pr-16 md:text-right' : 'md:ml-auto md:pl-16'}`}>
                        <div className={`bg-card border border-border rounded-2xl p-6 transition-all duration-500 hover:shadow-xl group ${isActive ? 'shadow-xl border-primary/30' : 'hover:border-primary/20'}`}>
                          <span className="inline-block font-handwritten text-2xl text-primary font-bold mb-1">{item.year}</span>
                          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
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
        {/* <section className="py-16 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey With Us?</h2>
            <a href="/contact" className="inline-flex items-center gap-2 bg-phoenix-gray-dark hover:bg-foreground text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 group mt-4">
              Get in Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section> */}
      </main>
   
      
    </div>
  );
};

export default OurBegining;
