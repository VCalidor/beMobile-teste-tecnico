import "bootstrap/dist/css/bootstrap.min.css";
import arrowIcon from "../assets/arrowIcon.png";
import { Image } from "react-bootstrap";
import { Employee } from "../interfaces";
import { useState } from "react";

export const TableRow = ({
  employee,
  isMobile,
}: {
  employee: Employee;
  isMobile: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <tr>
        <td valign="middle">
          <Image
            src={employee.image}
            height={"34px"}
            style={{ borderRadius: "100%" }}
          />
        </td>
        <td valign="middle">{employee.name}</td>
        {isMobile ? (
          <td onClick={() => setIsOpen(!isOpen)} valign="middle">
            <Image
              src={arrowIcon}
              height={"10px"}
              style={{ transform: isOpen ? "scaleY(-1)" : "" }}
            />
          </td>
        ) : (
          <>
            <td valign="middle">{employee.job}</td>
            <td valign="middle">{employee.admission_date}</td>
            <td valign="middle">
              {[
                employee.phone[1],
                " (",
                employee.phone[2],
                ") ",
                employee.phone[3],
                "-",
                employee.phone[4],
              ].join("")}
            </td>
          </>
        )}
      </tr>
      {isOpen && isMobile && (
        <>
          <tr>
            <th scope="row">Cargo</th>
            <td colSpan={2}>{employee.job}</td>
          </tr>
          <tr>
            <th scope="row">Data de admissão</th>
            <td colSpan={2}>{employee.admission_date}</td>
          </tr>
          <tr>
            <th scope="row">Telephone</th>
            <td colSpan={2}>
              {[
                employee.phone[1],
                " (",
                employee.phone[2],
                ") ",
                employee.phone[3],
                "-",
                employee.phone[4],
              ].join("")}
            </td>
          </tr>
        </>
      )}
    </>
  );
};
