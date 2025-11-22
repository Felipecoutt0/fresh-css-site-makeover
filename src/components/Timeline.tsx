
import { Calendar } from 'lucide-react';

const Timeline = () => {
  const events = [
    { date: '20/04/2025', event: 'Primeira mensagem' },
    { date: '26/04/2025', event: 'Primeiro beijo (na academia porque somos um casal maromba)' },
    { date: '27/04/2025', event: 'Primeiro encontro (Sorveteria Italiana)' },
    { date: '01/05/2025', event: 'Primeiro "eu te amo"' },
    { date: '10/05/2025', event: 'Primeiro "eu te amo" seu' },
    { date: '08/06/2025', event: 'Pedido de namoro' },
    { date: '12/06/2025', event: 'Melhor dia com você até agora (1º dia dos namorados)' },
    { date: '12/06/2025', event: 'Nosso primeiro dia dos namorados juntos' }, 
    { date: '12/07/2025', event: 'Nossa festa junina (casal jeca KKKKKKKKKKK)' }, 
    { date: '13/07/2025', event: 'Passeio com a sua familia no Sambaqui' }, 
    { date: '19/07/2025', event: 'Boliche e sinuca com a sua familia' }, 
    { date: '22/07/2025', event: 'Praia com você, sua mãe e sua irmã' },
    { date: '(26/27)/07/2025', event: 'Viajem com a sua familia pra Bom Retiro' },
    { date: '07/08/2025', event: 'Primeiro buquê de flores' },
    { date: '31/08/2025', event: 'Festa de aniversario da Laurinha' },
    { date: '03/09/2025', event: 'Melhor aniversario da minha vida (com voce, nao tinha como ser ruim)' },
    { date: '20/11/2025', event: 'Viagem pra cabana em Bom Retiro' },
    { date: '22/11/2025', event: 'Vimos o nascer do sol juntos ' },
   
    
  ];

  return (
    <section className="text-center p-8 mx-4 mb-8">
      <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
        <h2 className="font-['Pacifico'] text-2xl md:text-3xl text-pink-600 mb-6 flex items-center justify-center gap-2">
          <Calendar className="w-6 h-6" />
          Nossas datas (poucas por enquanto)
        </h2>
        <ul className="space-y-4">
          {events.map((item, index) => (
            <li key={index} className="text-left bg-white/30 rounded-lg p-4 hover:bg-white/50 transition-colors">
              <strong className="text-purple-800">{item.date}</strong> – {item.event}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
