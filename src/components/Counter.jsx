import { useEffect, useState } from "react";

function Counter() {
  const relationshipDate = new Date("2020-03-29");

  const [hoveredCard, setHoveredCard] = useState(null);

  const [time, setTime] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const diff = now - relationshipDate;

      const totalSeconds = Math.floor(diff / 1000);

      const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));

      const months = Math.floor(
        (totalSeconds % (365 * 24 * 60 * 60)) /
          (30 * 24 * 60 * 60)
      );

      const days = Math.floor(
        (totalSeconds % (30 * 24 * 60 * 60)) /
          (24 * 60 * 60)
      );

      const hours = Math.floor(
        (totalSeconds % (24 * 60 * 60)) /
          (60 * 60)
      );

      const minutes = Math.floor(
        (totalSeconds % (60 * 60)) / 60
      );

      const seconds = totalSeconds % 60;

      setTime({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCounter();

    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
  }, []);

  const cardStyle = {
    background: "rgba(255,255,255,0.75)",
    backdropFilter: "blur(15px)",
    borderRadius: "16px",
    padding: "12px",
    width: "80px",
    border: "1px solid rgba(255,255,255,0.4)",
    transition: "all 0.3s ease",
    cursor: "default",
  };

  const numberStyle = {
    color: "#ff4d6d",
    fontSize: "1.6rem",
    margin: 0,
    fontWeight: "800",
  };

  const textStyle = {
    color: "#666",
    marginTop: "6px",
    fontWeight: "600",
    fontSize: "0.75rem",
  };

  const renderCard = (id, value, label) => (
    <div
      style={{
        ...cardStyle,
        transform:
          hoveredCard === id
            ? "translateY(-4px)"
            : "translateY(0)",

        boxShadow:
          hoveredCard === id
            ? "0 10px 25px rgba(255,77,109,0.20)"
            : "0 4px 12px rgba(255,77,109,0.10)",
      }}
      onMouseEnter={() => setHoveredCard(id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <h1 style={numberStyle}>{value}</h1>
      <p style={textStyle}>{label}</p>
    </div>
  );

  return (
    <section
      style={{
        padding: "60px 20px",
        textAlign: "center",
        background:
          "linear-gradient(135deg, #fff0f5, #ffe4e9)",
      }}
    >
      <h2
        style={{
          color: "#ff4d6d",
          fontSize: "1.9rem",
          marginBottom: "8px",
        }}
      >
        ❤️ Nossa História ❤️
      </h2>

      <p
        style={{
          color: "#666",
          fontSize: "0.95rem",
          marginBottom: "25px",
          maxWidth: "450px",
          marginInline: "auto",
        }}
      >
        Cada segundo ao seu lado torna minha vida mais feliz. ❤️
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {renderCard("years", time.years, "Anos")}
        {renderCard("months", time.months, "Meses")}
        {renderCard("days", time.days, "Dias")}
        {renderCard("hours", time.hours, "Horas")}
        {renderCard("minutes", time.minutes, "Min")}
        {renderCard("seconds", time.seconds, "Seg")}
      </div>
    </section>
  );
}

export default Counter;