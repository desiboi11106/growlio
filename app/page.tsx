export default function Home() {
  return (
    <main
      style={{
        padding: "3rem",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#0070f3" }}>
        Growlio
      </h1>

      <p style={{ fontSize: "1.2rem", textAlign: "center", maxWidth: "600px" }}>
        Investment Learning & Analysis Platform — Track your investments, analyze
        trends, and understand risks clearly.
      </p>

      <div
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          border: "1px solid #ccc",
          borderRadius: "12px",
          maxWidth: "500px",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2 style={{ fontWeight: "bold" }}>Portfolio Dashboard</h2>
        <p>
          Visualize your portfolio performance, check market trends, and see risk
          indicators at a glance.
        </p>
      </div>
    </main>
  );
}
