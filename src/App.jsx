export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "\"Space Grotesk\", system-ui, sans-serif",
        background:
          "linear-gradient(180deg, #0b3a8a 0%, #2b6ee8 55%, #9ec5ff 100%)",
        color: "#0b1b3a"
      }}
    >
      <section
        style={{
          position: "relative",
          width: "min(900px, 92vw)",
          padding: "4rem 2.5rem 4rem",
          borderRadius: "24px",
          background: "rgba(255, 255, 255, 0.75)",
          boxShadow: "0 20px 60px rgba(10, 45, 120, 0.15)",
          overflow: "hidden"
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              fontSize: "0.8rem",
              color: "#2b5bd7",
              margin: 0
            }}
          >
            Jester AI
          </p>
          <h1
            style={{
              fontFamily: "\"Fraunces\", \"Times New Roman\", serif",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              margin: "0.8rem 0 1rem",
            }}
          >
            Jester is coming soon
          </h1>
          <p>
            We use our RL-trained agent to test your websites for you.
          </p>
        </div>
      </section>
    </main>
  );
}
