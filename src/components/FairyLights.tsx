import { useMemo } from 'react';

export default function FairyLights() {
  const lights = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 4}s`,
        size: Math.random() * 3 + 1.5,
      })),
    []
  );

  return (
    <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden" aria-hidden="true">
      {lights.map((l) => (
        <span
          key={l.id}
          className="absolute rounded-full bg-gold/60 animate-twinkle"
          style={{
            left: l.left,
            top: l.top,
            width: l.size,
            height: l.size,
            animationDelay: l.delay,
          }}
        />
      ))}
    </div>
  );
}
