import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { TableComponent } from "./components/TableComponent";
import { getEmployees } from "./api";
import Image from "react-bootstrap/Image";
import { useEffect, useState } from "react";
import searchIcon from "./assets/searchIcon.png";
import { Employee } from "./interfaces";
import useWindowSize from "./hooks/useWindowsSize";

function App() {
  const [allEmployees, setAllEmployees] = useState<Employee[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [debouncedSearchInput, setDebouncedSearchInput] = useState(searchInput);

  const { width } = useWindowSize();

  useEffect(() => {
    getEmployees(setAllEmployees, setEmployees);
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchInput(searchInput);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]);

  useEffect(() => {
    searchEmployees();  
  }, [debouncedSearchInput]);

  const searchEmployees = () => {
    let filteredEmployees = [];
    filteredEmployees = allEmployees.filter((employee) => {
      if(employee.name.toLowerCase().includes(debouncedSearchInput.toLowerCase()) || employee.job.toLowerCase().includes(debouncedSearchInput.toLowerCase())) {
          return employee;
      }
    })

    setEmployees(filteredEmployees);
  };

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
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Pesquisar"
              style={{ border: "none", outline: "none", width: "100%" }}
            />
            <Image src={searchIcon} height="18"></Image>
          </div>
        </div>
        <TableComponent employees={employees} isMobile={width <= 570 ? true : false}/>
      </div>
    </div>
  );
}

export default App;
