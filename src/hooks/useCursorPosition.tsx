import { useCallback, useState } from 'react';

export function useCursorGlow() {
  const [position, setPosition] = useState({ x: '50%', y: '50%' });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x: `${x}%`, y: `${y}%` });
  }, []);

  return { position, handleMouseMove };
}
