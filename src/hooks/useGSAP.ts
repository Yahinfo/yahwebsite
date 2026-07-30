import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GSAPOptions {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
}

export function useGSAPReveal(
  selector: string,
  animation: gsap.TweenVars = {},
  scrollOptions: GSAPOptions = {},
) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(selector);
    if (elements.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from(elements, {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: scrollOptions.trigger || containerRef.current,
          start: scrollOptions.start || 'top 80%',
          end: scrollOptions.end || 'bottom 20%',
          toggleActions: 'play none none reverse',
          ...scrollOptions,
        },
        ...animation,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [selector, animation, scrollOptions]);

  return containerRef;
}

export function useGSAPCounter(
  endValue: number,
  duration = 2,
  suffix = '',
) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const obj = { value: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        value: endValue,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = Math.round(obj.value).toLocaleString() + suffix;
          }
        },
      });
    });

    return () => ctx.revert();
  }, [endValue, duration, suffix]);

  return ref;
}
