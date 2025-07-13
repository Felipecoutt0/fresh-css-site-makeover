
import { useState, useEffect } from 'react';
import { Heart, Calendar, Clock, MessageCircle } from 'lucide-react';
import FloatingHearts from '../components/FloatingHearts';
import PhotoGallery from '../components/PhotoGallery';
import Timeline from '../components/Timeline';
import LoveLetter from '../components/LoveLetter';
import TimeCounter from '../components/TimeCounter';

const Index = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const updateMessage = () => {
      const hora = new Date().getHours();
      let mensagem = "";
      if (hora >= 5 && hora < 12) mensagem = "Bom dia, minha princesa 💕";
      else if (hora >= 12 && hora < 18) mensagem = "Boa tarde, meu amor, já almoçou?";
      else if (hora >= 18 && hora < 22) mensagem = "Boa noite minha princesa, eu te amo muito ❤";
      else mensagem = "Já era pra estar dormindo... 😴💤";
      
      setCurrentMessage(mensagem);
    };

    const checkNightMode = () => {
      const hora = new Date().getHours();
      setIsNightMode(hora >= 18 || hora < 6);
    };

    updateMessage();
    checkNightMode();
    
    const messageInterval = setInterval(updateMessage, 60000); // Atualiza a cada minuto
    const nightModeInterval = setInterval(checkNightMode, 60000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(nightModeInterval);
    };
  }, []);

  return (
    <div className={`min-h-screen text-purple-900 relative overflow-x-hidden transition-all duration-1000 ${
      isNightMode 
        ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-100' 
        : 'bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300'
    }`}>
      <FloatingHearts />
      
      {/* Estrelas para modo noturno */}
      {isNightMode && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${1 + Math.random() * 2}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}
      
      {/* Header */}
      <header className="text-center pt-16 pb-8 px-5">
        <h1 className={`font-['Pacifico'] text-5xl md:text-6xl mb-4 animate-fade-in ${
          isNightMode ? 'text-pink-300' : 'text-pink-600'
        }`}>
          Felipe ❤️ Amanda
        </h1>
        <p className={`text-xl md:text-2xl italic font-medium animate-fade-in ${
          isNightMode ? 'text-gray-300' : 'text-purple-700'
        }`}>
          "Com você, todos os dias são especiais."
        </p>
      </header>

      {/* Mensagem por horário */}
      <div className={`text-center text-lg md:text-xl mb-8 px-4 animate-fade-in ${
        isNightMode ? 'text-gray-200 drop-shadow-lg' : 'text-purple-700'
      }`}>
        {currentMessage}
      </div>

      {/* Botao de musica teste */}
      <FloatingMusicButton />

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
        <p className={`text-lg italic ${
          isNightMode ? 'text-gray-300' : 'text-purple-700'
        }`}>
          Conforme o tempo for passando, irei atualizando a página 🥳
        </p>
      </div>
    </div>
  );
};

export default Index;
