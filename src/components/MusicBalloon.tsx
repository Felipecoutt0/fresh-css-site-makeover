import { useEffect, useRef, useState } from 'react'


const AudioButton = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const handleClick = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <button
        id="audioBtn"
        onClick={handleClick}
        className={`z-50 hover:scale-110 transition-transform duration-300 ${
          isMobile
            ? 'fixed bottom-5 right-5 bg-white p-2 rounded-full shadow-md'
            : 'absolute top-5 right-5'
        }`}
      >
        <img src={isPlaying ? pauseIcon : playIcon} alt="Audio" className="w-6 h-6" />
      </button>

      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </>
  )
}

export default AudioButton
