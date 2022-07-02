import "./styles.scss";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        fontSize: "2rem",
      }}
    >
      <div>Coming Soon!</div>
      <div style={{ flexGrow: "1", overflowY: "auto" }}>
        <div>Coming Soon!</div>
      </div>
    </div>
  );
}

export default App;
