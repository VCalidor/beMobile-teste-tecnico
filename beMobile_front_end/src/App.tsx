import { Header } from "./components/Header";
import { Image } from "react-bootstrap";
import searchIcon from "./assets/searchIcon.png";
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
      <div style={{ paddingLeft: "35px", paddingRight: "35px" }}>
        <header className="d-flex align-items-center justify-content-between flex-wrap">
          <h4 style={{ fontWeight: "600" }}>Funcionários</h4>
          <div
            className="d-flex form-control align-items-center justify-content-between"
            style={{
              borderRadius: "5px",
              border: "1px solid rgba(223, 223, 223, 1)",
              minHeight: "50px",
              width: "30%",
              minWidth: "250px",
            }}
          >
            <input
              type="text"
              placeholder="Pesquisar"
              style={{ border: "none", outline: "none" }}
            />
            <Image src={searchIcon} height="18"></Image>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
