import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { TableComponent } from "./components/TableComponent";
import { getEmployees } from "./api";
import Image from "react-bootstrap/Image";
import { useEffect, useState } from "react";
import searchIcon from "./assets/searchIcon.png";
import { Employee } from "./interfaces";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    getEmployees(setEmployees);
  }, []);

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
        <div className="d-flex align-items-center justify-content-between flex-wrap align-content-center mb-4">
          <h4 style={{ fontWeight: "600", marginRight: "20px" }}>
            Funcionários
          </h4>
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
        </div>
        <TableComponent employees={employees}/>
      </div>
    </div>
  );
}

export default App;
