import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { TableRow } from "./TableRow";
import "../styles/Table.css";

interface Employee {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  image: string;
  phone: string;
}

export const TableComponent = ({ employees }: { employees: Employee[] }) => {
  return (
    <Table className="shadow-sm">
      <thead>
        <tr className="custom-thead">
          <th className="custom-theader custom-theader-left">Foto</th>
          <th className="custom-theader">Nome</th>
          <th className="custom-theader">Cargo</th>
          <th className="custom-theader">Data de admissão</th>
          <th className="custom-theader custom-theader-right">Telefone</th>
        </tr>
      </thead>
      <tbody style={{ textAlign: "center" }}>
        {employees &&
          employees.map((employee) => (
            <TableRow key={employee.id} employee={employee} />
          ))}
      </tbody>
    </Table>
  );
};
