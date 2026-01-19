import { useEffect, useState } from "react";

export default function TimerDemoSimple() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  console.log("render", { seconds, running });

  useEffect(() => {
    console.log("effect", running);

    if (!running) return;

    const id = setInterval(() => {
      console.log("tick");
      setSeconds((s) => s + 1);
    }, 1000);

    return () => {
      console.log("cleanup");
      clearInterval(id);
    };
  }, [running]);

  return (
    <section style={{ background: "white", border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
      <h3 style={{ margin: 0 }}>Timer simple (useState + useEffect)</h3>

      <p style={{ marginTop: 8 }}>
        Segundos: <b>{seconds}</b>
      </p>

      <div style={{ display: "flex", gap: 8 }}>
        <button
          type="button"
          onClick={() => setRunning((r) => !r)}
          style={{ padding: "8px 12px", borderRadius: 8, border: "none", background: "#4CAF50", color: "white" }}
        >
          {running ? "Stop" : "Start"}
        </button>

        <button
          type="button"
          onClick={() => setSeconds(0)}
          style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #aaa", background: "white" }}
        >
          Reset
        </button>
      </div>

      <p style={{ marginTop: 10, fontSize: 12, opacity: 0.8 }}>
        Consola: <b>render</b> (cada render), <b>effect</b> (cuando cambia running), <b>tick</b> (cada segundo),
        <b>cleanup</b> (al parar o desmontar).
      </p>
    </section>
  );
}
