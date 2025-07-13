
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FloatingMusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          toast({
            title: "Erro ao reproduzir",
            description: "Não foi possível reproduzir a música. Verifique se o arquivo existe.",
            variant: "destructive",
          });
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('ended', handleEnded);
      return () => audio.removeEventListener('ended', handleEnded);
    }
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        preload="metadata"
        loop
      >
        <source src="/music/nossa-musica.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>

      {/* Botão principal de play/pause */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        <Button
          onClick={togglePlay}
          size="lg"
          className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-pulse"
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6 ml-1" />
          )}
        </Button>

        {/* Botão de mute (menor) */}
        <Button
          onClick={toggleMute}
          size="sm"
          variant="outline"
          className="w-10 h-10 rounded-full bg-white/90 border-pink-200 hover:bg-pink-50 shadow-lg"
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4 text-pink-600" />
          ) : (
            <Volume2 className="h-4 w-4 text-pink-600" />
          )}
        </Button>
      </div>

      {/* Tooltip/Label quando está tocando */}
      {isPlaying && (
        <div className="fixed bottom-24 right-6 z-40 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-pink-200 animate-fade-in">
          <p className="text-sm text-pink-800 font-medium">
            🎵 Nossa música especial
          </p>
        </div>
      )}
    </>
  );
};

export default FloatingMusicButton;
