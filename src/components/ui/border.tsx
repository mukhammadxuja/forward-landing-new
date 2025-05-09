'use client';

import { CSSProperties, useEffect, useRef } from 'react';

export const AnimatedGradientBorderTW: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boxElement = boxRef.current;

    if (!boxElement) {
      return;
    }

    const updateAnimation = () => {
      const angle = (parseFloat(boxElement.style.getPropertyValue('--angle')) + 0.5) % 360;
      boxElement.style.setProperty('--angle', `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };

    requestAnimationFrame(updateAnimation);
  }, []);

  return (
    <div
      ref={boxRef}
      style={
        {
          '--angle': '0deg',
          '--border-color': 'linear-gradient(var(--angle),rgb(25, 32, 32),rgb(8, 83, 83))',
          '--bg-color': 'linear-gradient(#111C1C, #0f1515)',
        } as CSSProperties
      }
      className={`rounded-lg border-[1.5px] border-[#0000] p-4 lg:p-6 [background:padding-box_var(--bg-color),border-box_var(--border-color)] ${className}`}
    >
      {children}
    </div>
  );
};

// p-4 lg:p-6 border border-accent bg-background/50 backdrop-blur-lg rounded-xl shadow-sm
