import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import Table from "react-bootstrap/Table";
import { TableRow } from "./TableRow";

interface Employee {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  image: string;
  phone: string;
}

export const TableComponent = ({
  employees,
  isMobile,
}: {
  employees: Employee[];
  isMobile: boolean;
}) => {
  return (
    <Table className="shadow-sm">
      <thead>
        <tr className="custom-thead">
          <th className="custom-theader custom-theader-left">Foto</th>
          <th className="custom-theader">Nome</th>
          {isMobile ? (
            <th className="custom-theader custom-theader-right">
              <svg width="10px" height="10px">
                <ellipse
                  rx="4"
                  ry="4"
                  cx="4"
                  cy="4"
                  style={{ fill: "white" }}
                />
              </svg>
            </th>
          ) : (
            <>
              <th className="custom-theader">Cargo</th>
              <th className="custom-theader">Data de admissão</th>
              <th className="custom-theader custom-theader-right">Telefone</th>
            </>
          )}
        </tr>
      </thead>
      <tbody style={{ textAlign: "center" }}>
        {employees &&
          employees.map((employee) => (
            <TableRow employee={employee} isMobile={isMobile} key={employee.id}/>
          ))}
      </tbody>
    </Table>
  );
};
