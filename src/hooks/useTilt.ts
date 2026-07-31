import { useRef, useCallback } from "react";

export function useTilt(intensity = 10) {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      ref.current.style.transform = `perspective(1000px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) translateY(-8px)`;
    },
    [intensity],
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform =
      "perspective(1000px) rotateY(0) rotateX(0) translateY(0)";
    ref.current.style.transition =
      "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transition = "transform 0.1s ease";
  }, []);
  return { ref, handleMouseMove, handleMouseLeave, handleMouseEnter };
}
