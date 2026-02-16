export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0f14",
        color: "#e6edf3",
        padding: 16,
      }}
    >
      <h1 style={{ fontSize: 22, marginBottom: 8 }}>
        競艇 展開予想ボード
      </h1>

      <p style={{ color: "#9aa7b2" }}>
        iPhoneだけで作成中 🚤
      </p>

      <div
        style={{
          marginTop: 16,
          padding: 16,
          borderRadius: 12,
          background: "#121826",
          border: "1px solid #263041",
        }}
      >
        次は展開図（ドラッグできるボード）と潮グラフを追加
      </div>
    </main>
  );
}
