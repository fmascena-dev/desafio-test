"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
  loop?: boolean;
}

export function TypingAnimation({
  children,
  className,
  duration = 150,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  loop = true,
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    let deleting = false;
    let timeout: NodeJS.Timeout;

    const pauseBetween = 4000;

    const type = () => {
      if (!deleting && i <= children.length) {
        setDisplayedText(children.substring(0, i));
        i++;
        if (i > children.length) {
          if (loop) {
            timeout = setTimeout(() => {
              deleting = true;
              i = children.length - 1;
              type();
            }, pauseBetween);
            return;
          } else {
            return;
          }
        }
      } else if (deleting && i >= 0) {
        setDisplayedText(children.substring(0, i));
        i--;
        if (i < 0) {
          deleting = false;
          i = 0;
        }
      }

      timeout = setTimeout(type, duration);
    };

    type();

    return () => clearTimeout(timeout);
  }, [children, duration, started, loop]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "text-4xl font-bold leading-[5rem] tracking-[-0.02em]",
        className,
      )}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
}
