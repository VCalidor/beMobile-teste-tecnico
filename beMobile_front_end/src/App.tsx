import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "rgba(240, 240, 240, 1)",
        fontFamily: "Roboto",
      }}
    >
      <Header />
    </div>
  );
}

export default App;
