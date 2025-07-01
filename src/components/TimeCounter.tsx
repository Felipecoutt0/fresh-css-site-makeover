
import { useState, useEffect } from 'react';
import { Clock, Heart } from 'lucide-react';

const TimeCounter = () => {
  const [timeData, setTimeData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    nextMonthMessage: '',
    isMonthiversary: false
  });

  useEffect(() => {
    const startDate = new Date('2025-06-08'); // Data do pedido de namoro
    
    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      // Calcular próximo mesversário
      const nextMonth = new Date(startDate);
      nextMonth.setMonth(nextMonth.getMonth() + Math.floor(days / 30) + 1);
      
      const isToday = now.toDateString() === nextMonth.toDateString();
      
      setTimeData({
        days,
        hours,
        minutes,
        seconds,
        nextMonthMessage: isToday ? '' : `Próximo mesversário em: ${Math.ceil((nextMonth.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))} dias`,
        isMonthiversary: isToday
      });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center p-8 mx-4 mb-8">
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 max-w-lg mx-auto shadow-lg">
        <h2 className="font-['Pacifico'] text-2xl text-purple-800 mb-4 flex items-center justify-center gap-2">
          <Heart className="w-6 h-6 text-pink-500" />
          Eu te amo há:
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-pink-100 rounded-lg p-3">
            <div className="text-2xl font-bold text-purple-800">{timeData.days}</div>
            <div className="text-sm text-purple-600">dias</div>
          </div>
          <div className="bg-pink-100 rounded-lg p-3">
            <div className="text-2xl font-bold text-purple-800">{timeData.hours}</div>
            <div className="text-sm text-purple-600">horas</div>
          </div>
          <div className="bg-pink-100 rounded-lg p-3">
            <div className="text-2xl font-bold text-purple-800">{timeData.minutes}</div>
            <div className="text-sm text-purple-600">min</div>
          </div>
          <div className="bg-pink-100 rounded-lg p-3">
            <div className="text-2xl font-bold text-purple-800">{timeData.seconds}</div>
            <div className="text-sm text-purple-600">seg</div>
          </div>
        </div>
        
        {timeData.isMonthiversary && (
          <p className="text-lg font-bold text-pink-600 animate-pulse">
            🎉 Hoje é nosso mesversário! 🎉
          </p>
        )}
        
        {timeData.nextMonthMessage && (
          <p className="text-sm text-purple-600 mt-2">
            ⏳ {timeData.nextMonthMessage}
          </p>
        )}
      </div>
    </section>
  );
};

export default TimeCounter;
