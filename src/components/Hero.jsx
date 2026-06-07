import { useState } from "react";

function Hero() {
  const [opened, setOpened] = useState(false);

  const openSurprise = () => {
    const audio = document.querySelector("audio");

    if (audio) {
      audio.play().catch(() => {});
    }

    setOpened(true);
  };

  if (opened) return null;

  return (
    <section
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,

        background:
          "linear-gradient(135deg,#ff4d6d,#ff8fab,#ffd6e0)",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          animation: "fadeIn 1s ease",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "clamp(3rem, 10vw, 5rem)",
            marginBottom: "15px",
          }}
        >
          ❤️
        </h1>

        <h2
          style={{
            color: "white",
            fontSize: "clamp(1.8rem, 6vw, 3rem)",
            maxWidth: "700px",
            marginBottom: "20px",
            paddingInline: "10px",
          }}
        >
          Para a pessoa mais especial da minha vida
        </h2>

        <p
          style={{
            color: "white",
            fontSize: "clamp(1rem, 4vw, 1.4rem)",
            marginBottom: "40px",
          }}
        >
          Vinícius ❤️ Elizangela
        </p>

        <button
          onClick={openSurprise}
          style={{
            border: "none",
            borderRadius: "50px",

            padding: "16px 32px",

            background: "white",

            color: "#ff4d6d",

            fontWeight: "bold",

            fontSize: "1rem",

            cursor: "pointer",

            boxShadow:
              "0 15px 35px rgba(0,0,0,0.2)",

            transition: "0.3s",
          }}
        >
          ✨ Abrir Minha Surpresa ✨
        </button>
      </div>
    </section>
  );
}

export default Hero;