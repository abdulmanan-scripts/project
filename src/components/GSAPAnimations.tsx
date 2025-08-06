import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GSAPAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'rotateIn' | 'bounceIn';
  duration?: number;
  delay?: number;
  trigger?: boolean;
  className?: string;
}

const GSAPAnimations: React.FC<GSAPAnimationProps> = ({
  children,
  animation = 'fadeInUp',
  duration = 1,
  delay = 0,
  trigger = true,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      y: animation === 'fadeInUp' ? 50 : 0,
      x: animation === 'slideInLeft' ? -50 : animation === 'slideInRight' ? 50 : 0,
      scale: animation === 'scaleIn' ? 0.8 : 1,
      rotation: animation === 'rotateIn' ? -180 : 0,
    });

    const animationConfig = {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotation: 0,
      duration,
      delay,
      ease: animation === 'bounceIn' ? 'bounce.out' : 'power2.out',
    };

    if (trigger) {
      // Animate on scroll
      ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(element, animationConfig);
        },
        once: true,
      });
    } else {
      // Animate immediately
      gsap.to(element, animationConfig);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation, duration, delay, trigger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default GSAPAnimations;