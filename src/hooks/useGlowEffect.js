import { useRef } from 'react';

export function useGlowEffect() {
  const ref = useRef(null);

  function handleMouseMove(e) {
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
  }

  return { ref, handleMouseMove };
}