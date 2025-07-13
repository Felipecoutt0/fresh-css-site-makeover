
import React, { useState, useRef, useEffect } from 'react';

const FloatingMusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  console.log('FloatingMusicButton renderizando...'); // Debug

  const togglePlay = () => {
    console.log('Toggle play clicado'); // Debug
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error('Erro ao reproduzir:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    console.log('Toggle mute clicado'); // Debug
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    console.log('useEffect executado'); // Debug
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
        <button
          onClick={togglePlay}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-pulse flex items-center justify-center"
        >
          {isPlaying ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
            </svg>
          ) : (
            <svg className="h-6 w-6 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15a2 2 0 012 2v0a2 2 0 01-2 2h-1.586a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 0110 14H9a2 2 0 01-2-2v0a2 2 0 012-2z" />
            </svg>
          )}
        </button>

        {/* Botão de mute (menor) */}
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-white/90 border border-pink-200 hover:bg-pink-50 shadow-lg flex items-center justify-center"
        >
          {isMuted ? (
            <svg className="h-4 w-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 5.586a2 2 0 112.828 2.828L12 12m0 0l3.586 3.586a2 2 0 11-2.828 2.828L9.172 14.828A4 4 0 015 10V9a1 1 0 011-1h1m0 0V6a2 2 0 012-2h2a1 1 0 000-2H9a4 4 0 00-4 4v1H4a2 2 0 00-2 2v2a2 2 0 002 2h1" />
            </svg>
          ) : (
            <svg className="h-4 w-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M6.343 6.343A8 8 0 004.222 16.1c2.206 2.206 5.481 2.206 7.687 0L15.536 12.464" />
            </svg>
          )}
        </button>
      </div>

      {/* Tooltip/Label quando está tocando */}
      {isPlaying && (
        <div className="fixed bottom-24 right-6 z-40 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-pink-200">
          <p className="text-sm text-pink-800 font-medium">
            🎵 Nossa música especial
          </p>
        </div>
      )}
    </>
  );
};

export default FloatingMusicButton;
