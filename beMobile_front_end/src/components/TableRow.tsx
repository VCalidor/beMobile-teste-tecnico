import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import { Employee } from "../interfaces";

export const TableRow = ({ employee }: { employee: Employee }) => {
  return (
    <tr id={employee.id} >
      <td valign="middle">
        <Image
          src={employee.image}
          height={"34px"}
          style={{ borderRadius: "100%" }}
        />
      </td>
      <td valign="middle">{employee.name}</td>
      <td valign="middle">{employee.job}</td>
      <td valign="middle">{employee.admission_date}</td>
      <td valign="middle">{employee.phone}</td>
    </tr>
  );
};
