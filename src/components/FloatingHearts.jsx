function FloatingHearts() {
  const hearts = Array.from({ length: 25 });

  const heartIcons = [
    "❤️",
    "💖",
    "💕",
    "💗",
  ];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {hearts.map((_, index) => (
        <span
          key={index}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            fontSize: `${15 + Math.random() * 20}px`,
            animation: `float ${
              10 + Math.random() * 10
            }s linear infinite`,
            animationDelay: `${Math.random() * 8}s`,
            opacity: 0.7,
          }}
        >
          {
            heartIcons[
              Math.floor(
                Math.random() * heartIcons.length
              )
            ]
          }
        </span>
      ))}
    </div>
  );
}

export default FloatingHearts;