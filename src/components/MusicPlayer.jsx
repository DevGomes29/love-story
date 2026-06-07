import { useRef, useState } from "react";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source
          src="/music/romantic.mp3"
          type="audio/mpeg"
        />
      </audio>

      <button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          bottom: "15px",
          right: "15px",
          zIndex: 999,

          border: "none",
          borderRadius: "50px",

          padding: "12px 18px",

          background:
            "linear-gradient(135deg, #ff4d6d, #ff8fab)",

          color: "white",
          fontWeight: "700",
          fontSize: "0.9rem",

          cursor: "pointer",

          boxShadow:
            "0 8px 25px rgba(255,77,109,0.35)",

          transition: "all 0.3s ease",
        }}
      >
        {isPlaying
          ? "⏸️ Pausar"
          : "🎵 Música"}
      </button>
    </>
  );
}

export default MusicPlayer;