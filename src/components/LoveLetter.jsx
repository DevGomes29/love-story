import { useState } from "react";

function LoveLetter() {
  const [opened, setOpened] = useState(false);

  return (
    <section
      style={{
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#ff4d6d",
          marginBottom: "40px",
          fontSize: "clamp(1.8rem, 5vw, 2rem)",
        }}
      >
        💌 Uma Carta Para Você
      </h2>

      {!opened ? (
        <div
          onClick={() => setOpened(true)}
          style={{
            cursor: "pointer",
            margin: "0 auto",

            width: "min(280px, 90vw)",
            height: "min(180px, 55vw)",

            background:
              "linear-gradient(135deg,#ff8fab,#ff4d6d)",

            borderRadius: "16px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            color: "white",
            fontSize: "4rem",

            boxShadow:
              "0 20px 50px rgba(255,77,109,0.35)",

            transition: "all 0.3s ease",
          }}
        >
          ✉️
        </div>
      ) : (
        <div
          style={{
            maxWidth: "750px",
            margin: "0 auto",

            padding: "clamp(20px, 5vw, 50px)",

            background:
              "linear-gradient(180deg,#fffdf8,#fff7f0)",

            borderRadius: "24px",

            boxShadow:
              "0 20px 60px rgba(0,0,0,0.08)",

            textAlign: "left",
            lineHeight: "2",

            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "30px",
              fontSize: "2rem",
            }}
          >
            ❤️
          </div>

          <h3
            style={{
              color: "#ff4d6d",
              fontSize: "clamp(1.5rem, 5vw, 2rem)",
              marginBottom: "20px",
            }}
          >
            Meu Amor,
          </h3>

          <p>
            Desde que você entrou na minha vida,
            meus dias ficaram mais leves, mais felizes
            e muito mais especiais.
          </p>

          <p>
            Cada conversa, cada abraço e cada momento
            ao seu lado se transformam em lembranças
            que eu guardo com carinho.
          </p>

          <p>
            Obrigado por fazer parte da minha história,
            por acreditar em mim e por compartilhar
            tantos momentos incríveis.
          </p>

          <p>
            Espero que este seja apenas o começo de
            muitas memórias que ainda vamos construir
            juntos.
          </p>

          <p>
            Eu te amo mais do que as palavras conseguem
            explicar. ❤️
          </p>

          <div
            style={{
              marginTop: "40px",
              color: "#ff4d6d",
              fontWeight: "bold",
              fontSize: "clamp(1rem, 4vw, 1.2rem)",
            }}
          >
            Com amor,
            <br />
            Vinícius ❤️
          </div>
        </div>
      )}
    </section>
  );
}

export default LoveLetter;