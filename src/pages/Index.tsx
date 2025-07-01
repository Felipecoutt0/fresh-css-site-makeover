
import { useState, useEffect } from 'react';
import { Heart, Calendar, Clock, MessageCircle } from 'lucide-react';
import FloatingHearts from '../components/FloatingHearts';
import PhotoGallery from '../components/PhotoGallery';
import Timeline from '../components/Timeline';
import LoveLetter from '../components/LoveLetter';
import TimeCounter from '../components/TimeCounter';

const Index = () => {
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    const updateMessage = () => {
      const now = new Date();
      const hour = now.getHours();
      
      if (hour >= 6 && hour < 12) {
        setCurrentMessage('Bom dia, meu amor! ☀️');
      } else if (hour >= 12 && hour < 18) {
        setCurrentMessage('Boa tarde, princesa! 🌸');
      } else {
        setCurrentMessage('Boa noite, meu anjo! 🌙');
      }
    };

    updateMessage();
    const interval = setInterval(updateMessage, 60000); // Atualiza a cada minuto

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 text-purple-900 relative overflow-x-hidden">
      <FloatingHearts />
      
      {/* Header */}
      <header className="text-center pt-16 pb-8 px-5">
        <h1 className="font-['Pacifico'] text-5xl md:text-6xl text-pink-600 mb-4 animate-fade-in">
          Felipe ❤️ Amanda
        </h1>
        <p className="text-xl md:text-2xl italic text-purple-700 font-medium animate-fade-in">
          "Com você, todos os dias são especiais."
        </p>
      </header>

      {/* Mensagem por horário */}
      <div className="text-center text-lg md:text-xl text-purple-700 mb-8 px-4 animate-fade-in">
        {currentMessage}
      </div>

      {/* Contador de tempo */}
      <TimeCounter />

      {/* Galeria de fotos */}
      <PhotoGallery />

      {/* Timeline */}
      <Timeline />

      {/* Carta de amor */}
      <LoveLetter />

      {/* Mensagem final */}
      <div className="text-center py-8 px-4">
        <p className="text-lg text-purple-700 italic">
          Conforme o tempo for passando, irei atualizando a página 🥳
        </p>
      </div>
    </div>
  );
};

export default Index;
