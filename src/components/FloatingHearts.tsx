
import { useEffect, useState } from 'react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 3
      };
      
      setHearts(prev => [...prev.slice(-15), newHeart]); // Mantém apenas 15 corações
    };

    const interval = setInterval(createHeart, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute animate-[float_var(--duration)_linear_infinite] opacity-70 text-lg"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            '--duration': `${heart.duration}s`
          } as React.CSSProperties}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
