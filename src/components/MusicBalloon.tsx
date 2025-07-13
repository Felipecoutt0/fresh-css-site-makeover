import React, { useState, useRef } from "react";

export default function MusicBalloon() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      backgroundColor: "#eee",
      borderRadius: "10px",
      padding: "15px",
      boxShadow: "0 0 10px rgba(0,0,0,0.3)",
      cursor: "pointer",
      userSelect: "none",
      maxWidth: "250px",
      fontFamily: "Arial, sans-serif"
    }} onClick={togglePlay}>
      <p style={{margin: 0, fontWeight: "bold"}}>
        🎵 Tudo Que Você Quiser - Luan Santana
      </p>
      <p style={{margin: 0, fontSize: "0.9em", color: "#555"}}>
        Clique para {isPlaying ? "pausar" : "tocar"}
      </p>
      <audio
        ref={audioRef}
        src="URL_DO_ARQUIVO_MP3_AQUI"
        preload="none"
      />
    </div>
  );
}
