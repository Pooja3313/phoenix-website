import { useEffect, useRef } from "react";


const logos = [
  { name: "Logo 1", src: "public/images/phoenix-finserv.png" },
  { name: "Logo 2", src: "public/images/phoenix-e-favicon.png" },
  { name: "Logo 3", src: "public/images/phoenix-finserv.png" },
  { name: "Logo 4", src: "public/images/phoenix-finserv.png" },
  { name: "Logo 5", src: "public/images/phoenix-finserv.png" },
  { name: "Logo 6", src: "public/images/phoenix-finserv.png" },
  { name: "Logo 7", src: "public/images/phoenix-finserv.png" },
  { name: "Logo 8", src: "public/images/phoenix-finserv.png" },
  { name: "Logo 9", src: "public/images/phoenix-finserv.png" },
  { name: "Logo 10", src: "public/images/phoenix-finserv.png" },
];

const LogoSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;
    let pos = 0;
    const speed = 0.5;
    const animate = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="py-12 bg-muted/20 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-muted-foreground text-sm md:text-xl">
          Our advisers have experience working with leading platforms
        </p>
      </div>
      <div className="relative overflow-hidden" ref={scrollRef} style={{ scrollbarWidth: 'none' }}>
        <div className="flex items-center gap-12 w-max">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center justify-center w-44 md:w-56 h-20 md:h-24 px-6 bg-background/80 rounded-2xl border border-border/60 hover:border-orange-400 hover:bg-orange-50/60 hover:shadow-lg hover:shadow-orange-200/40 transition-all duration-300 group cursor-pointer shrink-0"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-12 md:h-16 w-auto max-w-[170px] object-contain transition-transform duration-300 group-hover:scale-105"
                draggable={false}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
