
import { useState, useEffect } from 'react';
import { Clock, Heart } from 'lucide-react';

const TimeCounter = () => {
  const [timeData, setTimeData] = useState({
    timeText: '',
    nextMonthText: '',
    monthiversaryMessage: '',
    isMonthiversary: false
  });

  useEffect(() => {
    const dataInicio = new Date(2025, 3, 26); // 26 de abril (mês 3)
    
    const updateCounter = () => {
      const agora = new Date();
      const dataUltimoMesversario = new Date(agora.getFullYear(), agora.getMonth(), 26);

      // Se ainda não chegou o dia 26 neste mês, usa o mês anterior
      if (agora.getDate() < 26) {
        dataUltimoMesversario.setMonth(dataUltimoMesversario.getMonth() - 1);
      }

      // Calcula anos e meses desde dataInicio
      let anos = agora.getFullYear() - dataInicio.getFullYear();
      let meses = agora.getMonth() - dataInicio.getMonth();

      if (agora.getDate() < dataInicio.getDate()) {
        meses--;
      }
      if (meses < 0) {
        anos--;
        meses += 12;
      }

      const diffDesdeUltimoMesversario = agora - dataUltimoMesversario;
      const segundosTotais = Math.floor(diffDesdeUltimoMesversario / 1000);
      const minutosTotais = Math.floor(segundosTotais / 60);
      const horasTotais = Math.floor(minutosTotais / 60);
      const dias = Math.floor(horasTotais / 24);
      const horas = horasTotais % 24;
      const minutos = minutosTotais % 60;
      const segundos = segundosTotais % 60;

      // Monta texto
      let texto = "";
      if (anos > 0) texto += `${anos} ano${anos > 1 ? "s" : ""}, `;
      if (meses > 0) texto += `${meses} mes${meses > 1 ? "es" : ""}, `;
      texto += `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;

      // Contagem para próximo dia 26
      let proximo = new Date(agora.getFullYear(), agora.getMonth(), 26);
      if (agora.getDate() > 26 || (agora.getDate() === 26 && agora.getHours() >= 0)) {
        proximo.setMonth(proximo.getMonth() + 1);
      }

      const diff = proximo - agora;
      const segundosProx = Math.floor(diff / 1000);
      const minutosProx = Math.floor(segundosProx / 60);
      const horasProx = Math.floor(minutosProx / 60);
      const diasProx = Math.floor(horasProx / 24);

      const textoProximo = `⏳ Faltam ${diasProx} dias, ${horasProx % 24} horas, ${minutosProx % 60} minutos e ${segundosProx % 60} segundos para completarmos mais um mês juntos 💖`;

      // Verifica se é dia 26 e mostra mensagem
      let mensagemMesversario = "";
      if (agora.getDate() === 26) {
        const mesesJuntos = (agora.getFullYear() - dataInicio.getFullYear()) * 12 + (agora.getMonth() - dataInicio.getMonth());
        mensagemMesversario = `🎉 Hoje completamos ${mesesJuntos} mes${mesesJuntos > 1 || mesesJuntos === 0 ? "es" : ""} juntos, meu amor! 💕`;
      }

      setTimeData({
        timeText: texto,
        nextMonthText: textoProximo,
        monthiversaryMessage: mensagemMesversario,
        isMonthiversary: agora.getDate() === 26
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
        
        <div className="text-lg text-purple-800 mb-4 font-medium">
          {timeData.timeText}
        </div>
        
        {timeData.isMonthiversary && (
          <p className="text-lg font-bold text-pink-600 animate-pulse mb-4">
            {timeData.monthiversaryMessage}
          </p>
        )}
        
        <p className="text-sm text-purple-600 leading-relaxed">
          {timeData.nextMonthText}
        </p>
      </div>
    </section>
  );
};

export default TimeCounter;
