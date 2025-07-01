
import { useState } from 'react';
import { MessageCircle, Heart } from 'lucide-react';

const LoveLetter = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const revealLetter = () => {
    setIsRevealed(true);
  };

  return (
    <section className="text-center p-8 mx-4">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={revealLetter}
          className="bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          <MessageCircle className="w-5 h-5" />
          Clique aqui 💌
        </button>
        
        {isRevealed && (
          <div className="mt-8 bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-fade-in">
            <div className="flex justify-center mb-4">
              <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
            </div>
            <p className="text-lg leading-relaxed text-purple-800">
              Meu amor, cada momento ao seu lado é perfeito, seja num treino junto, 
              montando uma maquete na sua casa, ou simplesmente 10 minutos com você 💖
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoveLetter;
