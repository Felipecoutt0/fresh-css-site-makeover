
import { useEffect, useState } from 'react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 2
      };
      
      setHearts(prev => [...prev.slice(-10), newHeart]); // Mantém apenas 10 corações
    };

    const interval = setInterval(createHeart, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute animate-[float_7s_linear_infinite] opacity-70"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`
          }}
        >
          <div className="w-4 h-4 bg-pink-300 transform rotate-45 relative">
            <div className="absolute w-4 h-4 bg-pink-300 rounded-full -top-2 left-0"></div>
            <div className="absolute w-4 h-4 bg-pink-300 rounded-full -left-2 top-0"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
