import { useState, useRef, useEffect } from "react";

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  animation = "animate-float-up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: string;
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px" 
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`
        ${visible ? animation : "opacity-0 translate-y-12"}
        transition-all duration-700 ease-out
        ${className}
      `}
      style={{ animationDelay: visible ? `${delay}s` : "0s" }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;