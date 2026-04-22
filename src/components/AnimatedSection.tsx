import { motion, useInView } from "motion/react";
import { ReactNode, useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: string;
  once?: boolean;
  amount?: number;
}

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  animation = "float-up",
  once = true,
  amount = 0.15,
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const getAnimationClass = (anim: string) => {
    if (anim.startsWith("animate-")) return anim;
    return `animate-${anim}`;
  };

  const animationClass = getAnimationClass(animation);

  return (
    <div
      ref={ref}
      className={`${className} ${isInView ? animationClass : "opacity-0"}`}
      style={{ 
        animationDelay: `${delay}s`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;